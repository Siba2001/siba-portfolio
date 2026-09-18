import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__container" aria-label="Main navigation">
        {/* Brand / Logo */}
        <a href="#home" className="navbar__brand" onClick={() => handleLinkClick('#home')}>
          <span className="navbar__brand-first">Siba</span>
          <span className="navbar__brand-last">Sethy</span>
        </a>

        {/* Desktop + Mobile Navigation Links */}
        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`} role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
                <span className="navbar__link-underline" aria-hidden="true"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          type="button"
        >
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
        </button>
      </nav>

      {/* Mobile overlay backdrop */}
      {isMenuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Navbar;
