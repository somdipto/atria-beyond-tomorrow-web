import { Link } from 'react-router-dom';
import {MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-4 ">
            <img
              src="/lovable-uploads/51337aa3-2728-4625-8e6c-849b452a10d1.png"
              alt="TEDxAtria IT"
              className="h-9 scale-150 object-contain"
              
            />
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
              {/* Instagram */}
              <a
                href="https://www.instagram.com/tedx_atriait?igsh=YmJvOWR3Z3l1bGM2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ted-red transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 0 1 4.25 4.25v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5a4.25 4.25 0 0 1 4.25-4.25zm8.375 2a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1LWVNiFSmV/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ted-red transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98h-2.5v-2.89h2.5v-2.2c0-2.48 1.49-3.84 3.77-3.84 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.82h2.77l-.44 2.89h-2.33v6.98A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/tedxatriait/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ted-red transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.48 2.48 0 0 0 2.5 6v12a2.5 2.5 0 0 0 2.48 2.5h14.04A2.5 2.5 0 0 0 21.5 18V6a2.48 2.48 0 0 0-2.48-2.5H4.98zM8 17.25H5.5V10h2.5v7.25zM6.75 8.75a1.44 1.44 0 1 1 0-2.875 1.44 1.44 0 0 1 0 2.875zM18 17.25h-2.5v-3.75c0-.91-.68-1.25-1.03-1.25-.35 0-1.02.2-1.02 1.25v3.75H11V10h2.4v1.01h.04a2.56 2.56 0 0 1 2.3-1.26c1.69 0 3 1.1 3 3.48v4.02z" />
                </svg>
              </a>

              {/* Reddit */}
              <a
                href="https://www.reddit.com/r/TEDxAtriaIT/s/JFsFYyXg6b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ted-red transition-colors"
                aria-label="Reddit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 0 0 5.264 8.805c.385.07.527-.167.527-.37 0-.183-.006-.668-.01-1.31-2.142.465-2.594-1.032-2.594-1.032-.35-.89-.856-1.127-.856-1.127-.7-.478.053-.468.053-.468.775.054 1.182.796 1.182.796.688 1.178 1.805.838 2.244.641.07-.498.27-.839.49-1.033-1.71-.195-3.51-.856-3.51-3.81 0-.84.3-1.527.793-2.065-.08-.195-.344-.98.075-2.043 0 0 .644-.206 2.1.788a7.32 7.32 0 0 1 1.912-.258 7.29 7.29 0 0 1 1.913.258c1.455-.994 2.098-.788 2.098-.788.42 1.063.157 1.848.078 2.043.495.538.793 1.225.793 2.065 0 2.962-1.803 3.61-3.52 3.798.278.24.526.714.526 1.438 0 1.037-.01 1.872-.01 2.127 0 .204.14.444.53.37A10.003 10.003 0 0 0 22 12z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@tedxatriait?si=2pyG96M4g_zDDf1y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ted-red transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6zm10-3c0-1.08-.1-2.06-.3-2.94-.2-.97-.93-1.7-1.9-1.9C16.06 7 15.08 7 14 7H10c-1.08 0-2.06.1-2.94.3-.97.2-1.7.93-1.9 1.9C5 11.94 5 12.92 5 14s0 2.06.3 2.94c.2.97.93 1.7 1.9 1.9.88.2 1.86.3 2.94.3s2.06-.1 2.94-.3c.97-.2 1.7-.93 1.9-1.9.2-.88.3-1.86.3-2.94z" />
                </svg>
              </a>
            </div>
            <div className="mt-4 text-gray-400">
              <a
                href="https://maps.app.goo.gl/1sYheum9o45tCqNRA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-ted-red transition-colors"
              >
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">ATRIA INSTITUTE OF TECHNOLOGY, Anandnagar, Hebbal, Bengaluru, Karnataka-560024</span>
              </a>
            </div>

          </div>
        </div>

        <p className="text-gray-400 text-sm text-center mb-2">
          This independent TEDx event is operated under license from TED.
        </p>

        <div className="border-t border-gray-900 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {currentYear} TEDXAtria IT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
