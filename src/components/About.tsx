import { Code2, Database, Layout, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "SOLID principles & best practices" },
    { icon: Database, title: "Backend Expert", desc: ".NET Core & Entity Framework" },
    { icon: Layout, title: "Modern Frontend", desc: "Angular & React ecosystems" },
    { icon: Zap, title: "Performance", desc: "Optimized & scalable solutions" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Graduated from Assiut University with a degree in Computer Science. Full Stack Developer 
                specializing in .NET (C#) and modern web technologies like Angular and React. Experienced 
                in building robust, secure, and maintainable software solutions using ASP.NET Core, Entity 
                Framework Core, and SQL Server.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Passionate about building efficient, secure, and maintainable software solutions. Strong 
                advocate for clean architecture, SOLID principles, and writing testable code. Currently 
                training at ITI Assiut as part of Code Camp 2025, further enhancing my full-stack 
                development skills.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="bg-secondary/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OOP", "SOLID Principles", "Clean Architecture", "REST APIs", 
                "ASP.NET Core", "Entity Framework", "SQL Server", "Angular",
                "React", "TypeScript", "Git", "Azure DevOps"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
