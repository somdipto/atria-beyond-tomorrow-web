
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import ToroidalAnimation from "@/components/ToroidalAnimation";
// import { useState, useEffect } from "react";
// import EventCard from "@/components/EventCard";
// import SpeakerCard from "@/components/SpeakerCard";
import { motion } from "framer-motion";

const Index = () => {

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
      <section className="relative min-h-screen flex items-center pt-40 pb-16">
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
              <Link to="/about" className="inline-block">
                <Button size="lg" className="rounded-full px-10 py-4">
                  About Us!
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 max-w-2xl backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/10"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                TEDxAtria IT is an independently organized TEDx event hosted at Atria Institute of Technology, Bengaluru.
                Our mission is to inspire and connect individuals through powerful ideas. Join us for a day of
                thought-provoking talks, engaging discussions, and unforgettable experiences. Discover the latest
                innovations, explore diverse perspectives, and ignite your passion for learning.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-4 flex flex-col md:flex-row gap-2 md:gap-6 md:items-center"
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
                  <p className="font-medium">Saturday, 12th Sep 2025 from 9:00 AM</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0884380167247!2d77.591333474874!3d13.032388314836342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17635fcbbe0b%3A0xa7d848a52e9f9a40!2sAtria%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1710240333085"
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
