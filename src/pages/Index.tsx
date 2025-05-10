
import ToroidalAnimation from "@/components/ToroidalAnimation";
import RevealText from "@/components/RevealText";
import Button from "@/components/Button";
import SpeakerCard from "@/components/SpeakerCard";
import EventCard from "@/components/EventCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Placeholder speakers data
  const featuredSpeakers = [
    {
      name: "Dr. Maya Patel",
      title: "AI Ethics Researcher",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      talkTitle: "Ethical AI: Designing for Humanity"
    },
    {
      name: "Alex Chen",
      title: "Space Architect",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      talkTitle: "Terraforming: Building Homes Beyond Earth"
    },
    {
      name: "Sarah Johnson",
      title: "Quantum Computing Pioneer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      talkTitle: "The Quantum Leap in Computing"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ToroidalAnimation />
        
        <div className="container mx-auto px-4 z-10 mt-16 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText 
              text="TEDxAtria IT" 
              className="text-4xl md:text-6xl font-bold text-ted-red mb-4"
              delay={200}
            />
            <RevealText 
              text="BEYOND TOMORROW" 
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter"
              delay={500}
            />
            <RevealText 
              text="Exploring innovations and ideas that transcend our current understanding of technology, science, and humanity." 
              className="text-lg md:text-xl text-gray-300 mb-8"
              delay={800}
            />
            
            <div className="mt-10 space-x-4">
              <Button size="lg">
                Register Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight size={24} className="rotate-90 text-gray-500" />
        </div>
      </section>

      {/* About Event Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About the Event</h2>
            <p className="text-gray-300 text-lg mb-8 text-center">
              TEDxAtria IT presents "Beyond Tomorrow" - a gathering of visionaries, innovators, and thinkers who are shaping our future. Join us for a day of mind-expanding talks, meaningful connections, and ideas that transcend our current understanding.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">When</h3>
                <p className="text-gray-400">June 15, 2024<br />9:00 AM - 5:00 PM</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Where</h3>
                <p className="text-gray-400">Atria Institute of Technology<br />Bangalore, India</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Theme</h3>
                <p className="text-gray-400">Beyond Tomorrow:<br />Reimagining Our Future</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about">
                <Button>
                  Learn More About The Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured Speakers</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Meet the innovators and thought leaders who will share their revolutionary ideas at TEDxAtria IT
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <SpeakerCard 
                key={index}
                name={speaker.name}
                title={speaker.title}
                image={speaker.image}
                talkTitle={speaker.talkTitle}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/speak">
              <Button variant="outline">
                Apply to be a Speaker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Past Events</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Relive the moments from our previous TEDxAtria IT events
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EventCard 
              title="TEDxAtria IT 2024: Quantum Horizons"
              date="March 10, 2024"
              location="Atria Institute of Technology, Bangalore"
              image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              link="/events"
            />
            <EventCard 
              title="TEDxAtria IT 2023: Reimagine"
              date="April 5, 2023"
              location="Atria Institute of Technology, Bangalore"
              image="https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              link="/events"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events">
              <Button>View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-ted-red/10 border border-ted-red/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us at TEDxAtria IT</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Be part of a transformative experience where groundbreaking ideas are shared, connections are made, and inspiration is ignited.
            </p>
            <Button size="lg">Register Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
