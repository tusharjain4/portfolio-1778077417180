'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Load portfolio data
import portfolioData from '@/data/portfolio.json';

// Define types for portfolio data
interface SkillCategory {
  name: string;
  skills: string[];
}

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface Portfolio {
  name: string;
  role: string;
  tagline: string;
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
  skills: SkillCategory[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export default function Home() {
  const portfolio: Portfolio = portfolioData as Portfolio;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Navbar
        name={portfolio.name}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero
            name={portfolio.name}
            role={portfolio.role}
            tagline={portfolio.tagline}
          />
          <Projects projects={portfolio.projects} />
          <Skills skills={portfolio.skills} />
          <About
            about={portfolio.about}
            highlights={portfolio.highlights}
            experience={portfolio.experience}
            currentRole={portfolio.currentRole}
          />
          <Contact contact={portfolio.contact} />
        </div>
      </main>
      <Footer contact={portfolio.contact} />
    </>
  );
}