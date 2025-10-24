import { useState } from "react";
import {
  FaMobile,
  FaEdit,
  FaBroadcastTower,
  FaYoutube,
  FaBullseye,
  FaBrain,
  FaOm,
  FaFilm,
  FaTheaterMasks,
  FaPenNib,
  FaSearch,
  FaBook,
  FaMicrophone,
} from "react-icons/fa";
import {
  GiMicroscope,
  GiAtom,
  GiCrossedSwords,
  GiLotusFlower,
  GiWizardStaff,
} from "react-icons/gi";

const SocialInfluencers = () => {
  const [ setHoveredInfluencer] = useState(null);

  const influencers = [
    {
      name: "विशाल चौरसिया",
      channel: "Hyper Quest",
      icon: GiMicroscope,
      image: "/hyper-quest.png",
    },
    {
      name: "आशीष भारतवंशी",
      channel: "Ashish Bharatvanshi",
      icon: FaBullseye,
      image: "/ashish-bhartwansi.png",
    },
    {
      name: "मोहित गौड़",
      channel: "विज्ञानदर्शन",
      icon: FaBrain,
      image: "/vigyan-darshan.png",
    },
    {
      name: "संदीप आर्य",
      channel: "Om Aryavart",
      icon: FaOm,
      image: "./sandeep-arya.png",
    },
    {
      name: "आचार्य अग्निव्रत नैष्ठिक",
      channel: "Vaidic Physics",
      icon: GiAtom,
      image: "/acharya-agnivrat.png",
    },
    {
      name: "आचार्य अंकुर आर्य",
      channel: "Satya Sanatan",
      icon: FaOm,
      image: "/AcharyaAnkurArya.jpg",
    },
    {
      name: "आचार्य प्रशान्त शर्मा",
      channel: "Darshnik Vichar",
      icon: FaBrain,
      image: "/acharya-prashant.png",
    },
    {
      name: "संजीव नेवर",
      channel: "Gems of Bollywood",
      icon: FaFilm,
      image: "/gemes-of-bollywood.png",
    },
    {
      name: "स्वाति गोयल शर्मा",
      channel: "Gems of Bollywood",
      icon: FaTheaterMasks,
      image: "/gemes-of-bollywood.png",
    },
    {
      name: "अंकित यादव",
      channel: "Ankityadav Writes",
      icon: FaPenNib,
      image: "/ankit-yadav.png",
    },
    {
      name: "आर्यवीरा",
      channel: "aaryaveera",
      icon: GiCrossedSwords,
      image: "/aryaveera.png",
    },
    {
      name: "छवि सनातनी",
      channel: "Chhavi Sanatani",
      icon: GiLotusFlower,
      image: "/chavi-sanatani.png",
    },
    {
      name: "कार्तिक यादव",
      channel: "Kartik Decoded",
      icon: FaSearch,
      image: "./kartik-decoded.png",
    },
    {
      name: "डॉ. महिम तिवारी",
      channel: "Mahim Tiwari",
      icon: FaBook,
      image: "/mahim-tiwari.png",
    },
    {
      name: "लक्ष्य लकेय",
      channel: "Lakshya Speaks",
      icon: FaMicrophone,
      image: "/lakshay-speaks.png",
    },
    {
      name: "कृतेश पटेल",
      channel: "ऋषि उवाच",
      icon: GiWizardStaff,
      image: "/rishi-uvach.png",
    },
    {
      name: "हर्षिता मानकर",
      channel: "आर्यवीरा",
      icon: GiCrossedSwords,
      image: "/aryaveera.png",
    },
  ];

  const platformTypes = [
    {
      title: "YouTube Creators",
      icon: FaYoutube,
      color: "from-red-500 to-red-600",
      description: "विविध विषयों पर गुणवत्तापूर्ण सामग्री",
      count: 12,
    },
    {
      title: "Content Writers",
      icon: FaEdit,
      color: "from-green-500 to-green-600",
      description: "गहन विश्लेषण और विचारशील लेखन",
      count: 8,
    },
    {
      title: "Podcast Hosts",
      icon: FaBroadcastTower,
      color: "from-purple-500 to-purple-600",
      description: "संवादात्मक चर्चा और साक्षात्कार",
      count: 6,
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-labelledby="influencers-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="influencers-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3"
          >
            <FaMobile className="text-blue-600" />
            Social Media Influencers
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12">
            डिजिटल युग के प्रभावशाली विचारक और सामग्री निर्माता
          </p>

          {/* Influencers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {influencers.map((influencer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
                onMouseEnter={() => setHoveredInfluencer(index)}
                onMouseLeave={() => setHoveredInfluencer(null)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200 group-hover:border-blue-300 transition-colors">
                    <img
                      src={influencer.image || "/default-profile.svg"}
                      alt={`${influencer.name} की प्रोफाइल तस्वीर`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {influencer.name}
                  </h4>
                  <p className="text-blue-600 font-medium text-xs sm:text-sm bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                    {influencer.channel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Platform Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              डिजिटल मीडिया का शक्तिशाली मंच
            </h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              सत्य और ज्ञान का प्रसार करने वाले प्रभावशाली व्यक्तित्व
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {platformTypes.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">
                      {platform.title}
                    </h4>
                    <p className="text-blue-200 text-xs sm:text-sm mb-3">
                      {platform.description}
                    </p>
                    <div className="text-2xl font-bold text-blue-100">
                      {platform.count}+
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">17+</div>
              <div className="text-gray-600 text-sm">प्रभावशाली व्यक्तित्व</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">10M+</div>
              <div className="text-gray-600 text-sm">सामग्री निर्माता</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                100M+
              </div>
              <div className="text-gray-600 text-sm">विषय विविधता</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600 text-sm">प्रभाव</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialInfluencers;
