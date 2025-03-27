
import { TreeDeciduous } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const cofounders = [
  {
    name: "William Parish",
    position: "Co-Founder & CEO",
    bio: "With over 10 years of experience across organizations ranging from startups to large enterprises, William brings extensive expertise in Development, DevOps, and AI Architecture. He specializes in designing highly modular and scalable services that maximize performance while minimizing costs."
  },
  {
    name: "Meagan McCliment",
    position: "Co-Founder & Chief Creative Officer",
    bio: "With over 10 years of technology experience and a focus on sustainable growth, Meagan McCliment brings a wide breadth of knowledge and design expertise to every project. Her unique perspective bridges the gap between design, sustainability, and technology to deliver exceptional results."
  },
  {
    name: "Zack Dunstan",
    position: "Co-Founder & CTO",
    bio: "Zack specializes in full-stack development and system architecture. With a background in cloud infrastructure, he ensures Binary Bloom's solutions are scalable, secure, and future-proof."
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-4">
            <TreeDeciduous size={16} className="mr-2" />
            <span>Our Founders</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The visionaries behind Binary Bloom who are dedicated to creating exceptional digital experiences.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cofounders.map((founder, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              animationType="fade-in"
              className="bg-card rounded-xl overflow-hidden border border-border p-8 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <h3 className="text-2xl font-display font-semibold mb-2 text-primary">
                {founder.name}
              </h3>
              <p className="text-primary/80 font-medium mb-4">
                {founder.position}
              </p>
              <div className="h-px w-full bg-border mb-6"></div>
              <p className="text-muted-foreground">
                {founder.bio}
              </p>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={300} className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">
            Join Our Growing Team
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about creating innovative digital solutions.
          </p>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80 border border-border inline-flex items-center"
          >
            View Open Positions
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Team;
