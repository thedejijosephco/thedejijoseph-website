import headshot from "@/assets/headshot.png";
import { ArrowRight } from "lucide-react";

const Introduction = () => {
  return (
    <section className="section-padding section-spacing bg-muted/30 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 border-4 border-primary/20 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden relative group">
              <img 
                src={headshot} 
                alt="Deji Joseph"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Frame accents */}
              <div className="absolute top-4 left-4 w-full h-full border-4 border-primary -z-10" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="accent-bar" />
              <h2 className="heading-section">
                I'm <span className="text-primary">Deji</span>
              </h2>
              <p className="heading-subsection text-muted-foreground font-normal">
                It's nice to meet you
              </p>
            </div>
            
            <div className="space-y-6 max-w-lg">
              <p className="body-large text-muted-foreground">
                You've found my page so I'll tell you a bit about me.
              </p>
              <p className="body-large">
                I turn bits and bytes of information into <span className="text-primary font-semibold">insights and value!</span>
              </p>
            </div>
            
            <a 
              href="/about"
              className="cta-link group"
            >
              <span className="border-b-2 border-primary pb-1">More about me</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;