import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { name: "X", url: "https://x.com/thedejijoseph" },
    { name: "Instagram", url: "https://instagram.com/thedejijoseph" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thedejijoseph" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", url: "https://notes.thedejijoseph.com/" },
  ];

  return (
    <footer className="section-padding section-spacing border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            <p className="heading-subsection text-muted-foreground uppercase tracking-wide">
              Say Hi
            </p>
            <h2 className="heading-section">
              The Deji Joseph
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Navigation */}
            <nav className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                link.path ? (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    className="nav-link"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center gap-1"
                >
                  {link.name}
                  <span className="text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            All content copyright © 2024 The Deji Joseph Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
