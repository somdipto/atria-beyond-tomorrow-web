
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Partner with TEDxAtria IT</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Join us in spreading ideas that matter and make a lasting impact on our community
          </p>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Partner With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-3 text-ted-red">Community Investment</h3>
                <p>You'll be investing in the curation of a community that believes in the power of ideas worth spreading.</p>
              </div>
              
              <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-3 text-ted-red">Brand Showcase</h3>
                <p>Exclusive presentation of your brand in one of the world's most popular forums.</p>
              </div>
              
              <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-3 text-ted-red">Fresh Insights</h3>
                <p>Get fresh ideas and insights from students for your marketing and CSR strategies from live interactions.</p>
              </div>
              
              <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-3 text-ted-red">Campus Visibility</h3>
                <p>Brand visibility throughout the campus with 3000 students, 200 faculty members through pre-event publicity.</p>
              </div>
              
              <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800 md:col-span-2">
                <h3 className="text-xl font-bold mb-3 text-ted-red">Networking Opportunities</h3>
                <p>A very good opportunity to network with other leading brands and influential speakers.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Partnership Opportunities</h2>
            <p className="text-gray-300 mb-8">
              We offer various partnership packages designed to meet your specific goals. Our team would be happy to discuss 
              custom opportunities that align with your marketing objectives.
            </p>
            
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
              <Button size="lg">Download Partnership Deck</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
