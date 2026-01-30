import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { name: "X", url: "https://x.com/thedejijoseph" },
    { name: "Instagram", url: "https://instagram.com/thedejijoseph" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thedejijoseph" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", url: "https://notes.thedejijoseph.com/" },
  ];

  return (
    <footer className="section-padding section-spacing border-t border-border relative overflow-hidden">
      
      {/* Geometric accent */}
      <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-primary/10 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Deji Joseph" className="h-10 w-auto" />
            </Link>
            <p className="body-regular text-muted-foreground max-w-xs">
              LLMOps Engineer building AI infrastructure that delivers real business value.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.path ? (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    className="nav-link w-fit"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link w-fit"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link w-fit inline-flex items-center gap-2"
                >
                  {link.name}
                  <span className="text-primary">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 The Deji Joseph Co. All rights reserved.
          </p>
          <div className="accent-bar" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;