
import { TreeDeciduous, Code, Layers, Globe, Shield, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to address your unique business challenges."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Application Development",
    description: "Responsive, fast and intuitive web applications that engage users and drive conversions."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "UX/UI Design",
    description: "User-centered design approach focusing on intuitive interfaces and seamless user experiences."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with our comprehensive security audits and implementations."
  },
  {
    icon: <TreeDeciduous className="w-6 h-6" />,
    title: "Sustainable Tech Practices",
    description: "Environmentally conscious development practices and carbon-offset digital solutions."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "System Architecture",
    description: "Scalable and robust system designs that grow with your business and customer base."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-4">
            <TreeDeciduous size={16} className="mr-2" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Growing Your Digital Ecosystem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We cultivate technology solutions that adapt, thrive, and produce sustainable results for your business.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100} 
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={300} className="mt-20 p-8 md:p-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/20 border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Ready to grow your digital presence?
              </h3>
              <p className="text-muted-foreground mb-0">
                Let's collaborate to create sustainable technology solutions that propel your business forward.
              </p>
            </div>
            <a 
              href="#contact" 
              className="px-8 py-3 whitespace-nowrap rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
