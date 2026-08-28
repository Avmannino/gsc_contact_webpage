import { useState } from "react";
import "./App.css";
import Footer from "./Footer.jsx";
import backgroundImage from "./assets/gsc-background.jpg";

const CONTACT_EMAIL = "info@greenwichskatingclub.org";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    const subject = `Inquiry - ${firstName} ${lastName}`.trim();

    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      "Question:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <h3 className="contact-form__heading">Send a Message</h3>

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
        <label htmlFor="message">Your Question</label>

        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="contact-form__submit"
      >
        Send Message
        <ArrowRightIcon />
      </button>
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
              <span className="eyebrow eyebrow-dark">Connect</span>

              <h2>Questions? </h2>

              <p>
                 Start here
              </p>

              <div className="connect-recap__details">
                <div>
                  <span className="connect-recap__label">
                    Address
                  </span>

                  <p>9 Cardinal Rd, Greenwich, CT 06830</p>
                </div>
              </div>

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
                  href="https://wingsarenact.wixstudio.com/gscnewsite/admissions"
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
