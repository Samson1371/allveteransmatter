const resourceCategories = [
  {
    title: "Career & Education",
    description:
      "Transition support, upskilling opportunities, and education pathways for service members and veterans.",
  },
  {
    title: "Mental Wellness",
    description:
      "Crisis support, counseling, and peer-led resources designed to help veterans thrive after service.",
  },
  {
    title: "Housing & Benefits",
    description:
      "Guidance on VA benefits, housing stability, and financial assistance to protect what matters most.",
  },
  {
    title: "Community & Belonging",
    description:
      "Local networks, volunteer opportunities, and family support that strengthen connection and purpose.",
  },
];

const organizations = [
  "Team Red, White & Blue",
  "Veterans of Foreign Wars",
  "Wounded Warrior Project",
  "National Veterans Foundation",
  "Hire Heroes USA",
  "The Mission Continues",
];

const stories = [
  {
    quote:
      "The support I found after my transition gave me structure, confidence, and a sense of belonging again.",
    name: "Marcus T.",
    role: "Army Veteran",
  },
  {
    quote:
      "From benefits guidance to community events, this network helped my family feel seen and supported.",
    name: "Alicia R.",
    role: "Marine Spouse",
  },
  {
    quote:
      "I found a new mission through mentorship and career coaching that matched my skills and goals.",
    name: "Javier L.",
    role: "Air Force Veteran",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">AVM</span>
            <span>All Veterans Matter</span>
          </div>
          <div className="nav-links">
            <a href="#resources">Resources</a>
            <a href="#mission">Mission</a>
            <a href="#stories">Stories</a>
            <a href="#connect">Connect</a>
          </div>
          <a href="#connect" className="button button-primary">
            Get Support
          </a>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">No Veteran Left Behind</p>
            <h1>Helping veterans and families find trusted support, purpose, and belonging.</h1>
            <p className="lede">
              All Veterans Matter connects service members, veterans, military families,
              and caregivers with practical resources, community networks, and real hope.
            </p>
            <div className="cta-row">
              <a href="#resources" className="button button-primary">
                Explore Resources
              </a>
              <a href="#mission" className="button button-secondary">
                Learn Our Mission
              </a>
            </div>

            <ul className="stat-list" aria-label="Key service statistics">
              <li>
                <strong>Nationwide</strong>
                <span>support network</span>
              </li>
              <li>
                <strong>Trusted</strong>
                <span>community partners</span>
              </li>
              <li>
                <strong>People-first</strong>
                <span>care pathways</span>
              </li>
            </ul>
          </div>

          <div className="hero-card" aria-label="Support categories summary">
            <div className="card-badge">Priority support</div>
            <h2>Find the next right step.</h2>
            <div className="mini-list">
              <div>
                <span className="dot blue" />
                <p>Benefits & advocacy</p>
              </div>
              <div>
                <span className="dot gold" />
                <p>Veteran-friendly employers</p>
              </div>
              <div>
                <span className="dot green" />
                <p>Peer support & mental wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="content-section">
        <div className="section-header">
          <p className="eyebrow">Resource categories</p>
          <h2>Practical help for every chapter of service and transition.</h2>
        </div>

        <div className="resource-grid">
          {resourceCategories.map((category) => (
            <article key={category.title} className="resource-card">
              <div className="icon-box" aria-hidden="true">
                {category.title.charAt(0)}
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="mission" className="content-section alt-section">
        <div className="mission-layout">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>A stronger future starts with connection and care.</h2>
          </div>

          <div className="mission-copy">
            <p>
              We believe veterans deserve more than a transition plan — they deserve a
              community that sees their experience, honors their service, and helps them
              move forward with dignity.
            </p>
            <p>
              By connecting people to trusted organizations, local programs, and supportive
              networks, we help turn uncertainty into momentum and isolation into belonging.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <p className="eyebrow">Partner organizations</p>
          <h2>Working with national partners who lead with service.</h2>
        </div>

        <div className="organization-grid" aria-label="Featured organizations">
          {organizations.map((org) => (
            <div key={org} className="org-pill">
              {org}
            </div>
          ))}
        </div>
      </section>

      <section id="stories" className="content-section alt-section">
        <div className="section-header">
          <p className="eyebrow">Success stories</p>
          <h2>Real stories of resilience, support, and second chances.</h2>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <article key={story.name} className="story-card">
              <p className="quote">“{story.quote}”</p>
              <div className="story-author">
                <strong>{story.name}</strong>
                <span>{story.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="connect" className="cta-band">
        <div>
          <p className="eyebrow">Take the next step</p>
          <h2>Find trusted guidance when you need it most.</h2>
        </div>
        <a href="mailto:hello@allveteransmatter.org" className="button button-primary">
          Contact Us
        </a>
      </section>

      <footer className="site-footer">
        <div className="brand">
          <span className="brand-mark">AVM</span>
          <span>All Veterans Matter</span>
        </div>
        <p>Supporting veterans, service members, families, and caregivers nationwide.</p>
      </footer>
    </main>
  );
}
