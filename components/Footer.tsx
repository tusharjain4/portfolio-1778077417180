'use client';

import React from 'react';

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

interface FooterProps {
  contact: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  return (
    <footer className="footer-section">
      <div className="content-wrapper">
        <div className="footer-content">
          <div className="footer-top">
            <p className="footer-copyright">© {new Date().getFullYear()} All rights reserved</p>
            <a
              href={`mailto:${contact.email}`}
              className="footer-email-button"
              aria-label={`Send an email to ${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
          <img src="https://via.placeholder.com/1344x100?text=Decorative+Footer+Pattern" alt="Decorative pattern" className="footer-pattern" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;