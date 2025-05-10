
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <Link 
      to={link || "#"} 
      onClick={handleClick}
      className={cn(
        "group bg-secondary rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300",
        "border border-gray-800 hover:border-ted-red/50",
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-white text-lg font-bold group-hover:text-ted-red transition-colors">{title}</h3>
        
        <div className="mt-auto pt-4 flex items-center text-gray-400 text-sm">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="text-gray-400 text-sm mt-2">
          {location}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
