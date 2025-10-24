import { useState } from "react";
import {
  FaMicrophone,
  FaChevronDown,
  FaChevronUp,
  FaUser,
  FaGraduationCap,
  FaUsers,
  FaUserGraduate,
} from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";

const Speakers = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const speakers = [
    {
      name: "आचार्य अग्निव्रत नैष्ठिक",
      specialty: "वैदिक भौतिकी",
      image: "/acharya-agnivrat.png",
    },
    {
      name: "आचार्य अंकुर आर्य",
      specialty: "सत्य सनातन",
      image: "/AcharyaAnkurArya.jpg",
    },
    {
      name: "डॉ. महिम तिवारी",
      specialty: "इतिहास एवं संस्कृति",
      image: "/mahim-tiwari.png",
    },
    {
      name: "विशाल चौरसिया",
      specialty: "Hyper Quest",
      image: "/hyper-quest.png",
    },
    {
      name: "आशीष भारतवंशी",
      specialty: "सामाजिक विषय",
      image: "/ashish-bhartwansi.png",
    },
    {
      name: "मोहित गौड़",
      specialty: "विज्ञानदर्शन",
      image: "/vigyan-darshan.png",
    },
    {
      name: "संदीप आर्य",
      specialty: "Om Aryavart",
      image: "/sandeep-arya.png",
    },
    {
      name: "आचार्य प्रशान्त शर्मा",
      specialty: "दार्शनिक विचार",
      image: "/acharya-prashant.png",
    },
    {
      name: "अंकित यादव",
      specialty: "Ankityadav Writes",
      image: "/ankit-yadav.png",
    },
    { name: "आर्यवीरा", specialty: "aaryaveera", image: "/aryaveera.png" },
    {
      name: "छवि सनातनी",
      specialty: "Chhavi Sanatani",
      image: "/chavi-sanatani.png",
    },
    {
      name: "कार्तिक यादव",
      specialty: "Kartik Decoded",
      image: "/kartik-decoded.png",
    },
    {
      name: "लक्ष्य लकेय",
      specialty: "Lakshya Speaks",
      image: "/lakshay-speaks.png",
    },
    { name: "कृतेश पटेल", specialty: "ऋषि उवाच", image: "/rishi-uvach.png" },
    {
      name: "संजीव नेवर",
      specialty: "Gems of Bollywood",
      image: "/gemes-of-bollywood.png",
    },
    {
      name: "स्वाति गोयल शर्मा",
      specialty: "Gems of Bollywood",
      image: "/gemes-of-bollywood.png",
    },
    {
      name: "डॉ. विवेक आर्य",
      specialty: "आर्य समाज इतिहास",
      image: "/dr.vivek-arya.png",
    },
    { name: "स्वामी ओमानन्द परिव्राजक", specialty: "धर्म प्रचारक" },
    { name: "डॉ. गोविन्द मौर्य", specialty: "पुरातत्व विशेषज्ञ" },
    { name: "विनय आर्य", specialty: "धर्म प्रचारक" },
    { name: "कार्तिक अय्यर", specialty: "विज्ञान विशेषज्ञ" },
    { name: "उत्कर्ष सिंह", specialty: "विकासवाद विशेषज्ञ" },
    { name: "संजय कुमार", specialty: "शोधकर्ता" },
    { name: "आलोक झा", specialty: "पुरातत्व विशेषज्ञ" },
    { name: "कुलदीप विद्यार्थी", specialty: "इतिहासकार" },
    { name: "शिव प्रताप सिंह", specialty: "पांडुलिपि विशेषज्ञ" },
    { name: "अनुज आर्य", specialty: "धर्म इतिहासकार" },
    { name: "हर्षप्रिय आर्य", specialty: "नवजागरण विशेषज्ञ" },
  ];

  const acharyas = [
    "आचार्य अग्निव्रत नैष्ठिक",
    "आचार्य आशीष (जिंद)",
    "आचार्य आर्याशा",
    "आचार्य प्रदीप जी",
    "आचार्य प्रशान्त शर्मा",
    "आचार्य योगेश भारद्वाज",
    "आचार्य योगेश वैदिक",
    "आचार्या शीतल",
    "आचार्य अंकुर आर्य",
  ];

  const swamis = [
    "स्वामी ओमानन्द परिव्राजक",
    "स्वामी सच्चिदानन्द",
    "स्वामी विवेकानन्द",
  ];

  const doctors = [
    "डॉ. गोविन्द मौर्य",
    "डॉ. ज्वलन्त शास्त्री",
    "डॉ. प्रचेतस",
    "डॉ. प्रतिभा",
    "डॉ. प्रियंका",
    "डॉ. महिम तिवारी",
    "डॉ. रामचन्द्र",
    "डॉ. विवेक आर्य",
    "डॉ. सत्यप्रिय",
  ];

  const toggleCategory = (categoryIndex) => {
    setExpandedCategory(
      expandedCategory === categoryIndex ? null : categoryIndex
    );
  };

  const categories = [
    {
      title: "आचार्यगण",
      speakers: acharyas,
      color: "from-yellow-50 to-orange-50",
      icon: FaGraduationCap,
    },
    {
      title: "संन्यासी गण",
      speakers: swamis,
      color: "from-orange-50 to-amber-50",
      icon: GiMeditation,
    },
    {
      title: "विद्वद्गण",
      speakers: doctors,
      color: "from-amber-50 to-yellow-50",
      icon: FaUserGraduate,
    },
    {
      title: "अन्य वक्ता",
      speakers: [
        "तितिक्षा आर्या",
        "आयुषि राणा",
        "नीतिका निगम",
        "मेधावनी गर्ग",
        "छवि आर्या",
        "श्रुतान्त आर्य",
        "शालिनि आर्या",
        "जयादित्य चक्रवर्ती",
        "नेहा राजपूत",
        "मनस्वी",
        "महेन्द्र आर्य",
        "दयानन्द शास्त्री",
        "सुन्दर आर्य",
        "सतीश सक्सेना",
        "सार्थक महाजन",
        "निर्भय आर्य",
        "आकाश विद्यार्थी",
        "कुमार उत्कर्ष",
        "अखिल तनेजा",
        "सांदिपन रॉय",
        "तुफैल चतुर्वेदी",
        "अमित किल्लोर",
        "प्रीतम आर्य",
        "संजय सिंह",
        "मोक्षराज आर्य",
        "संदीप वेदालङ्कार",
        "रोहित आर्य",
        "अमरजीत विद्यार्थी",
        "वेदवीर आर्य",
        "विठोबा आचार्य",
      ],
      color: "from-green-50 to-teal-50",
      icon: FaUsers,
    },
  ];

  return (
    <section
      id="speakers"
      className="py-12 sm:py-16 bg-white"
      role="region"
      aria-labelledby="speakers-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="speakers-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3"
          >
            <FaMicrophone className="text-orange-600" />
            हमारे सम्माननीय वक्ता और संचालक
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12">
            देश-विदेश के प्रतिष्ठित विद्वान और विचारक
          </p>

          {/* Featured Speakers */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-8">
              मुख्य वक्ता
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {speakers.slice(0, 16).map((speaker, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 group-hover:border-orange-300 transition-colors">
                      <img
                        src={speaker.image || "/default-profile.svg"}
                        alt={`${speaker.name} की तस्वीर`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {speaker.name}
                    </h4>
                    <p className="text-orange-600 font-medium text-xs sm:text-sm">
                      {speaker.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-gradient-to-br ${category.color} rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-center mb-4">
                  <div className="text-2xl sm:text-3xl mb-2 flex justify-center">
                    <category.icon className="text-orange-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                    <FaUser className="text-orange-600 text-sm" />
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {category.speakers.length} वक्ता
                  </p>
                </div>

                {/* Show first few speakers */}
                <div className="space-y-2 mb-4">
                  {category.speakers.slice(0, 3).map((speaker, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-gray-700 font-medium text-xs sm:text-sm">
                        {speaker}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Expand/Collapse Button */}
                {category.speakers.length > 3 && (
                  <button
                    onClick={() => toggleCategory(categoryIndex)}
                    className="w-full flex items-center justify-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                    aria-expanded={expandedCategory === categoryIndex}
                  >
                    {expandedCategory === categoryIndex ? (
                      <>
                        <FaChevronUp /> कम दिखाएं
                      </>
                    ) : (
                      <>
                        <FaChevronDown /> {category.speakers.length - 3} और
                        देखें
                      </>
                    )}
                  </button>
                )}

                {/* Expanded Content */}
                {expandedCategory === categoryIndex &&
                  category.speakers.length > 3 && (
                    <div className="mt-4 space-y-2 animate-fadeInUp">
                      {category.speakers.slice(3).map((speaker, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <p className="text-gray-700 font-medium text-xs sm:text-sm">
                            {speaker}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              80+ विशेषज्ञ वक्ता
            </h3>
            <p className="text-lg sm:text-xl text-orange-100 mb-6">
              धर्म, विज्ञान, समाज, राष्ट्र और विश्व के विविध विषयों के विशेषज्ञ
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-3">
                  <div className="text-xl sm:text-2xl font-bold">
                    {category.speakers.length}
                  </div>
                  <div className="text-xs sm:text-sm text-orange-200">
                    {category.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
