"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const MESSAGE = "Hi,\nI want to know more about your interior design services.";
const fab = "group relative flex h-12 w-12 items-center justify-center rounded-l-lg text-white shadow-lg transition hover:scale-105 min-[769px]:h-[54px] min-[769px]:w-[54px]";
const tip = "pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded bg-gray-900 px-2.5 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 min-[769px]:block";
const input = "h-11 w-full rounded-lg border border-gray-200 px-4 text-[15px] text-[#111827] outline-none focus:border-[#E76E00] focus:ring-2 focus:ring-[#E76E00]/20";

export default function AdLayout({
  children,
  logo = "/images/logo.webp",
  brand = "Venus Interiors",
  whatsapp = "919445803939",
  phone = "+919962993939",
}) {
  const dialog = useRef(null);
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState(null); // { ok, text }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)); // { name, phone }

    // >>> ADD YOUR VALIDATION CODE HERE <<<
    // Check `values`; on a problem call setNote({ ok: false, text: "…" }) and `return;`

    setSending(true);
    setNote(null);
    try {
      // >>> ADD YOUR EMAIL-SENDING CODE HERE <<<
      // Replace this fetch with your code and `throw` if sending fails.
      // Keep secret keys (SMTP / API keys) on the server: put the code in app/api/leads/route.js.
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!res.ok) throw new Error("failed");
      setNote({ ok: true, text: "Thank you! Our team will contact you shortly." });
      form.reset();
    } catch {
      setNote({ ok: false, text: "Something went wrong. Please try again." });
    }
    setSending(false);
  }

  return (
    <div id="top" className="flex min-h-screen flex-col bg-white">
      {/* Logo tab: scrolls to the top of THIS page (never navigates) */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label={`${brand} – back to top`}
        className="fixed left-0 top-2.5 z-50 rounded-r-[10px] bg-white p-2 shadow-[0_0_25px_rgba(0,0,0,0.2)] min-[769px]:top-6"
      >
        <Image src={logo} alt={brand} width={120} height={42} priority className="h-auto w-[90px] min-[769px]:w-[120px]" />
      </a>

      {/* Connect With Us */}
      <button
        type="button"
        onClick={() => dialog.current.showModal()}
        className="fixed right-0 top-2.5 z-50 flex origin-right items-center gap-2 rounded-l-[10px] bg-[#E76E00] p-2.5 text-sm text-white shadow-[0_0_25px_rgba(0,0,0,0.2)] transition hover:scale-105 min-[769px]:top-6 min-[769px]:p-3 min-[769px]:text-base min-[769px]:font-semibold"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
          <path fillRule="evenodd" clipRule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 4V4zm2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z" />
        </svg>
        Connect With Us
      </button>

      {/* WhatsApp + call, fixed at the right-centre */}
      <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2.5">
        <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(MESSAGE)}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={`${fab} bg-[#25D366]`}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88z" />
          </svg>
          <span className={tip}>Chat on WhatsApp</span>
        </a>
        <a href={`tel:${phone}`} aria-label="Call us" className={`${fab} bg-[#E63946]`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.97-.96a2 2 0 0 1 2.11-.45c.9.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className={tip}>Call Us</span>
        </a>
      </div>

      <main className="flex-1">{children}</main>

      <footer className="mx-auto w-full max-w-[1500px] px-6 py-5 text-center text-sm text-[#6B7280]">
        © {new Date().getFullYear()} {brand}. All Rights Reserved
      </footer>

      {/* "Connect With Us" form. Prefer your own modal? Replace everything inside <dialog>. */}
      <dialog
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && dialog.current.close()}
        className="m-auto w-[min(92vw,420px)] rounded-2xl p-0 backdrop:bg-black/50"
      >
        <form onSubmit={onSubmit} className="space-y-3 p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-[#111827]">Connect With Us</h2>
            <button type="button" aria-label="Close" onClick={() => dialog.current.close()} className="text-2xl leading-none text-gray-500">
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600">Leave your details and our team will call you back.</p>
          <input name="name" required minLength={2} autoComplete="name" placeholder="Full Name*" aria-label="Full Name" className={input} />
          <input name="phone" type="tel" required inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit mobile number" autoComplete="tel-national" placeholder="Phone Number*" aria-label="Phone Number" className={input} />
          <button type="submit" disabled={sending} className="h-11 w-full rounded-lg bg-[#E76E00] font-semibold text-white transition hover:bg-[#CF6200] disabled:opacity-70">
            {sending ? "Sending…" : "Request a Call Back"}
          </button>
          {note && (
            <p role="status" className={`text-center text-sm ${note.ok ? "font-medium text-green-700" : "text-red-600"}`}>
              {note.text}
            </p>
          )}
        </form>
      </dialog>
    </div>
  );
}
