import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeadshot from "@/assets/about-headshot.avif";
import { Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="section-padding section-spacing">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-6 lg:pr-8">
                <h1 className="heading-hero">Hi there!</h1>
                
                <p className="body-large">
                  I'm <strong>Deji</strong>, a data analyst with a knack for turning numbers into actionable insights. With a background in management, I thrive on solving complex problems and helping businesses make data-driven decisions.
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
                    className="inline-flex items-center gap-2 px-6 py-3 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    GET IN TOUCH
                  </a>
                </div>
              </div>
              
              <div className="lg:order-last">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={aboutHeadshot} 
                    alt="Deji Joseph"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Work & Projects Section */}
        <section className="section-padding section-spacing border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="heading-section mb-12 md:mb-16">Recent Work & Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Research Lead */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold">Research Lead</h3>
                  <p className="text-sm text-muted-foreground">Cardinal Healthcare Foundation</p>
                  <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  <p className="text-sm text-muted-foreground">2022 —— Present</p>
                </div>
                <p className="body-regular text-muted-foreground">
                  Leading research and technical teams at a pioneering non-profit dedicated to improving the health outcomes of underserved communities across Africa
                </p>
              </div>

              {/* Consultant */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold">Consultant, Business Analysis</h3>
                  <p className="text-sm text-muted-foreground">Max-Migold Facilities Management</p>
                  <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
                <p className="body-regular text-muted-foreground">
                  Developed organisation-wide advisory on strategies that improves the institution's student enrolment and engagement
                </p>
              </div>

              {/* Product Manager */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold">Product Manager</h3>
                  <p className="text-sm text-muted-foreground">myStash Inc.</p>
                  <p className="text-sm text-muted-foreground">Lagos, NG; Delaware, US</p>
                  <p className="text-sm text-muted-foreground">2022 —— 2024</p>
                </div>
                <p className="body-regular text-muted-foreground">
                  Led product development from the ground up and launch into three new markets: US, UK, CA. Built analytic dashboards and account review/screening tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase">
                  Wanna work with me?
                </h2>
                <div className="w-full h-px bg-border"></div>
                <a 
                  href="mailto:hello@thedejijoseph.com?subject=Partnership"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  GET IN TOUCH
                </a>
              </div>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-medium">
                SAY HI
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
