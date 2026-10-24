"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "tehar-cookie-consent";
const EVT = "tehar-consent-change";

function subscribe(cb: () => void) {
  window.addEventListener(EVT, cb);
  return () => window.removeEventListener(EVT, cb);
}
const read = () => {
  try { return localStorage.getItem(KEY) ?? ""; } catch { return ""; }
};
const set = (v: "granted" | "denied") => {
  try { localStorage.setItem(KEY, v); } catch {}
  window.dispatchEvent(new Event(EVT));
};

/** Loads Google Analytics only after consent. Renders nothing unless NEXT_PUBLIC_GA_ID is set. */
export function Analytics() {
  const consent = useSyncExternalStore(subscribe, read, () => "granted-pending");
  if (!GA_ID) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {consent === "" && (
        <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-white p-5 shadow-2xl sm:bottom-6">
          <p className="text-sm text-ink/80">We use analytics cookies to understand how the site is used. See our <a href="/legal#cookies" className="font-semibold text-brand-700 underline">Cookie Policy</a>.</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => set("granted")} className="btn-primary !py-2">Accept</button>
            <button onClick={() => set("denied")} className="btn-outline !py-2">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}
