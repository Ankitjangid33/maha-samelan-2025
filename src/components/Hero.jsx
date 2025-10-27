import {
  FaGlobe,
  FaCalendarAlt,
  FaSun,
  FaBolt,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaStar,
  FaFire,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Hero = () => {
  const [animatedStats, setAnimatedStats] = useState({
    speakers: 0,
    days: 0,
    topics: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    setTimeout(() => {
      animateCounter(90, 'speakers');
      animateCounter(4, 'days');
      animateCounter(20, 'topics');
    }, 500);
  }, []);

  const handleScrollToSchedule = () => {
    const scheduleElement = document.getElementById("schedule");
    if (scheduleElement) {
      const offsetTop = scheduleElement.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToTopics = () => {
    const topicsElement = document.getElementById("topics");
    if (topicsElement) {
      const offsetTop = topicsElement.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400 text-white py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 relative overflow-hidden min-h-screen flex items-center"
      role="banner"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Colorful Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-amber-300 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-yellow-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-5 w-3 h-3 bg-orange-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-3/4 right-5 w-2 h-2 bg-amber-200 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3s' }}></div>

        {/* Colorful Geometric Shapes */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 md:top-12 md:left-12 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-yellow-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-20 right-10 sm:top-32 sm:right-20 md:top-40 md:right-24 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-orange-200 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 md:bottom-24 md:left-24 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-amber-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-5 sm:bottom-32 sm:right-10 md:bottom-40 md:right-12 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-yellow-300 rounded-full opacity-15 animate-spin" style={{ animationDuration: '15s' }}></div>

        {/* Vibrant Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-yellow-500/20 via-amber-500/15 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-400/20 via-yellow-500/15 to-transparent"></div>

        {/* Colorful Floating Icons */}
        <div className="absolute top-1/4 left-1/4 opacity-15 animate-float">
          <FaStar className="text-3xl md:text-4xl text-yellow-200" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <FaFire className="text-2xl md:text-3xl text-orange-300" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-15 animate-float" style={{ animationDelay: '4s' }}>
          <FaRocket className="text-4xl md:text-5xl text-amber-300" />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-10 animate-float" style={{ animationDelay: '6s' }}>
          <FaStar className="text-3xl md:text-4xl text-orange-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 text-center relative z-10 w-full">
        <div className="max-w-6xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          {/* Main Title */}
          <div className={`mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="relative">
                <FaGlobe className="text-orange-300 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl animate-spin flex-shrink-0" style={{ animationDuration: '10s' }} />
                <div className="absolute inset-0 text-amber-300 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl animate-ping opacity-30">
                  <FaGlobe />
                </div>
                <div className="absolute inset-0 text-gray-100 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl animate-pulse opacity-20">
                  <FaGlobe />
                </div>
              </div>
              <h1 className="pt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-center break-words text-white drop-shadow-lg">
                अंतर्राष्ट्रीय आर्य महासम्मेलन 2025
              </h1>
            </div>
            <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold px-2 leading-relaxed relative z-10">
                <span className="text-white font-bold drop-shadow-md">
                  The Youth Ignites
                </span>
                <span className="text-white/90"> — </span>
                <span className="text-orange-100 drop-shadow-md">
                  Where Ideas Turn into Actions
                </span>
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-400/20 to-yellow-400/20 blur-xl rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-white max-w-4xl mx-auto px-2 leading-relaxed flex items-center justify-center gap-2 flex-wrap drop-shadow-md">
              <FaHeart className="text-orange-300 animate-pulse" />
              <span className="font-medium">
                युवाओं का, युवाओं के लिए, युवाओं द्वारा आयोजित महासम्मेलन
              </span>
              <FaHeart className="text-orange-300 animate-pulse" />
            </p>
          </div>

          {/* Event Details Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Date and Venue Card */}
            <div className="bg-gradient-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/20 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-7 lg:p-8 border border-orange-300/40 hover:border-amber-300/60 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 text-white drop-shadow-md flex items-center justify-center gap-2 sm:gap-3">
                <FaCalendarAlt className="text-amber-300 text-base sm:text-lg md:text-xl animate-bounce group-hover:animate-spin" />
                दिनांक एवं स्थल
              </h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-4 text-xs sm:text-sm md:text-sm lg:text-base">
                <div className="bg-gradient-to-r from-orange-400/20 via-amber-400/15 to-yellow-400/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-4 hover:from-orange-400/30 hover:via-amber-400/25 hover:to-yellow-400/30 transition-all duration-300 border border-orange-300/30 hover:border-amber-300/50">
                  <p className="font-semibold mb-3 text-sm sm:text-base md:text-base lg:text-lg text-center text-white drop-shadow-md">
                    30 अक्टूबर एवं 2 नवम्बर
                  </p>
                  <div className="text-center text-orange-100">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMapMarkerAlt className="text-xs md:text-sm flex-shrink-0 text-orange-300 animate-pulse" />
                      <span className="text-xs sm:text-sm md:text-sm">
                        Hall No. 6, स्वर्णजयंति पार्क
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-sm block">
                      रोहिणी, नई दिल्ली
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-400/20 via-yellow-400/15 to-orange-400/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-4 hover:from-amber-400/30 hover:via-yellow-400/25 hover:to-orange-400/30 transition-all duration-300 border border-amber-300/30 hover:border-yellow-300/50">
                  <p className="font-semibold mb-3 text-sm sm:text-base md:text-base lg:text-lg text-center text-white drop-shadow-md">
                    31 अक्टूबर एवं 1 नवम्बर
                  </p>
                  <div className="text-center text-orange-100">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMapMarkerAlt className="text-xs md:text-sm flex-shrink-0 text-amber-300 animate-pulse" />
                      <span className="text-xs sm:text-sm md:text-sm">
                        Hall No. 4, स्वर्णजयंति पार्क
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-sm block">
                      रोहिणी, नई दिल्ली
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About The Youth Ignites Card */}
            <div className="bg-gradient-to-br from-yellow-500/20 via-amber-500/15 to-orange-500/20 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-7 lg:p-8 border border-yellow-300/40 hover:border-amber-300/60 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 text-white drop-shadow-md flex items-center justify-center gap-2 sm:gap-3">
                <FaSun className="text-orange-300 text-base sm:text-lg md:text-xl animate-spin group-hover:animate-bounce" style={{ animationDuration: '3s' }} />
                The Youth Ignites
              </h3>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed text-orange-100 text-center relative">
                <span className="relative z-10">
                  "The Youth Ignites" एक ऐसा विशेष युवा मंच है — युवाओं द्वारा,
                  युवाओं के लिए और युवाओं का मंच। यहां देश-विदेश से आए विचारशील
                  युवा धर्म, विज्ञान, समाज, राष्ट्र और विश्व के विविध विषयों पर
                  मंथन करेंगे — जहां विचार केवल बोले नहीं जाएंगे, बल्कि कर्म में
                  परिणत होंगे।
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-amber-400/10 to-orange-400/15 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className={`flex flex-col sm:flex-row md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={handleScrollToSchedule}
              className="w-full sm:w-auto md:w-auto max-w-xs sm:max-w-none md:max-w-none bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white px-6 sm:px-8 md:px-9 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base md:text-base lg:text-lg xl:text-xl hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 hover:scale-110 hover:shadow-2xl transition-all duration-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300/50 focus:ring-offset-2 focus:ring-offset-amber-600 flex items-center justify-center gap-2 md:gap-3 lg:gap-3 group relative overflow-hidden"
              aria-label="कार्यक्रम अनुसूची देखें"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <FaCalendarAlt className="text-sm sm:text-base md:text-base lg:text-lg group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">कार्यक्रम देखें</span>
            </button>
            <button
              onClick={handleScrollToTopics}
              className="w-full sm:w-auto md:w-auto max-w-xs sm:max-w-none md:max-w-none border-2 border-amber-300 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 text-white px-6 sm:px-8 md:px-9 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base md:text-base lg:text-lg xl:text-xl hover:from-yellow-400 hover:via-amber-400 hover:to-orange-400 hover:text-white hover:scale-110 hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-amber-300/50 focus:ring-offset-2 focus:ring-offset-orange-600 flex items-center justify-center gap-2 md:gap-3 lg:gap-3 group relative overflow-hidden backdrop-blur-sm"
              aria-label="मुख्य विषय देखें"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaBook className="text-sm sm:text-base md:text-base lg:text-lg group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">मुख्य विषय</span>
            </button>
          </div>

          {/* Key Stats */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-orange-500/25 via-amber-500/20 to-yellow-500/25 backdrop-blur-md rounded-lg md:rounded-xl lg:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-center hover:from-orange-500/35 hover:via-amber-500/30 hover:to-yellow-500/35 hover:scale-110 transition-all duration-500 border border-orange-300/40 hover:border-amber-300/60 shadow-xl hover:shadow-2xl group">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 lg:mb-2 text-white drop-shadow-lg group-hover:animate-pulse">
                {animatedStats.speakers}+
              </div>
              <div className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100 leading-tight flex items-center justify-center gap-1">
                <FaUsers className="text-xs md:text-sm opacity-70 text-orange-300" />
                विशेषज्ञ वक्ता
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/25 via-yellow-500/20 to-orange-500/25 backdrop-blur-md rounded-lg md:rounded-xl lg:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-center hover:from-amber-500/35 hover:via-yellow-500/30 hover:to-orange-500/35 hover:scale-110 transition-all duration-500 border border-amber-300/40 hover:border-yellow-300/60 shadow-xl hover:shadow-2xl group">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 lg:mb-2 text-white drop-shadow-lg group-hover:animate-pulse">
                {animatedStats.days}
              </div>
              <div className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100 leading-tight flex items-center justify-center gap-1">
                <FaCalendarAlt className="text-xs md:text-sm opacity-70 text-amber-300" />
                दिन
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/25 via-orange-500/20 to-amber-500/25 backdrop-blur-md rounded-lg md:rounded-xl lg:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-center hover:from-yellow-500/35 hover:via-orange-500/30 hover:to-amber-500/35 hover:scale-110 transition-all duration-500 border border-yellow-300/40 hover:border-orange-300/60 shadow-xl hover:shadow-2xl group">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 lg:mb-2 text-white drop-shadow-lg group-hover:animate-pulse">
                {animatedStats.topics}+
              </div>
              <div className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100 leading-tight flex items-center justify-center g-1">
                <FaBook className="text-xs md:text-sm opacity-70 text-yellow-300" />
                मुख्य विषय
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-400/25 via-amber-400/20 to-yellow-400/25 backdrop-blur-md rounded-lg md:rounded-xl lg:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-center hover:from-orange-400/35 hover:via-amber-400/30 hover:to-yellow-400/35 hover:scale-110 transition-all duration-500 border border-orange-300/40 hover:border-amber-300/60 shadow-xl hover:shadow-2xl group">
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 lg:mb-2 text-white drop-shadow-lg group-hover:animate-bounce">
                ∞
              </div>
              <div className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100 leading-tight flex items-center justify-center gap-1">
                <FaHeart className="text-xs md:text-sm opacity-70 text-orange-300" />
                प्रेरणा
              </div>
            </div>
          </div>

          {/* Organizers Info */}
          <div className={`bg-gradient-to-br from-amber-500/25 via-orange-500/20 to-yellow-500/25 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-7 lg:p-8 border border-amber-300/40 mx-2 sm:mx-0 hover:from-amber-500/35 hover:via-orange-500/30 hover:to-yellow-500/35 hover:border-orange-300/60 transition-all duration-500 shadow-2xl hover:shadow-3xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-900`}>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
              <FaBolt className="text-yellow-300 text-base sm:text-lg md:text-xl animate-pulse group-hover:animate-bounce" />
              <span className="text-white drop-shadow-md">
                युवा आर्य समाज का युवामंच
              </span>
            </p>
            <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100 mb-4 sm:mb-5 md:mb-6 text-center leading-relaxed flex items-center justify-center gap-2 flex-wrap">
              <FaFire className="text-orange-300 animate-pulse" />
              <span className="font-medium">
                युवाओं की ऊर्जा • वैदिक विचार • कर्मशीलता का संगम
              </span>
              <FaFire className="text-orange-300 animate-pulse" />
            </p>
            <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-4 text-xs sm:text-sm md:text-sm lg:text-base">
              <div className="flex items-center gap-2 text-center bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full px-3 py-1 md:px-4 md:py-2 hover:from-amber-400/30 hover:to-orange-400/30 transition-colors border border-amber-300/30">
                <FaUsers className="text-amber-300 text-sm flex-shrink-0 animate-pulse" />
                <span className="break-words text-white">
                  <strong className="text-white">संयोजक:</strong> कृतेश आर्य
                </span>
              </div>
              <div className="hidden sm:block text-orange-300 text-lg animate-pulse">|</div>
              <div className="flex items-center gap-2 text-center bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full px-3 py-1 md:px-4 md:py-2 hover:from-orange-400/30 hover:to-yellow-400/30 transition-colors border border-orange-300/30">
                <FaUsers className="text-orange-300 text-sm flex-shrink-0 animate-pulse" />
                <span className="break-words text-white">
                  <strong className="text-white">सह-संयोजक:</strong> मोहित विज्ञान दर्शन
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
