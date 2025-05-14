
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  talkTitle?: string;
  className?: string;
}

const SpeakerCard = ({ name, title, image, talkTitle, className }: SpeakerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group bg-gradient-soft rounded-2xl overflow-hidden card-hover",
        "border border-gray-800/50 hover:border-ted-red/30",
        "backdrop-blur-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-blur opacity-70"></div>
        {talkTitle && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: isHovered ? 0 : 100 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-4"
          >
            <div className="bg-ted-red/90 backdrop-blur-sm text-white p-3 rounded-xl text-sm font-medium shadow-glow">
              "{talkTitle}"
            </div>
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-bold group-hover:text-ted-red transition-colors">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{title}</p>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
