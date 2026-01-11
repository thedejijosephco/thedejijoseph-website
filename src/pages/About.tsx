import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeadshot from "@/assets/about-headshot-new.jpg";
import { Mail, ArrowRight } from "lucide-react";

const About = () => {
  const workExperience = [
    {
      title: "Research Lead",
      company: "Cardinal Healthcare Foundation",
      location: "Lagos, Nigeria",
      period: "2022 —— Present",
      description: "Leading research and technical teams at a pioneering non-profit dedicated to improving the health outcomes of underserved communities across Africa"
    },
    {
      title: "Consultant, Business Analysis",
      company: "Max-Migold Facilities Management",
      location: "Lagos, Nigeria",
      period: "2024",
      description: "Developed organisation-wide advisory on strategies that improves the institution's student enrolment and engagement"
    },
    {
      title: "Product Manager",
      company: "myStash Inc.",
      location: "Lagos, NG; Delaware, US",
      period: "2022 —— 2024",
      description: "Led product development from the ground up and launch into three new markets: US, UK, CA. Built analytic dashboards and account review/screening tools"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="section-padding section-spacing relative overflow-hidden">
          {/* Geometric accents */}
          <div className="absolute top-40 right-10 w-32 h-32 border-4 border-primary/20" />
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/10" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Image on left */}
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden relative group">
                  <img 
                    src={aboutHeadshot} 
                    alt="Deji Joseph"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Frame accent */}
                  <div className="absolute top-6 left-6 w-full h-full border-4 border-primary -z-10" />
                </div>
              </div>
              
              {/* Text on right */}
              <div className="space-y-8 lg:pl-8">
                <div className="accent-bar" />
                <h1 className="heading-hero">
                  Hi <span className="text-primary">there!</span>
                </h1>
                
                <p className="body-large">
                  I'm <span className="font-bold text-primary">Deji</span>, a data analyst with a knack for turning numbers into actionable insights. With a background in management, I thrive on solving complex problems and helping businesses make data-driven decisions.
                </p>
                
                <p className="body-regular text-muted-foreground">
                  When I'm not diving into data, you'll find me immersed in my other interests—exploring new destinations, getting lost in a new song, or rewatching episodes of my all-time fave anime.
                </p>
                
                <p className="body-regular text-muted-foreground">
                  Each of these experiences fuels my creativity and curiosity, both in my work and life. Let's connect and explore the stories data can tell!
                </p>
                
                <div className="pt-4">
                  <a 
                    href="mailto:hello@thedejijoseph.com?subject=Partnership"
                    className="btn-primary"
                  >
                    <Mail className="w-4 h-4" />
                    Get in touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Work & Projects Section */}
        <section className="section-padding section-spacing bg-muted/30 relative overflow-hidden">
          {/* Geometric accent */}
          <div className="absolute top-0 left-0 w-40 h-40 border-4 border-primary/10 -translate-x-1/2 -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="mb-16 md:mb-20">
              <div className="accent-bar mb-6" />
              <h2 className="heading-section">
                Recent Work <span className="text-primary">&</span> Projects
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {workExperience.map((job, index) => (
                <div key={index} className="space-y-5 card-hover group">
                  <div className="w-8 h-1 bg-primary group-hover:w-12 transition-all duration-300" />
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                    <p className="text-sm text-primary font-medium">{job.period}</p>
                  </div>
                  <p className="body-regular text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding section-spacing bg-secondary text-secondary-foreground relative overflow-hidden">
          {/* Geometric accents */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30" />
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary/20" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div className="space-y-6">
                <div className="w-16 h-1 bg-primary" />
                <h2 className="heading-section">
                  wanna work
                  <br />
                  <span className="text-primary">with me?</span>
                </h2>
              </div>
              
              <a 
                href="mailto:hello@thedejijoseph.com?subject=Partnership"
                className="btn-primary bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Mail className="w-4 h-4" />
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
