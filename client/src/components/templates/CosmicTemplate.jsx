import { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaQrcode,
  FaShare,
  FaRocket,
  FaStar,
  FaMoon,
  FaDownload,
  FaAtom,
  FaSpaceShuttle,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
import DownloadableQRCode from "../DownloadableQRCode";

const CosmicTemplate = ({
  profile,
  showQR,
  setShowQR,
  shareProfile,
  handleLinkClick,
}) => {
  const [stars, setStars] = useState([]);
  const [showDownloadableQR, setShowDownloadableQR] = useState(false);

  useEffect(() => {
    // Generate dynamic star field
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.9 + 0.1,
          animationDelay: Math.random() * 5,
          twinkleSpeed: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-900 to-black">
      {/* Enhanced Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.twinkleSpeed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Enhanced Cosmic Nebula Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-blue-500/25 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            x: [0, 30, -10, 0],
            y: [0, -20, 10, 0],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-pink-500/20 via-purple-500/25 to-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.4, 1.2],
            x: [0, -40, 20, 0],
            y: [0, 30, -15, 0],
            opacity: [0.4, 0.7, 0.3, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-emerald-500/15 via-teal-500/20 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 0.8, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Enhanced Floating Cosmic Elements */}
        <motion.div
          className="absolute top-32 right-20 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow:
              "0 0 30px rgba(255,193,7,0.6), 0 0 60px rgba(255,193,7,0.3)",
          }}
        >
          <FaAtom className="text-white text-lg" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-16 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
          style={{
            boxShadow:
              "0 0 25px rgba(6,182,212,0.7), 0 0 50px rgba(6,182,212,0.4)",
          }}
        >
          <FaSpaceShuttle className="text-white text-sm" />
        </motion.div>

        <motion.div
          className="absolute top-60 left-40 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, -20, 10, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.6, 1, 0.4, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{
            boxShadow: "0 0 20px rgba(236,72,153,0.6)",
          }}
        >
          <FaStar className="text-white text-xs" />
        </motion.div>
      </div>

      <div className="max-w-sm mx-auto px-4 relative z-10 py-6">
        {/* Enhanced Cosmic Profile Card */}
        <motion.div
          className="relative bg-slate-900/60 backdrop-blur-2xl rounded-3xl sm:rounded-4xl overflow-hidden border border-cyan-500/30 shadow-2xl hover:shadow-3xl transition-all duration-700"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            boxShadow:
              "0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(147,51,234,0.2)",
          }}
        >
          {/* Enhanced Cosmic Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/15 to-pink-500/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Profile Header */}
          <div className="relative">
            <motion.div
              className="h-32 sm:h-40 bg-gradient-to-br from-slate-800/80 via-indigo-900/80 to-purple-900/80 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Enhanced Aurora Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/25 via-blue-400/20 via-purple-400/25 to-pink-400/20"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Cosmic Border */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Enhanced Floating Cosmic Icons */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/60 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/50"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: "0 0 15px rgba(6,182,212,0.6)",
                  }}
                >
                  <FaRocket className="text-cyan-400 text-sm sm:text-base" />
                </motion.div>
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/60 backdrop-blur-md rounded-full flex items-center justify-center border border-pink-400/50"
                  whileHover={{ scale: 1.1, rotate: -15 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  style={{
                    animationDuration: "3s",
                    animationIterationCount: "infinite",
                    boxShadow: "0 0 15px rgba(236,72,153,0.6)",
                  }}
                >
                  <FaStar className="text-pink-400 text-sm sm:text-base" />
                </motion.div>
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/60 backdrop-blur-md rounded-full flex items-center justify-center border border-purple-400/50"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  style={{
                    animationDuration: "6s",
                    animationIterationCount: "infinite",
                    boxShadow: "0 0 15px rgba(147,51,234,0.6)",
                  }}
                >
                  <FaMoon className="text-purple-400 text-sm sm:text-base" />
                </motion.div>
              </div>

              {/* Scanning Line Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-8"
                animate={{
                  y: ["-50px", "calc(100% + 50px)"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
              />
            </motion.div>

            {/* Enhanced Cosmic Profile Image */}
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
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-slate-900/70 backdrop-blur-2xl rounded-full border-2 sm:border-3 border-cyan-400/60 shadow-2xl overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover filter brightness-110 contrast-125"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-600/50 via-purple-600/50 to-pink-600/50 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Enhanced Orbital Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    boxShadow: "0 0 30px rgba(6,182,212,0.5)",
                  }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-pink-400/40"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    boxShadow: "0 0 20px rgba(236,72,153,0.5)",
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-purple-400/40"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    boxShadow: "0 0 15px rgba(147,51,234,0.5)",
                  }}
                />

                {/* Enhanced Cosmic Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-xl -z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Online Status */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-3 border-slate-900 shadow-lg flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 10px rgba(16,185,129,0.5)",
                      "0 0 20px rgba(16,185,129,0.8)",
                      "0 0 10px rgba(16,185,129,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Profile Info */}
          <motion.div
            className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                @{profile.username}
              </span>
            </motion.h1>

            {profile.bio && (
              <motion.p
                className="text-slate-200 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-xs mx-auto px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {profile.bio}
              </motion.p>
            )}

            {/* Enhanced Cosmic Action Buttons */}
            <motion.div
              className="flex justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800/70 rounded-xl sm:rounded-2xl transition-all duration-300 border border-cyan-400/50 hover:border-cyan-400"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 0 40px rgba(6,182,212,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                title="Show QR Code"
              >
                <FaQrcode className="text-cyan-400 text-base sm:text-lg" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                onClick={() => setShowDownloadableQR(true)}
                className="group relative p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800/70 rounded-xl sm:rounded-2xl transition-all duration-300 border border-purple-400/50 hover:border-purple-400"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 0 40px rgba(147,51,234,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                title="Download QR Code"
              >
                <FaDownload className="text-purple-400 text-base sm:text-lg" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                onClick={shareProfile}
                className="group relative p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800/70 rounded-xl sm:rounded-2xl transition-all duration-300 border border-pink-400/50 hover:border-pink-400"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 0 40px rgba(236,72,153,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                title="Share Profile"
              >
                <FaShare className="text-pink-400 text-base sm:text-lg" />
                <div className="absolute inset-0 bg-pink-400/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Enhanced Cosmic QR Code */}
            {showQR && (
              <motion.div
                className="mb-6 sm:mb-8 p-4 sm:p-6 bg-slate-900/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-cyan-400/50"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  boxShadow: "0 0 40px rgba(6,182,212,0.3)",
                }}
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  <motion.div
                    className="p-3 sm:p-4 bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-cyan-400/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: "0 0 20px rgba(6,182,212,0.6)",
                    }}
                  >
                    <QRCode
                      value={window.location.href}
                      size={120}
                      level="H"
                      includeMargin={true}
                      fgColor="#000000"
                      bgColor="#ffffff"
                    />
                  </motion.div>
                </div>
                <p className="text-cyan-300 text-center font-bold text-sm sm:text-base">
                  Scan to explore this cosmic profile
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced Cosmic Social Links */}
          <motion.div
            className="px-4 sm:px-6 pb-6 sm:pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-3 sm:space-y-4">
                {profile.links.map((link, index) => {
                  const cosmicColors = [
                    {
                      from: "from-purple-500",
                      to: "to-pink-500",
                      shadow: "rgba(147,51,234,0.6)",
                      border: "border-purple-400/50",
                    },
                    {
                      from: "from-cyan-500",
                      to: "to-blue-500",
                      shadow: "rgba(6,182,212,0.6)",
                      border: "border-cyan-400/50",
                    },
                    {
                      from: "from-pink-500",
                      to: "to-rose-500",
                      shadow: "rgba(236,72,153,0.6)",
                      border: "border-pink-400/50",
                    },
                    {
                      from: "from-indigo-500",
                      to: "to-purple-500",
                      shadow: "rgba(99,102,241,0.6)",
                      border: "border-indigo-400/50",
                    },
                    {
                      from: "from-violet-500",
                      to: "to-purple-500",
                      shadow: "rgba(139,92,246,0.6)",
                      border: "border-violet-400/50",
                    },
                    {
                      from: "from-blue-500",
                      to: "to-cyan-500",
                      shadow: "rgba(59,130,246,0.6)",
                      border: "border-blue-400/50",
                    },
                  ];

                  const color = cosmicColors[index % cosmicColors.length];

                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => handleLinkClick(link.url)}
                      className={`w-full group relative overflow-hidden bg-slate-900/60 backdrop-blur-2xl hover:bg-slate-800/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${color.border} hover:border-opacity-80 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                      whileHover={{
                        scale: 1.03,
                        y: -5,
                        boxShadow: `0 0 40px ${color.shadow}`,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Enhanced Cosmic Shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
                            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${color.from} ${color.to} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20`}
                            whileHover={{
                              scale: 1.15,
                              rotate: 8,
                              boxShadow: `0 0 20px ${color.shadow}`,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <i
                              className={`${link.icon} text-white text-sm sm:text-lg`}
                            ></i>
                          </motion.div>
                          <div className="text-left min-w-0 flex-1">
                            <span className="font-bold text-white text-base sm:text-lg block group-hover:text-cyan-300 transition-colors duration-300 truncate">
                              {link.platform_name}
                            </span>
                            <span className="text-slate-300 text-xs sm:text-sm flex items-center mt-1">
                              <FaGlobeAmericas className="mr-1 text-xs" />
                              Explore the cosmos
                            </span>
                          </div>
                        </div>
                        <motion.div
                          className="flex items-center space-x-2 flex-shrink-0"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-900/70 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/50 shadow-lg">
                            <FaExternalLinkAlt className="text-cyan-400 text-xs sm:text-sm" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-900/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-cyan-400/50">
                  <FaExternalLinkAlt className="text-cyan-400 text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  No cosmic links detected
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Launch your first connection to the stars!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Cosmic Footer */}
        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/60 backdrop-blur-2xl rounded-xl sm:rounded-2xl border border-cyan-400/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
          >
            <span className="text-xs sm:text-sm text-slate-300 mr-2">
              Powered by
            </span>
            <a
              href="/"
              className="font-bold text-white hover:text-cyan-300 transition-all duration-300 text-sm sm:text-base"
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

export default CosmicTemplate;
