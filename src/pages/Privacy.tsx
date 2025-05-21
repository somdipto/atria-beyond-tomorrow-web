
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: May 10, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              TEDxAtria IT ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or attend our events.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when registering for events, applying as a speaker, or contacting us.</li>
              <li><strong>Registration Information:</strong> Details provided when registering for TEDxAtria IT events.</li>
              <li><strong>Payment Information:</strong> If applicable, payment details for ticket purchases (processed through secure third-party payment processors).</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and actions taken.</li>
              <li><strong>Marketing Preferences:</strong> Your preferences for receiving communications from us.</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, operating, and maintaining our website and events</li>
              <li>Processing and managing event registrations</li>
              <li>Communicating with you about events, updates, and opportunities</li>
              <li>Analyzing website usage to improve user experience</li>
              <li>Sending promotional materials and newsletters (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2>Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain circumstances, including:
            </p>
            <ul>
              <li>Service providers who assist in operating our website and events</li>
              <li>Event sponsors and partners (with your consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              TEDxAtria IT<br />
              Atria Institute of Technology<br />
              Bangalore, India<br />
              Email: privacy@tedxatriait.org
            </p>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="text-ted-red hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
