const resourceCategories = [
  {
    title: "Mental Health",
    description:
      "Confidential support for anxiety, trauma, grief, and daily resilience.",
  },
  {
    title: "Employment",
    description:
      "Transition tools, career coaching, and hiring pathways for service members and veterans.",
  },
  {
    title: "Housing & Benefits",
    description:
      "Guidance on housing stability, benefits access, and financial support programs.",
  },
  {
    title: "Family & Caregiving",
    description:
      "Resources for families, caregivers, and loved ones who support veterans.",
  },
];

const organizations = [
  "VA / Veterans Health Administration",
  "Military OneSource",
  "Wounded Warrior Project",
  "Team Red, White & Blue",
  "Disabled American Veterans",
  "Operation Homefront",
];

const stories = [
  {
    quote:
      "I found my footing after transition through a local peer network and a clear benefits plan.",
    name: "Marcus T.",
  },
  {
    quote:
      "The resources helped my family understand the next steps and feel supported.",
    name: "Elena R.",
  },
  {
    quote:
      "A veteran-friendly job coach helped me translate my service experience into a civilian career.",
    name: "James W.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <header className="mb-16 flex items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              All Veterans Matter
            </p>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#resources" className="transition hover:text-white">
              Resources
            </a>
            <a href="#mission" className="transition hover:text-white">
              Mission
            </a>
            <a href="#stories" className="transition hover:text-white">
              Stories
            </a>
          </nav>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              No Veteran Left Behind
            </span>
            <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Trusted support for every chapter after service.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We connect veterans, transitioning service members, military families,
              and caregivers with trusted local and national resources designed to help
              them thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#resources"
                className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Explore resources
              </a>
              <a
                href="#mission"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
              >
                Learn our mission
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-emerald-950/20">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Today&apos;s focus</p>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-2xl font-bold text-white">1,200+</p>
                <p className="mt-1 text-sm text-slate-300">Veterans connected to trusted support</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Access to vetted guidance and services</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-2xl font-bold text-white">Nationwide</p>
                <p className="mt-1 text-sm text-slate-300">Programs built for every community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Resource categories
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Support built around real-life needs.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resourceCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-lg text-emerald-300">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="mission" className="bg-slate-900/80 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Mission overview
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              We believe support should be clear, immediate, and human.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              All Veterans Matter exists to make the path forward easier for veterans and
              their families by connecting them to guidance, advocacy, and community.
            </p>
            <p>
              From mental health and employment to housing and benefits, our goal is to help
              every person move from uncertainty to confidence with trusted next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Featured organizations
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {organizations.map((organization) => (
            <div
              key={organization}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-base font-medium text-slate-200"
            >
              {organization}
            </div>
          ))}
        </div>
      </section>

      <section id="stories" className="bg-slate-900/80 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Success stories
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Real stories. Real progress.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <blockquote
                key={story.name}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <p className="text-lg leading-8 text-slate-200">“{story.quote}”</p>
                <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  {story.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>All Veterans Matter</p>
          <p>Connecting veterans with trusted support nationwide.</p>
        </div>
      </footer>
    </main>
  );
}
