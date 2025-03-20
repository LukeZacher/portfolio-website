import logo from "../../../assets/logos/site-logo.svg";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-primary min-w-full shadow-md" role="navigation">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between w-full">
        {/* Logo + Name on Left */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <img
            src={logo}
            alt="Luke Zacher Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 hover:rotate-12"
          />
          <span className="text-neutral-200 text-[17px] sm:text-lg font-semibold cursor-default">
            Luke Zacher
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="md:hidden text-neutral-200 hover:text-neutral-50 bg-primary-dark py-2 px-3"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation links in the middle */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-8">
          <a
            href="#about"
            className="text-neutral-200 hover:text-neutral-50 transition-colors font-medium relative group"
            tabIndex={0}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#work"
            className="text-neutral-200 hover:text-neutral-50 transition-colors font-medium relative group"
            tabIndex={0}
          >
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#skills"
            className="text-neutral-200 hover:text-neutral-50 transition-colors font-medium relative group"
            tabIndex={0}
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Contact button on right */}
        <a
          href="#contact"
          className="contact-button hidden md:block py-[6px] hover:scale-105"
          tabIndex={0}
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="menu"
        aria-label="Mobile navigation menu"
        className={`md:hidden absolute top-[64px] left-0 right-0 bg-primary-light/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <a
            href="#about"
            className="block text-neutral-200 hover:text-neutral-50 transition-colors font-medium"
            tabIndex={isMenuOpen ? 0 : -1}
            role="menuitem"
          >
            About
          </a>
          <a
            href="#work"
            className="block text-neutral-200 hover:text-neutral-50 transition-colors font-medium"
            tabIndex={isMenuOpen ? 0 : -1}
            role="menuitem"
          >
            Work
          </a>
          <a
            href="#skills"
            className="block text-neutral-200 hover:text-neutral-50 transition-colors font-medium"
            tabIndex={isMenuOpen ? 0 : -1}
            role="menuitem"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-neutral-800 font-medium px-4 py-1 rounded-lg transition-all duration-300"
            tabIndex={isMenuOpen ? 0 : -1}
            role="menuitem"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
