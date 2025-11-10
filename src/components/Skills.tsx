import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "C#", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "ASP.NET Core", level: 95 },
        { name: "Entity Framework", level: 92 },
        { name: "REST APIs", level: 90 },
        { name: "SQL Server", level: 88 },
        { name: "Azure", level: 75 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 90 },
        { name: "React", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Tools & Concepts",
      skills: [
        { name: "Git", level: 90 },
        { name: "Visual Studio", level: 95 },
        { name: "VS Code", level: 92 },
        { name: "SOLID", level: 90 },
        { name: "Clean Architecture", level: 88 },
      ],
    },
  ];

  const badges = [
    "ASP.NET Core", ".NET Core", "Entity Framework", "SQL Server", "Angular",
    "React", "TypeScript", "C#", "HTML5", "CSS3", "JavaScript",
    "Git", "Azure DevOps", "REST APIs", "Microservices", "SOLID",
    "Clean Architecture", "OOP", "Design Patterns", "Agile"
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {categories.map((category, catIndex) => (
            <Card 
              key={catIndex}
              className="bg-card/50 backdrop-blur-sm border-primary/20"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          transformOrigin: "left",
                          transitionDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
