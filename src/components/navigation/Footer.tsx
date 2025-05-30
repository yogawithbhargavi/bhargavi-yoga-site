import React from 'react';
import { Link } from 'react-router-dom';
import { Bot as Lotus, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Lotus
                size={24}
                className="text-yoga-heading mr-2"
                strokeWidth={1.5}
              />
              <span className="text-lg font-display font-semibold text-yoga-heading">
                Bhargavi  Yoga
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Finding peace through mindful movement and breath.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-yoga-heading font-display text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yoga-heading font-display text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Group Classes
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Private Sessions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Virtual Classes
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-yoga-heading transition-colors">
                  Wellness Consultations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yoga-heading font-display text-lg mb-4">
              Contact
            </h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">123 Serenity Lane</p>
              <p className="mb-2">Peaceful City, PC 12345</p>
              <p className="mb-2">
                <a href="tel:+1234567890" className="hover:text-yoga-heading transition-colors">
                  (123) 456-7890
                </a>
              </p>
              <p>
                <a href="mailto:info@Bhargavi yoga.com" className="hover:text-yoga-heading transition-colors">
                  info@Bhargavi yoga.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Bhargavi  Yoga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;