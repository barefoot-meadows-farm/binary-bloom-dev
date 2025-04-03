
import { Layers, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ProjectsShowcase = () => {
  const featuredProjects = [
    {
      title: "StoryGen.dev",
      description: "Interactive narratives and branching storylines with AI assistance",
      url: "https://storygen.dev"
    },
    {
      title: "TicTacToeToolbox.com",
      description: "Educational platform to learn programming concepts through game development",
      url: "https://tictactoetoolbox.com"
    }
  ];

  return (
    <section id="projects-showcase" className="section-padding relative">
      <div className="container max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-4">
            <Layers size={16} className="mr-2" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Our Digital Garden
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our latest projects that showcase our expertise and creative solutions.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 h-full">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center">
                    {project.title}
                    <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={200} className="text-center">
          <Link 
            to="/projects" 
            className={cn(
              "inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20",
              "text-primary font-medium transition-all hover:shadow-lg hover:shadow-primary/10"
            )}
          >
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
