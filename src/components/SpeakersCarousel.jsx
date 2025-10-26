import { useState, useRef, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

const SpeakersCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

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
      specialty: "वैदिक विद्वान",
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
      name: "आचार्य अनुज शास्त्री",
      specialty: "युवा वैदिक प्रवक्ता",
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
      specialty: "युवा धर्म प्रचारक",
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
      specialty: "साहित्यकार एवं विद्वान",
      image: "/chaturvedi.png",
    },
    {
      name: "श्रुतांत आर्य",
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
      name: "मेधाविनी गर्ग",
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
      name: "निर्भय आर्य",
      specialty: "युवा प्रचारक",
      image: "/Nirbhay-arya.jpg",
    },
    {
      name: "जयादित्य चक्रवर्ती",
      specialty: "युवा प्रचारक",
      image: "/chakravarti.jpg",
    },
  ];

  // Duplicate speakers for seamless loop (triple for better infinite effect)
  const duplicatedSpeakers = [...speakers, ...speakers, ...speakers];

  // JavaScript-based animation
  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      return;
    }

    const carousel = carouselRef.current;
    if (!carousel) return;

    // Calculate the width of one set of speakers (33.333% of total width)
    const totalWidth = carousel.scrollWidth;
    const oneSetWidth = totalWidth / 3; // Since we have 3 copies

    animationRef.current = setInterval(() => {
      setTranslateX((prev) => {
        const newTranslate = prev - 3; // Move 3px per interval for faster speed
        // Reset when we've moved one full set
        if (Math.abs(newTranslate) >= oneSetWidth) {
          return 0;
        }
        return newTranslate;
      });
    }, 30); // 30ms interval for faster animation

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isPaused]);

  // Apply transform
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transform = `translateX(${translateX}px)`;
    }
  }, [translateX]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section
      id="speakers-carousel"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
      aria-labelledby="carousel-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="carousel-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <FaMicrophone className="text-orange-600 text-2xl sm:text-3xl lg:text-4xl" />
              <span className="leading-tight">हमारे विशेषज्ञ वक्ता</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed">
              देश-विदेश के {speakers.length}+ प्रतिष्ठित विद्वान और विचारक
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-orange-50 via-amber-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-orange-50 via-amber-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container */}
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex gap-6 select-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  width: "max-content",
                  transform: `translateX(${translateX}px)`,
                  transition: isPaused ? "none" : "transform 0.05s linear",
                }}
              >
                {duplicatedSpeakers.map((speaker, index) => (
                  <div
                    key={`${speaker.name}-${index}`}
                    className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 group hover:scale-105"
                  >
                    <div className="p-4 sm:p-6 text-center">
                      {/* Speaker Image */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden border-3 border-orange-200 group-hover:border-orange-400 transition-colors">
                        <img
                          src={speaker.image || "/default-profile.svg"}
                          alt={`${speaker.name} की तस्वीर`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Speaker Info */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                        {speaker.name}
                      </h3>
                      <p className="text-orange-600 font-medium text-sm sm:text-base leading-relaxed">
                        {speaker.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-6 sm:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                {speakers.length}+ विशेषज्ञ वक्ता
              </h3>
              <p className="text-orange-100 text-base sm:text-lg leading-relaxed">
                धर्म, विज्ञान, समाज, राष्ट्र और विश्व के विविध विषयों के
                विशेषज्ञ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersCarousel;
