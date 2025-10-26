import { useState } from "react";
import {
  FaMicrophone,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
} from "react-icons/fa";

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
      name: "संजय कुमार",
      specialty: "आयुर्वेदज्ञ",
      image: "/sanjayji.png",
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
      name: "विनय आर्य",
      specialty: "वैदिक विद्वान",
      image: "/vinay-arya.png",
    },
    {
      name: "मोहित गौड़",
      specialty: "विज्ञान दर्शन",
      image: "/मोहित-g.jpg",
    },
    {
      name: "कृतेश पटेल",
      specialty: "ऋषि उवाच",
      image: "/dharmsamrat.jpg",
    },
    {
      name: "डॉ. रामनाथ झा",
      specialty: "अद्वैत वेदांत",
      image: "/dr.ramnath-jha.png",
    },
    {
      name: "आचार्य आशीष आर्य",
      specialty: "वैदिक विद्वान",
      image: "/ashish-acharya.jpg",
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
      name: "आचार्य योगेश भारद्वाज",
      specialty: "वैदिक विद्वान",
      image: "/yogesh-bhardwaj.jpg",
    },
    {
      name: "स्वामी विवेकानन्द परिव्राजक",
      specialty: "वैदिक विद्वान",
      image: "/parivajak-ji.jpg",
    },
    {
      name: "आचार्य योगेश वैदिक",
      specialty: "वैदिक विद्वान",
      image: "/yogesh -vaidic .jpg",
    },
    {
      name: "स्वामी सच्चिदानंद",
      specialty: "वैदिक विद्वान",
      image: "/sachitanand.jpg",
    },
    {
      name: "अंकित यादव",
      specialty: "Ankityadav Writes",
      image: "/ankit-yadav.png",
    },
    {
      name: "डॉ. विवेक आर्य",
      specialty: "वैदिक विद्वान",
      image: "/dr-vivek-arya.jpg",
    },
    {
      name: "आर्यवीरा",
      specialty: "aaryaveera",
      image: "/aryaveera.png",
    },
    {
      name: "छवि सनातनी",
      specialty: "Chhavi Sanatani",
      image: "/chavi-sanatani.jpg",
    },
    {
      name: "कार्तिक यादव",
      specialty: "Kartik Decoded",
      image: "/kartik-decoded.png",
    },
    {
      name: "डॉ. महिम तिवारी",
      specialty: "इतिहास एवं संस्कृति",
      image: "/mahim-tiwari.png",
    },
    {
      name: "कार्तिक अय्यर",
      specialty: "वेद और विज्ञान",
      image: "/kartik-iyer.jpg",
    },
    {
      name: "लक्ष्य लकेय",
      specialty: "Lakshya Speaks",
      image: "/lakshay-speaks.png",
    },
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
      name: "अजीत भारती",
      specialty: "पत्रकार और लेखक",
      image: "/ajeet-bharti.jpeg",
    },
    {
      name: "पुलकित त्यागी",
      specialty: "युवा पत्रकार",
      image: "/pulkit-tyagi.png",
    },
    {
      name: "संदीपन रॉय",
      specialty: "विचारक",
      image: "/sandeepan-roy.png",
    },
    {
      name: "सार्थक महाजन",
      specialty: "युवा विचारक",
      image: "/sarthak-mahajan.jpg",
    },
    {
      name: "वेदवीर आर्य",
      specialty: "लेखक और इतिहासकार",
      image: "/Vedveer Arya.png",
    },
    {
      name: "संजय सिंह",
      specialty: "देसी टार्ज़न",
      image: "/sanjay-sing.png",
    },
    {
      name: "स्वामी ओमानन्द परिव्राजक",
      specialty: "धर्म प्रचारक",
      image: "/ओमानन्द-parivajak .jpg",
    },
    {
      name: "डॉ. गोविन्द मौर्य",
      specialty: "भौतिक शास्त्री",
      image: "/profGmorya.jpg",
    },
    {
      name: "आलोक झा",
      specialty: "पुरातत्व विशेषज्ञ",
      image: "/Alok-jha.jpg",
    },
    {
      name: "कुलदीप विद्यार्थी",
      specialty: "इतिहासकार",
      image: "/kuldep-arya.jpg",
    },
    {
      name: "शिव प्रताप सिंह",
      specialty: "पांडुलिपि विशेषज्ञ",
      image: "/default-profile.svg",
    },
    {
      name: "आचार्य अनुज शास्त्री",
      specialty: "युवा वैदिक प्रवक्ता ",
      image: "/anuj-arya.jpg",
    },
    {
      name: "हर्षप्रिय आर्य",
      specialty: "नवजागरण विशेषज्ञ",
      image: "/harsh-priya.jpg",
    },
    {
      name: "दयानन्द शास्त्री",
      specialty: "आर्य लेखक एवं विद्वान",
      image: "/dyanand-shastri.jpg",
    },
    {
      name: "अमरजीत विद्यार्थी",
      specialty: "युवा विद्वान",
      image: "/amar-jeet.jpg",
    },
    {
      name: "नीतिका निगम",
      specialty: "युवा वैदिक प्रचारक",
      image: "/nitika-nigam.jpg",
    },
    {
      name: "डॉ. रामचन्द्र",
      specialty: "वैदिक विद्वान",
      image: "/dr-ramchandra.jpg",
    },
    {
      name: "छवि आर्य",
      specialty: "सांस्कृतिक और सामाजिक प्रवक्ता",
      image: "/chavi-arya.jpg",
    },
    {
      name: "आदिकाल आर्य",
      specialty: "युवा धर्म  प्रचारक",
      image: "/adikal-arya.png",
    },
    {
      name: "मनस्वी आर्य",
      specialty: "युवा धर्म प्रचारक",
      image: "/manasvi-arya.jpg",
    },
    {
      name: "उत्कर्ष सिंह",
      specialty: "विकासवाद विशेषज्ञ",
      image: "/utkarsh.jpeg",
    },
    {
      name: "डॉ. आयुषी राणा",
      specialty: "युवा वैदिक विदुषी",
      image: "/ayushi -rana .jpg",
    },
    {
      name: "डॉ. प्रतिभा आर्या",
      specialty: "वैदिक विदुषी",
      image: "/dr-pratibha .jpg",
    },
    {
      name: "रोहित आर्य",
      specialty: "युवा वैदिक विद्वान",
      image: "/rohit -arya.jpg",
    },
    {
      name: "डॉ. प्रियंका आर्या",
      specialty: "वैदिक विदुषी",
      image: "/dr-priya-arya.jpg",
    },
    {
      name: "डॉ.प्रचेतस",
      specialty: "वैदिक विद्वान",
      image: "/डॉ प्रचेतस.jpg",
    },
    {
      name: "आचार्या तितिक्षा आर्या",
      specialty: "वैदिक विदुषी",
      image: "/titiksha-arya.jpg",
    },
    {
      name: "तुफैल चतुर्वेदी",
      specialty: "साहित्यकार एवं विद्वान ",
      image: "/chaturvedi.png",
    },
    {
      name: " श्रुतांत आर्य",
      specialty: "युवा प्रचारक",
      image: "/shrutant.jpg",
    },
    {
      name: "आचार्या शीतला आर्या",
      specialty: "वैदिक विदुषी",
      image: "/shitala -arya.jpg",
    },
    {
      name: "संदीप वेदालंकार",
      specialty: "वैदिक विद्वान",
      image: "/संदीप-ved.jpg",
    },
    {
      name: "आचार्या आर्याशा आर्या",
      specialty: "युवा वैदिक विदुषी",
      image: "/aryasha.jpg",
    },
    {
      name: "डॉ. सत्यप्रिय",
      specialty: "वैदिक विद्वान",
      image: "/satyapriya.jpg",
    },
    {
      name: "आचार्य प्रदीप",
      specialty: "वैदिक विद्वान",
      image: "/आचार्य प्रदीप.jpg",
    },
    {
      name: "मेधाविनी गर्ग",
      specialty: "वैदिक विदुषी",
      image: "/मेधाविनी गर्ग.jpg",
    },
    {
      name: "डॉ. मोक्षराज",
      specialty: "वैदिक विद्वान",
      image: "/मोक्षराज.jpg",
    },
    {
      name: "प्रियांशु सेठ",
      specialty: "युवा विद्वान",
      image: "/priyanshu-seth.jpg",
    },
    {
      name: "शैलेश बिरे",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "निर्भय आर्य",
      specialty: "युवा प्रचारक",
      image: "/Nirbhay-arya.jpg",
    },
    {
      name: "कैथरिन कुमार",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "विमल वेलानी",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "रत्न कंगाल",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "नीरज रामसमूज",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "ऋषि भंडारी",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "प्रशांता सूत्रधार",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "अंशिता रासबिहारी",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "भुवनेश खोसला",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "नेहा आर्या",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "विश्रुत आर्य",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "सुदीप गिरी ",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "सुधीर वेलनी",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "राजनन्दिनी रामतुहल ",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "ममता आर्या",
      specialty: "वैदिक विदुषी",
      image: "/default-profile.svg",
    },
    {
      name: "संजय सूद",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "राजवीर अवतार",
      specialty: "विदेशी विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "विठोबा आचार्य",
      specialty: "दार्शनिक विद्वान",
      image: "/default-profile.svg",
    },
    {
      name: "कुमार उत्कर्ष",
      specialty: "युवा प्रचारक",
      image: "/default-profile.svg",
    },
    {
      name: "मोक्षराज आर्य ",
      specialty: "---",
      image: "/default-profile.svg",
    },

    {
      name: "जयादित्य चक्रवर्ती",
      specialty: "युवा प्रचारक",
      image: "/chakravarti.jpg",
    },
    {
      name: "महेंद्र आर्य",
      specialty: "-------",
      image: "/default-profile.svg",
    },
    {
      name: "सतीश सक्सेना",
      specialty: "-------",
      image: "/default-profile.svg",
    },
    {
      name: "अखिल तनेजा",
      specialty: "-------",
      image: "/default-profile.svg",
    },
  ];

  const acharyas = [
    "आचार्य अग्निव्रत नैष्ठिक",
    "आचार्य आशीष (जिंद)",
    "आचार्य आर्याशा",
    "आचार्य प्रशान्त शर्मा",
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
    "डॉ. प्रतिभा",
    "डॉ. प्रियंका",
    "डॉ. महिम तिवारी",
    "डॉ. रामचन्द्र",
    "डॉ. विवेक आर्य",
  ];

  const toggleCategory = (categoryIndex) => {
    setExpandedCategory(
      expandedCategory === categoryIndex ? null : categoryIndex
    );
  };

  const categories = [
    {
      title: "",
      speakers: acharyas,
      color: "from-yellow-50 to-orange-50",
      icon: FaUsers,
    },
    {
      title: "",
      speakers: swamis,
      color: "from-orange-50 to-amber-50",
      icon: FaUsers,
    },
    {
      title: "",
      speakers: doctors,
      color: "from-amber-50 to-yellow-50",
      icon: FaUsers,
    },
    {
      title: "",
      speakers: [
        "श्रुतान्त आर्य",
        "शालिनि आर्या",
        "जयादित्य चक्रवर्ती",
        "नेहा राजपूत",
        "मनस्वी",
        "महेन्द्र आर्य",
        "सुन्दर आर्य",
        "सतीश सक्सेना",
        "निर्भय आर्य",
        "आकाश विद्यार्थी",
        "कुमार उत्कर्ष",
        "अखिल तनेजा",
        "अमित किल्लोर",
        "प्रीतम आर्य",
        "संजय सिंह",
        "मोक्षराज आर्य",
        "अमरजीत विद्यार्थी",
      ],
      color: "from-green-50 to-teal-50",
      icon: FaUsers,
    },
  ];

  return (
    <section
      id="speakers"
      className="py-12 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white"
      aria-labelledby="speakers-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          <h2
            id="speakers-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-800 mb-4 sm:mb-4 lg:mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 lg:gap-4"
          >
            <FaMicrophone className="text-orange-600 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl" />
            <span className="leading-tight">
              हमारे सम्माननीय वक्ता और संचालक
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-gray-600 mb-10 sm:mb-12 lg:mb-16 leading-relaxed px-2">
            देश-विदेश के प्रतिष्ठित विद्वान और विचारक
          </p>

          {/* Featured Speakers */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-8 lg:mb-12">
              मुख्य वक्ता
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200 group aspect-square"
                >
                  <div className="text-center h-full flex flex-col justify-center p-3 sm:p-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden border-2 border-orange-200 group-hover:border-orange-300 transition-colors flex-shrink-0">
                      <img
                        src={speaker.image || "/default-profile.svg"}
                        alt={`${speaker.name} की तस्वीर`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                      {speaker.name}
                    </h4>
                    <p className="text-orange-600 font-medium text-xs sm:text-sm leading-tight">
                      {speaker.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-12 lg:mb-16">
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-gradient-to-br ${category.color} rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 sm:mb-3 lg:mb-4 flex justify-center">
                    <category.icon className="text-orange-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 flex items-center justify-center gap-1 sm:gap-2 lg:gap-3">
                    {category.title}
                  </h3>
                  {/* <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-600 mt-1 lg:mt-2">
                    {category.speakers.length} वक्ता
                  </p> */}
                </div>

                {/* Show first few speakers */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {category.speakers.slice(0, 3).map((speaker, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-gray-700 font-medium text-xs sm:text-sm leading-tight">
                        {speaker}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Expand/Collapse Button */}
                {category.speakers.length > 3 && (
                  <button
                    onClick={() => toggleCategory(categoryIndex)}
                    className="w-full flex items-center justify-center gap-1 sm:gap-2 text-orange-600 hover:text-orange-700 font-medium text-xs sm:text-sm py-2 px-3 rounded-md bg-white/50 hover:bg-white/70 transition-all duration-200 min-h-[44px] touch-manipulation"
                    aria-expanded={expandedCategory === categoryIndex}
                  >
                    {expandedCategory === categoryIndex ? (
                      <>
                        <FaChevronUp className="text-xs" /> कम दिखाएं
                      </>
                    ) : (
                      <>
                        <FaChevronDown className="text-xs" />{" "}
                        {category.speakers.length - 3} और देखें
                      </>
                    )}
                  </button>
                )}

                {/* Expanded Content */}
                {expandedCategory === categoryIndex &&
                  category.speakers.length > 3 && (
                    <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 animate-fadeInUp">
                      {category.speakers.slice(3).map((speaker, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <p className="text-gray-700 font-medium text-xs sm:text-sm leading-tight">
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
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              {speakers.length +
                categories.reduce(
                  (total, cat) => total + cat.speakers.length,
                  0
                )}
              + विशेषज्ञ वक्ता
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-100 mb-4 sm:mb-6 leading-relaxed">
              धर्म, विज्ञान, समाज, राष्ट्र और विश्व के विविध विषयों के विशेषज्ञ
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-2 sm:p-3">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">
                    {category.speakers.length}
                  </div>
                  <div className="text-xs sm:text-sm text-orange-200 leading-tight">
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
