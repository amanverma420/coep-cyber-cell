import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Users, Trophy, Book } from "lucide-react";
import webLogo from "@/images/web_logo.png";

const About = () => {
  const features = [
    {
      icon: webLogo,
      title: "Cybersecurity Excellence",
      description: "Learn cutting-edge security techniques and defensive strategies",
    },
    {
      icon: Target,
      title: "CTF Competitions",
      description: "Participate in Capture The Flag events and security challenges",
    },
    {
      icon: Zap,
      title: "Hands-on Workshops",
      description: "Practical training sessions on real-world security scenarios",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Collaborate with peers and learn from industry experts",
    },
    {
      icon: Trophy,
      title: "Competitions & Awards",
      description: "Compete in national and international cybersecurity contests",
    },
    {
      icon: Book,
      title: "Research & Development",
      description: "Contribute to cybersecurity research and innovation",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-cyber bg-clip-text text-transparent">CyberCell</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            COEP CyberCell is the premier cybersecurity club at College of Engineering Pune, 
            dedicated to fostering the next generation of cybersecurity professionals through 
            practical learning, research, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group min-h-[280px]">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 p-5 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    {feature.icon === webLogo ? (
                      <img src={webLogo} alt="COEP CyberCell Logo" className="h-16 w-12" />
                    ) : (
                      <feature.icon className="h-12 w-12 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To create a dynamic learning environment where students can explore, understand, 
                and master cybersecurity concepts through practical application, collaborative 
                research, and real-world problem-solving.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Practical cybersecurity education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Industry-relevant skill development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Community building and networking</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-accent rounded-xl p-8 text-center">
              <h4 className="text-2xl font-bold text-accent-foreground mb-4">Join the Revolution</h4>
              <p className="text-accent-foreground/80 mb-6">
                Be part of the cybersecurity revolution. Learn, grow, and contribute to 
                making the digital world safer for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-foreground">20+</div>
                  <div className="text-accent-foreground/60">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-foreground">2+</div>
                  <div className="text-accent-foreground/60">Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;