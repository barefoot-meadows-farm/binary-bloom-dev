import { LeafyGreen, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <LeafyGreen className="w-7 h-7 text-primary transition-all group-hover:animate-wiggle" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">
                Binary<span className="text-primary">Bloom</span>
              </span>
            </a>
            
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-md">
              Creating sustainable technology solutions for digital growth.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {[{
              icon: <Github size={18} />,
              href: '#'
            }, {
              icon: <Twitter size={18} />,
              href: '#'
            }, {
              icon: <Linkedin size={18} />,
              href: '#'
            }, {
              icon: <Instagram size={18} />,
              href: '#'
            }].map((social, index) => (
              <a key={index} href={social.href} className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-primary transition-colors duration-200 border border-border">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BinaryBloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;