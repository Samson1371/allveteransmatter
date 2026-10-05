import Link from "next/link";

type ResourceCardProps = {
  title: string;
  description: string;
};

export function ResourceCard({ title, description }: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--color-navy)]/10 bg-white p-7 shadow-sm shadow-[var(--color-navy)]/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-lg font-semibold text-[var(--color-gold)]">
        {title.charAt(0)}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--color-navy)]">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-[var(--color-slate)]">{description}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[#e3c45b]"
      >
        Learn More
      </Link>
    </article>
  );
}
