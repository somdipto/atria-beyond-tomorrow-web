
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed w-full z-50 transition-all duration-300 px-6 md:px-12 py-5",
          isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/51337aa3-2728-4625-8e6c-849b452a10d1.png" 
              alt="TEDxAtria IT" 
              className="h-9 scale-150 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-normal tracking-wide transition-colors hover:text-ted-red relative group",
                  location.pathname === link.path ? "text-ted-red font-medium" : "text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-ted-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link to="/tickets">
              <Button variant="outline" size="sm" className="rounded-full px-6">
                Book now
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "w-5 h-0.5 bg-white block transition-all duration-300",
                menuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              )}></span>
              <span className={cn(
                "w-5 h-0.5 bg-white block transition-all duration-300",
                menuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "w-5 h-0.5 bg-white block transition-all duration-300",
                menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              )}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-20"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex flex-col items-center space-y-6 p-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-xl tracking-wide transition-colors",
                      location.pathname === link.path ? "text-ted-red font-medium" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/tickets" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" size="md" className="mt-4">
                    Book now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
