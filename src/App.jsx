import "./App.css";
import Footer, {
  ADMISSIONS_EMAIL,
  ADMISSIONS_PHONE,
} from "./Footer.jsx";
import backgroundImage from "./assets/gsc-background.jpg";

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

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
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

function App() {
  return (
    <>
      <main className="contact-page">
        <div
          className="page-background"
          aria-hidden="true"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <header className="hero">
          <div className="hero-accent" aria-hidden="true" />

          <div className="page-width hero-inner">
            <div className="hero-content">
              <div className="hero-copy">
                <span className="eyebrow">Contact Us</span>

                <h1>Get in Touch</h1>

                <p>
                  Reach Greenwich Skating Club for membership,
                  admissions, or any general questions about the
                  club.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="directory">
          <div className="page-width">
            <div className="connect-recap">
              <span className="eyebrow eyebrow-dark">Connect</span>

              <h2>Questions about joining or visiting?</h2>

              <p>
                Reach Greenwich Skating Club directly for
                admissions, membership, or general questions
                about the club.
              </p>

              <div className="connect-recap__details">
                <div>
                  <span className="connect-recap__label">
                    Address
                  </span>

                  <p>15 Cardinal Road, Greenwich, CT 06830</p>
                </div>

                <div>
                  <span className="connect-recap__label">
                    Email
                  </span>

                  <EmailLink
                    email={ADMISSIONS_EMAIL}
                    label="Greenwich Skating Club"
                  />
                </div>

                <div>
                  <span className="connect-recap__label">
                    Phone
                  </span>

                  <p>{ADMISSIONS_PHONE}</p>
                </div>
              </div>
            </div>

            <section className="membership-section">
              <div className="membership-eyebrow">
                <span
                  className="membership-eyebrow__dash"
                  aria-hidden="true"
                />
                Membership
                <span
                  className="membership-eyebrow__dash"
                  aria-hidden="true"
                />
              </div>

              <h2>Interested in Joining GSC?</h2>

              <span
                className="membership-divider"
                aria-hidden="true"
              />

              <p>
                Greenwich Skating Club is a private, member-based
                club. Prospective members can learn more about the
                application process, membership requirements, and
                the steps involved in joining.
              </p>

              <p className="membership-email-line">
                Interested in joining? Email{" "}
                <a
                  className="membership-email"
                  href={`mailto:${ADMISSIONS_EMAIL}`}
                >
                  {ADMISSIONS_EMAIL}
                </a>
                .
              </p>

              <a
                className="membership-cta"
                href="https://wingsarenact.wixstudio.com/gscnewsite/admissions"
                target="_top"
              >
                Admissions Process
                <ArrowRightIcon />
              </a>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
