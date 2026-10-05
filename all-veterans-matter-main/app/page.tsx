import Link from "next/link";
import { OrganizationCard } from "@/components/organization-card";
import { ResourceCard } from "@/components/resource-card";
import { organizations, resourceCategories } from "@/lib/site-data";

export default function Home() {
  const featuredCategories = resourceCategories.slice(0, 4);
  const featuredOrganizations = organizations.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-navy),#153a69_58%,#08172b)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(178,34,34,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-85px)] max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/10 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-[var(--color-gold)] uppercase">
              Trusted nationwide support
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              All Veterans Matter
            </h1>
            <p className="mt-5 text-2xl font-medium text-[var(--color-gold)] sm:text-3xl">
              No Veteran Left Behind
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Connecting Veterans, Service Members, Military Families, Caregivers,
              and Surviving Spouses with trusted resources nationwide.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-black)] transition hover:bg-[#e3c45b]"
              >
                Find Resources
              </Link>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/16"
              >
                View Organizations
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-8 text-[var(--color-navy)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
                Featured Categories
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {featuredCategories.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-2xl border border-[var(--color-navy)]/8 bg-[var(--color-ivory)] p-4"
                  >
                    <p className="text-sm font-semibold text-[var(--color-navy)]">
                      {category.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-slate)]">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-[var(--color-navy)]">
            Helping every veteran locate trusted resources with confidence.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-slate)]">
            All Veterans Matter exists to make support easier to find by bringing
            together dependable organizations, resource pathways, and community
            guidance in one welcoming place.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--color-slate)]">
            From housing and mental health to education, employment, and benefits,
            the mission is to reduce confusion and help veterans, service members,
            families, caregivers, and surviving spouses connect with trusted help
            nationwide.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
              Featured Organizations
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
              Trusted organizations helping veterans and their families.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredOrganizations.map((organization) => (
              <OrganizationCard key={organization.name} {...organization} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/organizations"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-navy)]/15 bg-[var(--color-ivory)] px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-white"
            >
              See All Organizations
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-red)]">
            Featured Resource Categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Explore the support areas people need most.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCategories.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[#e3c45b]"
          >
            Browse All Categories
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Veteran Success Stories
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The First Story Starts Here
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              When the first veteran finds help through this platform, their path to success will be featured here to inspire and guide others.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-4 text-base font-semibold text-[var(--color-black)] transition hover:bg-[#e3c45b]"
              >
                Share Your Story
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/16"
              >
                Find Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
