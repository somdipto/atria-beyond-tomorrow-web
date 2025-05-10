
import { cn } from '@/lib/utils';

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  talkTitle?: string;
  className?: string;
}

const SpeakerCard = ({ name, title, image, talkTitle, className }: SpeakerCardProps) => {
  return (
    <div 
      className={cn(
        "group bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300",
        "border border-gray-800 hover:border-ted-red/50",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        {talkTitle && (
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-ted-red text-white p-2 rounded-md text-sm font-medium">
              "{talkTitle}"
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-bold">{name}</h3>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
