
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-900 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo Section */}
          <div className="flex flex-col space-y-4">
            <img 
              src="/lovable-uploads/51337aa3-2728-4625-8e6c-849b452a10d1.png" 
              alt="TEDxAtria IT" 
              className="h-10"
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
              <li><Link to="/tickets" className="text-gray-400 hover:text-ted-red transition-colors">Tickets</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-ted-red transition-colors">Partners</Link></li>
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
            <div className="flex items-start mt-4 text-gray-400">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm">ATRIA INSTITUTE OF TECHNOLOGY, Anandnagar, Hebbal, Bengaluru, Karnataka-560024</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {currentYear} TEDXAtria IT All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
