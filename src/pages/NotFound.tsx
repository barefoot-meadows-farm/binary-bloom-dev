
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LeafyGreen } from "lucide-react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 inline-block">
          <div className={cn(
            "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center",
            "animate-pulse-slow"
          )}>
            <LeafyGreen className="w-10 h-10 text-primary" />
          </div>
        </div>
        
        <h1 className="text-6xl font-display font-semibold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground mb-6">Oops! This page seems to have wilted away.</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        
        <a 
          href="/" 
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20 inline-block"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
