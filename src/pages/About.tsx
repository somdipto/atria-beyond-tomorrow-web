
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Organizer & Curator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Dev Krishnan",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Ananya Singh",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ted-red/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About TEDxAtria IT</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              TEDxAtria IT is an independently organized TED event hosted at Atria Institute of Technology, bringing together the brightest minds to share ideas that matter in technology, science, business, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* About TEDx Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What is TEDx?</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p>
                In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxAtria IT, where x = independently organized TED event.
              </p>
              <p>
                At our TEDxAtria IT event, live speakers combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-ted-red pl-6 py-2">
              <p className="italic text-gray-300">
                "TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Theme Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto">
            <div className="w-full md:w-1/2">
              <img 
                src="/lovable-uploads/18129276-ace0-4caa-a199-9b541aac0ead.png" 
                alt="Beyond Tomorrow Theme" 
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Theme: Beyond Tomorrow</h2>
              <p className="text-gray-300 mb-4">
                "Beyond Tomorrow" is more than just a theme; it's an exploration of what lies ahead for humanity. It challenges us to look past the immediate future and envision transformative possibilities.
              </p>
              <p className="text-gray-300">
                Through this theme, we aim to showcase ideas that push boundaries, challenge conventional thinking, and inspire action toward creating a better world for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Meet Our Team</h2>
            <p className="text-gray-400 mb-12 text-center">
              The passionate individuals bringing TEDxAtria IT to life
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-2 border-ted-red">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-12 text-center">
              Everything you need to know about TEDxAtria IT
            </p>
            
            <div className="space-y-6">
              <div className="border border-gray-800 rounded-lg p-6 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2">What is TEDxAtria IT?</h3>
                <p className="text-gray-300">
                  TEDxAtria IT is an independently organized TED event that takes place at Atria Institute of Technology in Bangalore, India. It features a combination of live speakers and recorded TED Talks that spark deep discussion and connection.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2">How can I attend TEDxAtria IT?</h3>
                <p className="text-gray-300">
                  You can register for the event through our website. Tickets are limited and provided on a first-come, first-served basis. Student discounts are available with valid ID.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Can I be a speaker at TEDxAtria IT?</h3>
                <p className="text-gray-300">
                  Yes, we welcome speaker applications! Visit our "Speak at TEDxAtria IT" page to learn about our selection process and submit your application.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 hover:border-ted-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2">How can my organization partner with TEDxAtria IT?</h3>
                <p className="text-gray-300">
                  We offer various partnership opportunities for organizations that align with our mission. Please contact us at partnerships@tedxatriait.org to discuss potential collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the TEDxAtria IT Community</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Become part of our journey to spread ideas and inspiration
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Register for Event</Button>
              <Link to="/speak">
                <Button variant="outline" size="lg">Apply as Speaker</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
