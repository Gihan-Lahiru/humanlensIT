import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-of-service', label: 'Terms of Service' },
  ];

  const services = [
    { path: '/services#web', label: 'Web Development' },
    { path: '/services#mobile', label: 'Mobile Apps' },
    { path: '/services#software', label: 'Software Solutions' },
    { path: '/services#consulting', label: 'IT Consulting' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#0d1526] border-t border-white/10 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/HUMANLENS%20IT%20SOLUTIONS%20(3).png" alt="HumanLens Media Logo" className="w-auto" style={{ height: '60px' }} />
            </div>
            <p className="text-slate-400 mb-2">
              A division of HumanLens  (Pvt) Ltd, delivering innovative IT solutions and cutting-edge technology services.
            </p>
            <p className="text-slate-400 mb-4 text-sm font-semibold text-slate-300">
              Company Reg No: P V 00368572
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">077 651 7595 / 071 442 8393</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@humanlensmedia.com</span>
              </div>
              <a href="https://maps.app.goo.gl/iqRbmY7BiWYnPZuHA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">3637+W8P, Eliot Rd, Galle 80000</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 hover:text-white text-slate-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Subscribe to Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/5 text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} HumanLens  (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
