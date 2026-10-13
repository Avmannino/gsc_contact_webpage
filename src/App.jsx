import { useState } from "react";
import "./App.css";
import Footer from "./Footer.jsx";
import backgroundImage from "./assets/gsc-background.jpg";

const CONTACT_EMAIL = "info@greenwichskatingclub.org";

// Web3Forms delivers to the email the key was created with (CONTACT_EMAIL).
// TODO: paste the access key created for info@greenwichskatingclub.org.
const WEB3FORMS_ACCESS_KEY = "";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

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

function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    const name = `${firstName} ${lastName}`.trim();
    const botcheck = event.currentTarget.elements.botcheck.checked;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Inquiry - ${name}`,
          from_name: name,
          name,
          email,
          phone,
          message,
          botcheck,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setFormData(initialFormState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__header">
        <h3 className="contact-form__heading">Send Us a Message</h3>

        <img
          className="contact-form__logo"
          src={`${
            import.meta.env.BASE_URL
          }gsc-logo.png`}
          alt=""
        />
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="firstName">First Name</label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="lastName">Last Name</label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">Phone</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Your Message</label>

        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <input
        className="contact-form__honeypot"
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        <ArrowRightIcon />
      </button>

      {status === "success" && (
        <p
          className="contact-form__status"
          role="status"
        >
          Thanks! Your message has been sent. We&rsquo;ll be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p
          className="contact-form__status"
          role="alert"
        >
          Sorry, your message couldn&rsquo;t be sent. Please try again or
          email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
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
                  Contact the Skating Club for membership,
                  admissions, or any general questions.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="directory">
          <div className="page-width">
            <div className="connect-recap">
              <h2>Questions? </h2>

              <ContactForm />
            </div>

            <section className="membership-section">
              <div className="membership-content">
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
                  Interested in joining? Visit our Admissions page below to
                  apply:
                </p>

                <a
                  className="membership-cta"
                  href="https://www.greenwichskatingclub.com/admissions"
                  target="_top"
                >
                  Admissions Process
                  <ArrowRightIcon />
                </a>
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
