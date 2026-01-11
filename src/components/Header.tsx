import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="section-padding py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Deji Joseph" className="h-8 w-auto" />
          <span className="font-display font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            The Deji Joseph
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <a 
            href="https://notes.thedejijoseph.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Blog
          </a>
          <a 
            href="mailto:hello@thedejijoseph.com?subject=Partnership" 
            className="btn-primary hidden md:inline-flex"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;