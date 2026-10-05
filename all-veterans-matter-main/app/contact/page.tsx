"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      // Submitting to our secure server-side API endpoint instead of exposing the access key in client-side HTML!
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit form.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unable to connect. Please check your internet connection.");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-[var(--color-navy)]/10 bg-white p-8 shadow-sm shadow-[var(--color-navy)]/5 sm:p-10"
      >
        {/* Anti-spam Bot Honeypot (Invisible to humans, triggers immediate block for automated scrapers) */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-[var(--color-navy)] sm:text-5xl">
              Contact Us
            </h1>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--color-navy)]">Name</span>
            <input
              type="text"
              name="name"
              required
              className="rounded-2xl border border-[var(--color-navy)]/15 px-4 py-3 text-base text-[var(--color-navy)] outline-none transition focus:border-[var(--color-gold)]"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--color-navy)]">Email</span>
            <input
              type="email"
              name="email"
              required
              className="rounded-2xl border border-[var(--color-navy)]/15 px-4 py-3 text-base text-[var(--color-navy)] outline-none transition focus:border-[var(--color-gold)]"
              placeholder="you@example.com"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--color-navy)]">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="rounded-2xl border border-[var(--color-navy)]/15 px-4 py-3 text-base text-[var(--color-navy)] outline-none transition focus:border-[var(--color-gold)]"
              placeholder="How can we help?"
            />
          </label>

          {status === "success" && (
            <div className="rounded-2xl bg-green-50 p-4 text-sm font-medium text-green-800 border border-green-200">
              ✓ Thank you! Your message was sent successfully. We will get back to you shortly.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-800 border border-red-200">
              ⚠ {errorMessage}
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-navy)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#153a69] disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
