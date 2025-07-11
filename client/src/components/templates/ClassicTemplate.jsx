import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaQrcode,
  FaShare,
  FaStar,
  FaHeart,
  FaDownload,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SimpleQRCode from "../SimpleQRCode";
import DownloadableQRCode from "../DownloadableQRCode";

const ClassicTemplate = ({
  profile,
  showQR,
  setShowQR,
  shareProfile,
  handleLinkClick,
}) => {
  const [showDownloadableQR, setShowDownloadableQR] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-8 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/15 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-rose-500/15 rounded-full blur-2xl"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/15 rounded-full blur-2xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Geometric Elements with Animation */}
        <motion.div
          className="absolute top-32 right-32 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-16 w-6 h-6 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </div>

      <div className="max-w-sm mx-auto px-4 relative z-10">
        {/* Enhanced Profile Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden border border-white/60 hover:shadow-3xl transition-all duration-700 hover:border-blue-200/60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Header with Advanced Gradient */}
          <div className="relative">
            <motion.div
              className="h-36 sm:h-44 lg:h-52 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Animated Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px),
                                     radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                  animate={{
                    backgroundPosition: ["0 0", "30px 30px", "0 0"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Enhanced Status Icons */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle className="text-green-300 text-sm sm:text-base" />
                </motion.div>
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  style={{
                    animationDuration: "3s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <FaStar className="text-yellow-300 text-sm sm:text-base" />
                </motion.div>
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 5, 0],
                  }}
                  style={{
                    animationDuration: "4s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <FaHeart className="text-pink-300 text-sm sm:text-base" />
                </motion.div>
              </div>

              {/* Gradient Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Enhanced Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full border-3 sm:border-4 border-white shadow-2xl overflow-hidden ring-3 sm:ring-4 ring-blue-100/50">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Status Indicator */}
                <motion.div
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Profile Info */}
          <motion.div
            className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-6 sm:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 mb-2 sm:mb-3 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                @{profile.username}
              </span>
            </motion.h1>

            {profile.bio && (
              <motion.p
                className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-xs mx-auto px-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {profile.bio}
              </motion.p>
            )}

            {/* Enhanced Action Buttons */}
            <motion.div
              className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Show QR Code"
              >
                <FaQrcode className="text-white text-base sm:text-lg" />
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                onClick={() => setShowDownloadableQR(true)}
                className="group relative p-3 sm:p-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Download QR Code"
              >
                <FaDownload className="text-white text-base sm:text-lg" />
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                onClick={shareProfile}
                className="group relative p-3 sm:p-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Share Profile"
              >
                <FaShare className="text-white text-base sm:text-lg" />
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Enhanced QR Code */}
            <SimpleQRCode
              url={window.location.href}
              username={profile.username}
              profileImage={profile.profile_image}
              showQR={showQR}
              setShowQR={setShowQR}
            />
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="px-4 sm:px-6 pb-6 sm:pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-white to-slate-50/50 hover:from-blue-50 hover:to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/60 hover:border-blue-300/60 transition-all duration-500 hover:scale-102 hover:shadow-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Enhanced Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 6 }}
                          transition={{ duration: 0.3 }}
                        >
                          <i
                            className={`${link.icon} text-white text-sm sm:text-lg`}
                          ></i>
                        </motion.div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="font-bold text-slate-800 text-base sm:text-lg block group-hover:text-blue-600 transition-colors duration-300 truncate">
                            {link.platform_name}
                          </span>
                          <span className="text-slate-500 text-xs sm:text-sm flex items-center">
                            <FaGlobe className="mr-1 text-xs" />
                            Click to visit
                          </span>
                        </div>
                      </div>
                      <motion.div
                        className="flex items-center space-x-2 flex-shrink-0"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaExternalLinkAlt className="text-blue-600 text-xs sm:text-sm" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaExternalLinkAlt className="text-slate-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-3">
                  No links yet
                </h3>
                <p className="text-slate-500 text-lg">
                  Add your first social link to get started!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-sm text-slate-600 mr-2">Powered by</span>
            <a
              href="/"
              className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              LinkProfile
            </a>
          </div>
        </motion.div>

        {/* Downloadable QR Code Modal */}
        <DownloadableQRCode
          url={window.location.href}
          username={profile.username}
          profileImage={profile.profile_image}
          isOpen={showDownloadableQR}
          onClose={() => setShowDownloadableQR(false)}
        />
      </div>
    </div>
  );
};

export default ClassicTemplate;
