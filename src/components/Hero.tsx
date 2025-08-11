import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import webLogo from "@/images/web_logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
                      <div className="relative flex items-center justify-center">
              <div className="absolute h-32 w-28 border-2 border-primary/30 rounded-full animate-cyber-pulse -top-1" />
              <img src={webLogo} alt="COEP CyberCell Logo" className="h-30 w-24 animate-float relative z-10" />
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            COEP CyberCell
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Defending the Digital Frontier
        </p>
        
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Join College of Engineering Pune's premier cybersecurity club. Learn, practice, and master 
          the art of digital defense through hands-on workshops, CTF competitions, and real-world projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="cyber" size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="cyberpunk" size="lg">
            View Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-cyber transition-all duration-300">
            <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-muted-foreground">Join 20+ cybersecurity enthusiasts</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-cyber transition-all duration-300">
            <img src={webLogo} alt="COEP CyberCell Logo" className="h-16 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
            <p className="text-muted-foreground">Practical cybersecurity training</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-cyber transition-all duration-300">
            <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
            <p className="text-muted-foreground">Regular workshops and sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;