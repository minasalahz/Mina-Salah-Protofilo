import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    { name: "Problem Solving (Intermediate)", issuer: "HackerRank", year: "2024" },
    { name: "Problem Solving (Basic)", issuer: "HackerRank", year: "2024" },
    { name: "C++ Programming", issuer: "Udemy", year: "2023" },
    { name: "Python Programming", issuer: "Udemy", year: "2023" },
    { name: "Java Programming", issuer: "Udemy", year: "2023" },
    { name: "Advanced CSS", issuer: "Udemy", year: "2023" },
    { name: "ECPC Participation", issuer: "ICPC", year: "2022-2023" },
  ];

  return (
    <section id="certificates" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certificates & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary mt-1">{cert.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
