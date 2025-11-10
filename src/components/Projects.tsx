import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Web Platform",
      shortDesc: "Full-stack .NET e-commerce with JWT auth and React frontend",
      fullDesc: "Developed complete e-commerce platform using ASP.NET Core, Entity Framework Core, and SQL Server. Implemented authentication via Identity and JWT tokens. Built RESTful APIs consumed by React frontend with shopping cart, payment integration, and admin dashboard.",
      image: "🛒",
      tech: ["ASP.NET Core", "EF Core", "SQL Server", "React", "JWT", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Weekend Movie",
      shortDesc: "Movie discovery web app with TMDB API integration",
      fullDesc: "Built responsive movie discovery web application using HTML, CSS, and vanilla JavaScript. Integrated TMDB API for real-time movie data, search functionality, trailers, cast information, and rating system. Features smooth animations and optimized performance.",
      image: "🎬",
      tech: ["HTML5", "CSS3", "JavaScript", "TMDB API", "REST"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      shortDesc: "Personal portfolio with interactive sections and animations",
      fullDesc: "Personal portfolio website with responsive layout, interactive sections, and smooth animations. Built with modern web technologies focusing on performance and user experience. Features project showcases, skill visualization, and contact forms.",
      image: "💼",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demo: "#",
    },
    {
      id: 4,
      title: "VS Code Extension for Visually Impaired",
      shortDesc: "AI-powered accessibility extension for VS Code",
      fullDesc: "Graduation project: TypeScript and Node.js extension for VS Code that provides voice navigation, AI-based error handling via OpenAI integration, and accessibility shortcuts. Helps visually impaired developers navigate and code efficiently.",
      image: "♿",
      tech: ["TypeScript", "Node.js", "OpenAI API", "VS Code API"],
      github: "#",
    },
    {
      id: 5,
      title: "AI Task Manager",
      shortDesc: "React frontend with .NET 8 backend (Coming Soon)",
      fullDesc: "Upcoming project featuring an AI-powered task management system. React frontend with .NET 8 backend API. Will include intelligent task prioritization, natural language processing for task creation, and smart scheduling recommendations.",
      image: "🤖",
      tech: [".NET 8", "React", "AI/ML", "PostgreSQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.shortDesc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl bg-card border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base text-foreground/80 pt-4">
                {selectedProject?.fullDesc}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                {selectedProject?.github && (
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {selectedProject?.demo && (
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
