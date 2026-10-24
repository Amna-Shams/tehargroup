"use client";

import { useActionState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { submitInquiry, type InquiryState } from "@/app/actions";

const initial: InquiryState = { ok: false, message: "" };

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
    {children}
    {error && <p id={`${id}-err`} className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);
}

export function InquiryForm({
  division = "General",
  products = [],
  title = "Send an inquiry",
  compact = false,
}: {
  division?: string;
  products?: string[];
  title?: string;
  compact?: boolean;
}) {
  const [state, action, pending] = useActionState(submitInquiry, initial);
  const err = state.errors ?? {};
  const v = state.values ?? {};

  if (state.ok) {
    return (
      <div role="status" className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-brand-900">Inquiry received</h3>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-7" noValidate>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted">Catalog &amp; quotation only — no online payment. We reply by phone or WhatsApp.</p>
      <input type="hidden" name="division" value={division} />
      {/* honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name *" error={err.name}>
          <input id="name" name="name" defaultValue={v.name} className="field" autoComplete="name" aria-invalid={!!err.name} required />
        </Field>
        <Field id="phone" label="Phone / WhatsApp *" error={err.phone}>
          <input id="phone" name="phone" defaultValue={v.phone} type="tel" inputMode="tel" className="field" placeholder="+92 3XX XXXXXXX" autoComplete="tel" aria-invalid={!!err.phone} required />
        </Field>
        <Field id="email" label="Email (optional)" error={err.email}>
          <input id="email" name="email" defaultValue={v.email} type="email" className="field" autoComplete="email" aria-invalid={!!err.email} />
        </Field>
        {products.length > 0 ? (
          <Field id="product" label="Product of interest">
            <select id="product" name="product" className="field" defaultValue={v.product ?? ""}>
              <option value="">Select a product…</option>
              {products.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
        ) : (
          <Field id="product" label="Subject">
            <input id="product" name="product" defaultValue={v.product} className="field" placeholder="e.g. Partnership, general question" />
          </Field>
        )}
        {!compact && (
          <Field id="quantity" label="Estimated quantity">
            <input id="quantity" name="quantity" defaultValue={v.quantity} className="field" placeholder="e.g. 50 kg, 20 switches, 500 m" />
          </Field>
        )}
        <div className={compact ? "sm:col-span-2" : "sm:col-span-2"}>
          <Field id="message" label="Your requirements *" error={err.message}>
            <textarea id="message" name="message" defaultValue={v.message} rows={compact ? 3 : 4} className="field resize-y" aria-invalid={!!err.message} required />
          </Field>
        </div>
      </div>

      {state.message && !state.ok && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{state.message}</p>
      )}

      <button type="submit" disabled={pending} className="btn-primary mt-5 w-full sm:w-auto">
        {pending ? "Sending…" : <>Send inquiry <Send className="h-4 w-4" aria-hidden /></>}
      </button>
    </form>
  );
}
