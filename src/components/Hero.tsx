
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { LeafyGreen, TreeDeciduous, Code } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-20"></div>
        
        {/* Animated leaves (decorative) */}
        {Array.from({ length: 6 }).map((_, i) => (
          <LeafyGreen 
            key={i} 
            size={i % 2 ? 24 : 32} 
            className="absolute text-primary/40 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 z-10">
        <div className="text-center">
          <div 
            className={cn(
              "inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-8 transition-all duration-1000 transform",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <TreeDeciduous size={16} className="mr-2" />
            <span>Innovative Software Solutions</span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-foreground leading-tight md:leading-tight lg:leading-tight mx-auto max-w-5xl mb-6 transition-all duration-1000 delay-200",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            Where <span className="text-primary text-glow">Natural Growth</span> Meets <span className="text-primary text-glow">Digital Innovation</span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl mb-10 transition-all duration-1000 delay-400",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            We blend cutting-edge technology with sustainable practices to grow your digital presence organically.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <a 
              href="#services" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80 border border-border"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div 
          className={cn(
            "mt-16 md:mt-24 relative max-w-4xl mx-auto transition-all duration-1000 delay-800",
            loaded ? "opacity-100" : "opacity-0 scale-95"
          )}
        >
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl glow">
            <div className="h-8 bg-secondary flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
              <div className="w-3 h-3 rounded-full bg-muted/70"></div>
              <div className="w-3 h-3 rounded-full bg-primary/70"></div>
            </div>
            <div className="bg-card p-4 md:p-6 h-56 md:h-72 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <Code size={40} className="text-primary animate-pulse-slow" />
                <div className="font-mono text-xs md:text-sm text-muted-foreground bg-secondary/50 p-3 rounded">
                  <span className="text-primary">const</span> solution = <span className="text-primary">await</span> BinaryBloom.create(yourIdea);
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl"></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
