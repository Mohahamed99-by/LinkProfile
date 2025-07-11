import { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaQrcode,
  FaShare,
  FaFire,
  FaRainbow,
  FaSun,
  FaDownload,
  FaPalette,
  FaMagic,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
import DownloadableQRCode from "../DownloadableQRCode";

const GradientTemplate = ({
  profile,
  showQR,
  setShowQR,
  shareProfile,
  handleLinkClick,
}) => {
  const [currentGradient, setCurrentGradient] = useState(0);
  const [showDownloadableQR, setShowDownloadableQR] = useState(false);

  const gradients = [
    {
      bg: "from-pink-500 via-red-500 to-yellow-500",
      name: "Sunset",
      accent: "from-pink-400 to-yellow-400",
    },
    {
      bg: "from-purple-500 via-pink-500 to-red-500",
      name: "Aurora",
      accent: "from-purple-400 to-red-400",
    },
    {
      bg: "from-blue-500 via-purple-500 to-pink-500",
      name: "Galaxy",
      accent: "from-blue-400 to-pink-400",
    },
    {
      bg: "from-green-500 via-blue-500 to-purple-500",
      name: "Ocean",
      accent: "from-green-400 to-purple-400",
    },
    {
      bg: "from-yellow-500 via-orange-500 to-red-500",
      name: "Fire",
      accent: "from-yellow-400 to-red-400",
    },
    {
      bg: "from-indigo-500 via-purple-500 to-pink-500",
      name: "Cosmic",
      accent: "from-indigo-400 to-pink-400",
    },
    {
      bg: "from-emerald-500 via-teal-500 to-cyan-500",
      name: "Tropical",
      accent: "from-emerald-400 to-cyan-400",
    },
    {
      bg: "from-rose-500 via-pink-500 to-purple-500",
      name: "Romance",
      accent: "from-rose-400 to-purple-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [gradients.length]);

  const currentTheme = gradients[currentGradient];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Dynamic Animated Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${currentTheme.bg}`}
        key={currentGradient}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* Enhanced Overlay Pattern */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Dynamic Animated Mesh */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/30 via-transparent to-white/30"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Particle System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Enhanced Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-white/25 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 50, -20, 0],
            y: [0, -30, 20, 0],
            opacity: [0.3, 0.6, 0.2, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.3, 1, 0.8],
            x: [0, -40, 30, 0],
            y: [0, 40, -10, 0],
            opacity: [0.2, 0.5, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.4, 1.1],
            x: [0, 60, -30, 0],
            y: [0, -40, 15, 0],
            opacity: [0.4, 0.7, 0.2, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Enhanced Geometric Elements */}
        <motion.div
          className="absolute top-32 right-20 w-20 h-20 bg-white/25 rounded-3xl backdrop-blur-sm"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        <motion.div
          className="absolute top-60 left-40 w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm"
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 0.8, 1.1, 1],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>

      <div className="max-w-sm mx-auto relative z-10 py-6 px-4">
        {/* Enhanced Gradient Profile Card */}
        <motion.div
          className="relative bg-white/25 backdrop-blur-2xl rounded-3xl sm:rounded-4xl overflow-hidden border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Enhanced Rainbow Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />

          {/* Gradient Theme Indicator */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 bg-white/30 backdrop-blur-md rounded-full border border-white/40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-white text-xs font-bold">
              {currentTheme.name}
            </span>
          </motion.div>

          {/* Profile Header */}
          <div className="relative">
            <motion.div
              className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-white/30 via-white/20 to-white/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Enhanced Animated Rainbow Bar */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${currentTheme.accent}`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Enhanced Floating Status Icons */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 flex space-x-3 sm:space-x-4">
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/35 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1],
                  }}
                  style={{
                    animationDuration: "4s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <FaFire className="text-orange-200 text-lg sm:text-xl" />
                </motion.div>
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/35 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                  whileHover={{ scale: 1.15, rotate: -15 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  style={{
                    animationDuration: "5s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <FaRainbow className="text-pink-200 text-lg sm:text-xl" />
                </motion.div>
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/35 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 20 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0],
                  }}
                  style={{
                    animationDuration: "6s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <FaSun className="text-yellow-200 text-lg sm:text-xl" />
                </motion.div>
              </div>

              {/* Enhanced Gradient Waves */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/50 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating Magic Elements */}
              <motion.div
                className="absolute top-20 left-10 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaMagic className="text-white text-sm" />
              </motion.div>
            </motion.div>

            {/* Enhanced Rainbow Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/50 backdrop-blur-2xl rounded-full border-3 sm:border-4 border-white/60 shadow-2xl overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/60 to-white/40 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Enhanced Rainbow Ring Animations */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r ${currentTheme.accent} p-1`}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-transparent"></div>
                </motion.div>
                <motion.div
                  className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-white/60 to-white/30 p-1"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-transparent"></div>
                </motion.div>

                {/* Enhanced Pulsing Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/40 via-white/60 to-white/40 blur-xl -z-10"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Activity Status */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <FaHeart className="text-white text-sm" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Profile Info */}
          <motion.div
            className="pt-20 sm:pt-24 pb-8 sm:pb-10 px-8 sm:px-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.span
                className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                @{profile.username}
              </motion.span>
            </motion.h1>

            {profile.bio && (
              <motion.p
                className="text-white/95 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-xs mx-auto drop-shadow-md px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {profile.bio}
              </motion.p>
            )}

            {/* Enhanced Rainbow Action Buttons */}
            <motion.div
              className="flex justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-3 sm:p-4 bg-white/35 backdrop-blur-md hover:bg-white/45 rounded-xl sm:rounded-2xl transition-all duration-300 border border-white/50 hover:border-white/70 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.95 }}
                title="Show QR Code"
              >
                <FaQrcode className="text-white text-base sm:text-lg drop-shadow-md" />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} opacity-30 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300`}
                ></div>
              </motion.button>
              <motion.button
                onClick={() => setShowDownloadableQR(true)}
                className="group relative p-3 sm:p-4 bg-white/35 backdrop-blur-md hover:bg-white/45 rounded-xl sm:rounded-2xl transition-all duration-300 border border-white/50 hover:border-white/70 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotate: -5,
                }}
                whileTap={{ scale: 0.95 }}
                title="Download QR Code"
              >
                <FaDownload className="text-white text-base sm:text-lg drop-shadow-md" />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} opacity-30 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300`}
                ></div>
              </motion.button>
              <motion.button
                onClick={shareProfile}
                className="group relative p-3 sm:p-4 bg-white/35 backdrop-blur-md hover:bg-white/45 rounded-xl sm:rounded-2xl transition-all duration-300 border border-white/50 hover:border-white/70 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotate: 8,
                }}
                whileTap={{ scale: 0.95 }}
                title="Share Profile"
              >
                <FaShare className="text-white text-base sm:text-lg drop-shadow-md" />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} opacity-30 rounded-xl sm:rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300`}
                ></div>
              </motion.button>
            </motion.div>

            {/* Enhanced Rainbow QR Code */}
            {showQR && (
              <motion.div
                className="mb-10 p-8 bg-white/35 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-inner"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className={`p-6 bg-white rounded-3xl border-4 border-transparent bg-gradient-to-r ${currentTheme.accent} shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-2xl p-3">
                      <QRCode
                        value={window.location.href}
                        size={160}
                        level="H"
                        includeMargin={true}
                        fgColor="#1e293b"
                        bgColor="#ffffff"
                      />
                    </div>
                  </motion.div>
                </div>
                <p className="text-white font-bold text-lg drop-shadow-md">
                  Scan to visit this colorful profile
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced Rainbow Social Links */}
          <motion.div
            className="px-4 sm:px-6 pb-6 sm:pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-5">
                {profile.links.map((link, index) => {
                  const linkGradients = [
                    "from-pink-500 to-rose-500",
                    "from-purple-500 to-indigo-500",
                    "from-blue-500 to-cyan-500",
                    "from-green-500 to-emerald-500",
                    "from-yellow-500 to-orange-500",
                    "from-red-500 to-pink-500",
                    "from-violet-500 to-purple-500",
                    "from-teal-500 to-blue-500",
                  ];

                  const gradient = linkGradients[index % linkGradients.length];

                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => handleLinkClick(link.url)}
                      className="w-full group relative overflow-hidden bg-white/35 backdrop-blur-2xl hover:bg-white/45 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/50 hover:border-white/70 transition-all duration-500 shadow-lg hover:shadow-xl"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                      whileHover={{
                        scale: 1.03,
                        y: -5,
                        rotate: 1,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Enhanced Rainbow Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
                            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/40`}
                            whileHover={{
                              scale: 1.15,
                              rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <i
                              className={`${link.icon} text-white text-sm sm:text-lg drop-shadow-md`}
                            ></i>
                          </motion.div>
                          <div className="text-left min-w-0 flex-1">
                            <span className="font-bold text-white text-base sm:text-lg block group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-md truncate">
                              {link.platform_name}
                            </span>
                            <span className="text-white/90 text-xs sm:text-sm drop-shadow-sm flex items-center mt-1">
                              <FaPalette className="mr-1 text-xs" />
                              Click to visit
                            </span>
                          </div>
                        </div>
                        <motion.div
                          className="flex items-center space-x-3 flex-shrink-0"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/60 shadow-lg">
                            <FaExternalLinkAlt className="text-white text-xs sm:text-sm drop-shadow-sm" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="w-28 h-28 bg-white/50 backdrop-blur-2xl rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-white/60">
                  <FaExternalLinkAlt className="text-white/90 text-4xl drop-shadow-md" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                  No links yet
                </h3>
                <p className="text-white/90 text-lg drop-shadow-md">
                  Add your first social link to get started!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Rainbow Footer */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <div className="inline-flex items-center px-8 py-4 bg-white/35 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-sm text-white/90 mr-3 drop-shadow-sm">
              Powered by
            </span>
            <a
              href="/"
              className="font-bold text-white hover:text-yellow-100 transition-all duration-300 drop-shadow-md"
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

export default GradientTemplate;
