
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Partners = () => {
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
            Partner with TEDxAtria IT
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Join us in spreading ideas that matter and make a lasting impact on our community
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Why Partner With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Community Investment",
                  description: "You'll be investing in the curation of a community that believes in the power of ideas worth spreading."
                },
                {
                  title: "Brand Showcase",
                  description: "Exclusive presentation of your brand in one of the world's most popular forums."
                },
                {
                  title: "Fresh Insights",
                  description: "Get fresh ideas and insights from students for your marketing and CSR strategies from live interactions."
                },
                {
                  title: "Campus Visibility",
                  description: "Brand visibility throughout the campus with 3000 students, 200 faculty members through pre-event publicity."
                },
                {
                  title: "Networking Opportunities",
                  description: "A very good opportunity to network with other leading brands and influential speakers.",
                  span: true
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`glass-effect p-6 rounded-2xl shadow-soft ${item.span ? 'md:col-span-2' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold mb-3 text-ted-red">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center glass-effect p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Partnership Opportunities</h2>
            <p className="text-gray-300 mb-8">
              We offer various partnership packages designed to meet your specific goals. Our team would be happy to discuss 
              custom opportunities that align with your marketing objectives.
            </p>
            
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
              <Button size="lg" className="tedx-button bg-gradient-red">Download Partnership Deck</Button>
              <Button variant="outline" size="lg" className="border-ted-red hover:shadow-glow">Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Partners;
