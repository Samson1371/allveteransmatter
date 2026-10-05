import Link from "next/link";

export default function StoriesPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-165px)] max-w-7xl items-center justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--color-navy)]/10 bg-white p-10 text-center shadow-sm shadow-[var(--color-navy)]/5 sm:p-12">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
          Your Story Belongs Here
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-slate)]">
          The first success story featured on All Veterans Matter will come from a
          real veteran whose life was impacted through this platform.
        </p>
        <p className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
          No Veteran Left Behind.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-4 text-base font-semibold text-[var(--color-black)] transition hover:bg-[#e3c45b]"
          >
            Find Resources
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-navy)]/15 bg-[var(--color-ivory)] px-8 py-4 text-base font-semibold text-[var(--color-navy)] transition hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
