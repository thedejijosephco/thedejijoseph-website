import lifestyleImage from "@/assets/lifestyle-image.jpg";

const CallToAction = () => {
  return (
    <section className="section-padding section-spacing bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={lifestyleImage} 
              alt="Working environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="heading-section">
            wanna work with me?
          </h2>
          <a 
            href="mailto:hello@thedejijoseph.com?subject=Partnership"
            className="cta-link"
          >
            Get in touch
            <span className="transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
