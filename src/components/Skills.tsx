const Skills = () => {
  const skills = {
    languages: ["C#", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["ASP.NET Core", "React", "Angular", "Tailwind CSS"],
    tools: ["VS Code", "Git", "Docker", "Postman", "SQL Server"],
    concepts: ["REST APIs", "JWT Auth", "Entity Framework Core", "SOLID", "Clean Architecture"],
  };

  return (
    <section id="skills" className="py-16 md:py-24" style={{borderTop: '1px solid var(--color-border)'}}>
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h2 className="font-black mb-2" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 rounded" style={{backgroundColor: 'var(--color-accent)'}}></div>
        </div>

        <div className="space-y-10">
          {/* Languages */}
          <div>
            <h3 className="font-bold mb-3 uppercase tracking-widest text-sm" style={{fontSize: 'var(--font-size-body)', color: 'var(--color-text-primary)'}}>Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 border rounded font-medium text-sm transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    color: 'var(--color-accent)',
                    borderColor: 'var(--color-border)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="font-bold mb-3 uppercase tracking-widest text-sm" style={{fontSize: 'var(--font-size-body)', color: 'var(--color-text-primary)'}}>Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 border rounded font-medium text-sm transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    color: 'var(--color-accent)',
                    borderColor: 'var(--color-border)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold mb-3 uppercase tracking-widest text-sm" style={{fontSize: 'var(--font-size-body)', color: 'var(--color-text-primary)'}}>Tools & Databases</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 border rounded font-medium text-sm transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    color: 'var(--color-accent)',
                    borderColor: 'var(--color-border)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Concepts */}
          <div>
            <h3 className="font-bold mb-3 uppercase tracking-widest text-sm" style={{fontSize: 'var(--font-size-body)', color: 'var(--color-text-primary)'}}>Core Concepts</h3>
            <div className="flex flex-wrap gap-3">
              {skills.concepts.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 border rounded font-medium text-sm transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    color: 'var(--color-accent)',
                    borderColor: 'var(--color-border)',
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
                  }}
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

export default Skills;
