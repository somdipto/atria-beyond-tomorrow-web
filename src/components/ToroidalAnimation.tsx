
import { useRef } from 'react';

const ToroidalAnimation = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 overflow-hidden pointer-events-none">
      <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
        <img 
          src="/lovable-uploads/18129276-ace0-4caa-a199-9b541aac0ead.png" 
          alt="Beyond Tomorrow" 
          className="w-full h-full object-contain animate-pulse-subtle"
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default ToroidalAnimation;
