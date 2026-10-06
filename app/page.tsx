const resourceCategories = [
  {
    title: "Career Transition",
    description:
      "Resume support, certifications, apprenticeship pathways, and veteran-friendly hiring networks.",
  },
  {
    title: "Health & Wellness",
    description:
      "Mental health resources, trauma-informed care, and family support for daily stability.",
  },
  {
    title: "Housing & Benefits",
    description:
      "Guidance on VA benefits, emergency assistance, rental support, and long-term affordability.",
  },
  {
    title: "Education & Family Support",
    description:
      "Scholarships, mentoring, childcare resources, and programs designed for military families.",
  },
];

const partners = [
  "Veteran Employment Network",
  "Operation Homefront",
  "Team Red, White & Blue",
  "Wounded Warrior Project",
  "National Veterans Foundation",
  "The Mission Continues",
];

const stories = [
  {
    quote:
      "After leaving active duty, I had no clear path forward. The resource guide helped me find a job, mental health support, and a community that understood my transition.",
    name: "Marcus D.",
    role: "Army Veteran",
  },
  {
    quote:
      "We needed practical help navigating benefits and childcare. The information we found gave our family a strong starting point and a lot less uncertainty.",
    name: "Alicia M.",
    role: "Military Spouse",
  },
  {
    quote:
      "The links to programs and mentors saved me weeks of dead ends. It felt like someone had built a trusted roadmap for the next chapter.",
    name: "Daniel R.",
    role: "Marine Corps Veteran",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-slate-950">
              AV
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">All Veterans Matter</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#resources" className="hover:text-white">Resources</a>
            <a href="#stories" className="hover:text-white">Stories</a>
            <a href="#connect" className="hover:text-white">Connect</a>
          </nav>
        </header>

        <div className="grid items-center gap-12 pb-12 pt-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-200">
              No Veteran Left Behind
            </p>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl">
              Find trusted support for every next chapter.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We connect veterans, transitioning service members, military families, and caregivers with nationwide programs, guidance, and community-based support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#connect"
                className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Get Help
              </a>
              <a
                href="#resources"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
              >
                Explore Resources
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                <p className="text-2xl font-bold text-white">1,200+</p>
                <p>community resources</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p>support pathways</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">All 50</p>
                <p>states covered</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-slate-950/60">
            <div className="rounded-2xl border border-amber-400/30 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Support Snapshot</p>
              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Top need</p>
                  <p className="mt-2 text-xl font-semibold text-white">Career & stabilization</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Most active programs</p>
                  <p className="mt-2 text-xl font-semibold text-white">Benefits, mental health, housing</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Current mission</p>
                  <p className="mt-2 text-xl font-semibold text-white">Build a trusted network of support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Our mission</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A clear path toward stability, opportunity, and belonging.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              We believe every veteran and military family deserves access to trusted resources without confusion or isolation.
            </p>
            <p>
              Our platform simplifies the search for help by organizing opportunities into practical support categories that are easy to navigate and built around real-life needs.
            </p>
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Resource categories</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Support designed around the moments that matter most.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resourceCategories.map((resource) => (
            <div key={resource.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-amber-400/50 hover:bg-slate-800">
              <div className="mb-5 h-11 w-11 rounded-xl bg-amber-500/15 text-lg font-bold leading-10 text-center text-amber-200">
                {resource.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Featured organizations</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {partners.map((partner) => (
              <span key={partner} className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Success stories</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Real stories. Real progress. Real community.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-base leading-8 text-slate-200">“{story.quote}”</p>
              <div className="mt-6 border-t border-slate-800 pt-4">
                <p className="font-semibold text-white">{story.name}</p>
                <p className="text-sm text-amber-200">{story.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="connect" className="bg-amber-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/80">Take the next step</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Need help finding the right support?</h2>
          </div>
          <a
            href="mailto:hello@allveteransmatter.org"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            hello@allveteransmatter.org
          </a>
        </div>
      </section>
    </main>
  );
}
