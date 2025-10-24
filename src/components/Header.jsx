import { useState, useEffect } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "topics", "schedule", "speakers", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "मुख्य पृष्ठ", id: "home" },
    { href: "#topics", label: "विषय", id: "topics" },
    { href: "#schedule", label: "कार्यक्रम", id: "schedule" },
    { href: "#speakers", label: "वक्ता", id: "speakers" },
    { href: "#contact", label: "संपर्क", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className="bg-gradient-to-r from-orange-500 to-amber-400 shadow-lg sticky top-0 z-50"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <FaGlobe className="text-orange-600 text-lg sm:text-xl" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">
                अंतर्राष्ट्रीय आर्य महासम्मेलन
              </h1>
              <p className="text-xs sm:text-sm text-orange-100">
                The Youth Ignites 2025
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-6"
            role="navigation"
            aria-label="मुख्य नेवीगेशन"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? "text-orange-200 bg-white/10 shadow-sm"
                    : "text-white hover:text-orange-200 hover:bg-white/5"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-orange-200 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="मोबाइल नेवीगेशन"
        >
          <div className="border-t border-orange-400 mt-4 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-medium transition-all duration-300 px-4 py-3 rounded-lg ${
                    activeSection === item.id
                      ? "text-orange-200 bg-white/10"
                      : "text-white hover:text-orange-200 hover:bg-white/5"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
