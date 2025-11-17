import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24" style={{borderTop: '1px solid var(--color-border)'}}>
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-black mb-2" style={{fontSize: 'var(--font-size-h2)', color: 'var(--color-text-primary)'}}>
                Get in Touch
              </h2>
              <div className="w-12 h-1 rounded" style={{backgroundColor: 'var(--color-accent)'}}></div>
            </div>

            <p className="leading-relaxed" style={{fontSize: 'var(--font-size-body-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)'}}>
              I'm always open to discussing new projects, creative ideas, and how I can help you or your company.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full font-semibold transition-all"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                asChild
              >
                <a href="mailto:mina@example.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </a>
              </Button>
              <Button 
                size="lg"
                className="w-full border-2 font-semibold transition-all"
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
                asChild
              >
                <a href="https://www.linkedin.com/in/mina-salah-zaki/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                size="lg"
                className="w-full border-2 font-semibold transition-all"
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
                asChild
              >
                <a href="https://github.com/MinaSalahZaki" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Decorative 3D Earth */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square border rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
                borderColor: 'var(--color-border)',
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
              <div className="text-center">
                <div className="text-9xl animate-bounce" style={{ animationDelay: "0s" }}>🌍</div>
                <p className="text-sm mt-4" style={{color: 'var(--color-text-secondary)'}}>Let's connect!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
