import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Full Stack Web Development using .NET",
      institution: "ITI Assiut",
      period: "Jul 2025 - Nov 2025",
      details: [
        "Comprehensive training in C# and ASP.NET Core",
        "Entity Framework Core and SQL Server",
        "Angular for modern frontend development",
        "RESTful API design and implementation",
      ],
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Assiut University",
      period: "Sep 2020 - Jul 2024",
      grade: "3.3 GPA",
      details: [
        "Graduation Project: VS Code Extension for the Visually Impaired",
        "AI-powered voice navigation features",
        "Integrated OpenAI for intelligent error handling",
        "Clean Architecture and SOLID principles",
      ],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-bold mb-16 animate-fade-in" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
          Education
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="pl-8 animate-slide-in-up"
              style={{
                borderLeft: '2px solid var(--color-border)',
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold" style={{color: 'var(--color-text-primary)'}}>{edu.degree}</h3>
                  <p className="text-lg font-medium mt-1" style={{color: 'var(--color-accent)'}}>{edu.institution}</p>
                </div>
                <span className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{edu.period}</span>
              </div>
              {edu.grade && (
                <p className="text-sm font-medium mb-4" style={{color: 'var(--color-accent)'}}>{edu.grade}</p>
              )}
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start" style={{color: 'var(--color-text-secondary)'}}>
                    <span className="mr-3 mt-1" style={{color: 'var(--color-accent)'}}>▸</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
