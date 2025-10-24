import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [expandedSession, setExpandedSession] = useState(null);

  const scheduleData = {
    1: {
      title: "Day 1 — Hall No. 6",
      date: "30 अक्टूबर 2025",
      sessions: [
        {
          time: "9:00 AM – 12:30 PM",
          title: "आस्तिक और नास्तिक – क्या मनुष्य को धर्म की आवश्यकता है?",
          moderator: "मोक्षराज आर्य",
          speakers: [
            "रोहित आर्य",
            "मनस्वी",
            "महेन्द्र आर्य",
            "दयानन्द शास्त्री",
            "छवि सनातनी",
            "डॉ. महिम तिवारी",
            "अंकित यादव",
            "आचार्य प्रशान्त शर्मा",
            "स्वामी विवेकानन्द",
            "आचार्य आशीष (जिंद)",
          ],
          subtopics: [
            {
              topic: "भारतीय नास्तिक दर्शन की परंपरा और उसका दृष्टिकोण",
              speaker: "रोहित आर्य",
            },
            {
              topic: "सत्यार्थ प्रकाश में वर्णित ईश्वर का यथार्थ स्वरूप",
              speaker: "मनस्वी",
            },
            { topic: "क्या ईश्वर अवतार ले सकता है?", speaker: "महेन्द्र आर्य" },
            {
              topic: "एक ईश्वर – अनेक नाम : क्या बहुदेववाद तर्कसंगत है?",
              speaker: "दयानन्द शास्त्री",
            },
            {
              topic: "सच्चे आस्तिक की पहचान – आस्था या विवेक?",
              speaker: "छवि सनातनी",
            },
            {
              topic: "ईश्वर के विषय में नव-बौद्धवाद का दुष्प्रचार",
              speaker: "डॉ. महिम तिवारी",
            },
            {
              topic: "क्या नास्तिकता विज्ञान का प्रतीक है या अज्ञान का?",
              speaker: "अंकित यादव",
            },
            {
              topic:
                "ईश्वर से दूरी, मन से दूरी – युवाओं में बढ़ता तनाव और एकाकीपन",
              speaker: "आचार्य प्रशान्त शर्मा",
            },
            {
              topic: "ईश्वर की उपासना कैसे करे?",
              speaker: "स्वामी विवेकानन्द",
            },
            {
              topic: "मानसिक शांति और संतुलन में अध्यात्म की भूमिका",
              speaker: "आचार्य आशीष (जिंद)",
            },
          ],
        },
        {
          time: "01:00 PM – 02:30 PM",
          title: "सत्यार्थ प्रकाश और विविध मत समीक्षा",
          moderator: "संदीप वेदालङ्कार",
          speakers: [
            "सुन्दर आर्य",
            "सतीश सक्सेना",
            "सार्थक महाजन",
            "निर्भय आर्य",
            "आकाश विद्यार्थी",
            "कुमार उत्कर्ष",
            "डॉ. विवेक आर्य",
          ],
          subtopics: [
            {
              topic:
                "सत्यार्थप्रकाश समुल्लास 14 : इस्लाम-सम्बन्धी विवेचन का तात्त्विक आधार",
              speaker: "सुन्दर आर्य",
            },
            {
              topic: "हिन्दू समाज और आर्यसमाज - संगति या संघर्ष?",
              speaker: "सतीश सक्सेना",
            },
            {
              topic:
                "महर्षि दयानन्द की दृष्टि में हिन्दू राष्ट्र : धर्म, संस्कृति और शासन की मर्यादा",
              speaker: "सार्थक महाजन",
            },
            {
              topic: "वेदों पर इस्लामी आपत्तियाँ – सत्यार्थप्रकाश के समाधान",
              speaker: "निर्भय आर्य",
            },
            {
              topic: "जनसंख्या संतुलन : सामाजिक स्थिरता और विधायी आवश्यकता",
              speaker: "आकाश विद्यार्थी",
            },
            {
              topic: "सत्यार्थ प्रकाश में अद्वैत मत समीक्षा",
              speaker: "कुमार उत्कर्ष",
            },
            { topic: "आर्य समाज और शुद्धि आन्दोलन", speaker: "डॉ. विवेक आर्य" },
          ],
        },
        {
          time: "2:45 PM – 4:45 PM",
          title: "सनातन धर्म की चुनौतियाँ",
          moderator: "अखिल तनेजा",
          speakers: [
            "सांदिपन रॉय",
            "डॉ. महिम तिवारी",
            "आशीष भारतवंशी",
            "तुफैल चतुर्वेदी",
            "स्वामी ओमानन्द परिव्राजक",
          ],
          subtopics: [
            {
              topic: "इस्लाम का वेदों पर आक्षेप और निवारण",
              speaker: "सांदिपन रॉय",
            },
            {
              topic: "ईसाई मतांतरण: चुनौतियाँ और समाधान",
              speaker: "डॉ. महिम तिवारी",
            },
            { topic: "मराठा और इस्लामिक संघर्ष", speaker: "आशीष भारतवंशी" },
            {
              topic: "सनातनधर्म की समस्या और समाधान",
              speaker: "तुफैल चतुर्वेदी",
            },
            {
              topic: "'लव जिहाद' को कैसे रोकें?",
              speaker: "स्वामी ओमानन्द परिव्राजक",
            },
          ],
        },
        {
          time: "5:00 PM – 6:30 PM",
          title: "मंच चर्चा – वेदों में विज्ञान",
          moderator: "विशाल चौरसिया (The Hyper Quest)",
          speakers: ["कार्तिक अय्यर", "मोहित गौड़", "अंकित यादव", "संदीप आर्य"],
        },
        {
          time: "7:00 PM – 8:45 PM",
          title: "शास्त्र चर्चा – आस्तिक और नास्तिक के मध्य चर्चा",
          moderator: "विशाल चौरसिया",
          speakers: [
            "मोहित गौड़",
            "अंकित यादव",
            "संदीप आर्य",
            "लक्ष्य स्पिक्स",
            "अमित किल्लोर",
          ],
        },
        {
          time: "9:00 PM – 10:30 PM",
          title: "मंच चर्चा – क्या सनातन धर्म जातिवादी है?",
          moderator: "कार्तिक डिकोडेड",
          speakers: ["कृतेश पटेल", "लक्ष्य स्पिक्स"],
        },
      ],
    },
    2: {
      title: "Day 2 — Hall No. 4",
      date: "31 अक्टूबर 2025",
      sessions: [
        {
          time: "8:30 AM – 11:30 AM",
          title:
            "वैदिक नारीवाद – नारी की समानता और स्वतंत्रता (Vaidik Feminism)",
          moderator: "मेधावनी गर्ग",
          speakers: [
            "तितिक्षा आर्या",
            "छवि सनातनी",
            "आयुषि राणा",
            "नीतिका निगम",
            "आर्यवीरा",
            "आचार्य आर्याशा",
            "डॉ. प्रियंका",
            "स्वाति गोयल शर्मा",
            "आचार्या शीतल",
          ],
          subtopics: [
            {
              topic: "स्त्री–पुरुष समानता का सही अर्थ",
              speaker: "तितिक्षा आर्या",
            },
            {
              topic: "My Body My Choice – स्वतन्त्रता या व्यभिचार?",
              speaker: "छवि सनातनी",
            },
            {
              topic: "गुरुकुल में पढ़ी नारी: दायित्व एवं भविष्य",
              speaker: "आयुषि राणा",
            },
            {
              topic: "नारी की वैवाहिक दायित्वों के प्रति उदासीनता",
              speaker: "नीतिका निगम",
            },
            {
              topic: "Marital Rape – सत्य या प्रोपेगेंडा?",
              speaker: "आर्यवीरा",
            },
            {
              topic: "स्त्री के लिए नियमित ध्यान और उपासना विधि",
              speaker: "आचार्य आर्याशा",
            },
            {
              topic: "ऋग्वेद के सूर्या सूक्त का विवेचन",
              speaker: "डॉ. प्रियंका",
            },
            {
              topic: "लव जिहाद – कारण और समाधान",
              speaker: "स्वाति गोयल शर्मा",
            },
            { topic: "सुलभा–जनक संवाद का महत्व", speaker: "आचार्या शीतल" },
          ],
        },
        {
          time: "3:15 PM – 4:45 PM",
          title: "बॉडी निर्माण और स्टंट प्रदर्शन",
          moderator: "कार्तिक अय्यर",
          speakers: ["प्रीतम आर्य (आदिकाल आर्य)", "संजय सिंह (देशी टार्जन)"],
        },
        {
          time: "5:00 PM – 6:30 PM",
          title: "Open House with Acharya Agnivrat",
          moderator: "मोहित गौड, संदीप आर्य",
          speakers: ["आचार्य अग्निव्रत नैष्ठिक"],
        },
        {
          time: "7:00 PM – 8:30 PM",
          title: "Open House with Sanjeev Nevar and Swati Goel Sharma",
          moderator: "आचार्य अंकुर आर्य",
          speakers: ["संजीव नेवर", "स्वाति गोयल शर्मा"],
        },
        {
          time: "9:00 PM – 10:30 PM",
          title: "Open House with Vinay Arya",
          moderator: "कृतेश पटेल",
          speakers: ["विनय आर्य"],
        },
      ],
    },
    3: {
      title: "Day 3 — Hall No. 4",
      date: "1 नवम्बर 2025",
      sessions: [
        {
          time: "8:30 AM – 10:00 AM",
          title: "युवा सत्र – सनातन धर्म में आर्य समाज का योगदान",
          moderator: "शालिनि आर्या",
          speakers: [
            "जयादित्य चक्रवर्ती",
            "छवि आर्या",
            "श्रुतान्त आर्य",
            "डॉ. महिम तिवारी",
            "आचार्य प्रशान्त शर्मा",
          ],
          subtopics: [
            {
              topic: "महर्षि दयानन्द की दृष्टि में श्रीकृष्ण",
              speaker: "जयादित्य चक्रवर्ती",
            },
            {
              topic: "महर्षि दयानन्द की दृष्टि में श्रीराम",
              speaker: "छवि आर्या",
            },
            {
              topic: "महर्षि दयानन्द का काशी पर प्रभाव",
              speaker: "श्रुतान्त आर्य",
            },
            {
              topic: "स्वामी श्रद्धानन्द जी और समाज-सुधार",
              speaker: "डॉ. महिम तिवारी",
            },
            {
              topic: "महर्षि दयानन्द से युवा क्या सीखे?",
              speaker: "आचार्य प्रशान्त शर्मा",
            },
          ],
        },
        {
          time: "10:15 AM – 1:00 PM",
          title: "आग की धार पर आर्य समाज – एक क्रांतिकारी आन्दोलन का इतिहास",
          moderator: "आचार्य योगेश वैदिक",
          speakers: [
            "अंकित यादव",
            "आशीष भारतवंशी",
            "डॉ. प्रचेतस",
            "छवि सनातनी",
            "विशाल चौरसिया",
            "कृतेश पटेल",
            "आचार्य योगेश भारद्वाज",
            "स्वामी सच्चिदानन्द",
          ],
          subtopics: [
            { topic: "महर्षि दयानन्द का दर्शन", speaker: "अंकित यादव" },
            {
              topic: "वामपंथ के नायक, दक्षिणपंथ के खलनायक",
              speaker: "आशीष भारतवंशी",
            },
            { topic: "आर्य समाज की पाण्डित्य परम्परा", speaker: "डॉ. प्रचेतस" },
            {
              topic: "महर्षि दयानन्द की दृष्टि में आदर्श नारी",
              speaker: "छवि सनातनी",
            },
            {
              topic: "महर्षि दयानन्द मेरी दृष्टि में",
              speaker: "विशाल चौरसिया",
            },
            {
              topic: "महापुरुष की दृष्टि में महर्षि दयानन्द",
              speaker: "कृतेश पटेल",
            },
            {
              topic: "आर्य समाज के समाज सुधार आन्दोलन",
              speaker: "आचार्य योगेश भारद्वाज",
            },
            {
              topic: "हैदराबाद आन्दोलन में आर्य समाज का योगदान",
              speaker: "स्वामी सच्चिदानन्द",
            },
          ],
        },
        {
          time: "1:15 PM – 3:00 PM",
          title:
            "Open House – उत्क्रान्ति का मिथक – आधुनिक विज्ञान की सबसे बड़ी कहानी",
          moderator: "मोहित गौड",
          speakers: [
            "उत्कर्ष सिंह",
            "संदीप आर्य",
            "कार्तिक अय्यर",
            "संजय कुमार",
          ],
        },
        {
          time: "3:30 PM – 4:45 PM",
          title: "Open House – दलित, आम्बेडकर और आर्य समाज",
          moderator: "कृतेश पटेल",
          speakers: [
            "डॉ. ज्वलन्त शास्त्री",
            "डॉ. विवेक आर्य",
            "आचार्य योगेश भारद्वाज",
          ],
        },
        {
          time: "5:00 PM – 7:00 PM",
          title: "Open House – अद्वैत, द्वैतवाद – एक चर्चा",
          moderator: "विशाल चौरसिया",
          speakers: ["विठोबा आचार्य", "कृतेश पटेल"],
        },
        {
          time: "7:30 PM – 9:00 PM",
          title:
            "Live Discussion – OTT और सोशल मीडिया – आज़ादी की आड़ में अश्लीलता का जाल",
          moderator: "कार्तिक डिकोडेड",
          speakers: [
            "डॉ. महिम तिवारी",
            "आर्यवीरा",
            "छवि सनातनी",
            "संदीप आर्य",
            "मोहित गौड",
          ],
        },
        {
          time: "9:15 PM – 10:30 PM",
          title: "Live Discussion – हिन्दी बनाम अन्य भाषा",
          moderator: "नेहा राजपूत",
          speakers: [
            "अंकुर आर्य",
            "अमरजीत विद्यार्थी",
            "आशीष भारतवंशी",
            "कुलदीप विद्यार्थी",
            "संदीपन रॉय",
          ],
        },
      ],
    },
    4: {
      title: "Day 4 — Hall No. 6",
      date: "2 नवम्बर 2025",
      sessions: [
        {
          time: "8:30 AM – 10:00 AM",
          title: "भारतीय पुरातत्व का इतिहास",
          moderator: "डॉ. गोविन्द मौर्य",
          speakers: [
            "आलोक झा",
            "कुलदीप विद्यार्थी",
            "शिव प्रताप सिंह",
            "मोहित गौड़",
            "आचार्य प्रदीप जी",
          ],
          subtopics: [
            { topic: "क्या बौद्धकाल से पहले वेद नहीं थे?", speaker: "आलोक झा" },
            {
              topic: "महाभारत की सही तिथि कौन-सी है?",
              speaker: "कुलदीप विद्यार्थी",
            },
            {
              topic: "रामायण–महाभारत की प्राचीन पांडुलिपियाँ",
              speaker: "शिव प्रताप सिंह",
            },
            {
              topic: "संस्कृत भाषा की प्राचीनता और वैज्ञानिकता",
              speaker: "मोहित गौड़",
            },
            {
              topic: "पाणिनि का काल निर्धारण : परंपरा और आधुनिक शोध",
              speaker: "आचार्य प्रदीप जी",
            },
          ],
        },
        {
          time: "10:15 AM – 1:15 PM",
          title: "विकृत इतिहास का शुद्धिकरण – भारत की वैदिक दृष्टि से समीक्षा",
          moderator: "डॉ. प्रचेतस",
          speakers: [
            "कार्तिक अय्यर",
            "डॉ. विवेक आर्य",
            "डॉ. प्रतिभा",
            "डॉ. रामचन्द्र",
            "कृतेश पटेल",
            "डॉ. सत्यप्रिय",
            "वेदवीर आर्य",
            "डॉ. गोविन्द मौर्य",
          ],
          subtopics: [
            {
              topic: "आर्य आक्रमण का मिथक और DNA अध्ययन",
              speaker: "कार्तिक अय्यर",
            },
            {
              topic: "वैदिक साहित्य के प्रकाशक और पत्रिका का इतिहास",
              speaker: "डॉ. विवेक आर्य",
            },
            { topic: "निरुक्त के भाष्यकारों का परिचय", speaker: "डॉ. प्रतिभा" },
            { topic: "वैदिक छन्द मीमांसा", speaker: "डॉ. रामचन्द्र" },
            {
              topic: "पाश्चात्य विद्वानों द्वारा वेद-काल के काल्पनिक खण्ड",
              speaker: "डॉ. सत्यप्रिय",
            },
            {
              topic: "आदि शङ्कराचार्य का सही काल – महर्षि दयानन्द के विचार",
              speaker: "कृतेश पटेल",
            },
            {
              topic: "बौद्ध–मौर्य काल-निर्धारण में पाश्चात्य दोष",
              speaker: "वेदवीर आर्य",
            },
            {
              topic: "प्राचीन भारतीय भौतिक शास्त्र",
              speaker: "डॉ. गोविन्द मौर्य",
            },
          ],
        },
        {
          time: "1:30 PM – 3:00 PM",
          title: "भारत में हुआ नवजागरण और उनके पुरोधा",
          moderator: "हर्षप्रिय आर्य",
          speakers: [
            "अनुज आर्य",
            "कृतेश पटेल",
            "आर्यवीरा",
            "डॉ. विवेक आर्य",
            "डॉ. प्रचेतस",
          ],
          subtopics: [
            { topic: "आर्य समाज और थियोसोफिकल सोसायटी", speaker: "अनुज आर्य" },
            { topic: "पंडिता रमाबाई और आर्य समाज", speaker: "कृतेश पटेल" },
            {
              topic: "आर्य समाज का मिशन: धर्म को ढोंग से मुक्त करना",
              speaker: "आर्यवीरा",
            },
            {
              topic: "आंबेडकर जी ने मनुस्मृति क्यों जलाई?",
              speaker: "डॉ. विवेक आर्य",
            },
            {
              topic: "राजा राममोहन राय और ईसाई मिशनरी",
              speaker: "डॉ. प्रचेतस",
            },
          ],
        },
        {
          time: "3:15 PM – 3:50 PM",
          title: "The Arya Identity: A Global Passport for the Modern Youth",
          moderator: "Hall No. 6",
          speakers: ["International Speakers"],
        },
        {
          time: "3:55 PM – 4:45 PM",
          title:
            "Mental Health and the Maharshi Model: An Arya Approach to Stress and Resilience",
          moderator: "Hall No. 6",
          speakers: ["Mental Health Experts"],
        },
        {
          time: "5:00 PM – 6:30 PM",
          title: "वर्तमान समय में आरक्षण की उपादेयता",
          moderator: "कार्तिक डिकोडेड",
          speakers: ["कृतेश पटेल", "अंकुर आर्य", "कार्तिक अय्यर"],
        },
        {
          time: "7:00 PM – 8:30 PM",
          title: "Open House on Present and Future of Arya Samaj",
          moderator: "कृतेश पटेल",
          speakers: ["मोहित गौड", "आर्यवीरा", "संदीप आर्य"],
        },
      ],
    },
  };

  const toggleSession = (sessionIndex) => {
    setExpandedSession(expandedSession === sessionIndex ? null : sessionIndex);
  };

  return (
    <section
      id="schedule"
      className="py-12 sm:py-16 bg-gray-50"
      aria-labelledby="schedule-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="schedule-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3"
          >
            <FaCalendarAlt className="text-orange-600" />
            कार्यक्रम अनुसूची
          </h2>
          <p className="text-center text-gray-600 mb-8">
            चार दिवसीय महासम्मेलन का विस्तृत कार्यक्रम
          </p>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {Object.keys(scheduleData).map((day) => (
              <button
                key={day}
                onClick={() => {
                  setActiveDay(parseInt(day));
                  setExpandedSession(null);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDay === parseInt(day)
                    ? "bg-orange-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-100 hover:scale-105 shadow-md"
                }`}
                aria-pressed={activeDay === parseInt(day)}
              >
                दिन {day}
              </button>
            ))}
          </div>

          {/* Schedule Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    {scheduleData[activeDay].title}
                  </h3>
                  <p className="text-orange-100 text-sm sm:text-lg flex items-center gap-2">
                    <FaCalendarAlt className="text-sm" />
                    {scheduleData[activeDay].date}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="text-orange-100 text-sm">
                    {scheduleData[activeDay].sessions.length} सत्र
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {scheduleData[activeDay].sessions.map((session, index) => (
                <div
                  key={index}
                  className="mb-6 last:mb-0 border-l-4 border-orange-500 pl-4 sm:pl-6"
                >
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                    {/* Session Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 lg:mb-0">
                        <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                          <FaClock className="text-xs" />
                          {session.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaUser className="text-xs" />
                        <span>संचालक: {session.moderator}</span>
                      </div>
                    </div>

                    {/* Session Title */}
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 leading-tight">
                      {session.title}
                    </h4>

                    {/* Speakers Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {session.speakers
                          .slice(0, 4)
                          .map((speaker, speakerIndex) => (
                            <span
                              key={speakerIndex}
                              className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-orange-200 hover:bg-orange-100 transition-colors"
                            >
                              {speaker}
                            </span>
                          ))}
                        {session.speakers.length > 4 && (
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            +{session.speakers.length - 4} और वक्ता
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    {(session.subtopics || session.speakers.length > 4) && (
                      <button
                        onClick={() => toggleSession(index)}
                        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                        aria-expanded={expandedSession === index}
                      >
                        {expandedSession === index ? (
                          <>
                            <FaChevronUp /> कम दिखाएं
                          </>
                        ) : (
                          <>
                            <FaChevronDown /> विस्तार से देखें
                          </>
                        )}
                      </button>
                    )}

                    {/* Expanded Content */}
                    {expandedSession === index && (
                      <div className="mt-4 pt-4 border-t border-orange-200">
                        {/* All Speakers */}
                        {session.speakers.length > 4 && (
                          <div className="mb-4">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">
                              सभी वक्ता:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {session.speakers.map((speaker, speakerIndex) => (
                                <span
                                  key={speakerIndex}
                                  className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-orange-200"
                                >
                                  {speaker}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Subtopics if available */}
                        {session.subtopics && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-3">
                              विषय विवरण:
                            </h5>
                            <div className="space-y-3">
                              {session.subtopics.map(
                                (subtopic, subtopicIndex) => (
                                  <div
                                    key={subtopicIndex}
                                    className="bg-white rounded-lg p-3 border border-orange-100 hover:border-orange-200 transition-colors"
                                  >
                                    <p className="text-gray-800 font-medium text-sm mb-2">
                                      {subtopic.topic}
                                    </p>
                                    <div className="flex items-center gap-2">
                                      <FaUser className="text-orange-600 text-xs" />
                                      <p className="text-orange-600 text-xs font-medium">
                                        वक्ता: {subtopic.speaker}
                                      </p>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-8 text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-gray-600 text-sm mb-3">त्वरित नेवीगेशन:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {Object.keys(scheduleData).map((day) => (
                  <button
                    key={day}
                    onClick={() => {
                      setActiveDay(parseInt(day));
                      setExpandedSession(null);
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      activeDay === parseInt(day)
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-orange-100"
                    }`}
                  >
                    {scheduleData[day].date}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
