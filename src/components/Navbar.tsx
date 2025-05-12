
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Speakers', path: '/speak' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed w-full z-50 transition-all duration-300 px-6 md:px-12 py-5",
          isScrolled ? "bg-black bg-opacity-90 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/51337aa3-2728-4625-8e6c-849b452a10d1.png" 
              alt="TEDxAtria IT" 
              className="h-7 md:h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-normal tracking-wide transition-colors hover:text-ted-red",
                  location.pathname === link.path ? "text-ted-red font-medium" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/tickets">
              <Button variant="outline" size="sm" className="border-ted-red rounded-full px-6">
                Book now
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-20">
          <div className="flex flex-col items-center space-y-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-xl tracking-wide transition-colors",
                  location.pathname === link.path ? "text-ted-red font-medium" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/tickets" onClick={() => setMenuOpen(false)}>
              <Button variant="primary" size="md" className="mt-4">
                Book now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
