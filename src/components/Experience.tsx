import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-1">{exp.role}</CardTitle>
                    <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
