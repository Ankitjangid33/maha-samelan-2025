import { FaGlobe } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-300 via-amber-600 to-yellow-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaGlobe className="text-white text-2xl animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          अंतर्राष्ट्रीय आर्य महासम्मेलन 2025
        </h2>
        <p className="text-orange-100 text-lg">The Youth Ignites</p>
        <div className="mt-4">
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
