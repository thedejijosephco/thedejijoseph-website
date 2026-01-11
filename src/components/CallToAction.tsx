import lifestyleImage from "@/assets/lifestyle-image.jpg";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding section-spacing bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30" />
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary/20" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 md:mb-24">
          <div className="aspect-[16/9] overflow-hidden relative group">
            <img 
              src={lifestyleImage} 
              alt="Working environment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-primary" />
            <h2 className="heading-section">
              wanna work
              <br />
              <span className="text-primary">with me?</span>
            </h2>
          </div>
          
          <a 
            href="mailto:hello@thedejijoseph.com?subject=Partnership"
            className="btn-primary bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Mail className="w-4 h-4" />
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;