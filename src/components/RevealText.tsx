
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const RevealText = ({ text, className, delay = 0 }: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={textRef}
        className={cn(
          "transition-transform duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          className
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default RevealText;
