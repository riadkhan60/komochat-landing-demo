import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X } from 'lucide-react';
import LogoLight from '../assests/LogoLight.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-blue-900 leading-none tracking-tight group-hover:text-blue-700 transition-colors">
                komoChat
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                  by
                </span>
                <img
                  src={LogoLight}
                  alt="Qbexel"
                  className="h-6 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['Home', 'Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-900 font-medium transition-all duration-200 relative py-2 px-4 rounded-full hover:bg-blue-50/50"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item === 'About' ? 'About Us' : item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/+8801982780739?text=Hi! I'm interested in komoChat by Qbexel. Can you tell me more about it?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-300 rounded-full px-6">
                Try komoChat
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-900 transition-all duration-200 p-2 rounded-lg hover:bg-gray-100 interactive focus-ring"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl rounded-b-2xl">
              {['Home', 'Features', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: 'smooth' });
                    toggleMenu();
                  }}
                >
                  {item === 'About' ? 'About Us' : item}
                </a>
              ))}
              <div className="px-3 py-3 mt-2">
                <a
                  href="https://wa.me/+8801982780739?text=Hi! I'm interested in komoChat by Qbexel. Can you tell me more about it?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 rounded-xl py-6">
                    Try komoChat
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
