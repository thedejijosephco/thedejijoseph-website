import aboutHeadshot from "@/assets/about-headshot.avif";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geometric-grid opacity-30" />
      
      {/* Accent shapes */}
      <div className="absolute top-32 right-10 w-24 h-24 md:w-40 md:h-40 border-4 border-primary opacity-20" />
      <div className="absolute bottom-20 left-10 w-16 h-16 md:w-24 md:h-24 bg-primary opacity-10" />
      
      <div className="section-padding pt-32 pb-12 md:pt-44 md:pb-20 flex-1 relative z-10">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
            {/* Text on left */}
            <div className="space-y-8">
              <div className="accent-bar" />
              <h1 className="heading-hero">
                Looking
                <br />
                <span className="text-primary">Beyond</span>
                <br />
                What You See
              </h1>
              <p className="body-large text-muted-foreground max-w-xl">
                Data analyst & strategist turning complex information into actionable insights that drive business decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:hello@thedejijoseph.com?subject=Partnership"
                  className="btn-primary"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="/about"
                  className="btn-outline"
                >
                  Learn more
                </a>
              </div>
            </div>
            
            {/* Image on right */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
