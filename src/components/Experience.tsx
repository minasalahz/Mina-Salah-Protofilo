import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Development Trainee",
      company: "ITI Assiut - Code Camp 2025",
      period: "Jul 2025 - Nov 2025",
      description: "Intensive full-stack training program focusing on .NET ecosystem and modern web development.",
      skills: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Angular", "REST APIs"],
    },
    {
      role: "Mentor",
      company: "ICPC Assiut Community",
      period: "2021 - 2024",
      description: "Mentored junior participants in algorithms, data structures, and competitive programming. Supported contests and workshops to help students improve problem-solving skills.",
      skills: ["C++", "Algorithms", "Data Structures", "Problem Solving", "Teaching"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-bold mb-16 animate-fade-in" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="pl-8 animate-slide-in-up"
              style={{
                borderLeft: '2px solid var(--color-border)',
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-text-primary)'}}>{exp.role}</h3>
                <span className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{exp.period}</span>
              </div>
              <p className="text-lg font-medium mb-4" style={{color: 'var(--color-accent)'}}>{exp.company}</p>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)'}}>{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    className="text-xs font-medium transition-colors border"
                    style={{
                      backgroundColor: 'rgba(139, 92, 246, 0.08)',
                      color: 'var(--color-accent)',
                      borderColor: 'var(--color-border)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
