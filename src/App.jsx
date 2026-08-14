import "./App.css";

const contacts = [
  {
    category: "Hockey",
    description: "Questions about GSC hockey programs.",
    name: "Ian Tarrant",
    email: "itarrant@greenwichskatingclub.org",
  },
  {
    category: "Figure Skating",
    description: "Questions about figure skating programs.",
    name: "Deb Cunningham",
    email: "figureskating@greenwichskatingclub.org",
  },
  {
    category: "Crossbar Expert",
    description: "Help with your Crossbar account.",
    name: "Casey Fulton",
    email: "cfulton@greenwichskatingclub.org",
  },
  {
    category: "Admissions",
    description: "Questions about club admissions and membership.",
    name: null,
    email: "gscadmissions@greenwichskatingclub.org",
  },
];

const generalContacts = [
  {
    name: "Lorin Pratley",
    title: null,
    email: "lpratley@greenwichskatingclub.org",
  },
  {
    name: "Francois Magnant",
    title: "General Manager",
    email: "fmagnant@greenwichskatingclub.org",
  },
];

/*
  UPDATE THIS ONE VALUE when the final public GSC
  Wix domain is connected.

  Every internal footer link below is built from
  this base URL.
*/
const SITE_URL =
  "https://www.greenwichskatingclub.com";

const MEMBER_LOGIN_URL =
  "https://www.greenwichskatingclub.org/login";

const ADMISSIONS_EMAIL =
  "gscadmissions@greenwichskatingclub.org";

const ADMISSIONS_PHONE = "(203) 622-9583";

const exploreGroups = [
  {
    title: "About",
    links: [
      {
        label: "About GSC",
        href: `${SITE_URL}/about`,
      },
      {
        label: "Club History",
        href: `${SITE_URL}/history`,
      },
      {
        label: "Board of Governors",
        href: `${SITE_URL}/board`,
      },
      {
        label: "GSC Alumni",
        href: `${SITE_URL}/alumni`,
      },
    ],
  },
  {
    title: "Membership",
    links: [
      {
        label: "Admissions Process",
        href: `${SITE_URL}/admissions`,
      },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        label: "Learn to Skate",
        href: `${SITE_URL}/learn-to-skate`,
      },
      {
        label: "Mini Mites",
        href: `${SITE_URL}/mini-mites`,
      },
      {
        label: "Youth Travel Hockey",
        href: `${SITE_URL}/youth-travel-hockey`,
      },
      {
        label: "Stateline Girls Hockey",
        href: `${SITE_URL}/stateline-girls-hockey`,
      },
      {
        label: "Figure Skating",
        href: `${SITE_URL}/figure-skating`,
      },
      {
        label: "Adult Hockey",
        href: `${SITE_URL}/adult-hockey`,
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Map & Directions",
        href: `${SITE_URL}/directions`,
      },
      {
        label: "Contact Form",
        href: `${SITE_URL}/contact`,
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="arrow-icon"
      aria-hidden="true"
    >
      <path
        d="M5 15L15 5M8 5h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailLink({ email, label }) {
  return (
    <a
      className="email-link"
      href={`mailto:${email}`}
      aria-label={`Email ${label || email}`}
    >
      <span>{email}</span>
      <ArrowIcon />
    </a>
  );
}

function ContactCard({ category, description, name, email }) {
  return (
    <article className="contact-card">
      <div className="contact-card-top">
        <span className="contact-category">{category}</span>

        <h2>{description}</h2>
      </div>

      <div className="contact-card-bottom">
        {name && <p className="contact-name">{name}</p>}

        <EmailLink email={email} label={name || category} />
      </div>
    </article>
  );
}

function FooterArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="
          M20 10
          c0 5-8 11-8 11
          S4 15 4 10
          a8 8 0 1 1 16 0Z
        "
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        className="icon-fill"
        cx="17.5"
        cy="6.5"
        r="1"
      />
    </svg>
  );
}

function FooterLogo() {
  return (
    <a
      className="footer-logo"
      href={`${SITE_URL}/`}
      target="_top"
      aria-label="Greenwich Skating Club home"
    >
      <img
        src={`${
          import.meta.env.BASE_URL
        }gsc-logo.png`}
        alt="Greenwich Skating Club"
      />
    </a>
  );
}

function ExploreMenu() {
  return (
    <nav
      className="footer-menu"
      aria-label="Footer navigation"
    >
      <h2>Explore</h2>

      <div className="footer-menu__groups">
        {exploreGroups.map((group) => (
          <div
            className="footer-menu__group"
            key={group.title}
          >
            <h3 className="footer-menu__group-title">
              {group.title}
            </h3>

            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_top"
                  >
                    <span>{link.label}</span>

                    <FooterArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

function ConnectPanel() {
  return (
    <section
      className="footer-connect"
      aria-labelledby="connect-title"
    >
      <div className="footer-connect__info">
        <h2 id="connect-title">
          Connect
        </h2>

        <p>
          Questions about joining Greenwich Skating
          Club or visiting the rink?
        </p>

        <div className="footer-connect__details">
          <a
            href={`${SITE_URL}/directions`}
            target="_top"
          >
            <PinIcon />

            <span>
              Cardinal Road · Greenwich, Connecticut
            </span>
          </a>

          <a href={`mailto:${ADMISSIONS_EMAIL}`}>
            <EmailIcon />

            <span>
              {ADMISSIONS_EMAIL}
            </span>
          </a>

          <a
            href={`tel:+1${ADMISSIONS_PHONE.replace(/\D/g, "")}`}
          >
            <PhoneIcon />

            <span>
              Phone: {ADMISSIONS_PHONE}
            </span>
          </a>
        </div>

        <a
          className="member-button"
          href={MEMBER_LOGIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>Member Login</span>

          <FooterArrowIcon />
        </a>

        <a
          className="instagram-link"
          href="https://www.instagram.com/thegreenwichskatingclub/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />

          <span>
            Follow GSC on Instagram
          </span>
        </a>
      </div>

      <div className="footer-map">
        <iframe
          title="Greenwich Skating Club location"
          src="https://www.google.com/maps?q=Greenwich+Skating+Club,+Cardinal+Road,+Greenwich,+CT&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        className="site-footer__accent"
        aria-hidden="true"
      >
        <span />
        <span />
      </div>

      <div
        className="site-footer__rings"
        aria-hidden="true"
      />

      <div className="footer-container site-footer__main">
        <section
          className="footer-brand"
          aria-label="Greenwich Skating Club"
        >
          <FooterLogo />
        </section>

        <ExploreMenu />

        <ConnectPanel />
      </div>

      <div className="site-footer__bottom">
        <div className="footer-container site-footer__bottom-inner">
          <p>
            © {currentYear} Greenwich Skating Club
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <main className="contact-page">
        <header className="hero">
          <div className="hero-accent" aria-hidden="true" />

          <div className="page-width hero-inner">
            <div className="hero-content">
              <div className="hero-copy">
                <span className="eyebrow">Contact Us</span>

                <h1 aria-label="Get in Touch">
                  <img
                    src={`${import.meta.env.BASE_URL}gsc-logo.png`}
                    alt=""
                    aria-hidden="true"
                    className="hero-g-mark"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  et in Touch
                </h1>

                <p>
                  Find the right contact for questions about club
                  programs, admissions, Crossbar, and general club
                  information.
                </p>
              </div>
            </div>

            <aside className="location-card">
              <span className="location-label">Club Location</span>

              <p className="location-name">
                Greenwich Skating Club
              </p>

              <address>
                15 Cardinal Road
                <br />
                Greenwich, CT 06830
              </address>

              <p className="location-phone">
                Phone: (203) 622-9583
              </p>
            </aside>
          </div>
        </header>

        <section className="directory">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <span className="eyebrow eyebrow-dark">
                  Contact Directory
                </span>

                <h2>Who can we help you reach?</h2>
              </div>
            </div>

            <div className="contact-grid">
              {contacts.map((contact) => (
                <ContactCard
                  key={contact.category}
                  category={contact.category}
                  description={contact.description}
                  name={contact.name}
                  email={contact.email}
                />
              ))}
            </div>

            <section className="general-section">
              <div className="general-intro">
                <span className="eyebrow">General Inquiries</span>

                <h2>All other questions</h2>

                <p>
                  For anything that doesn't fall into one of the
                  categories above, contact Lorin or Francois.
                </p>
              </div>

              <div className="general-contacts">
                {generalContacts.map((contact) => (
                  <div
                    className="general-person"
                    key={contact.email}
                  >
                    <div>
                      <h3>{contact.name}</h3>

                      {contact.title && (
                        <p className="general-title">
                          {contact.title}
                        </p>
                      )}
                    </div>

                    <EmailLink
                      email={contact.email}
                      label={contact.name}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
