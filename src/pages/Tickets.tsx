
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Tickets = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="pt-32 pb-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="container mx-auto px-6">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-8 text-center gradient-text"
          >
            Get your TEDxAtria IT Tickets
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Join us for an unforgettable day of innovation, inspiration, and connection at TEDxAtria IT's "Unveiled: The Infinite Realms"
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
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
                className="glass-effect p-8 rounded-2xl gradient-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 0 20px rgba(235,0,40,0.3)", 
                  transition: { duration: 0.2 } 
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{ticket.type}</h3>
                <p className="text-3xl font-bold text-ted-red mb-6">{ticket.price}</p>
                <ul className="space-y-4">
                  {ticket.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <span className="mr-2 text-ted-red flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="w-full tedx-button bg-gradient-red">Book {ticket.type} Pass</Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-16 max-w-2xl mx-auto text-center glass-effect p-8 rounded-2xl"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tickets;
