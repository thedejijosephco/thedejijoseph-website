import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="section-padding py-6 flex items-center justify-between">
        <Link to="/" className="nav-link">
          Deji Joseph
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <a 
            href="mailto:hello@thedejijoseph.com?subject=Partnership" 
            className="nav-link"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
