import { useState } from "react";
import {
  FaBolt,
  FaHeart,
  FaLightbulb,
  FaGlobe,
  FaQuoteLeft,
  FaPray,
  FaStar,
} from "react-icons/fa";

const Organizers = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    {
      text: "युवाओं की ऊर्जा और वैदिक विचारों का संगम ही भविष्य का आधार है।",
      author: "कृतेश आर्य",
    },
    {
      text: "विज्ञान और धर्म के मेल से ही सच्चा ज्ञान प्राप्त होता है।",
      author: "मोहित विज्ञान दर्शन",
    },
    {
      text: "The Youth Ignites - जहाँ विचार कर्म में बदलते हैं।",
      author: "युवा आर्य समाज",
    },
  ];

  const objectives = [
    {
      icon: FaLightbulb,
      title: "विचार मंथन",
      description: "गहन चर्चा और विचार-विमर्श के माध्यम से नए समाधान खोजना",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaBolt,
      title: "कर्म प्रेरणा",
      description: "विचारों को कार्यों में परिवर्तित करने की प्रेरणा देना",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: FaGlobe,
      title: "युवा एकता",
      description: "देश-विदेश के युवाओं को एक मंच पर लाना",
      color: "from-blue-400 to-purple-500",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-br from-amber-50 to-orange-50"
      aria-labelledby="organizers-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 sm:p-8 text-white mb-12">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <FaBolt />
                युवा आर्य समाज का युवामंच
              </h3>
              <p className="text-lg sm:text-xl text-orange-100 mb-6">
                The Youth Ignites — Where Ideas Turn into Actions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                  युवाओं की ऊर्जा
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                  वैदिक विचार
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                  कर्मशीलता का संगम
                </span>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">
              आयोजन के उद्देश्य
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {objectives.map((objective, index) => {
                const IconComponent = objective.icon;
                return (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${objective.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <IconComponent className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
                      {objective.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inspirational Quotes */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 text-white">
            <div className="text-center">
              <FaQuoteLeft className="text-3xl sm:text-4xl text-orange-400 mx-auto mb-6" />
              <div className="mb-6">
                <p className="text-lg sm:text-xl italic mb-4 leading-relaxed">
                  "{quotes[activeQuote].text}"
                </p>
                <p className="text-orange-300 font-semibold">
                  — {quotes[activeQuote].author}
                </p>
              </div>

              {/* Quote Navigation */}
              <div className="flex justify-center gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveQuote(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeQuote === index
                        ? "bg-orange-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Quote ${index + 1} दिखाएं`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
              <FaHeart className="text-3xl sm:text-4xl mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                आपका स्वागत है!
              </h3>
              <p className="text-sm sm:text-base text-green-100 mb-6">
                इस महान यज्ञ में भाग लेकर भारत के उज्ज्वल भविष्य का निर्माण करें
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
                  <FaPray className="text-sm" />
                  <span className="text-sm">सभी का हार्दिक स्वागत</span>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
                  <FaStar className="text-sm" />
                  <span className="text-sm">एक साथ, एक लक्ष्य</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
