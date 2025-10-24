import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          aria-label="वापस ऊपर जाएं"
          title="वापस ऊपर जाएं"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
