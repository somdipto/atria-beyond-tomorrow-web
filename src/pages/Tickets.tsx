
import { Button } from "@/components/ui/button";

const Tickets = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Get your TEDxAtria IT Tickets</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Join us for an unforgettable day of innovation, inspiration, and connection at TEDxAtria IT's "Unveiled: The Infinite Realms"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary bg-opacity-30 p-8 rounded-lg border border-gray-800 hover:border-ted-red/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Student</h3>
              <p className="text-3xl font-bold text-ted-red mb-6">₹600</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Complementary goodies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Lunch and Snack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Access to exclusive networking zone</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Exclusive experience zone</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="w-full">Book Student Pass</Button>
              </div>
            </div>
            
            <div className="bg-secondary bg-opacity-30 p-8 rounded-lg border border-gray-800 hover:border-ted-red/50 transition-all">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-3xl font-bold text-ted-red mb-6">₹1,500</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Experience zone</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Full brand guidebook</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Access to exclusive networking zone</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-ted-red">•</span>
                  <span>Exclusive experience zone</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="w-full">Book Professional Pass</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Event Details</h3>
            <p className="text-gray-300 mb-4">
              <span className="font-medium">Date:</span> Saturday, November 9th, 2024
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-medium">Time:</span> 9:00 AM - 5:00 PM
            </p>
            <p className="text-gray-300 mb-8">
              <span className="font-medium">Venue:</span> Seminar Hall 1, Atria Institute of Technology, 
              Anandnagar, Hebbal, Bengaluru, Karnataka-560024
            </p>
            
            <p className="text-gray-400 text-sm">
              For group bookings or any questions, please contact us at <a href="mailto:info@tedxatriait.com" className="text-ted-red hover:underline">info@tedxatriait.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
