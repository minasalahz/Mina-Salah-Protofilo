import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Hero background gradient (dark mode only, light mode uses global background) */}
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background: 'linear-gradient(180deg, #0b0620 0%, #180a2f 40%, #12061b 100%)',
        }}
      />
      {/* Animated background with starfield (dark mode only) */}
      <div className="absolute inset-0 overflow-hidden dark:block hidden">
        {/* Stars (denser, mixed sizes) */}
        {Array.from({ length: 120 }).map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const dur = (1.2 + Math.random() * 2.8).toFixed(2);
          const delay = (Math.random() * 3).toFixed(2);
          const sizeRand = Math.random();
          const size = sizeRand < 0.7 ? 2 : sizeRand < 0.95 ? 3.5 : 5; // px
          return (
            <div
              key={i}
              className={`absolute star ${size <= 2 ? 'star-small' : size <= 3.5 ? 'star-medium' : 'star-large'}`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `twinkle ${dur}s ease-in-out ${delay}s infinite alternate`,
                opacity: 0.8,
              }}
            />
          );
        })}

        {/* Gradient orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animation: "float 20s infinite ease-in-out" }}
        />
        <div
          className="absolute bottom-32 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animation: "float 25s infinite ease-in-out", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-20"
          style={{ animation: "float 30s infinite ease-in-out", animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-left space-y-6 max-w-3xl">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg font-medium uppercase tracking-wider" style={{color: 'var(--color-accent)'}}>
                Hi, I'm <span className="font-semibold" style={{color: 'var(--color-accent)'}}>Mina Salah</span>
              </p>

              {/* Main heading - fluid typography with gradient */}
              <h1 
                className="font-black leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                style={{fontSize: 'clamp(2.5rem, 10vw, 5.5rem)', fontWeight: '900', letterSpacing: '-0.02em'}}
              >
                Web Developer
              </h1>
            </div>

            {/* Bio */}
            <p className="leading-relaxed max-w-2xl" style={{fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)'}}>
              I build thoughtful, high-quality web experiences that blend form and function.
              Clean design and seamless functionality guide every decision.
              Let's bring your vision to life — one pixel at a time.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-lg px-8 py-3 border-2 font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4 items-center">
              <a
                href="https://www.linkedin.com/in/mina-salah-zaki/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{color: 'var(--color-text-secondary)'}}
                title="LinkedIn"
                aria-label="Visit LinkedIn profile"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/MinaSalahZaki"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{color: 'var(--color-text-secondary)'}}
                title="GitHub"
                aria-label="Visit GitHub profile"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:mina@example.com"
                className="transition-all duration-300"
                style={{color: 'var(--color-text-secondary)'}}
                title="Email"
                aria-label="Send an email"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* right column spacer so floating astronaut sits to the right visually */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden />
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 animate-bounce"
          style={{color: 'var(--color-accent)'}}
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
