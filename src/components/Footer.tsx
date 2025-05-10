
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col space-y-4">
            <img 
              src="/lovable-uploads/51337aa3-2728-4625-8e6c-849b452a10d1.png" 
              alt="TEDxAtria IT" 
              className="h-12"
            />
            <p className="text-gray-400 text-sm mt-4">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-ted-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-ted-red transition-colors">About</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-ted-red transition-colors">Past Events</Link></li>
              <li><Link to="/speak" className="text-gray-400 hover:text-ted-red transition-colors">Speak</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-ted-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-ted-red transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-ted-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-ted-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-ted-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-ted-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-ted-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <Link to="/contact" className="flex items-center text-gray-400 hover:text-ted-red transition-colors">
              <Mail size={16} className="mr-2" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TEDxAtria IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
