type OrganizationCardProps = {
  name: string;
  description: string;
  stateServed: string;
  website: string;
};

export function OrganizationCard({
  name,
  description,
  stateServed,
  website,
}: OrganizationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--color-navy)]/10 bg-white p-7 shadow-sm shadow-[var(--color-navy)]/5">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-lg font-semibold text-[var(--color-navy)]">
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 3)}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--color-navy)]">{name}</h3>
      <p className="mt-3 flex-1 leading-7 text-[var(--color-slate)]">{description}</p>
      <dl className="mt-6 space-y-2 text-sm text-[var(--color-slate)]">
        <div>
          <dt className="font-semibold text-[var(--color-navy)]">State Served</dt>
          <dd>{stateServed}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[var(--color-navy)]">Website</dt>
          <dd>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-red)] underline-offset-4 hover:underline"
            >
              Visit website
            </a>
          </dd>
        </div>
      </dl>
    </article>
  );
}
