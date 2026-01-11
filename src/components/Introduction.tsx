import headshot from "@/assets/headshot.png";

const Introduction = () => {
  return (
    <section className="section-padding section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <img 
              src={headshot} 
              alt="Deji Joseph"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-2">
            <h2 className="heading-section">I'm Deji</h2>
            <h2 className="heading-section italic text-muted-foreground">
              It's nice to meet you
            </h2>
          </div>
          <div className="space-y-6 max-w-lg">
            <p className="body-large text-muted-foreground">
              You've found my page so I'll tell you a bit about me.
            </p>
            <p className="body-large">
              I turn bits and bytes of information into insights and value!
            </p>
          </div>
          <a 
            href="/about"
            className="cta-link"
          >
            More about me
            <span className="transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
