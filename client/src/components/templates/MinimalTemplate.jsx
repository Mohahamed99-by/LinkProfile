import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaQrcode,
  FaShare,
  FaDownload,
  FaCheck,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
import DownloadableQRCode from "../DownloadableQRCode";

const MinimalTemplate = ({
  profile,
  showQR,
  setShowQR,
  shareProfile,
  handleLinkClick,
}) => {
  const [showDownloadableQR, setShowDownloadableQR] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white py-6 relative overflow-hidden">
      {/* Enhanced Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle animated orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-100/40 to-slate-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating minimal elements */}
        <motion.div
          className="absolute top-32 right-20 w-3 h-3 bg-gray-300/60 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-2 h-2 bg-slate-400/50 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        <motion.div
          className="absolute top-60 left-40 w-4 h-4 bg-gray-200/40 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />

        {/* Subtle animated lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200/40 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-sm mx-auto px-4 relative z-10">
        {/* Enhanced Minimal Profile Card */}
        <motion.div
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Refined Header */}
          <div className="relative">
            <motion.div
              className="h-24 sm:h-32 bg-gradient-to-br from-gray-50/80 to-slate-50/60 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Subtle gradient line */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 via-slate-400 to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />

              {/* Elegant status indicators */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2">
                <motion.div
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
              </div>

              {/* Minimalist decoration */}
              <motion.div
                className="absolute top-1/2 left-4 w-8 h-px bg-gray-300/50"
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 0.8, delay: 0.8 }}
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
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full border-3 border-white shadow-xl overflow-hidden ring-2 ring-gray-100/60">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-gray-600">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Subtle pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gray-200/40"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Online status */}
                <motion.div
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <FaCheck className="text-white text-xs" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Profile Info */}
          <motion.div
            className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              @{profile.username}
            </motion.h1>

            {profile.bio && (
              <motion.p
                className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-xs mx-auto px-2"
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
                className="group p-3 sm:p-4 bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100/80 rounded-2xl transition-all duration-300 border border-gray-200/60 hover:border-gray-300/60 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Show QR Code"
              >
                <FaQrcode className="text-gray-600 group-hover:text-gray-800 transition-colors text-base sm:text-lg" />
              </motion.button>
              <motion.button
                onClick={() => setShowDownloadableQR(true)}
                className="group p-3 sm:p-4 bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100/80 rounded-2xl transition-all duration-300 border border-gray-200/60 hover:border-gray-300/60 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Download QR Code"
              >
                <FaDownload className="text-gray-600 group-hover:text-gray-800 transition-colors text-base sm:text-lg" />
              </motion.button>
              <motion.button
                onClick={shareProfile}
                className="group p-3 sm:p-4 bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100/80 rounded-2xl transition-all duration-300 border border-gray-200/60 hover:border-gray-300/60 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Share Profile"
              >
                <FaShare className="text-gray-600 group-hover:text-gray-800 transition-colors text-base sm:text-lg" />
              </motion.button>
            </motion.div>

            {/* Enhanced QR Code */}
            {showQR && (
              <motion.div
                className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50/60 backdrop-blur-sm rounded-2xl border border-gray-200/60"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <QRCode
                      value={window.location.href}
                      size={120}
                      level="H"
                      includeMargin={true}
                      fgColor="#374151"
                      bgColor="#ffffff"
                    />
                  </motion.div>
                </div>
                <p className="text-sm text-gray-600 text-center font-medium">
                  Scan to visit this profile
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="px-4 sm:px-6 pb-6 sm:pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-3">
                {profile.links.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full group relative overflow-hidden bg-gray-50/60 backdrop-blur-sm hover:bg-gray-100/60 rounded-2xl p-4 sm:p-5 border border-gray-200/60 hover:border-gray-300/60 transition-all duration-500 shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Subtle shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-gray-200"
                          whileHover={{ scale: 1.1, rotate: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <i
                            className={`${link.icon} text-gray-600 group-hover:text-gray-800 transition-colors text-sm sm:text-base`}
                          ></i>
                        </motion.div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="font-semibold text-gray-900 text-base sm:text-lg block group-hover:text-gray-700 transition-colors truncate">
                            {link.platform_name}
                          </span>
                          <span className="text-gray-500 text-xs sm:text-sm flex items-center">
                            <FaGlobe className="mr-1 text-xs" />
                            Click to visit
                          </span>
                        </div>
                      </div>
                      <motion.div
                        className="flex items-center space-x-2 flex-shrink-0"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <FaExternalLinkAlt className="text-gray-500 text-xs" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="w-20 h-20 bg-gray-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-200/60">
                  <FaExternalLinkAlt className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  No links yet
                </h3>
                <p className="text-gray-500 text-sm">
                  Add your first social link to get started
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="inline-flex items-center px-4 py-3 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <span className="text-xs text-gray-500 mr-2">Powered by</span>
            <a
              href="/"
              className="text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              LinkProfile
            </a>
            <motion.div
              className="ml-2 w-1 h-1 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
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

export default MinimalTemplate;
