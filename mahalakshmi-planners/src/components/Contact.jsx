
import { useState } from 'react';
import { business, services } from '../content.js';
import {
  PhoneIcon,
  WhatsAppIcon,
  PinIcon,
} from './Icons.jsx';

export default function Contact({ copy }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const submit = (e) => {
    e.preventDefault();

    const next = {};

    if (!form.name.trim()) {
      next.name = copy.formErrorName;
    }

    const digits = form.phone.replace(/\D/g, '').slice(-10);

    if (!/^[6-9]\d{9}$/.test(digits)) {
      next.phone = copy.formErrorPhone;
    }

    setErrors(next);
    if (Object.keys(next).length) return;

    const selectedService = services.find(
      (s) => s.id === form.service
    );

    const lines = [
      `Hello ${business.name},`,
      `Name: ${form.name.trim()}`,
      `Phone: ${digits}`,
      selectedService
        ? `Service: ${selectedService.en.title}`
        : null,
      form.message.trim()
        ? `Details: ${form.message.trim()}`
        : null,
    ].filter(Boolean);

    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;

    window.open(url, '_blank', 'noopener');
  };

  return (
    <>
      <style>{`
        /* CONTACT SECTION */

        .contact-section {
          padding: 100px 0;
          background: #F9F8F5;
          color: #203F36;
        }

        .contact-container {
          width: min(1150px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* SECTION HEADING */

        .contact-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 55px;
        }

        .contact-eyebrow {
          display: inline-block;
          color: #C5A36B;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 14px;
        }

        .contact-heading h2 {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 750;
          line-height: 1.2;
          margin: 0 0 16px;
          color: #203F36;
        }

        .contact-heading p {
          color: #727C75;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        /* MAIN LAYOUT */

        .contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          background: #FFFFFF;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 15px 45px rgba(32, 63, 54, 0.10);
          border: 1px solid #C5A36B;
        }

        /* CONTACT INFORMATION PANEL */

        .contact-info-panel {
          background: #203F36;
          color: #FFFFFF;
          padding: 48px 38px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .contact-info-panel::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(197, 163, 107, 0.18);
          border-radius: 50%;
          top: -120px;
          right: -100px;
          pointer-events: none;
        }

        .contact-info-panel::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border: 1px solid rgba(197, 163, 107, 0.12);
          border-radius: 50%;
          bottom: -130px;
          left: -100px;
          pointer-events: none;
        }

        .contact-info-header,
        .contact-info-list,
        .contact-info-footer {
          position: relative;
          z-index: 1;
        }

        .contact-info-header > span {
          display: inline-block;
          color: #C5A36B;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .contact-info-header h3 {
          font-size: 27px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
          color: #FFFFFF;
        }

        /* CONTACT DETAILS */

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin: 55px 0;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 17px;
          text-decoration: none;
          color: inherit;
          min-width: 0;
        }

        .contact-icon {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 4px;
          background: rgba(197, 163, 107, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C5A36B;
          transition: 0.25s ease;
        }

        .contact-info-item:hover .contact-icon {
          background: #C5A36B;
          color: #203F36;
          transform: translateY(-3px);
        }

        .contact-info-content {
          display: flex;
          flex-direction: column;
          gap: 7px;
          min-width: 0;
        }

        .contact-info-content > span {
          font-size: 12px;
          color: #C9D2CC;
        }

        .contact-info-content strong {
          font-size: 15px;
          font-weight: 650;
          color: #FFFFFF;
          overflow-wrap: anywhere;
        }

        .contact-info-content address {
          font-size: 13px;
          line-height: 1.8;
          color: #D5DDD7;
          font-style: normal;
          margin: 0;
          overflow-wrap: anywhere;
        }

        /* PANEL FOOTER */

        .contact-info-footer {
          padding-top: 22px;
          border-top: 1px solid rgba(197, 163, 107, 0.3);
        }

        .contact-info-footer span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #C5A36B;
        }

        /* FORM PANEL */

        .contact-form-panel {
          padding: 48px;
          background: #FFFFFF;
        }

        .contact-form-header {
          margin-bottom: 35px;
        }

        .contact-form-header h3 {
          font-size: 27px;
          font-weight: 750;
          color: #203F36;
          margin: 0;
          line-height: 1.3;
        }

        /* FORM ROW */

        .contact-form-panel form {
          display: flex;
          flex-direction: column;
          gap: 23px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        /* FORM FIELDS */

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .contact-field > span {
          font-size: 13px;
          font-weight: 650;
          color: #29483F;
        }

        .contact-field input,
        .contact-field select,
        .contact-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #E5E0D5;
          background: #F9F8F5;
          color: #203F36;
          border-radius: 4px;
          padding: 14px 15px;
          font-family: inherit;
          font-size: 13px;
          outline: none;
          transition: 0.2s ease;
        }

        .contact-field input,
        .contact-field select {
          height: 49px;
        }

        .contact-field textarea {
          min-height: 115px;
          resize: vertical;
          line-height: 1.6;
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #A0A9A3;
        }

        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {
          border-color: #C5A36B;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(197, 163, 107, 0.15);
        }

        .contact-field input[aria-invalid="true"] {
          border-color: #DC5656;
        }

        .contact-error {
          color: #D43F3F;
          font-size: 11px;
        }

        /* SUBMIT BUTTON */

        .contact-submit {
          width: 100%;
          min-height: 52px;
          border: 1px solid #203F36;
          border-radius: 4px;
          background: #203F36;
          color: #FFFFFF;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .contact-submit:hover {
          background: #C5A36B;
          border-color: #C5A36B;
          color: #203F36;
          transform: translateY(-2px);
          box-shadow: 0 7px 18px rgba(197, 163, 107, 0.2);
        }

        .contact-submit svg {
          width: 19px;
          height: 19px;
        }

        .contact-form-note {
          color: #858B84;
          text-align: center;
          font-size: 11px;
          line-height: 1.6;
          margin: -10px 0 0;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .contact-section {
            padding: 75px 0;
          }

          .contact-layout {
            grid-template-columns: 0.9fr 1.1fr;
          }

          .contact-info-panel {
            padding: 35px 25px 25px;
          }

          .contact-form-panel {
            padding: 35px 28px;
          }

          .contact-info-list {
            gap: 27px;
            margin: 40px 0;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .contact-section {
            padding: 60px 0;
          }

          .contact-container {
            width: calc(100% - 30px);
          }

          .contact-heading {
            margin-bottom: 35px;
          }

          .contact-heading h2 {
            font-size: 30px;
          }

          .contact-heading p {
            font-size: 13px;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            border-radius: 4px;
          }

          .contact-info-panel {
            padding: 32px 25px 24px;
          }

          .contact-info-header h3 {
            font-size: 24px;
          }

          .contact-info-list {
            margin: 35px 0;
            gap: 25px;
          }

          .contact-form-panel {
            padding: 32px 23px;
          }

          .contact-form-header {
            margin-bottom: 27px;
          }

          .contact-form-header h3 {
            font-size: 24px;
          }

          .contact-form-panel form {
            gap: 20px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-field input,
          .contact-field select {
            height: 48px;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-container">

          {/* SECTION HEADING */}

          <div className="contact-heading">
            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h2>{copy.contactTitle}</h2>

            <p>{copy.contactText}</p>
          </div>

          {/* MAIN LAYOUT */}

          <div className="contact-layout">

            {/* CONTACT INFORMATION */}

            <div className="contact-info-panel">

              <div className="contact-info-header">
                <span>MAHALAKSHMI PLANNERS</span>
                <h3>Contact Information</h3>
              </div>

              <div className="contact-info-list">

                {/* PHONE */}

                <a
                  href={`tel:${business.phoneRaw}`}
                  className="contact-info-item"
                >
                  <div className="contact-icon">
                    <PhoneIcon width="22" height="22" />
                  </div>

                  <div className="contact-info-content">
                    <span>Call Us</span>
                    <strong>{business.phoneDisplay}</strong>
                  </div>
                </a>

                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item"
                >
                  <div className="contact-icon">
                    <WhatsAppIcon />
                  </div>

                  <div className="contact-info-content">
                    <span>WhatsApp</span>
                    <strong>{business.phoneDisplay}</strong>
                  </div>
                </a>

                {/* ADDRESS */}

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <PinIcon />
                  </div>

                  <div className="contact-info-content">
                    <span>Visit Us</span>

                    <strong>{business.name}</strong>

                    <address>
                      {business.addressLines.map((line) => (
                        <span key={line}>
                          {line}<br />
                        </span>
                      ))}
                    </address>
                  </div>
                </div>

              </div>

              <div className="contact-info-footer">
                <span>MAHALAKSHMI PLANNERS</span>
              </div>

            </div>

            {/* ENQUIRY FORM */}

            <div className="contact-form-panel">

              <div className="contact-form-header">
                <span className="contact-eyebrow">
                  PROJECT ENQUIRY
                </span>

                <h3>{copy.formTitle}</h3>
              </div>

              <form onSubmit={submit} noValidate>

                {/* NAME AND PHONE */}

                <div className="contact-form-row">

                  <label className="contact-field">
                    <span>{copy.formName}</span>

                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      autoComplete="name"
                      placeholder="Enter your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? 'err-name' : undefined
                      }
                    />

                    {errors.name && (
                      <small className="contact-error" id="err-name">
                        {errors.name}
                      </small>
                    )}
                  </label>

                  <label className="contact-field">
                    <span>{copy.formPhone}</span>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 XXXXX XXXXX"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? 'err-phone' : undefined
                      }
                    />

                    {errors.phone && (
                      <small className="contact-error" id="err-phone">
                        {errors.phone}
                      </small>
                    )}
                  </label>

                </div>

                {/* SERVICE */}

                <label className="contact-field">
                  <span>{copy.formService}</span>

                  <select
                    value={form.service}
                    onChange={update('service')}
                  >
                    <option value="">
                      {copy.formServicePlaceholder}
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.id}
                      >
                        {service.en.title}
                      </option>
                    ))}
                  </select>
                </label>

                {/* MESSAGE */}

                <label className="contact-field">
                  <span>{copy.formMessage}</span>

                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your plot or requirements..."
                  />
                </label>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <WhatsAppIcon />
                  {copy.formSubmit}
                </button>

                <p className="contact-form-note">
                  {copy.formNote}
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
