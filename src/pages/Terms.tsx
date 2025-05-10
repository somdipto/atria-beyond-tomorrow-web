
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: May 10, 2025</p>
            
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the TEDxAtria IT website, attending our events, or using any services we offer, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or attend our events.
            </p>
            
            <h2>Intellectual Property</h2>
            <p>
              The TEDxAtria IT name, logo, website content, and all materials distributed at our events are protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works without our express written permission.
            </p>
            
            <h2>TEDx License Terms</h2>
            <p>
              TEDxAtria IT is an independently organized TEDx event, operating under license from TED. All TED and TEDx rules and regulations apply to our event and materials.
            </p>
            
            <h2>Event Attendance</h2>
            <p>
              By registering for and attending TEDxAtria IT events, you agree to:
            </p>
            <ul>
              <li>Comply with all event rules and guidelines</li>
              <li>Behave in a respectful and appropriate manner</li>
              <li>Grant permission for event photography and recording</li>
              <li>Accept that event schedules and speakers may change without notice</li>
              <li>Understand that tickets are non-refundable unless otherwise stated</li>
            </ul>
            
            <h2>Photography and Recording</h2>
            <p>
              By attending our events, you consent to being photographed, filmed, and recorded. These materials may be used for promotional purposes, documentation, and sharing on our website and social media channels.
            </p>
            
            <h2>Content Usage</h2>
            <p>
              Any content you submit to us, including speaker applications, comments, or feedback, may be used by TEDxAtria IT for promotional and operational purposes.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              TEDxAtria IT and its organizers are not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of our website or attendance at our events.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or attendance at our events constitutes acceptance of the updated terms.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms & Conditions, please contact us at:
            </p>
            <p>
              TEDxAtria IT<br />
              Atria Institute of Technology<br />
              Bangalore, India<br />
              Email: legal@tedxatriait.org
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

export default Terms;
