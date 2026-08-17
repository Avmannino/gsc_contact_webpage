import "./App.css";
import Footer from "./Footer.jsx";

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
