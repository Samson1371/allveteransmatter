import { ResourceCard } from "@/components/resource-card";
import { resourceCategories } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
          Resources
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--color-navy)] sm:text-5xl">
          Dedicated resource categories for veterans and military-connected families.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-slate)]">
          Browse support options organized by category so visitors can quickly find
          the right next step.
        </p>
      </div>
      <div className="mt-12 space-y-8">
        {resourceCategories.map((resource) => (
          <section
            key={resource.title}
            className="rounded-[2rem] border border-[var(--color-navy)]/10 bg-white p-8 shadow-sm shadow-[var(--color-navy)]/5"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1fr)] lg:items-start">
              <ResourceCard title={resource.title} description={resource.description} />
              <div>
                <h2 className="text-xl font-semibold text-[var(--color-navy)]">
                  {resource.title} Resources
                </h2>
                <ul className="mt-4 grid gap-3 text-[var(--color-slate)] sm:grid-cols-2">
                  {resource.resources.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-[var(--color-ivory)] px-4 py-3 leading-7"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
