import aboutHeadshot from "@/assets/about-headshot.avif";

const Introduction = () => {
  return (
    <section className="section-padding py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text on left */}
          <div className="space-y-6">
            <div className="accent-bar" />
            <h2 className="heading-section">
              Hi, I'm <span className="text-primary">Deji</span>
            </h2>
            <p className="body-large text-muted-foreground">
              A data analyst and strategist with a passion for uncovering insights 
              that drive meaningful business decisions. I specialize in transforming 
              complex datasets into clear, actionable strategies.
            </p>
            <p className="body-base text-muted-foreground">
              With expertise in data visualization, statistical analysis, and 
              strategic thinking, I help organizations see beyond the numbers 
              to understand the stories their data is telling.
            </p>
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
    </section>
  );
};

export default Introduction;
