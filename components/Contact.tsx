'use client';

import React from 'react';

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

interface ContactProps {
  contact: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="hero-description !text-base md:!text-lg lg:!text-xl mb-4 text-adizen-black">
          Feel free to reach out for collaborations, job opportunities, or just to say hello!
        </p>
        <div className="contact-links">
          <a
            href={`mailto:${contact.email}`}
            className="footer-email-button"
            aria-label={`Send an email to ${contact.email}`}
          >
            {contact.email}
          </a>
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-button"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-button"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;