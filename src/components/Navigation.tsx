import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="flex items-center">
            <div className="nav-logo water-text">
              West Cook Water Polo
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#programs" className="nav-link">
              Programs
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a href="#calendar" className="nav-link">
              Team Calendar
            </a>
            <button className="btn btn-primary">
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#374151',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{ display: 'block' }}>
            <div style={{ padding: '0.5rem 0', paddingBottom: '0.75rem' }}>
              <a href="#home" style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                borderRadius: '0.375rem'
              }}>
                Home
              </a>
              <a href="#about" style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                borderRadius: '0.375rem'
              }}>
                About
              </a>
              <a href="#programs" style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                borderRadius: '0.375rem'
              }}>
                Programs
              </a>
              <a href="#contact" style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                borderRadius: '0.375rem'
              }}>
                Contact
              </a>
              <button className="btn btn-primary" style={{ width: '100%', textAlign: 'left' }}>
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
