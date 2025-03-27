
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-in-bottom' | 'scale-in';
  threshold?: number;
  delay?: number;
}

const AnimatedSection = ({
  children,
  className,
  animationType = 'fade-in',
  threshold = 0.1,
  delay = 0,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-4',
    'slide-in-bottom': 'opacity-0 translate-y-10',
    'scale-in': 'opacity-0 scale-95',
  };

  const visibleClasses = {
    'fade-in': 'animate-fade-in',
    'slide-in-bottom': 'animate-slide-in-bottom',
    'scale-in': 'animate-scale-in',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        !isVisible && animationClasses[animationType],
        isVisible && visibleClasses[animationType],
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
