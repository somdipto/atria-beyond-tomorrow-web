
import { useEffect, useRef } from 'react';

const ToroidalAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
      <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
        <img 
          src="/lovable-uploads/18129276-ace0-4caa-a199-9b541aac0ead.png" 
          alt="Beyond Tomorrow" 
          className="w-full h-full object-contain animate-spin-slow animate-pulse-subtle"
          ref={canvasRef}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black"></div>
      </div>
    </div>
  );
};

export default ToroidalAnimation;
