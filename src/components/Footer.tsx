import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import webLogo from "@/images/web_logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={webLogo} alt="COEP CyberCell Logo" className="h-12 w-9 animate-cyber-pulse" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-cyber bg-clip-text text-transparent">COEP CyberCell</h3>
                <p className="text-sm text-muted-foreground">Cyber Security Club</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering the next generation of cybersecurity professionals through 
              hands-on learning, research, and community engagement at College of Engineering Pune.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-muted/30 rounded-lg hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-muted/30 rounded-lg hover:bg-secondary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-muted/30 rounded-lg hover:bg-accent/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-muted/30 rounded-lg hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">CTF Challenges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Learning Materials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 COEP CyberCell. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;