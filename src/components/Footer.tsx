import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="https://github.com/MinaSalahZaki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mina-salah-zaki/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:mina.dev@email.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <p className="text-muted-foreground text-center flex items-center gap-2 flex-wrap justify-center">
            © 2025 Mina Salah — Crafted with 
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            using ASP.NET Core and Angular
          </p>

          <p className="text-sm text-muted-foreground/60">
            Full Stack Developer | .NET | Angular | React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
