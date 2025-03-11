import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark section-container">
      <div className="content-container">
        {/* Main footer content */}
        <div className="flex flex-col gap-8">
          {/* Left section with navigation */}
          <nav className="flex gap-6">
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#work" className="footer-link">
              Work
            </a>
            <a href="#skills" className="footer-link">
              Skills
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </nav>
          {/* Social links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/LukeZacher"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/lukezacher"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:zacherluke@gmail.com" className="footer-link">
              <Mail size={20} />
            </a>
          </div>
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="bg-secondary hover:bg-secondary-light text-neutral-50 p-2 rounded-full transition-colors mr-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          {/* Copyright */}
          <div className="text-neutral-400 text-sm ">
            <p>© 2025 Luke Zacher. All rights reserved.</p>
            <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
