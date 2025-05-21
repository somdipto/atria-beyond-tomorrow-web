
import { useState } from 'react';
import EventCard from "@/components/EventCard";
import SpeakerCard from "@/components/SpeakerCard";
import Button from "@/components/Button";
import { ArrowRight, Calendar, MapPin, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState('2024');
  
  const eventYears = ['2024', '2023', '2022'];
  
  const events2024 = {
    title: "TEDxAtria IT 2024: Quantum Horizons",
    date: "March 10, 2024",
    location: "Atria Institute of Technology, Bangalore",
    description: "Our most recent event explored the cutting-edge advancements in quantum computing, artificial intelligence, and their implications for society. Speakers from diverse backgrounds shared groundbreaking ideas that challenge our understanding of technology and its future.",
    mainImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    speakers: [
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
      {
        name: "Michael Torres",
        title: "Blockchain Innovator",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Decentralized Futures"
      }
    ]
  };
  
  const events2023 = {
    title: "TEDxAtria IT 2023: Reimagine",
    date: "April 5, 2023",
    location: "Atria Institute of Technology, Bangalore",
    description: "The 'Reimagine' event focused on reshaping our perspectives on global challenges, technology integration, and sustainable futures. Our speakers presented innovative solutions and thought-provoking ideas about how we can reimagine our world.",
    mainImage: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    speakers: [
      {
        name: "Priya Mehta",
        title: "Sustainable Design Expert",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Building a Zero-Waste Future"
      },
      {
        name: "David Kim",
        title: "Digital Health Innovator",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Reimagining Healthcare Delivery"
      },
      {
        name: "Aisha Patel",
        title: "EdTech Entrepreneur",
        image: "https://images.unsplash.com/photo-1619343082084-12b37a6e0c63?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Learning in the Digital Age"
      }
    ]
  };
  
  const events2022 = {
    title: "TEDxAtria IT 2022: Intersections",
    date: "May 20, 2022",
    location: "Virtual Event",
    description: "Our first virtual TEDxAtria IT explored the theme of 'Intersections' - examining the points where different disciplines, ideas, and cultures meet to create innovation. The event brought together speakers from diverse backgrounds who shared how interdisciplinary approaches can solve complex problems.",
    mainImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    speakers: [
      {
        name: "Dr. James Wilson",
        title: "Neuroscientist & Artist",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Art and Science: A Neural Connection"
      },
      {
        name: "Sophia Nguyen",
        title: "Climate Tech Researcher",
        image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Indigenous Knowledge in Climate Solutions"
      },
      {
        name: "Raj Kapoor",
        title: "Urban Planner",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        talkTitle: "Technology at the Crossroads of Urban Design"
      }
    ]
  };

  const getActiveEventData = () => {
    switch(activeEvent) {
      case '2024':
        return events2024;
      case '2023':
        return events2023;
      case '2022':
        return events2022;
      default:
        return events2024;
    }
  };
  
  const currentEvent = getActiveEventData();

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ted-red/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Past Events</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore the history of TEDxAtria IT through our past events, where visionary speakers shared ideas that continue to shape our future.
            </p>
          </div>
        </div>
      </section>

      {/* Event Selector */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-2 p-1 bg-gray-800 rounded-full">
              {eventYears.map((year) => (
                <button
                  key={year}
                  className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                    activeEvent === year
                      ? "bg-ted-red text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveEvent(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Details */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Event Image */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={currentEvent.mainImage} 
                    alt={currentEvent.title}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {currentEvent.gallery.map((img, index) => (
                    <div key={index} className="rounded-md overflow-hidden">
                      <img 
                        src={img} 
                        alt={`Event gallery ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Event Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{currentEvent.title}</h2>
                
                <div className="flex items-center text-gray-300 mb-4">
                  <Calendar size={18} className="mr-2 text-ted-red" />
                  <span>{currentEvent.date}</span>
                </div>
                
                <div className="flex items-center text-gray-300 mb-6">
                  <MapPin size={18} className="mr-2 text-ted-red" />
                  <span>{currentEvent.location}</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {currentEvent.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Play size={16} className="mr-2" />
                    Watch Talks
                  </Button>
                  <Button variant="outline">
                    View Photos
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Speakers */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8">Featured Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentEvent.speakers.map((speaker, index) => (
                  <SpeakerCard
                    key={index}
                    name={speaker.name}
                    title={speaker.title}
                    image={speaker.image}
                    talkTitle={speaker.talkTitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Events Preview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">All TEDxAtria IT Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EventCard
                title={events2024.title}
                date={events2024.date}
                location={events2024.location}
                image={events2024.mainImage}
                onClick={() => setActiveEvent('2024')}
              />
              <EventCard
                title={events2023.title}
                date={events2023.date}
                location={events2023.location}
                image={events2023.mainImage}
                onClick={() => setActiveEvent('2023')}
              />
              <EventCard
                title={events2022.title}
                date={events2022.date}
                location={events2022.location}
                image={events2022.mainImage}
                onClick={() => setActiveEvent('2022')}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-ted-red/10 border border-ted-red/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Upcoming Event</h2>
            <p className="text-lg text-gray-200 mb-8">
              Don't miss the next TEDxAtria IT event. Register now to secure your spot!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Register Now</Button>
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

export default Events;
