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
  const handleScrollToSchedule = () => {
    const scheduleElement = document.getElementById("schedule");
    if (scheduleElement) {
      const offsetTop = scheduleElement.offsetTop - 60; // Reduced for smaller mobile navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToTopics = () => {
    const topicsElement = document.getElementById("topics");
    if (topicsElement) {
      const offsetTop = topicsElement.offsetTop - 60; // Reduced for smaller mobile navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-orange-300 via-amber-600 to-yellow-600 text-white py-6 sm:py-12 lg:py-20 xl:py-24 2xl:py-32 relative overflow-hidden min-h-screen flex items-center"
      role="banner"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-10 sm:top-32 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-5 sm:bottom-32 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          {/* Main Title */}
          <div className="mb-6 sm:mb-8 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 mb-3 sm:mb-4 lg:mb-6">
              <FaGlobe className="text-yellow-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl animate-pulse flex-shrink-0" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-center break-words">
                अंतर्राष्ट्रीय आर्य महासम्मेलन 2025
              </h1>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-orange-100 mb-3 sm:mb-4 lg:mb-6 px-2 leading-relaxed">
              The Youth Ignites — Where Ideas Turn into Actions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-orange-200 max-w-4xl mx-auto px-2 leading-relaxed">
              युवाओं का, युवाओं के लिए, युवाओं द्वारा आयोजित महासम्मेलन
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0">
            {/* Date and Venue Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-3 sm:mb-4 text-yellow-200 flex items-center justify-center gap-2 sm:gap-3">
                <FaCalendarAlt className="text-yellow-300 text-base sm:text-lg" />
                दिनांक एवं स्थल
              </h3>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/15 transition-colors">
                  <p className="font-semibold mb-3 text-sm sm:text-base lg:text-lg text-center">
                    30 अक्टूबर एवं 2 नवम्बर
                  </p>
                  <div className="text-center text-orange-200">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMapMarkerAlt className="text-xs flex-shrink-0" />
                      <span className="text-xs sm:text-sm">
                        Hall No. 6, स्वर्णजयंति पार्क
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm block">
                      रोहिणी, नई दिल्ली
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/15 transition-colors">
                  <p className="font-semibold mb-3 text-sm sm:text-base lg:text-lg text-center">
                    31 अक्टूबर एवं 1 नवम्बर
                  </p>
                  <div className="text-center text-orange-200">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMapMarkerAlt className="text-xs flex-shrink-0" />
                      <span className="text-xs sm:text-sm">
                        Hall No. 4, स्वर्णजयंति पार्क
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm block">
                      रोहिणी, नई दिल्ली
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About The Youth Ignites Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-3 sm:mb-4 text-yellow-200 flex items-center justify-center gap-2 sm:gap-3">
                <FaSun className="text-yellow-300 text-base sm:text-lg" />
                The Youth Ignites
              </h3>
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-orange-100 text-center">
                "The Youth Ignites" एक ऐसा विशेष युवा मंच है — युवाओं द्वारा,
                युवाओं के लिए और युवाओं का मंच। यहां देश-विदेश से आए विचारशील
                युवा धर्म, विज्ञान, समाज, राष्ट्र और विश्व के विविध विषयों पर
                मंथन करेंगे — जहां विचार केवल बोले नहीं जाएंगे, बल्कि कर्म में
                परिणत होंगे।
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-2">
            <button
              onClick={handleScrollToSchedule}
              className="w-full sm:w-auto max-w-xs sm:max-w-none bg-white text-orange-600 px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 flex items-center justify-center gap-2 lg:gap-3"
              aria-label="कार्यक्रम अनुसूची देखें"
            >
              <FaCalendarAlt className="text-sm sm:text-base lg:text-lg" />{" "}
              कार्यक्रम देखें
            </button>
            <button
              onClick={handleScrollToTopics}
              className="w-full sm:w-auto max-w-xs sm:max-w-none border-2 border-white text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:bg-white hover:text-orange-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 flex items-center justify-center gap-2 lg:gap-3"
              aria-label="मुख्य विषय देखें"
            >
              <FaBook className="text-sm sm:text-base lg:text-lg" /> मुख्य विषय
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-2">
            <div className="bg-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-1 lg:mb-2">
                80+
              </div>
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-orange-200 leading-tight">
                विशेषज्ञ वक्ता
              </div>
            </div>
            <div className="bg-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-1 lg:mb-2">
                4
              </div>
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-orange-200 leading-tight">
                दिन
              </div>
            </div>
            <div className="bg-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-1 lg:mb-2">
                20+
              </div>
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-orange-200 leading-tight">
                मुख्य विषय
              </div>
            </div>
            <div className="bg-white/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 xl:p-8 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-1 lg:mb-2">
                ∞
              </div>
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-orange-200 leading-tight">
                प्रेरणा
              </div>
            </div>
          </div>

          {/* Organizers Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 mx-2 sm:mx-0">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-yellow-200 flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <FaBolt className="text-yellow-300 text-base sm:text-lg" />
              युवा आर्य समाज का युवामंच
            </p>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-orange-200 mb-4 sm:mb-5 text-center leading-relaxed">
              युवाओं की ऊर्जा • वैदिक विचार • कर्मशीलता का संगम
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base">
              <div className="flex items-center gap-2 text-center">
                <FaUsers className="text-yellow-300 text-sm flex-shrink-0" />
                <span className="break-words">
                  <strong>संयोजक:</strong> कृतेश आर्य
                </span>
              </div>
              <div className="hidden sm:block text-orange-300 text-lg">|</div>
              <div className="flex items-center gap-2 text-center">
                <FaUsers className="text-yellow-300 text-sm flex-shrink-0" />
                <span className="break-words">
                  <strong>सह-संयोजक:</strong> मोहित विज्ञान दर्शन
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
