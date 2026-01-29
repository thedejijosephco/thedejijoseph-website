
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text on left */}
            <div className="space-y-8">
              <div className="accent-bar" />
              
              {/* Subtle tagline labels */}
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Analyst • Engineer • Strategist
              </p>
              
              <h1 className="heading-hero">
                Making AI <span className="text-primary">Work</span>
                <br />
                For You
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-semibold text-foreground font-display tracking-tight">
                LLMOps Engineer
              </p>
              
              <p className="body-large text-muted-foreground max-w-xl">
                I want to work with founders, innovators and decision-makers to transform data into insights and products that create outsized value.
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
            
            {/* Geometric composition on right */}
            <div className="hidden lg:block relative h-[500px]">
              {/* Large square - back layer */}
              <div className="absolute top-8 right-0 w-64 h-64 border-4 border-primary opacity-30" />
              
              {/* Medium square - mid layer, offset */}
              <div className="absolute top-24 right-16 w-48 h-48 bg-primary opacity-10" />
              
              {/* Small square - front layer */}
              <div className="absolute top-40 right-32 w-32 h-32 border-2 border-primary opacity-60" />
              
              {/* Horizontal lines */}
              <div className="absolute top-16 right-72 w-24 h-[2px] bg-primary opacity-40" />
              <div className="absolute top-20 right-80 w-16 h-[2px] bg-primary opacity-30" />
              <div className="absolute top-24 right-72 w-20 h-[2px] bg-primary opacity-20" />
              
              {/* Vertical lines */}
              <div className="absolute top-48 right-8 w-[2px] h-32 bg-primary opacity-40" />
              <div className="absolute top-56 right-12 w-[2px] h-24 bg-primary opacity-25" />
              
              {/* Bottom accent squares */}
              <div className="absolute bottom-16 right-24 w-20 h-20 border-2 border-primary opacity-40" />
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-primary opacity-20" />
              
              {/* Diagonal accent line */}
              <div className="absolute top-32 right-48 w-40 h-[2px] bg-primary opacity-30 rotate-45 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
