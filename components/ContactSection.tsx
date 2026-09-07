"use client";

import React from "react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your API/email service here later.
    console.log("Contact form submitted");
  };

  return (
    <section className="contact-section">
      {/* Background overlay */}
      <div className="contact-overlay" />

      <div className="contact-container">
        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="contact-info">
          {/* Label */}
          <div className="contact-label">
            <span className="contact-label-dot" />
            <span>Request a Quote</span>
          </div>

          {/* Heading */}
          <h2 className="contact-heading">
            Tell us what your
            <br />
            <span>vessel needs</span>
          </h2>

          {/* Intro */}
          <p className="contact-intro">
            At GIMSCO, we are committed to providing you with the highest
            quality marine products and services tailored to your specific
            needs.
          </p>

          <div className="contact-divider" />

          {/* Address */}
          <div className="contact-detail">
            <h3>Company Address</h3>

            <p>
              Gulf International Marine Services Co.
              <br />
              (Br. of C SHIPS Investments LLC)
              <br />
              Office No. 105, 1st Floor, Emaar Square, Building No. 2,
              <br />
              Downtown, Burj Khalifa, Dubai, United Arab Emirates
            </p>
          </div>

          <div className="contact-divider" />

          {/* Phone */}
          <div className="contact-detail">
            <h3>Phone</h3>

            <p>+971 4 442 0575</p>
          </div>

          <div className="contact-divider" />

          {/* Email */}
          <div className="contact-detail">
            <h3>Email</h3>

            <p>
              gimsco@emirates.net.ae
              <br />
              gimsco@eim.ae
            </p>
          </div>
        </div>

        {/* =========================
            RIGHT FORM
        ========================= */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fullName">Full Name</label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="company">Company</label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone No"
              />
            </div>
          </div>

          {/* Vessel */}
          <div className="form-field">
            <label htmlFor="vessel">Vessel / Requirement</label>

            <input
              id="vessel"
              name="vessel"
              type="text"
              placeholder="vessel name  and store category"
            />
          </div>

          {/* Message */}
          <div className="form-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="tell us about your requirements"
              rows={5}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="contact-submit">
            <span>SUBMIT REQUEST</span>
            <span className="submit-arrow">→</span>
          </button>
        </form>
      </div>

      <style jsx>{`
        /* ========================================
           SECTION
        ======================================== */

        .contact-section {
          position: relative;
          width: 100%;
          min-height: 680px;

          display: flex;
          align-items: center;

          box-sizing: border-box;
          overflow: hidden;

          background-image: url("/images/contact-bg.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          font-family: var(--font-poppins), Poppins, sans-serif;
        }

        .contact-overlay {
          position: absolute;
          inset: 0;

          background: rgba(8, 16, 22, 0.56);

          z-index: 1;
        }

        .contact-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1280px;

          margin: 0 auto;
          padding: 75px 32px;

          box-sizing: border-box;

          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);

          gap: clamp(50px, 7vw, 110px);

          align-items: center;
        }

        /* ========================================
           LEFT SIDE
        ======================================== */

        .contact-info {
          width: 100%;
          max-width: 520px;
          color: #ffffff;
        }

        .contact-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 5px 11px 5px 7px;

          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;

          background: rgba(240, 240, 245, 0.17);

          color: rgba(255, 255, 255, 0.88);

          font-size: 11px;
          font-weight: 400;

          line-height: 1;
        }

        .contact-label-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #3146d8;

          box-shadow: 0 0 0 2px rgba(49, 70, 216, 0.2);
        }

        .contact-heading {
          margin: 18px 0 22px;

          font-size: clamp(48px, 5.2vw, 72px);
          font-weight: 300;

          line-height: 1.05;
          letter-spacing: -2.5px;

          color: #ffffff;
        }

        .contact-heading span {
          color: #6869ce;
          font-weight: 300;
        }

        .contact-intro {
          max-width: 510px;

          margin: 0;

          font-size: clamp(12px, 1vw, 14px);
          font-weight: 400;

          line-height: 1.45;

          color: rgba(255, 255, 255, 0.82);
        }

        .contact-divider {
          width: 100%;
          height: 1px;

          margin: 18px 0;

          background: rgba(255, 255, 255, 0.22);
        }

        .contact-detail h3 {
          margin: 0 0 7px;

          font-size: 16px;
          font-weight: 500;

          line-height: 1.2;

          color: #5366dc;
        }

        .contact-detail p {
          margin: 0;

          font-size: 13px;
          font-weight: 400;

          line-height: 1.35;

          color: rgba(255, 255, 255, 0.82);
        }

        /* ========================================
           FORM
        ======================================== */

        .contact-form {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 17px;
        }

        .form-row {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 10px;
        }

        .form-field {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 7px;
        }

        .form-field label {
          color: #ffffff;

          font-size: 13px;
          font-weight: 400;

          line-height: 1.2;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;

          box-sizing: border-box;

          border: 1px solid rgba(255, 255, 255, 0.15);
          outline: none;

          border-radius: 8px;

          background: rgba(190, 189, 255, 0.78);

          color: #20244d;

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-size: 13px;
          font-weight: 400;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .form-field input {
          height: 46px;
          padding: 0 20px;
        }

        .form-field textarea {
          min-height: 115px;

          padding: 15px 20px;

          resize: vertical;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: rgba(70, 70, 110, 0.58);
        }

        .form-field input:focus,
        .form-field textarea:focus {
          background: rgba(205, 204, 255, 0.92);

          border-color: rgba(255, 255, 255, 0.7);

          box-shadow: 0 0 0 3px rgba(101, 104, 201, 0.15);
        }

        /* ========================================
           SUBMIT
        ======================================== */

        .contact-submit {
          width: 100%;
          height: 46px;

          margin-top: 1px;

          border: none;
          border-radius: 999px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 14px;

          cursor: pointer;

          background: #303b99;
          color: #ffffff;

          font-family: var(--font-poppins), Poppins, sans-serif;

          font-size: 12px;
          font-weight: 500;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-submit:hover {
          background: #26328c;

          transform: translateY(-1px);

          box-shadow: 0 8px 20px rgba(25, 35, 120, 0.3);
        }

        .contact-submit:active {
          transform: translateY(0);
        }

        .submit-arrow {
          font-size: 20px;
          font-weight: 300;
          line-height: 1;
        }

        /* ========================================
           LARGE TABLET
        ======================================== */

        @media (max-width: 1000px) {
          .contact-container {
            grid-template-columns: 1fr;

            max-width: 760px;

            gap: 55px;
          }

          .contact-info {
            max-width: 650px;
          }

          .contact-form {
            max-width: 700px;
          }
        }

        /* ========================================
           MOBILE
        ======================================== */

        @media (max-width: 600px) {
          .contact-section {
            min-height: auto;

            background-position: center;
          }

          .contact-container {
            padding: 55px 20px 60px;

            gap: 40px;
          }

          .contact-heading {
            margin-top: 15px;

            font-size: clamp(40px, 12vw, 55px);

            letter-spacing: -1.8px;
          }

          .contact-intro {
            font-size: 12px;
          }

          .contact-detail h3 {
            font-size: 14px;
          }

          .contact-detail p {
            font-size: 11px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .form-field label {
            font-size: 12px;
          }

          .form-field input {
            height: 45px;
          }

          .form-field input,
          .form-field textarea {
            font-size: 12px;
          }

          .form-field textarea {
            min-height: 120px;
          }
        }
      `}</style>
    </section>
  );
}
