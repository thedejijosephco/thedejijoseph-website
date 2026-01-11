import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headshot from "@/assets/headshot.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-40">
        <section className="section-padding section-spacing">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-hero mb-12">About</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div className="md:col-span-1">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={headshot} 
                    alt="Deji Joseph"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <p className="body-large">
                  I'm Deji Joseph, a data enthusiast passionate about transforming complex information into actionable insights.
                </p>
                <p className="body-regular text-muted-foreground">
                  I turn bits and bytes of information into insights and value. My work sits at the intersection of data, technology, and creative problem-solving.
                </p>
                <p className="body-regular text-muted-foreground">
                  When I'm not diving into datasets, you'll find me exploring new ideas, connecting with interesting people, and continuously learning about the world around us.
                </p>
                <div className="pt-8">
                  <a 
                    href="mailto:hello@thedejijoseph.com?subject=Partnership"
                    className="cta-link"
                  >
                    Get in touch
                    <span className="transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
