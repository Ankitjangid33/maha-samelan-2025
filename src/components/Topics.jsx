import { useState } from "react";
import {
  FaBullseye,
  FaComments,
  FaQuestionCircle,
  FaStar,
  FaSearch,
  FaBalanceScale,
  FaOm,
} from "react-icons/fa";
import { GiBrain, GiAtom, GiDna2, GiMicroscope } from "react-icons/gi";
import { MdFamilyRestroom, MdAccountBalance } from "react-icons/md";

const Topics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedTopic, setExpandedTopic] = useState(null);

  const topics = [
    {
      title: "आस्तिक और नास्तिक के मध्य मंच-चर्चा",
      category: "philosophy",
      description: "धर्म और अध्यात्म पर गहन विचार-विमर्श",
      speakers: ["रोहित आर्य", "मनस्वी", "महेन्द्र आर्य"],
      icon: GiBrain,
    },
    {
      title: "Live-in Relationship, Marital Rape, बढ़ते तलाक और टूटते परिवार",
      category: "social",
      description: "आधुनिक सामाजिक समस्याओं पर चर्चा",
      speakers: ["छवि सनातनी", "आर्यवीरा", "नीतिका निगम"],
      icon: MdFamilyRestroom,
    },
    {
      title: "वैदिक सृष्टि-उत्पत्ति विज्ञान और Big Bang Theory की समीक्षा",
      category: "science",
      description: "प्राचीन ज्ञान और आधुनिक विज्ञान का तुलनात्मक अध्ययन",
      speakers: ["आचार्य अग्निव्रत नैष्ठिक", "कार्तिक अय्यर", "मोहित गौड़"],
      icon: GiAtom,
    },
    {
      title: "अद्वैत, द्वैत और त्रैतमत पर विद्वानों के साथ शास्त्र-चर्चा",
      category: "philosophy",
      description: "भारतीय दर्शन की विभिन्न धाराओं पर विस्तृत चर्चा",
      speakers: ["विठोबा आचार्य", "कृतेश पटेल", "कुमार उत्कर्ष"],
      icon: FaOm,
    },
    {
      title: "मनुस्मृति, जातिवाद और आम्बेडकर पर विचार-संवाद",
      category: "social",
      description: "सामाजिक न्याय और समानता पर गहन विमर्श",
      speakers: [
        "डॉ. ज्वलन्त शास्त्री",
        "डॉ. विवेक आर्य",
        "आचार्य योगेश भारद्वाज",
      ],
      icon: FaBalanceScale,
    },
    {
      title: "आरक्षण पर मंच-चर्चा",
      category: "social",
      description: "आरक्षण नीति की समीक्षा और भविष्य की दिशा",
      speakers: ["कृतेश पटेल", "अंकुर आर्य", "कार्तिक अय्यर"],
      icon: MdAccountBalance,
    },
    {
      title: "उत्क्रान्तिवाद (Evolution Theory) की समीक्षा",
      category: "science",
      description: "विकासवाद के सिद्धांत की वैज्ञानिक समीक्षा",
      speakers: [" संजय कुमार", "कार्तिक अय्यर", "उत्कर्ष सिंह"],
      icon: GiDna2,
    },
    {
      title: "वेद और विज्ञान से संबंधित विविध विषय",
      category: "science",
      description: "वैदिक ज्ञान में छुपे वैज्ञानिक सत्य",
      speakers: ["मोहित गौड़", "कार्तिक अय्यर", "संदीप आर्य", "विशाल चौरसिया"],
      icon: GiMicroscope,
    },
  ];

  const categories = [
    { key: "all", label: "सभी विषय", count: topics.length },
    {
      key: "philosophy",
      label: "दर्शन",
      count: topics.filter((t) => t.category === "philosophy").length,
    },
    {
      key: "social",
      label: "सामाजिक",
      count: topics.filter((t) => t.category === "social").length,
    },
    {
      key: "science",
      label: "विज्ञान",
      count: topics.filter((t) => t.category === "science").length,
    },
  ];

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="topics"
      className="py-12 sm:py-16 bg-gradient-to-br from-yellow-50 to-orange-50"
      aria-labelledby="topics-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="topics-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3"
          >
            <FaBullseye className="text-orange-600" />
            मुख्य विषय
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8">
            गहन चर्चा और विचार-विमर्श के लिए चुने गए महत्वपूर्ण विषय
          </p>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="relative w-full sm:w-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="विषय खोजें..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  aria-label="विषय खोजें"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.key
                        ? "bg-orange-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-orange-100 shadow-sm"
                    }`}
                    aria-pressed={selectedCategory === category.key}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <topic.icon className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {topic.description}
                    </p>

                    {/* Speakers */}
                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-500 mb-1">
                        मुख्य वक्ता:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {topic.speakers
                          .slice(0, 2)
                          .map((speaker, speakerIndex) => (
                            <span
                              key={speakerIndex}
                              className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs"
                            >
                              {speaker}
                            </span>
                          ))}
                        {topic.speakers.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            +{topic.speakers.length - 2} और
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() =>
                        setExpandedTopic(expandedTopic === index ? null : index)
                      }
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                      aria-expanded={expandedTopic === index}
                    >
                      {expandedTopic === index ? "कम दिखाएं" : "और पढ़ें"}
                    </button>

                    {/* Expanded Content */}
                    {expandedTopic === index && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs font-medium text-gray-500 mb-2">
                          सभी वक्ता:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {topic.speakers.map((speaker, speakerIndex) => (
                            <span
                              key={speakerIndex}
                              className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs border border-orange-200"
                            >
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTopics.length === 0 && (
            <div className="text-center py-12">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">कोई विषय नहीं मिला</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
              >
                सभी विषय दिखाएं
              </button>
            </div>
          )}

          {/* Special Features */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              विशेष आकर्षण
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaComments className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  संवादात्मक चर्चा
                </h4>
                <p className="text-gray-600 text-sm">
                  पारंपरिक व्याख्यान नहीं, खुली चर्चा
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaQuestionCircle className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  प्रश्न-उत्तर सत्र
                </h4>
                <p className="text-gray-600 text-sm">
                  हर सत्र में श्रोता भागीदारी
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaStar className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  विशेषज्ञ मार्गदर्शन
                </h4>
                <p className="text-gray-600 text-sm">
                  80+ अनुभवी वक्ता और विद्वान
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
