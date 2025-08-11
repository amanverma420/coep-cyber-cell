import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr.Sunil B. Mane",
      role: "Club Guide & Faculty Advisor",
      image: "src/images/mane_sir.jpg",
      bio: "Associate Professor, Computer Engineering Department. Expert in cybersecurity, cryptography, and network security. Guiding COEP CyberCell since its inception.",
      socials: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/dr-sunil-b-mane-267277b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By5bWdZVfQNq%2B2jXposOeLw%3D%3D",
        email: "sunilbmane.comp@coeptech.ac.in"
      },
      isSpecial: true
    },
    {
      name: "Oum Zarkar",
      role: "Founder & Mentor",
      image: "src/images/oum.jpg",
      bio: "Oum Zarkar, our club’s most talented alumnus, is a cybersecurity innovator known for his expertise in ethical hacking, digital forensics, and CTF victories.",
      socials: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/oum-zarkar?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgc8O9sM6RviJm0rG2GcXJA%3D%3D",
        email: "zarkarov24.comp@coeptech.ac.in"
      }
    },
    {
      name: "Omprakash Sahu",
      role: "Secretary",
      image: "src/images/op_profile (2).jpeg",
      bio: "Omprakash Sahu, a passionate cybersecurity enthusiast, excels in ethical hacking and digital defense.",
      socials: {
        github: "https://github.com/OPSynergy",
        linkedin: "https://www.linkedin.com/in/omprakashsahu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B31Y%2BZpiATCSPdbebl%2FMsmA%3D%3D",
        email: "omprakashs24.rai@coeptech.ac.in"
      }
    },
    {
      name: "Rajesh Kumar",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Final year student leading CTF team and organizing technical workshops.",
      socials: {
        github: "#",
        linkedin: "#",
        email: "rajesh@coep.cybercell"
      }
    },
    {
      name: "Sneha Desai",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "3rd year student managing club events and industry partnerships.",
      socials: {
        github: "#",
        linkedin: "#",
        email: "sneha@coep.cybercell"
      }
    },
    {
      name: "Amit Singh",
      role: "Research Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "PhD candidate researching AI security and blockchain vulnerabilities.",
      socials: {
        github: "#",
        linkedin: "#",
        email: "amit@coep.cybercell"
      }
    },
    {
      name: "Kavya Reddy",
      role: "Public Relations",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "2nd year student handling social media and community outreach.",
      socials: {
        github: "#",
        linkedin: "#",
        email: "kavya@coep.cybercell"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals driving COEP CyberCell forward. 
            Our diverse team brings together expertise from various domains of cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-cyber ${
                member.isSpecial 
                  ? 'md:col-span-2 lg:col-span-3 border-2 border-primary/50 bg-gradient-to-br from-card/80 to-primary/5' 
                  : ''
              }`}
            >
              <CardContent className={`text-center ${member.isSpecial ? 'p-8' : 'p-6'}`}>
                <div className={`relative mb-6 ${member.isSpecial ? 'mx-auto' : ''}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors ${
                      member.isSpecial ? 'w-40 h-40' : 'w-32 h-32'
                    }`}
                  />
                  <div className={`absolute inset-0 rounded-full mx-auto border-2 border-primary/30 animate-cyber-pulse ${
                    member.isSpecial ? 'w-40 h-40' : 'w-32 h-32'
                  }`}></div>
                </div>
                
                <h3 className={`font-semibold mb-2 ${member.isSpecial ? 'text-2xl' : 'text-xl'}`}>{member.name}</h3>
                <p className={`font-medium mb-3 ${member.isSpecial ? 'text-lg text-primary' : 'text-primary'}`}>{member.role}</p>
                <p className={`text-muted-foreground mb-6 ${member.isSpecial ? 'text-base max-w-2xl mx-auto' : 'text-sm'}`}>{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.socials.github}
                    className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.socials.linkedin}
                    className="p-2 rounded-full bg-muted/30 hover:bg-secondary/20 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={`mailto:${member.socials.email}`}
                    className="p-2 rounded-full bg-muted/30 hover:bg-accent/20 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate cybersecurity enthusiasts to join our core team. 
              If you're interested in taking a leadership role and contributing to the club's growth, we'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Open Positions</div>
                <div className="text-muted-foreground">Various roles available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">Skills Needed</div>
                <div className="text-muted-foreground">Technical & Leadership</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-2">Commitment</div>
                <div className="text-muted-foreground">Flexible schedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;