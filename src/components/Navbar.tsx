import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { LeafyGreen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/#services' },
    { name: 'Team', path: '/#team' },
    { name: 'Contact', path: '/#contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false; // These are anchor links
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 lg:px-16',
        isScrolled ? 'glass-dark py-3 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <LeafyGreen 
              className="w-7 h-7 text-primary transition-all group-hover:animate-wiggle" 
            />
          </div>
          <span className="font-display text-xl text-foreground font-semibold tracking-tight">
            Binary<span className="text-primary">Bloom</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all",
                    location.pathname === '/' && location.hash === item.path.substring(1)
                      ? "text-primary after:w-full" 
                      : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all",
                    isActive(item.path) 
                      ? "text-primary after:w-full" 
                      : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          <a
            href="/#contact"
            className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-foreground focus:outline-none"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 bg-foreground transition-all duration-300",
              isMobileMenuOpen && "rotate-45 translate-y-2"
            )} />
            <span className={cn(
              "block h-0.5 bg-foreground transition-all duration-300", 
              isMobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "block h-0.5 bg-foreground transition-all duration-300",
              isMobileMenuOpen && "-rotate-45 -translate-y-2"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-background/98 backdrop-blur-lg transition-transform duration-300 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="pt-20 h-full overflow-y-auto">
          <div className="flex flex-col items-center gap-6 px-4">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    location.pathname === '/' && location.hash === item.path.substring(1)
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
