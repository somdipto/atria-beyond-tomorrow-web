import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-6 overflow-visible">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-5xl font-extrabold mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600 animate-gradient-x mt-8"
          style={{ overflow: 'visible' }}
        >
          Terms & Conditions
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="italic text-gray-400">Last updated: May 10, 2025</p>

          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the TEDxAtria IT website, attending our events, or using any services we offer, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or attend our events.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The TEDxAtria IT name, logo, website content, and all materials distributed at our events are protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2>TEDx License Terms</h2>
            <p>
              TEDxAtria IT is an independently organized TEDx event, operating under license from TED. All TED and TEDx rules and regulations apply to our event and materials.
            </p>
          </section>

          <section>
            <h2>Event Attendance</h2>
            <p>By registering for and attending TEDxAtria IT events, you agree to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Comply with all event rules and guidelines</li>
              <li>Behave in a respectful and appropriate manner</li>
              <li>Grant permission for event photography and recording</li>
              <li>Accept that event schedules and speakers may change without notice</li>
              <li>Understand that tickets are non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section>
            <h2>Photography and Recording</h2>
            <p>
              By attending our events, you consent to being photographed, filmed, and recorded. These materials may be used for promotional purposes, documentation, and sharing on our website and social media channels.
            </p>
          </section>

          <section>
            <h2>Content Usage</h2>
            <p>
              Any content you submit to us, including speaker applications, comments, or feedback, may be used by TEDxAtria IT for promotional and operational purposes.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              TEDxAtria IT and its organizers are not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of our website or attendance at our events.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or attendance at our events constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about these Terms & Conditions, please contact us at:</p>
            <address className="not-italic space-y-1">
              <p>TEDxAtria IT</p>
              <p>Atria Institute of Technology</p>
              <p>Bangalore, India</p>
              <p>
                Email:{' '}
                <a href="mailto:legal@tedxatriait.org" className="text-red-500 hover:underline">
                  legal@tedxatriait.org
                </a>
              </p>
            </address>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Terms;
