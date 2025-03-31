
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "StoryGen.dev",
      description: "A powerful tool for developers and writers to create interactive narratives and branching storylines with the help of AI. StoryGen helps you build engaging stories with multiple possible paths and outcomes.",
      url: "https://storygen.dev"
    },
    {
      title: "TicTacToeToolbox.com",
      description: "An educational platform that uses the simple game of Tic-Tac-Toe to teach programming concepts, game theory, and AI algorithms. Perfect for beginners learning about game development and strategic thinking.",
      url: "https://tictactoetoolbox.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 section-padding">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-4">
              <Layers size={16} className="mr-2" />
              <span>Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Recent Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our latest digital endeavors where we've combined creativity with technology to create meaningful experiences.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
