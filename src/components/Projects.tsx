import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, JWT authentication, and a modern React frontend. Built with ASP.NET Core, Entity Framework Core, and SQL Server for a scalable backend.",
      tech: ["ASP.NET Core", "React", "SQL Server", "Stripe", "JWT"],
      github: "https://github.com/MinaSalahZaki",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Movie App",
      description: "Movie discovery application with real-time data from TMDB API. Features include search, filtering, trailers, cast information, and smooth animations. Built with React and Tailwind CSS.",
      tech: ["React", "TMDB API", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/MinaSalahZaki",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "AI Task Manager",
      description: "AI-powered task management system combining React frontend with .NET 8 backend. Features intelligent task prioritization, natural language processing, and smart scheduling recommendations.",
      tech: [".NET 8", "React", "PostgreSQL", "AI/ML"],
      github: "https://github.com/MinaSalahZaki",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24" style={{borderTop: '1px solid var(--color-border)'}}>
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h2 className="font-black mb-2" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
            Portfolio
          </h2>
          <div className="w-12 h-1 rounded" style={{backgroundColor: 'var(--color-accent)'}}></div>
        </div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center group animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="aspect-video md:aspect-square border rounded-lg overflow-hidden transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent))',
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">📱</div>
                    <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-7/12">
                <div className="inline-block px-3 py-1 border rounded-full text-xs font-semibold mb-3"
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-accent)',
                  }}
                >
                  Featured Project
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-3 transition-colors group-hover:opacity-80"
                  style={{color: 'var(--color-text-primary)'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                  }}
                >
                  {project.title}
                </h3>
                
                <p className="leading-relaxed mb-6" style={{fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)'}}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded"
                      style={{
                        backgroundColor: 'rgba(139, 92, 246, 0.08)',
                        color: 'var(--color-accent)',
                        borderColor: 'var(--color-border)',
                        border: '1px solid',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <Button 
                      className="border-2 transition-all"
                      style={{
                        borderColor: 'var(--color-accent)',
                        color: 'var(--color-accent)',
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--color-accent)';
                      }}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      className="font-semibold transition-all"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'white',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
