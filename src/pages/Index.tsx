
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToAnchor from '@/components/ScrollToAnchor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ScrollToAnchor />
      <Hero />
      <ProjectsShowcase />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
