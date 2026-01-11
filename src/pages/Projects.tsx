import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink, BarChart3, Database, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      category: "Data Visualization",
      description: "Built an interactive Power BI dashboard tracking sales KPIs across 12 regions, enabling real-time decision making and identifying $2M in revenue opportunities.",
      tags: ["Power BI", "SQL", "DAX"],
      icon: BarChart3,
    },
    {
      title: "Customer Segmentation Analysis",
      category: "Machine Learning",
      description: "Developed clustering models to segment 50K+ customers, resulting in targeted marketing campaigns that improved conversion rates by 35%.",
      tags: ["Python", "Scikit-learn", "Pandas"],
      icon: Database,
    },
    {
      title: "Supply Chain Optimization",
      category: "Predictive Analytics",
      description: "Created forecasting models to predict inventory needs, reducing stockouts by 40% and excess inventory costs by $500K annually.",
      tags: ["Excel", "Python", "Tableau"],
      icon: TrendingUp,
    },
    {
      title: "Financial Reporting Automation",
      category: "Process Automation",
      description: "Automated monthly financial reports using Python scripts, reducing report generation time from 3 days to 2 hours.",
      tags: ["Python", "Automation", "Excel"],
      icon: BarChart3,
    },
    {
      title: "Marketing Campaign Analysis",
      category: "Data Analytics",
      description: "Analyzed multi-channel marketing data to optimize ad spend, achieving 25% improvement in ROI across digital campaigns.",
      tags: ["Google Analytics", "SQL", "Looker"],
      icon: TrendingUp,
    },
    {
      title: "HR Analytics Dashboard",
      category: "People Analytics",
      description: "Designed comprehensive HR metrics dashboard tracking employee engagement, turnover, and recruitment funnel performance.",
      tags: ["Power BI", "HRIS", "DAX"],
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding py-20 md:py-32 relative overflow-hidden">
          {/* Geometric accents */}
          <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/20" />
          <div className="absolute bottom-10 left-20 w-16 h-16 bg-primary/10" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="accent-bar mb-6" />
              <h1 className="heading-hero mb-8">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="body-large text-muted-foreground">
                A collection of data analysis projects and case studies showcasing 
                my expertise in turning complex data into actionable business insights.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding section-spacing bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 border-4 border-primary/10 -translate-x-1/2 -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-background p-8 card-hover group border border-border/50 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <project.icon className="w-8 h-8 text-primary" />
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="body-regular text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding section-spacing bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30" />
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary/20" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="accent-bar mx-auto mb-8" />
            <h2 className="heading-section mb-6">
              Have a <span className="text-primary">Project</span> in Mind?
            </h2>
            <p className="body-large mb-10 text-secondary-foreground/80">
              Let's collaborate and turn your data challenges into opportunities for growth.
            </p>
            <a 
              href="mailto:hello@thedejijoseph.com?subject=Project Inquiry"
              className="btn-primary bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Let's Discuss
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
