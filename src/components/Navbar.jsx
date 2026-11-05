import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy when on homepage
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['hero', 'about', 'services', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', sectionId: 'hero', pagePath: '/' },
    { label: 'About', sectionId: 'about', pagePath: '/about' },
    { label: 'Services', sectionId: 'services', pagePath: '/services' },
    { label: 'Projects', sectionId: 'projects', pagePath: '/projects' },
    { label: 'Strategy', sectionId: null, pagePath: '/strategy' },
    { label: 'Contact', sectionId: 'contact', pagePath: '/contact' },
  ];

  const handleNavClick = (e, link) => {
    if (link.sectionId) {
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(link.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const isLinkActive = (link) => {
    if (location.pathname === '/') {
      if (!link.sectionId) return false;
      return activeSection === link.sectionId;
    }
    return location.pathname === link.pagePath;
  };

  const getLinkTo = (link) => {
    if (!link.sectionId) return link.pagePath;
    return location.pathname === '/' ? `#${link.sectionId}` : `/#${link.sectionId}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080e1a]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10'
          : 'bg-[#080e1a]/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center mr-auto"
          >
            <img src="/images/background%20removed_black%20background.png" alt="HumanLens Media Logo" className="w-auto" style={{ height: '60px' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={getLinkTo(link)}
                onClick={(e) => handleNavClick(e, link)}
                className={`font-medium transition-all duration-300 ${
                  isLinkActive(link)
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-current={isLinkActive(link) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#080e1a]/98 border-t border-white/10"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={getLinkTo(link)}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isLinkActive(link)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white hover:translate-x-2'
                  }`}
                  aria-current={isLinkActive(link) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
