import { useState } from "react";
import {
  FaMicrophone,
  FaUsers,
  FaComments,
  FaQuestionCircle,
  FaGlobe,
  FaBookOpen,
  FaLightbulb,
  FaOm,
  FaMicroscope,
  FaFlag,
} from "react-icons/fa";
import { MdScience, MdFamilyRestroom } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";

const EventDetails = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "80+ विशेषज्ञ वक्ता",
      description: "देश-विदेश के 80 से अधिक वक्ताओं एवं विचारकों का मार्गदर्शन",
      icon: FaUsers,
      color: "from-blue-500 to-blue-600",
      details: "आचार्यगण, विद्वान, सोशल मीडिया इन्फ्लुएंसर और विषय विशेषज्ञ",
    },
    {
      title: "संवादात्मक चर्चा",
      description: "पारम्परिक व्याख्यानों के स्थान पर संवादात्मक मंच-चर्चाएँ",
      icon: FaComments,
      color: "from-green-500 to-green-600",
      details: "खुली चर्चा, बहस और विचार-विमर्श के लिए मंच",
    },
    {
      title: "प्रश्न-उत्तर सत्र",
      description: "प्रत्येक सत्र में श्रोताओं के प्रश्न-उत्तर",
      icon: FaQuestionCircle,
      color: "from-purple-500 to-purple-600",
      details: "हर सत्र में दर्शकों की सक्रिय भागीदारी और समाधान",
    },
  ];

  const topics = [
    { name: "धर्म", icon: FaOm, description: "वैदिक धर्म और आध्यात्म" },
    {
      name: "विज्ञान",
      icon: FaMicroscope,
      description: "आधुनिक विज्ञान और वैदिक ज्ञान",
    },
    { name: "समाज", icon: FaUsers, description: "सामाजिक सुधार और नवाचार" },
    { name: "राष्ट्र", icon: FaFlag, description: "राष्ट्रीय एकता और विकास" },
    {
      name: "विश्व",
      icon: GiEarthAmerica,
      description: "वैश्विक शांति और सहयोग",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 bg-white"
      role="region"
      aria-labelledby="event-details-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="event-details-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3"
          >
            <FaMicrophone className="text-orange-600" />
            कार्यक्रम की विशेषताएँ
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            एक अनूठा महासम्मेलन जो पारंपरिक व्याख्यानों से कहीं अधिक है
          </p>

          {/* Interactive Features */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    activeFeature === index ? "ring-2 ring-orange-500" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveFeature(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFeature === index}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto shadow-md`}
                  >
                    <IconComponent className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <p className="text-xs text-gray-600 text-center italic">
                    {feature.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Topics Section */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 sm:p-8 text-white text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <FaGlobe />
              देश-विदेश से आने वाले प्रतिभागी
            </h3>
            <p className="text-lg sm:text-xl text-orange-100 mb-6">
              विचारशील युवाओं का महासंगम जहाँ विचार कर्म में बदलते हैं
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform flex justify-center">
                    <topic.icon className="text-white" />
                  </div>
                  <div className="font-semibold text-sm sm:text-base">
                    {topic.name}
                  </div>
                  <div className="text-xs text-orange-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {topic.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <FaBookOpen className="text-3xl text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">गहन अध्ययन</h4>
              <p className="text-sm text-gray-600">
                शास्त्रों और आधुनिक विज्ञान का तुलनात्मक अध्ययन
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <FaLightbulb className="text-3xl text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">नवाचार</h4>
              <p className="text-sm text-gray-600">
                पारंपरिक ज्ञान के साथ आधुनिक समाधान
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center sm:col-span-2 lg:col-span-1">
              <FaUsers className="text-3xl text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">युवा नेतृत्व</h4>
              <p className="text-sm text-gray-600">
                भविष्य के नेताओं का विकास और मार्गदर्शन
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
