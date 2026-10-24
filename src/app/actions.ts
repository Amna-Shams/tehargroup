"use server";

export type InquiryState = { ok: boolean; message: string; errors?: Record<string, string>; values?: Record<string, string> };

const clean = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // Honeypot: bots fill hidden fields, humans don't.
  if (clean(formData.get("website"))) return { ok: true, message: "Thank you!" };

  const data = {
    division: clean(formData.get("division")),
    name: clean(formData.get("name")),
    phone: clean(formData.get("phone")),
    email: clean(formData.get("email")),
    product: clean(formData.get("product")),
    quantity: clean(formData.get("quantity")),
    message: clean(formData.get("message")),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{6,}$/.test(data.phone)) errors.phone = "Enter a valid phone / WhatsApp number.";
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (10+ characters).";
  if (data.message.length > 3000) errors.message = "Message is too long.";
  if (Object.keys(errors).length) return { ok: false, message: "Please fix the highlighted fields.", errors, values: data };

  // Deliver to any webhook (Formspree, Make, Zapier, Slack, etc.) set in INQUIRY_WEBHOOK_URL.
  const hook = process.env.INQUIRY_WEBHOOK_URL;
  if (hook) {
    try {
      const res = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (e) {
      console.error("[inquiry] delivery failed", e);
      return { ok: false, message: "We couldn't send your inquiry right now. Please use WhatsApp or call us.", values: data };
    }
  } else {
    console.log("[inquiry] (no INQUIRY_WEBHOOK_URL set)", data);
  }

  return { ok: true, message: "Thank you! Our team will contact you shortly." };
}
