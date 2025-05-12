
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ToroidalAnimation from "@/components/ToroidalAnimation";
import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import SpeakerCard from "@/components/SpeakerCard";

const Index = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set event date (November 9, 2024)
  const eventDate = new Date('November 9, 2024 09:00:00').getTime();

  // Update countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Speakers data
  const speakers = [
    {
      name: "Dr. T N Sreenivasa",
      title: "Registrar, VTU",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
    },
    {
      name: "Mr. Kathiravan Pethi",
      title: "Guinness World Record Holder, Storyteller & Public Speaking Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
    },
    {
      name: "Mr. M N Anucheth",
      title: "Jt. Commissioner of Police, Bangalore Traffic Police",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
    },
    {
      name: "Dr. Suchitra Kaul Misra",
      title: "Corporate Wellness Specialist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
    },
    {
      name: "Ms. Sapthami Gowda",
      title: "Actress",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
    },
    {
      name: "Mr. Kaushik Raju",
      title: "Technical Director, Atria Group",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2569&q=80"
    },
    {
      name: "Lt. Col. Sunil Kumar M V",
      title: "Indian Army Veteran",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
    },
    {
      name: "Dr B B Raghunath",
      title: "The Baby shower doctor, Humanist, Kargil Veteran",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <ToroidalAnimation />
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
              Unveiled The <span className="italic font-normal">Infinite</span><br /> 
              <span className="italic font-normal">Realms</span> within you!
            </h1>
            
            <p className="text-xl text-gray-400 mt-4 mb-8">
              Presented by TEDxAtria IT
            </p>
            
            <Link to="/tickets" className="inline-block">
              <Button size="lg" className="rounded-full px-10 py-4">
                Book now!
              </Button>
            </Link>
            
            <div className="mt-20 flex flex-col md:flex-row gap-2 md:gap-6 md:items-center">
              <div className="flex items-center">
                <MapPin className="text-ted-red mr-2" size={24} />
                <div>
                  <p className="text-sm">Venue: Seminar hall 1</p>
                  <p className="font-bold">ATRIA INSTITUTE OF TECHNOLOGY</p>
                  <p className="text-sm text-gray-400">Anandnagar, Hebbal, Bengaluru, Karnataka 560024</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center md:ml-8">
                <Calendar className="text-ted-red mr-2" size={24} />
                <div>
                  <p className="font-medium">Saturday, 9th Nov 2024 from 9:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 max-w-2xl">
              <p className="text-gray-300 text-sm leading-relaxed">
                TEDxAtria IT is an independently organized TEDx event hosted at Atria Institute of Technology, Bengaluru.
                Our mission is to inspire and connect individuals through powerful ideas. Join us for a day of 
                thought-provoking talks, engaging discussions, and unforgettable experiences. Discover the latest 
                innovations, explore diverse perspectives, and ignite your passion for learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">COUNTDOWN!</h2>
          
          <div className="flex justify-center space-x-4 md:space-x-8 text-center">
            <div className="w-16 md:w-24">
              <div className="text-2xl md:text-4xl font-bold text-ted-red">{timeLeft.days}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Days</div>
            </div>
            <div className="w-16 md:w-24">
              <div className="text-2xl md:text-4xl font-bold text-ted-red">{timeLeft.hours}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Hours</div>
            </div>
            <div className="w-16 md:w-24">
              <div className="text-2xl md:text-4xl font-bold text-ted-red">{timeLeft.minutes}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Minutes</div>
            </div>
            <div className="w-16 md:w-24">
              <div className="text-2xl md:text-4xl font-bold text-ted-red">{timeLeft.seconds}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Honorable Speakers</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Innovators of infinite realms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard 
                key={index}
                name={speaker.name}
                title={speaker.title}
                image={speaker.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/speak">
              <Button variant="outline" size="lg">
                View All Speakers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Partner with Us!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
              <p className="mb-4 text-lg">You'll be investing in the curation of a community that believes in the power of ideas worth spreading</p>
            </div>
            <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
              <p className="mb-4 text-lg">Exclusive presentation of your Brand in one of the world's most popular forum</p>
            </div>
            <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
              <p className="mb-4 text-lg">Get fresh Ideas and Insights from students for your marketing and CSR Strategies from a live interaction with the students</p>
            </div>
            <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800">
              <p className="mb-4 text-lg">Brand visibility throughout the campus with 3000 students, 200 faculty members through pre-event publicity of TEDxAtria IT</p>
            </div>
            <div className="bg-secondary bg-opacity-30 p-6 rounded-lg border border-gray-800 md:col-span-2">
              <p className="mb-4 text-lg text-center">A very good opportunity to network with the other leading brands</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/partners">
              <Button size="lg">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Get your pass 🎟️</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            the portal to another dimension
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
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Location</h2>
          <p className="text-center text-gray-300 mb-8">
            Seminar hall 1, ATRIA INSTITUTE OF TECHNOLOGY, Anandnagar, Hebbal, Bengaluru, Karnataka-560024
          </p>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0969975222335!2d77.57677061482183!3d13.03572729081041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dc1a8a5d2f%3A0xd05ef8e†84e1ebcc!2sAtria%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1675967380623!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Atria Institute of Technology Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
