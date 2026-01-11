import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="section-padding pt-32 pb-12 md:pt-40 md:pb-16">
        <h1 className="heading-hero max-w-4xl">
          Looking Beyond
          <br />
          <span className="italic">What You See</span>
        </h1>
        <div className="mt-10 md:mt-16">
          <a 
            href="mailto:hello@thedejijoseph.com?subject=Partnership"
            className="cta-link"
          >
            Get in touch
            <span className="transition-transform">→</span>
          </a>
        </div>
      </div>
      <div className="flex-1 section-padding pb-8">
        <div className="h-full min-h-[50vh] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Hero visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
