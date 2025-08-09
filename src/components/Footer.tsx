import { LeafyGreen, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <LeafyGreen className="w-7 h-7 text-primary transition-all group-hover:animate-wiggle" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">
                Binary<span className="text-primary">Bloom</span>
              </span>
            </a>
            
            <p className="text-sm text-muted-foreground">
              Creating sustainable technology solutions that help businesses grow organically in the digital ecosystem.
            </p>
            
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
            }].map((social, index) => <a key={index} href={social.href} className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-primary transition-colors duration-200 border border-border">
                  {social.icon}
                </a>)}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {['Custom Software', 'Web Applications', 'UX/UI Design', 'Cybersecurity', 'System Architecture'].map((item, index) => <li key={index}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Team', 'Careers', 'Blog', 'Contact'].map((item, index) => <li key={index}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          
        </div>
        
        <div className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BinaryBloom. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              Designed with 🌱 for a sustainable digital future
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;