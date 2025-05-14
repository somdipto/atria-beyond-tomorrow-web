
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ToroidalAnimation from "@/components/ToroidalAnimation";
import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import SpeakerCard from "@/components/SpeakerCard";
import { motion } from "framer-motion";

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
    },
    {
      name: "RJ Prithvi",
      title: "Radio Jockey, Emcee, Trainer, Actor",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
    },
    {
      name: "Dr. Yashwanth A R",
      title: "Founder, Truerippers Esports",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
    },
    {
      name: "Ms. Neetu Mehta",
      title: "DEI Advocate, Talent strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2576&q=80"
    },
    {
      name: "Mr. Pranav Savla",
      title: "Student, Coder",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <ToroidalAnimation />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight gradient-text"
            >
              Unveiled The <span className="italic font-normal">Infinite</span><br /> 
              <span className="italic font-normal">Realms</span> within you!
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 mt-4 mb-8"
            >
              Presented by TEDxAtria IT
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Link to="/tickets" className="inline-block">
                <Button size="lg" className="rounded-full px-10 py-4">
                  Book now!
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-20 flex flex-col md:flex-row gap-2 md:gap-6 md:items-center"
            >
              <div className="flex items-center backdrop-blur-sm bg-black/30 p-4 rounded-xl border border-white/10">
                <MapPin className="text-ted-red mr-2" size={24} />
                <div>
                  <p className="text-sm">Venue: Seminar hall 1</p>
                  <p className="font-bold">ATRIA INSTITUTE OF TECHNOLOGY</p>
                  <p className="text-sm text-gray-400">Anandnagar, Hebbal, Bengaluru, Karnataka 560024</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center md:ml-4 backdrop-blur-sm bg-black/30 p-4 rounded-xl border border-white/10">
                <Calendar className="text-ted-red mr-2" size={24} />
                <div>
                  <p className="font-medium">Saturday, 9th Nov 2024 from 9:00 AM</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-12 max-w-2xl backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/10"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                TEDxAtria IT is an independently organized TEDx event hosted at Atria Institute of Technology, Bengaluru.
                Our mission is to inspire and connect individuals through powerful ideas. Join us for a day of 
                thought-provoking talks, engaging discussions, and unforgettable experiences. Discover the latest 
                innovations, explore diverse perspectives, and ignite your passion for learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-gradient-soft border-t border-white/10">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">COUNTDOWN!</h2>
          
          <div className="flex justify-center space-x-4 md:space-x-8 text-center">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="w-20 md:w-32"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-glow"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl md:text-5xl font-bold text-ted-red">{item.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{item.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-black">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
          >
            Our Honorable Speakers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-12 text-center max-w-2xl mx-auto"
          >
            Innovators of infinite realms
          </motion.p>
          
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
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/speak">
              <Button variant="outline" size="lg">
                View All Speakers
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-soft border-t border-white/10">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Partner with Us!
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "You'll be investing in the curation of a community that believes in the power of ideas worth spreading",
              "Exclusive presentation of your Brand in one of the world's most popular forum",
              "Get fresh Ideas and Insights from students for your marketing and CSR Strategies from a live interaction with the students",
              "Brand visibility throughout the campus with 3000 students, 200 faculty members through pre-event publicity of TEDxAtria IT"
            ].map((text, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-2xl shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="mb-4 text-lg">{text}</p>
              </motion.div>
            ))}
            
            <motion.div 
              className="glass-effect p-6 rounded-2xl md:col-span-2 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="mb-4 text-lg text-center">A very good opportunity to network with the other leading brands</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/partners">
              <Button size="lg">
                Become a Partner
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
          >
            Get your pass 🎟️
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-12 text-center max-w-2xl mx-auto"
          >
            the portal to another dimension
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                type: "Student",
                price: "₹600",
                features: ["Complementary goodies", "Lunch and Snack", "Access to exclusive networking zone", "Exclusive experience zone"]
              },
              {
                type: "Professional",
                price: "₹1,500",
                features: ["Experience zone", "Full brand guidebook", "Access to exclusive networking zone", "Exclusive experience zone"]
              }
            ].map((ticket, index) => (
              <motion.div
                key={index}
                className="glass-effect p-8 rounded-2xl border-white/10 gradient-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-2xl font-bold mb-2">{ticket.type}</h3>
                <p className="text-3xl font-bold text-ted-red mb-6">{ticket.price}</p>
                <ul className="space-y-4">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-ted-red flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="w-full">Book {ticket.type} Pass</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="py-12 bg-gradient-soft border-t border-white/10">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Location
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 mb-8"
          >
            Seminar hall 1, ATRIA INSTITUTE OF TECHNOLOGY, Anandnagar, Hebbal, Bengaluru, Karnataka-560024
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-glow"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0969975222335!2d77.57677061482183!3d13.03572729081041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dc1a8a5d2f%3A0xd05ef8e†84e1ebcc!2sAtria%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1675967380623!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Atria Institute of Technology Location"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
