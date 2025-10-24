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
      const offsetTop = targetElement.offsetTop - 60; // Account for smaller mobile header
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
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-2 sm:py-3 lg:py-4 xl:py-5 navbar-container max-w-7xl xl:max-w-8xl 2xl:max-w-9xl">
        <div className="navbar-content">
          {/* Logo - Left side for all screens */}
          <div className="navbar-logo flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              <FaGlobe className="text-orange-600 text-sm sm:text-lg lg:text-xl" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="mobile-title text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight pt-2 pb-1">
                अंतर्राष्ट्रीय आर्य महासम्मेलन
              </h1>
              <p className="mobile-subtitle text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100">
                The Youth Ignites 2025
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav
            className="hidden lg:flex space-x-4 lg:space-x-6 xl:space-x-8 flex-shrink-0"
            role="navigation"
            aria-label="मुख्य नेवीगेशन"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-all duration-300 px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 rounded-lg text-sm lg:text-base xl:text-lg whitespace-nowrap ${
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
            className="lg:hidden navbar-hamburger text-white hover:text-orange-200 rounded-lg transition-colors focus focus:ring-2 focus:ring-white/20 flex-shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
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
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="मोबाइल नेवीगेशन"
        >
          <div className="border-t border-orange-400 mt-2 sm:mt-3 pt-2 sm:pt-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-medium transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-sm sm:text-base ${
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
