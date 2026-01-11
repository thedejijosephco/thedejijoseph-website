import heroImage from "@/assets/hero-image.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geometric-grid opacity-30" />
      
      {/* Accent shapes */}
      <div className="absolute top-32 right-10 w-24 h-24 md:w-40 md:h-40 border-4 border-primary opacity-20" />
      <div className="absolute bottom-20 left-10 w-16 h-16 md:w-24 md:h-24 bg-primary opacity-10" />
      
      <div className="section-padding pt-32 pb-12 md:pt-44 md:pb-20 relative z-10">
        <div className="max-w-5xl">
          <div className="accent-bar mb-8" />
          <h1 className="heading-hero">
            Looking
            <br />
            <span className="text-primary">Beyond</span>
            <br />
            What You See
          </h1>
          <p className="body-large text-muted-foreground mt-8 max-w-xl">
            Data analyst & strategist turning complex information into actionable insights that drive business decisions.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
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
      </div>
      
      <div className="flex-1 section-padding pb-8 relative z-10">
        <div className="h-full min-h-[45vh] overflow-hidden relative group">
          <img 
            src={heroImage} 
            alt="Hero visual"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;