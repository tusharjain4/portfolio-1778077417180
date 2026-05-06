'use client';

import React, { useState } from 'react';

interface NavbarProps {
  name: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ name, isMobileMenuOpen, toggleMobileMenu }) => {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">{initials}</h1>
          <div className="logo-divider"></div>
          <a href="#" aria-label="Home">
            <img src="https://api.iconify.design/ph:cube.svg" alt="Logo icon" className="logo-icon" />
          </a>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={toggleMobileMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white border-b border-black py-4 z-10 lg:static lg:flex-row lg:w-auto lg:bg-transparent lg:border-none' : ''}`} role="menubar">
          <button role="menuitem" onClick={() => { /* scroll to home */ }}>Home</button>
          <button role="menuitem" onClick={() => { /* scroll to work */ }}>Work</button>
          <button role="menuitem" onClick={() => { /* scroll to about */ }}>About</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;