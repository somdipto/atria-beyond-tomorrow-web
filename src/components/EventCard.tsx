
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  link?: string;
  className?: string;
  onClick?: () => void;
}

const EventCard = ({ title, date, location, image, link, className, onClick }: EventCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link 
        to={link || "#"} 
        onClick={handleClick}
        className={cn(
          "group bg-gradient-soft rounded-2xl overflow-hidden flex flex-col card-hover",
          "border border-gray-800/50 hover:border-ted-red/30",
          "backdrop-blur-sm",
          className
        )}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-blur opacity-70"></div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-white text-lg font-bold group-hover:text-ted-red transition-colors">{title}</h3>
          
          <div className="mt-auto pt-4 flex items-center text-gray-400 text-sm">
            <Calendar size={16} className="mr-2 text-ted-red" />
            <span>{date}</span>
          </div>
          <div className="text-gray-400 text-sm mt-2">
            {location}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
