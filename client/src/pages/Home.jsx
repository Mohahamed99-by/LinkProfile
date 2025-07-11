import { Link } from "react-router-dom";
import {
  FaLink,
  FaUsers,
  FaChartLine,
  FaMobile,
  FaPalette,
  FaQrcode,
  FaRocket,
  FaLock,
  FaGlobe,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaUser,
  FaBolt,
  FaShieldAlt,
  FaEye,
  FaMousePointer,
  FaCode,
} from "react-icons/fa";
import { FaInfinity, FaMagic } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: FaBolt,
      title: "Lightning Fast Setup",
      description:
        "Create your professional link-in-bio page in under 60 seconds with our intuitive drag-and-drop builder and AI-powered suggestions.",
      gradient: "from-yellow-400 to-orange-500",
      color: "text-yellow-600",
    },
    {
      icon: FaMagic,
      title: "AI-Powered Design",
      description:
        "Let our AI suggest optimal layouts, colors, and link arrangements based on your industry and audience for maximum engagement.",
      gradient: "from-purple-400 to-pink-500",
      color: "text-purple-600",
    },
    {
      icon: FaEye,
      title: "Advanced Analytics",
      description:
        "Track visitor behavior, click patterns, conversion rates, and geographic data with real-time dashboards and export capabilities.",
      gradient: "from-blue-400 to-cyan-500",
      color: "text-blue-600",
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, GDPR compliance, two-factor authentication, and advanced privacy controls protect your data.",
      gradient: "from-green-400 to-emerald-500",
      color: "text-green-600",
    },
    {
      icon: FaInfinity,
      title: "Unlimited Everything",
      description:
        "No limits on links, visits, or customizations. Scale your digital presence without worrying about restrictions or hidden fees.",
      gradient: "from-indigo-400 to-purple-500",
      color: "text-indigo-600",
    },
    {
      icon: FaCode,
      title: "Developer-Friendly",
      description:
        "Custom CSS, JavaScript widgets, API integrations, webhooks, and embed codes for complete control and customization.",
      gradient: "from-gray-400 to-slate-500",
      color: "text-gray-600",
    },
  ];

  const stats = [
    { number: "2M+", label: "Active Users", icon: FaUsers },
    { number: "50M+", label: "Links Created", icon: FaLink },
    { number: "99.99%", label: "Uptime SLA", icon: FaRocket },
    { number: "180+", label: "Countries", icon: FaGlobe },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Ultra Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>

          {/* Animated Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl"
            animate={{
              y: [0, -20, 0],
              rotate: [12, 18, 12],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"
            animate={{
              y: [0, 15, 0],
              rotate: [-12, -6, -12],
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl"
            animate={{
              y: [0, -10, 0],
              rotate: [45, 50, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl"
            animate={{
              y: [0, 12, 0],
              rotate: [-6, 0, -6],
              scale: [1, 0.98, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 text-blue-700 border border-blue-200/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <FaMagic className="mr-2 text-blue-500" />✨ AI-Powered Link Management
            </span>
          </motion.div>

          {/* Hero Title with Staggered Animation */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-[0.9] tracking-tight">
              <motion.span
                className="block text-slate-800 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Next-Gen
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Link Hub
              </motion.span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-8 max-w-5xl mx-auto leading-relaxed font-light">
              Create{" "}
              <span className="font-bold text-blue-600 relative">
                intelligent link-in-bio pages
                <svg
                  className="absolute -bottom-1 left-0 w-full h-1"
                  viewBox="0 0 100 4"
                  fill="none"
                >
                  <path
                    d="M0 2 Q25 0 50 2 T100 2"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              powered by AI, advanced analytics, and enterprise-grade security.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-semibold">
                <FaUsers className="mr-2" />
                2M+ Active Users
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-semibold">
                <FaBolt className="mr-2" />
                60s Setup
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold">
                <FaShieldAlt className="mr-2" />
                Enterprise Security
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons with Enhanced Animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link
              to="/register"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Building Free
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <button className="group inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:border-blue-300 hover:bg-white">
              <FaPlay className="mr-2 text-blue-500 transition-transform group-hover:scale-125" />
              Watch Demo
              <div className="ml-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            </button>
          </motion.div>

         
        </motion.div>
      </section>

      {/* Advanced Features Section - Dark Cyber Theme */}
      <section className="py-32 relative bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
        {/* Cyber Background Elements */}
        <div className="absolute inset-0">
          {/* Neon Grid Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 25% 75%, rgba(6, 182, 212, 0.15) 0%, transparent 60%),
                        radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.15) 0%, transparent 60%),
                        radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 70%)`,
            }}
          ></div>

          {/* Animated Neon Orbs */}
          <motion.div
            className="absolute top-20 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.7, 0.3],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-emerald-500/15 to-teal-500/25 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Cyber Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0 0", "50px 50px", "0 0"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Digital Elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            >
              {
                [
                  "0x",
                  "1010",
                  "AI",
                  "ML",
                  "API",
                  "404",
                  "SSL",
                  "JWT",
                  "NFT",
                  "P2P",
                ][Math.floor(Math.random() * 10)]
              }
            </motion.div>
          ))}

          {/* Scanning Lines Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-32"
            animate={{
              y: ["-100%", "100vh"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container-modern relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-cyan-300 rounded-full text-sm font-bold mb-8 border border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaBolt className="mr-2 text-cyan-400" />
              Advanced Technology
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="block text-white mb-3 drop-shadow-lg">
                Enterprise-Grade
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                Innovation
              </span>
            </motion.h2>

            <motion.div
              className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-10 shadow-lg shadow-cyan-500/50"
              initial={{ width: 0 }}
              whileInView={{ width: "10rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Unlock the full potential of your digital presence with
              <span className="font-bold text-cyan-400 glow-cyan">
                {" "}
                cutting-edge AI technology
              </span>{" "}
              and enterprise-level capabilities that scale with your success.
            </motion.p>
          </motion.div>

          {/* Enhanced Feature Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 overflow-hidden hover:border-cyan-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Cyber Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Enhanced Icon Container */}
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-700 relative overflow-hidden`}
                  >
                    <feature.icon className="text-white text-2xl relative z-10" />

                    {/* Cyber Glow Effect */}
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </motion.div>

                {/* Enhanced Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-700 text-white group-hover:text-cyan-400`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base group-hover:text-slate-200 transition-colors duration-700">
                    {feature.description}
                  </p>
                </div>

                {/* Cyber Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    ONLINE
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            className="text-center mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:shadow-3xl transition-all duration-500 overflow-hidden border border-cyan-500/30"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center font-black">
                Explore All Features
                <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
              </span>

              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Cyber Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Redesigned Showcase Section - Creative & Innovative */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0 0", "50px 50px", "0 0"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Neon Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Code-like Floating Elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/30 text-sm font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            >
              {
                [
                  "<div>",
                  "</div>",
                  "className=",
                  "onClick=",
                  "useState",
                  "useEffect",
                ][Math.floor(Math.random() * 6)]
              }
            </motion.div>
          ))}
        </div>

        <div className="container-modern relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="block text-white mb-1">Design.</span>
              <span className="block text-white mb-1">Create.</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dominate.
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Professional link-in-bio pages that convert visitors into
              followers, customers, and fans.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Side - Features */}
            <motion.div
              className="lg:col-span-1 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FaBolt,
                  title: "Lightning Fast",
                  desc: "Build your profile in under 60 seconds",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  icon: FaEye,
                  title: "Real-time Preview",
                  desc: "See changes instantly as you design",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  icon: FaChartLine,
                  title: "Smart Analytics",
                  desc: "Track every click and conversion",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: FaMobile,
                  title: "Mobile Optimized",
                  desc: "Perfect on every device and screen",
                  color: "from-purple-400 to-pink-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center - Main Profile Preview */}
            <motion.div
              className="lg:col-span-1 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative mx-auto max-w-xs">
                  <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
                      {/* Phone Screen Content */}
                      <motion.div
                        className="bg-gradient-to-br from-slate-50 to-slate-100 h-[600px] p-6 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Profile Header */}
                        <div className="text-center mb-6">
                          <motion.div
                            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaUser className="text-white text-2xl" />
                          </motion.div>
                          <h3 className="text-xl font-black text-slate-900 mb-1">
                            @creator
                          </h3>
                          <p className="text-slate-600 text-sm">
                            Content Creator & Designer
                          </p>
                          <div className="flex justify-center mt-2">
                            <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold">
                              ✨ Pro
                            </span>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3">
                          {[
                            {
                              name: "Latest Video",
                              icon: "🎬",
                              color: "from-red-500 to-pink-500",
                            },
                            {
                              name: "Instagram",
                              icon: "📷",
                              color: "from-purple-500 to-pink-500",
                            },
                            {
                              name: "Portfolio",
                              icon: "🎨",
                              color: "from-blue-500 to-cyan-500",
                            },
                            {
                              name: "Shop Now",
                              icon: "🛍️",
                              color: "from-emerald-500 to-teal-500",
                            },
                            {
                              name: "Newsletter",
                              icon: "💌",
                              color: "from-amber-500 to-orange-500",
                            },
                          ].map((link, index) => (
                            <motion.div
                              key={index}
                              className={`flex items-center justify-between p-3 bg-gradient-to-r ${link.color} text-white rounded-xl shadow-md cursor-pointer`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.8 + index * 0.1,
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <div className="flex items-center">
                                <span className="text-lg mr-3">
                                  {link.icon}
                                </span>
                                <span className="font-semibold">
                                  {link.name}
                                </span>
                              </div>
                              <FaArrowRight className="opacity-80" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Analytics Preview */}
                        <motion.div
                          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-200"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              <span className="text-slate-700 font-bold">
                                Live Analytics
                              </span>
                            </div>
                            <span className="text-slate-600">
                              1.2K clicks today
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements Around Phone */}
                <motion.div
                  className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaStar className="text-white text-xl" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
                  animate={{
                    y: [0, 12, 0],
                    rotate: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <FaChartLine className="text-white text-lg" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Stats & CTA */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Stats Cards */}
              <div className="space-y-4">
                {[
                  { number: "99.9%", label: "Uptime", icon: FaRocket },
                  { number: "2.3s", label: "Load Time", icon: FaBolt },
                  { number: "150+", label: "Templates", icon: FaPalette },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {stat.number}
                        </div>
                        <div className="text-slate-400 font-semibold">
                          {stat.label}
                        </div>
                      </div>
                      <stat.icon className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/register"
                  className="group relative w-full inline-flex items-center justify-center px-8 py-6 text-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Start Creating
                    <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </Link>
              </motion.div>

              <p className="text-slate-400 text-sm text-center">
                Join 2M+ creators • No credit card required
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          <div className="animated-bg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 40, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Particle System */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container-modern relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dominate?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join <span className="font-bold text-cyan-400">2M+ creators</span>{" "}
              who've already transformed their digital presence. Your audience
              is waiting.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-black text-slate-900 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Start Creating Free
                    <FaRocket className="ml-3 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="group inline-flex items-center justify-center px-12 py-6 text-2xl font-black text-white border-3 border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/50 transition-all duration-500">
                  <FaPlay className="mr-3 transition-transform group-hover:scale-125" />
                  Watch Demo
                  <div className="ml-3 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="ml-2 text-sm font-bold text-green-400">
                      LIVE
                    </span>
                  </div>
                </button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { icon: FaUsers, number: "2M+", label: "Active Users" },
                { icon: FaGlobe, number: "180+", label: "Countries" },
                { icon: FaRocket, number: "99.99%", label: "Uptime" },
                { icon: FaShieldAlt, number: "Bank-Level", label: "Security" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                  <div className="text-2xl font-black text-white mb-1">
                    {item.number}
                  </div>
                  <div className="text-sm text-blue-200 font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              className="text-blue-200 text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-center items-center gap-6">
                <span className="flex items-center">
                  <FaShieldAlt className="mr-2 text-green-400" />
                  No credit card required
                </span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center">
                  <FaInfinity className="mr-2 text-blue-400" />
                  Free forever plan
                </span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center">
                  <FaBolt className="mr-2 text-yellow-400" />
                  Setup in 60 seconds
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
