import { Code2, Database, Layout, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "SOLID principles & best practices" },
    { icon: Database, title: "Backend Expert", desc: ".NET Core & Entity Framework" },
    { icon: Layout, title: "Modern Frontend", desc: "React & Angular" },
    { icon: Zap, title: "Performance", desc: "Optimized & scalable solutions" },
  ];

  return (
    <section id="about" className="py-16 md:py-24" style={{borderTop: '1px solid var(--color-border)'}}>
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="font-black mb-2" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
                About Me
              </h2>
              <div className="w-12 h-1 rounded" style={{backgroundColor: 'var(--color-accent)'}}></div>
            </div>

            <p className="leading-relaxed" style={{fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)'}}>
              I'm a Full Stack Developer specializing in .NET (C#, ASP.NET Core) and modern web technologies. 
              I build scalable, efficient, and maintainable web applications using clean architecture and SOLID principles.
            </p>
            
            <p className="leading-relaxed" style={{fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)'}}>
              Graduated from Assiut University with a degree in Computer Science. Currently training at ITI Assiut 
              as part of Code Camp 2025. Passionate about writing testable, secure code and building efficient software solutions.
            </p>
          </div>

          {/* Right side - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg transition-all duration-300 group"
                style={{
                  border: '1px solid var(--color-border)',
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <item.icon className="h-8 w-8 mb-3 group-hover:scale-110 transition-transform" style={{color: 'var(--color-accent)'}} />
                <h3 className="text-base md:text-lg font-bold mb-1" style={{color: 'var(--color-text-primary)'}}>{item.title}</h3>
                <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
