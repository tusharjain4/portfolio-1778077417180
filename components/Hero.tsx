'use client';

import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline }) => {
  const [firstName, ...lastNameParts] = name.split(' ');
  const displayFirstName = firstName;
  const displayRolePart1 = role.split(' ')[0];
  const displayRolePart2 = role.split(' ').slice(1).join(' ');

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          <img src="https://via.placeholder.com/522x600?text=Pooja+Sonar+Profile" alt="Developer portfolio showcase" className="hero-image" />
        </div>
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-bg-top"></div>
            <div className="title-text-container">
              <p className="title-product">{displayRolePart1}</p>
              <div className="title-designer-section">
                <p className="title-designer">{displayRolePart2}</p>
                <p className="title-name">{displayFirstName}</p>
              </div>
            </div>
            <div className="title-bg-bottom"></div>
          </div>
          <p className="hero-description">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;