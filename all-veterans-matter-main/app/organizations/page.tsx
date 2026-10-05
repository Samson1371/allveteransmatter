import { OrganizationCard } from "@/components/organization-card";
import { organizations } from "@/lib/site-data";

export default function OrganizationsPage() {
  const organizationsByCategory = organizations.reduce<Record<string, typeof organizations>>(
    (groups, organization) => {
      if (!groups[organization.category]) {
        groups[organization.category] = [];
      }

      groups[organization.category].push(organization);
      return groups;
    },
    {},
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
          Organizations
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--color-navy)] sm:text-5xl">
          Dedicated organizations serving veterans and their families.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-slate)]">
          Explore organizations grouped by service area to make referrals easier to
          navigate.
        </p>
      </div>
      <div className="mt-12 space-y-12">
        {Object.entries(organizationsByCategory).map(([category, categoryOrganizations]) => (
          <section key={category}>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
                {category}
              </p>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categoryOrganizations.map((organization) => (
                <OrganizationCard key={organization.name} {...organization} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
