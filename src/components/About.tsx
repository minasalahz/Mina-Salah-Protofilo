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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Personal Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  {/* Placeholder for personal image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        MS
                      </div>
                      <p className="text-sm text-muted-foreground">Add your photo here</p>
                    </div>
                  </div>
                  {/* Uncomment and use this when you have your image:
                  <img 
                    src="/path-to-your-image.jpg" 
                    alt="Mina Salah - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 md:order-2">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
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
            </div>
          </div>

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
