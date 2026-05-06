'use client';

import React from 'react';

interface AboutProps {
  about: string;
  highlights: string[];
  experience: number; // Not directly used in the template's 'Journey' section, but available
  currentRole: string; // Not directly used in the template's 'Journey' section, but available
}

const About: React.FC<AboutProps> = ({ about, highlights }) => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey & About Me</h2>
        <p className="hero-description !text-base md:!text-lg lg:!text-xl mb-4 md:mb-8 text-adizen-black text-justify">
            {about}
        </p>
        <h3 className="works-title !text-2xl lg:!text-3xl mt-4">Highlights</h3>
        <div className="journey-list" role="list">
          {highlights.map((highlight, index) => (
            <article key={index} className="journey-item" role="listitem">
              <div className="journey-details">
                <div className="journey-line relative">
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-adizen-black"></span>
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-adizen-primary-blue rounded-full border border-adizen-black -mt-1.5"></span>
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 bg-adizen-primary-blue rounded-full border border-adizen-black -mb-1.5"></span>
                </div>
                <p className="journey-description">
                  {highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;