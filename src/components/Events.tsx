import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Trophy, Zap, Book } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Bug Bounty Bootcamp",
      date: "March 30, 2024",
      time: "1:00 PM - 4:00 PM",
      type: "Training",
      participants: "30+",
      description: "Learn how to find and report security vulnerabilities in web applications.",
      icon: Zap,
      status: "upcoming"
    },
    {
      title: "Cyber Security Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      type: "Workshop",
      participants: "50+",
      description: "Hands-on workshop covering penetration testing fundamentals and ethical hacking techniques.",
      icon: Book,
      status: "upcoming"
    },
    {
      title: "CTF Championship",
      date: "March 22, 2024",
      time: "10:00 AM - 6:00 PM",
      type: "Competition",
      participants: "100+",
      description: "Annual Capture The Flag competition with prizes worth ₹50,000.",
      icon: Trophy,
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      title: "Cybersecurity Awareness Week",
      date: "April 15-17, 2025",
      participants: "20+",
      description: "2 days awareness campaign with daily sessions on digital safety."
    },
    {
      title: "Visit to Police Cyber Cell Department in Shivaji Nagar,Pune",
      date: " February 25, 2025",
      participants: "20+",
      description: "Got to know about the working of the police cyber cell and the various tools and techniques used by them."
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="bg-gradient-cyber bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting cybersecurity events, workshops, and competitions. 
            Stay ahead of the curve with the latest in digital security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-cyber">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-foreground/80">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground/80">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground/80">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>

                  <Button variant="cyberpunk" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-6 border border-border/50">
                <h4 className="font-semibold mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                <div className="flex justify-between items-center text-xs text-foreground/60">
                  <span>{event.date}</span>
                  <span>{event.participants} attended</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;