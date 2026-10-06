import Image from "next/image";

const resources = [
  {
    number: "01",
    title: "Benefits & claims",
    description:
      "Find official information about VA benefits, health care, and support with claims.",
    href: "https://www.va.gov/",
    link: "Explore VA.gov",
  },
  {
    number: "02",
    title: "Transitioning to civilian life",
    description:
      "Explore career, education, and transition support for service members and veterans.",
    href: "https://www.va.gov/careers-employment/",
    link: "Career & employment",
  },
  {
    number: "03",
    title: "Support for families",
    description:
      "Connect with information and services for military families and caregivers.",
    href: "https://www.caregiver.va.gov/",
    link: "Caregiver support",
  },
  {
    number: "04",
    title: "Find local help",
    description:
      "Reach local community services for housing, food, health, and other everyday needs.",
    href: "https://www.211.org/",
    link: "Search 211",
  },
];

const organizations = [
  {
    name: "U.S. Department of Veterans Affairs",
    detail: "Benefits, health care, and services",
    href: "https://www.va.gov/",
  },
  {
    name: "Disabled American Veterans",
    detail: "Benefits assistance and advocacy",
    href: "https://www.dav.org/",
  },
  {
    name: "Veterans Crisis Line",
    detail: "Confidential crisis support, anytime",
    href: "https://www.veteranscrisisline.net/",
  },
];

export default function Home() {
  return (
    <>
      <div className="announcement">
        <span className="announcement-star" aria-hidden="true">
          ★
        </span>
        A community committed to those who served
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="All Veterans Matter home">
          <Image
            className="brand-logo"
            src="/avm-logo.png"
            alt="All Veterans Matter — No Veteran Left Behind"
            width={48}
            height={48}
            priority
          />
          <span className="brand-name">
            ALL VETERANS
            <strong>MATTER</strong>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#resources">Resources</a>
          <a href="#mission">Our mission</a>
          <a href="#partners">Organizations</a>
        </nav>
        <a className="header-cta" href="#resources">
          Find support <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow"><span /> HONORING SERVICE. CONNECTING COMMUNITY.</p>
            <h1>
              No veteran
              <br />
              left <span>behind.</span>
            </h1>
            <p className="hero-description">
              A clearer path to the people, programs, and trusted resources that
              support veterans, military families, and caregivers.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#resources">
                Explore resources <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#mission">
                Learn about our mission
              </a>
            </div>
            <div className="hero-note">
              <span className="note-rule" />
              <p>One community. Many ways to serve those who served.</p>
            </div>
          </div>
          <div className="hero-emblem-wrap">
            <div className="emblem-glow" />
            <Image
              className="hero-emblem"
              src="/avm-logo.png"
              alt="All Veterans Matter emblem"
              width={1250}
              height={1250}
              priority
              sizes="(max-width: 760px) 72vw, 400px"
            />
            <span className="emblem-caption">SERVICE NEVER ENDS</span>
          </div>
          <span className="hero-star star-one" aria-hidden="true">✦</span>
          <span className="hero-star star-two" aria-hidden="true">✦</span>
        </section>

        <section className="audience-strip" aria-label="Who we support">
          <span>Here for</span>
          <p>Veterans</p>
          <i aria-hidden="true" />
          <p>Transitioning service members</p>
          <i aria-hidden="true" />
          <p>Military families</p>
          <i aria-hidden="true" />
          <p>Caregivers</p>
        </section>

        <section className="section resources-section" id="resources">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> A GOOD PLACE TO START</p>
              <h2>Support for the road ahead.</h2>
            </div>
            <p className="section-intro">
              Every journey is different. Start with a trusted resource and find
              the support that fits your needs.
            </p>
          </div>
          <div className="resource-grid">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.number}>
                <span className="resource-number">{resource.number}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.href} target="_blank" rel="noreferrer">
                  {resource.link} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mission-section" id="mission">
          <div className="mission-mark" aria-hidden="true">★</div>
          <div className="mission-copy">
            <p className="eyebrow"><span /> OUR MISSION</p>
            <h2>Service deserves support. Every day.</h2>
            <p>
              All Veterans Matter is here to help veterans, transitioning
              service members, military families, and caregivers find trusted
              resources and feel connected to a community that cares.
            </p>
            <a className="text-link" href="#partners">
              Meet the organizations doing the work <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mission-motto">NO VETERAN LEFT BEHIND</p>
        </section>

        <section className="section partners-section" id="partners">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> TRUSTED STARTING POINTS</p>
              <h2>Help from organizations that serve.</h2>
            </div>
            <p className="section-intro">
              These national organizations offer direct information and
              assistance. Visit them to learn more.
            </p>
          </div>
          <div className="organization-list">
            {organizations.map((organization) => (
              <a
                className="organization"
                href={organization.href}
                key={organization.name}
                target="_blank"
                rel="noreferrer"
              >
                <span className="organization-star" aria-hidden="true">★</span>
                <span className="organization-copy">
                  <strong>{organization.name}</strong>
                  <span>{organization.detail}</span>
                </span>
                <span className="organization-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="crisis-banner" aria-label="Veterans crisis support">
          <div>
            <p className="eyebrow"><span /> HERE WHEN YOU NEED IT</p>
            <h2>You don’t have to face a crisis alone.</h2>
          </div>
          <a
            className="button button-light"
            href="https://www.veteranscrisisline.net/"
            target="_blank"
            rel="noreferrer"
          >
            Call 988, then press 1 <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <Image src="/avm-logo.png" alt="" width={44} height={44} />
          <span>ALL VETERANS MATTER</span>
        </a>
        <p>Honoring service. Connecting community.</p>
        <span className="footer-copyright">© {new Date().getFullYear()} All Veterans Matter</span>
      </footer>
    </>
  );
}
