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
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-bold mb-16 animate-fade-in" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
          Certificates & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="p-6 border rounded-lg transition-all duration-300 group animate-slide-in-up"
              style={{
                borderColor: 'var(--color-border)',
                animationDelay: `${index * 0.1}s`,
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
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0 transition-colors" style={{backgroundColor: 'rgba(139, 92, 246, 0.08)'}}>
                  <Award className="h-5 w-5" style={{color: 'var(--color-accent)'}} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg" style={{color: 'var(--color-text-primary)'}}>{cert.name}</h3>
                  <p className="text-sm font-medium mt-2" style={{color: 'var(--color-accent)'}}>{cert.issuer}</p>
                  <p className="text-xs mt-1" style={{color: 'var(--color-text-secondary)'}}>{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
