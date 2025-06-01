import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-6 overflow-visible">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600 animate-gradient-x mt-8"
          style={{ overflow: 'visible' }}
        >
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="italic text-gray-400">Last updated: May 10, 2025</p>

          <section>
            <h2>Introduction</h2>
            <p>
              TEDxAtria IT ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or attend our events.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when registering for events, applying as a speaker, or contacting us.</li>
              <li><strong>Registration Information:</strong> Details provided when registering for TEDxAtria IT events.</li>
              <li><strong>Payment Information:</strong> If applicable, payment details for ticket purchases (processed through secure third-party payment processors).</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and actions taken.</li>
              <li><strong>Marketing Preferences:</strong> Your preferences for receiving communications from us.</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Providing, operating, and maintaining our website and events</li>
              <li>Processing and managing event registrations</li>
              <li>Communicating with you about events, updates, and opportunities</li>
              <li>Analyzing website usage to improve user experience</li>
              <li>Sending promotional materials and newsletters (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Sharing Your Information</h2>
            <p>We may share your information with third parties in certain circumstances, including:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Service providers who assist in operating our website and events</li>
              <li>Event sponsors and partners (with your consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <address className="not-italic space-y-1">
              <p>TEDxAtria IT</p>
              <p>Atria Institute of Technology</p>
              <p>Bangalore, India</p>
              <p>
                Email:{' '}
                <a href="mailto:privacy@tedxatriait.org" className="text-red-500 hover:underline">
                  privacy@tedxatriait.org
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

export default Privacy;
