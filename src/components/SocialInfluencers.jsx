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
  const handleChannelClick = (channelUrl) => {
    if (channelUrl) {
      window.open(channelUrl, "_blank", "noopener,noreferrer");
    }
  };

  const influencers = [
    {
      name: "विशाल चौरसिया",
      channel: "Hyper Quest",
      icon: GiMicroscope,
      image: "/hyper-quest.png",
      channelUrl: "https://www.youtube.com/@HyperQuest",
    },
    {
      name: "आशीष भारतवंशी",
      channel: "Ashish Bharatvanshi",
      icon: FaBullseye,
      image: "/ashish-bhartwansi.png",
      channelUrl: "https://www.youtube.com/@ashishbharatvanshi",
    },
    {
      name: "मोहित गौड़",
      channel: "विज्ञान दर्शन",
      icon: FaBrain,
      image: "/vigyan-darshan.png",
      channelUrl: "https://www.youtube.com/@Vigyandarshan",
    },
    {
      name: "संदीप आर्य",
      channel: "Om Aryavart",
      icon: FaOm,
      image: "./sandeep-arya.png",
      channelUrl: "https://www.youtube.com/@omaryavart539",
    },
    {
      name: "आचार्य अग्निव्रत नैष्ठिक",
      channel: "Vaidic Physics",
      icon: GiAtom,
      image: "/acharya-agnivrat.png",
      channelUrl: "https://www.youtube.com/@vaidicphysics",
    },
    {
      name: "आचार्य अंकुर आर्य",
      channel: "Satya Sanatan",
      icon: FaOm,
      image: "/AcharyaAnkurArya.jpg",
      channelUrl: "https://www.youtube.com/@satyasanatanofficial",
    },
    {
      name: "आचार्य प्रशान्त शर्मा",
      channel: "Darshnik Vichar",
      icon: FaBrain,
      image: "/acharya-prashant.png",
      channelUrl: "https://www.youtube.com/@darshnikvichar",
    },
    {
      name: "संजीव नेवर",
      channel: "Gems of Bollywood",
      icon: FaFilm,
      image: "/gemes-of-bollywood.png",
      channelUrl: "https://www.youtube.com/@GemsOfBollywood",
    },
    {
      name: "अजीत भारती",
      channel: "Ajeet Bharti",
      icon: GiMicroscope,
      image: "/ajeet-bharti.jpeg",
      channelUrl: "https://www.youtube.com/@AjeetBharti",
    },
    {
      name: "पुलकित त्यागी",
      channel: "Pulkit Tyagi",
      icon: GiCrossedSwords,
      image: "/pulkit-tyagi.png",
      channelUrl: "https://www.youtube.com/@pulkitnpc",
    },
    {
      name: "स्वाति गोयल शर्मा",
      channel: "Gems of Bollywood",
      icon: FaTheaterMasks,
      image: "/gemes-of-bollywood.png",
      channelUrl: "https://www.youtube.com/@GemsOfBollywood",
    },
    {
      name: "अंकित यादव",
      channel: "Ankityadav Writes",
      icon: FaPenNib,
      image: "/ankit-yadav.png",
      channelUrl: "https://www.instagram.com/ankityadav_writes/",
    },
    {
      name: "आर्यवीरा",
      channel: "aaryaveera",
      icon: GiCrossedSwords,
      image: "/aryaveera.png",
      channelUrl: "https://www.youtube.com/@aaryaveeraa",
    },
    {
      name: "छवि सनातनी",
      channel: "Chhavi Sanatani",
      icon: GiLotusFlower,
      image: "/chavi-sanatani.jpg",
      channelUrl: "https://www.instagram.com/mission_jagriti_/",
    },
    {
      name: "कार्तिक यादव",
      channel: "Kartik Decoded",
      icon: FaSearch,
      image: "./kartik-decoded.png",
      channelUrl: "https://www.youtube.com/@DecodingwithKartik",
    },
    {
      name: "डॉ. महिम तिवारी",
      channel: "Mahim Tiwari",
      icon: FaBook,
      image: "/mahim-tiwari.png",
      channelUrl: "https://www.youtube.com/@DrMahimTiwari",
    },
    {
      name: "लक्ष्य लकेय",
      channel: "Lakshya Speaks",
      icon: FaMicrophone,
      image: "/lakshay-speaks.png",
      channelUrl: "https://www.youtube.com/@LakhshyaSpeaks",
    },
    {
      name: "कृतेश पटेल",
      channel: "ऋषि उवाच",
      icon: GiWizardStaff,
      image: "/dharmsamrat.jpg",
      channelUrl: "https://www.youtube.com/@RishiUvachOfficial",
    },
    {
      name: "संजय सिंह",
      channel: "Desi Tarzan official",
      icon: GiMicroscope,
      image: "/sanjay-sing.png",
      channelUrl: "https://www.youtube.com/@DesiTarzanOfficial",
    },
    {
      name: "सार्थक महाजन",
      channel: "सनातन संचयन",
      icon: GiMicroscope,
      image: "/sarthak-mahajan.jpg",
      channelUrl: "https://www.youtube.com/@sanatansanchayan",
    },
    {
      name: "संदीपन रॉय",
      channel: "Rishi Mantavya",
      icon: GiMicroscope,
      image: "/Vedveer Arya.png",
      channelUrl: "https://www.youtube.com/@sandipanroyy",
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
      className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-labelledby="influencers-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          <h2
            id="influencers-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-800 mb-3 sm:mb-4 lg:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4"
          >
            <FaMobile className="text-blue-600 text-xl sm:text-2xl lg:text-3xl xl:text-4xl" />
            <span className="text-center">Social Media Influencers</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 px-4">
            डिजिटल युग के प्रभावशाली विचारक और सामग्री निर्माता
          </p>

          {/* Influencers Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-12 lg:mb-16">
            {influencers.map((influencer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 group cursor-pointer"
                onClick={() => handleChannelClick(influencer.channelUrl)}
              >
                <div className="text-center">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full overflow-hidden border-3 sm:border-4 border-blue-200 group-hover:border-blue-300 transition-colors">
                    <img
                      src={influencer.image || "/default-profile.svg"}
                      alt={`${influencer.name} की प्रोफाइल तस्वीर`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {influencer.name}
                  </h4>
                  <p className="text-blue-600 font-medium text-xs sm:text-sm lg:text-base xl:text-lg bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-full group-hover:bg-blue-100 transition-colors">
                    {influencer.channel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Platform Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
              डिजिटल मीडिया का शक्तिशाली मंच
            </h3>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-100 mb-6 sm:mb-8 lg:mb-12">
              सत्य और ज्ञान का प्रसार करने वाले प्रभावशाली व्यक्तित्व
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              {platformTypes.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mb-1 sm:mb-2 lg:mb-3">
                      {platform.title}
                    </h4>
                    <p className="text-blue-200 text-xs sm:text-sm lg:text-base xl:text-lg mb-2 sm:mb-3 lg:mb-4">
                      {platform.description}
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-100">
                      {platform.count}+
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-1 sm:mb-2 lg:mb-3">
                17+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg">
                प्रभावशाली व्यक्तित्व
              </div>
            </div>
            <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-600 mb-1 sm:mb-2 lg:mb-3">
                10M+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg">
                सामग्री निर्माता
              </div>
            </div>
            <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-600 mb-1 sm:mb-2 lg:mb-3">
                100M+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg">
                विषय विविधता
              </div>
            </div>
            <div className="bg-white rounded-lg lg:rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-1 sm:mb-2 lg:mb-3">
                ∞
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg">
                प्रभाव
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialInfluencers;
