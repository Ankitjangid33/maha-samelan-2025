import { useState } from "react";
import {
  FaGlobe,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBolt,
  FaUsers,
  FaComments,
  FaQuestionCircle,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Event Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-400 flex items-center gap-3">
                <FaGlobe />
                अंतर्राष्ट्रीय आर्य महासम्मेलन
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                The Youth Ignites — Where Ideas Turn into Actions
              </p>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">30 अक्टूबर - 2 नवम्बर 2025</p>
                    <p className="text-gray-400 text-sm">
                      चार दिवसीय महासम्मेलन
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">स्वर्णजयंति पार्क</p>
                    <p className="text-gray-400 text-sm">रोहिणी, नई दिल्ली</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBolt className="text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">युवा आर्य समाज का युवामंच</p>
                    <p className="text-gray-400 text-sm">
                      युवाओं की ऊर्जा • वैदिक विचार • कर्मशीलता का संगम
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizers */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-orange-400">
                आयोजकगण
              </h4>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="font-semibold text-orange-300">संयोजक</p>
                  <p>कृतेश आर्य</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="font-semibold text-orange-300">सह-संयोजक</p>
                  <p>मोहित विज्ञानदर्शन</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-orange-400">
                त्वरित लिंक
              </h4>
              <nav className="space-y-2" aria-label="फुटर नेवीगेशन">
                {[
                  { href: "#home", label: "मुख्य पृष्ठ" },
                  { href: "#topics", label: "मुख्य विषय" },
                  { href: "#schedule", label: "कार्यक्रम अनुसूची" },
                  { href: "#speakers", label: "वक्ता" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-lg sm:text-xl font-semibold mb-6 text-center text-orange-400">
              कार्यक्रम की मुख्य विशेषताएं
            </h4>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors group">
                <div className="text-2xl sm:text-3xl mb-3 flex justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <FaUsers />
                </div>
                <h5 className="font-semibold text-orange-300 mb-2">
                  80+ विशेषज्ञ वक्ता
                </h5>
                <p className="text-gray-400 text-xs sm:text-sm">
                  देश-विदेश के प्रतिष्ठित विद्वान और विचारक
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors group">
                <div className="text-2xl sm:text-3xl mb-3 flex justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <FaComments />
                </div>
                <h5 className="font-semibold text-orange-300 mb-2">
                  संवादात्मक चर्चा
                </h5>
                <p className="text-gray-400 text-xs sm:text-sm">
                  पारंपरिक व्याख्यान नहीं, खुली चर्चा
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors group">
                <div className="text-2xl sm:text-3xl mb-3 flex justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <FaQuestionCircle />
                </div>
                <h5 className="font-semibold text-orange-300 mb-2">
                  प्रश्न-उत्तर सत्र
                </h5>
                <p className="text-gray-400 text-xs sm:text-sm">
                  हर सत्र में श्रोता भागीदारी और समाधान
                </p>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          {showBackToTop && (
            <div className="text-center mb-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="वापस ऊपर जाएं"
              >
                <FaChevronUp />
                वापस ऊपर जाएं
              </button>
            </div>
          )}

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm sm:text-base">
                © 2025 अंतर्राष्ट्रीय आर्य महासम्मेलन - The Youth Ignites. सभी
                अधिकार सुरक्षित।
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                {/* s */}
              </div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              युवा आर्य समाज द्वारा आयोजित | Where Ideas Turn into Actions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
