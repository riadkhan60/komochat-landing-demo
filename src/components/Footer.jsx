import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import LogoDark from '../assests/komochatDark.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-3 sm:mb-4">
              <img
                src={LogoDark}
                alt="komoChat by Qbexel"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Revolutionizing social media business automation with humanized AI
              that perfectly balances human creativity and artificial
              intelligence efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-start text-gray-300 text-sm sm:text-base">
                <Mail className="w-4 h-4 mr-2 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="mailto:qbexel@gmail.com"
                    className="hover:text-brand-400 transition-colors"
                  >
                    qbexel@gmail.com
                  </a>
                  <a
                    href="mailto:admin@qbexel.com"
                    className="hover:text-brand-400 transition-colors"
                  >
                    admin@qbexel.com
                  </a>
                </div>
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <Phone className="w-4 h-4 mr-2 text-brand-400 flex-shrink-0" />
                <a
                  href="tel:+8801982780739"
                  className="hover:text-brand-400 transition-colors"
                >
                  +880 1982-780739
                </a>
              </div>
              <div className="flex items-start text-gray-300 text-sm sm:text-base">
                <MapPin className="w-4 h-4 mr-2 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Sontosh 1902</span>
                  <span>Tangail Sadar, Tangail</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base focus-ring"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('home')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base focus-ring"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('features')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base focus-ring"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base focus-ring"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-3 sm:space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com/qbexel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-200 touch-manipulation interactive focus-ring"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/104429970"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 touch-manipulation interactive focus-ring"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 komoChat by Qbexel. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
