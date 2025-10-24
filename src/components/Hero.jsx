import { useState } from "react";
import {
  FaGlobe,
  FaCalendarAlt,
  FaSun,
  FaBolt,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleScrollToSchedule = () => {
    const scheduleElement = document.getElementById("schedule");
    if (scheduleElement) {
      const offsetTop = scheduleElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToTopics = () => {
    const topicsElement = document.getElementById("topics");
    if (topicsElement) {
      const offsetTop = topicsElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-orange-300 via-amber-600 to-yellow-600 text-white py-12 sm:py-20 relative overflow-hidden"
      role="banner"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-fadeInUp">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 flex-wrap">
              <FaGlobe className="text-yellow-300 text-3xl sm:text-4xl animate-pulse" />
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                अंतर्राष्ट्रीय आर्य महासम्मेलन 2025
              </h1>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-orange-100 mb-2">
              The Youth Ignites — Where Ideas Turn into Actions
            </h2>
            <p className="text-sm sm:text-base text-orange-200 max-w-2xl mx-auto">
              युवाओं का, युवाओं के लिए, युवाओं द्वारा आयोजित महासम्मेलन
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Date and Venue Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-200 flex items-center justify-center gap-3">
                <FaCalendarAlt className="text-yellow-300" />
                दिनांक एवं स्थल
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
                  <p className="font-semibold mb-1">30 अक्टूबर एवं 2 नवम्बर</p>
                  <div className="flex items-center justify-center gap-2 text-orange-200">
                    <FaMapMarkerAlt className="text-xs" />
                    <span>
                      Hall No. 6, स्वर्णजयंति पार्क, रोहिणी, नई दिल्ली
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
                  <p className="font-semibold mb-1">31 अक्टूबर एवं 1 नवम्बर</p>
                  <div className="flex items-center justify-center gap-2 text-orange-200">
                    <FaMapMarkerAlt className="text-xs" />
                    <span>
                      Hall No. 4, स्वर्णजयंति पार्क, रोहिणी, नई दिल्ली
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About The Youth Ignites Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-200 flex items-center justify-center gap-3">
                <FaSun className="text-yellow-300" />
                The Youth Ignites
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-orange-100">
                "The Youth Ignites" एक ऐसा विशेष युवा मंच है — युवाओं द्वारा,
                युवाओं के लिए और युवाओं का मंच। यहां देश-विदेश से आए विचारशील
                युवा धर्म, विज्ञान, समाज, राष्ट्र और विश्व के विविध विषयों पर
                मंथन करेंगे — जहां विचार केवल बोले नहीं जाएंगे, बल्कि कर्म में
                परिणत होंगे।
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleScrollToSchedule}
              className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 flex items-center gap-2"
              aria-label="कार्यक्रम अनुसूची देखें"
            >
              <FaCalendarAlt /> कार्यक्रम देखें
            </button>
            <button
              onClick={handleScrollToTopics}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-white hover:text-orange-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 flex items-center gap-2"
              aria-label="मुख्य विषय देखें"
            >
              <FaBook /> मुख्य विषय
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">
                80+
              </div>
              <div className="text-xs sm:text-sm text-orange-200">
                विशेषज्ञ वक्ता
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">
                4
              </div>
              <div className="text-xs sm:text-sm text-orange-200">दिन</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">
                20+
              </div>
              <div className="text-xs sm:text-sm text-orange-200">
                मुख्य विषय
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">
                ∞
              </div>
              <div className="text-xs sm:text-sm text-orange-200">प्रेरणा</div>
            </div>
          </div>

          {/* Organizers Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <p className="text-lg sm:text-xl font-semibold text-yellow-200 flex items-center justify-center gap-3 mb-2">
              <FaBolt className="text-yellow-300" />
              युवा आर्य समाज का युवामंच
            </p>
            <p className="text-sm sm:text-lg text-orange-200 mb-4">
              युवाओं की ऊर्जा • वैदिक विचार • कर्मशीलता का संगम
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <FaUsers className="text-yellow-300" />
                <span>
                  <strong>संयोजक:</strong> कृतेश आर्य
                </span>
              </div>
              <div className="hidden sm:block text-orange-300">|</div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-yellow-300" />
                <span>
                  <strong>सह-संयोजक:</strong> मोहित विज्ञानदर्शन
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
