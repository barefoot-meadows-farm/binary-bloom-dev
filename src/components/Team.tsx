
import { TreeDeciduous } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const teamMembers = [
  {
    name: "Alex Morgan",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bio: "With over 15 years in software development, Alex focuses on sustainable tech practices and innovative solutions."
  },
  {
    name: "Jamie Chen",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bio: "Jamie specializes in full-stack development and has led numerous successful enterprise-level projects."
  },
  {
    name: "Riley Park",
    position: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bio: "Riley creates intuitive and beautiful interfaces with a focus on accessibility and user experience."
  },
  {
    name: "Sam Wilson",
    position: "Solutions Architect",
    image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
    bio: "Sam designs and implements scalable system architectures that support business growth and innovation."
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-4">
            <TreeDeciduous size={16} className="mr-2" />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Meet the Innovators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings passion and expertise to every project, ensuring exceptional results.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100} 
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-64 w-full overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
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
