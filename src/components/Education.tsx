import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        "Clean Architecture and SOLID principles"
      ],
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Assiut University",
      period: "Sep 2020 - Jul 2024",
      grade: "3.3 GPA",
      project: "Graduation Project: VS Code Extension for the Visually Impaired",
      details: [
        "Developed AI-powered VS Code extension",
        "Implemented voice navigation features",
        "Integrated OpenAI for intelligent error handling",
        "Created accessibility shortcuts and tools"
      ],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-1">{edu.degree}</CardTitle>
                    <CardDescription className="text-primary font-medium">{edu.institution}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      {edu.grade && (
                        <>
                          <span className="text-muted-foreground">•</span>
                          <p className="text-sm text-muted-foreground">{edu.grade}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.project && (
                  <p className="text-accent font-medium mb-3">{edu.project}</p>
                )}
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-foreground/80 flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
