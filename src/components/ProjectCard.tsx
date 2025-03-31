
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  className?: string;
}

const ProjectCard = ({ title, description, url, className }: ProjectCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-xl overflow-hidden border border-border p-8 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-display font-semibold mb-2 text-primary">
          {title}
        </h3>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`Visit ${title}`}
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-6">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary font-medium flex items-center gap-2 group-hover:underline"
        >
          Visit website <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
