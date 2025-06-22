import { Link } from 'react-router-dom'
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
  FaUser
} from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: FaLink,
      title: "One Link for Everything",
      description: "Create a single, beautiful page that contains all your important links - social media, portfolio, blog, and more.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: FaPalette,
      title: "Advanced Customization",
      description: "Choose from multiple themes, customize colors, animations, and make your profile truly unique with our advanced design tools.",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: FaMobile,
      title: "Mobile-First Design",
      description: "Your profile looks stunning on all devices with our responsive design that adapts perfectly to any screen size.",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: FaChartLine,
      title: "Advanced Analytics",
      description: "Get detailed insights with real-time analytics, visitor tracking, click-through rates, and performance metrics.",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      icon: FaLock,
      title: "Enterprise Security",
      description: "Bank-level security with JWT authentication, encrypted data, and privacy controls to keep your information safe.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: FaQrcode,
      title: "Smart QR Codes",
      description: "Generate dynamic QR codes with custom designs, tracking capabilities, and offline sharing options.",
      gradient: "from-teal-400 to-teal-600"
    }
  ]

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Links Created" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Design Moderne */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Arrière-plan Géométrique Moderne */}
        <div className="absolute inset-0">
          {/* Grille de fond */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
          
          {/* Éléments géométriques flottants */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-2xl -rotate-12 animate-float delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-xl rotate-45 animate-float delay-500"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl -rotate-6 animate-float delay-1500"></div>
          
          {/* Cercles décoratifs */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1400"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge de nouveauté */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <FaRocket className="mr-2 text-blue-500" />
              ✨ New: Advanced Analytics Dashboard
            </span>
          </div>
          
          {/* Titre principal avec animation */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
              <span className="block text-slate-800 mb-2">Your Digital</span>
              <span className="block gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Identity Hub
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Description avec mise en forme moderne */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create <span className="font-semibold text-blue-600">stunning link-in-bio pages</span> with advanced customization, 
            real-time analytics, and enterprise-grade security.
            <br />
            <span className="inline-flex items-center mt-2 px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-lg font-semibold">
              <FaUsers className="mr-2" />
              Join 50,000+ creators who trust us
            </span>
          </p>
          
          {/* Boutons d'action modernes */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/register" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Start Creating Free
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-blue-300">
              <FaPlay className="mr-2 text-blue-500 transition-transform group-hover:scale-110" />
              Watch Demo
            </button>
          </div>

          {/* Statistiques avec design moderne */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

       
      </section>

      {/* Section Fonctionnalités Avancées - Design Moderne */}
      <section className="py-32 relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-pink-100/40 to-amber-100/40 rounded-full blur-3xl"></div>
          
          {/* Grille décorative */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="bg-slate-400 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-modern relative z-10">
          {/* En-tête de section moderne */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <FaRocket className="mr-2" />
              Powerful Features
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-slate-800 mb-2">Advanced Features</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                for Modern Creators
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to <span className="font-semibold text-blue-600">create, customize, and optimize</span> your digital presence 
              with cutting-edge tools and analytics.
            </p>
          </div>
          
          {/* Grille de fonctionnalités moderne */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Icône moderne avec animation */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="text-white text-3xl" />
                  </div>
                  
                  {/* Points décoratifs */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-pink-400 to-amber-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
                
                {/* Indicateur de fonctionnalité */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                
                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
          
          {/* Section CTA en bas */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="font-semibold text-lg mr-2">Explore All Features</span>
              <FaArrowRight className="transition-transform hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Vitrine Claire */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-modern relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Beautiful Profiles
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Made Simple
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Create stunning, professional profiles in minutes with our intuitive drag-and-drop 
                builder, advanced customization options, and real-time preview.
              </p>
              <div className="space-y-4">
                {[
                  "Drag & drop link builder",
                  "Real-time customization",
                  "Mobile-responsive design",
                  "SEO optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Mock Profile Preview */}
              <div className="relative max-w-sm mx-auto">
                <div className="profile-container p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaUser className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">@yourname</h3>
                    <p className="text-slate-600">Digital Creator & Entrepreneur</p>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: "Instagram", color: "from-pink-400 to-pink-600" },
                      { name: "YouTube", color: "from-red-400 to-red-600" },
                      { name: "Portfolio", color: "from-blue-400 to-blue-600" },
                      { name: "Newsletter", color: "from-emerald-400 to-emerald-600" }
                    ].map((link, index) => (
                      <div key={index} className={`link-card-modern bg-gradient-to-r ${link.color} text-white`}>
                        <span className="font-medium">{link.name}</span>
                        <FaArrowRight className="opacity-70" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center float">
                  <FaStar className="text-yellow-800 text-sm" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center float" style={{ animationDelay: '1s' }}>
                  <FaGlobe className="text-green-800 text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-modern relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Stand Out?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Join thousands of creators, entrepreneurs, and businesses who use our platform 
            to showcase their digital presence with style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/register" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Creating Now
            </Link>
            <Link 
              to="/platforms" 
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Explore Features
            </Link>
          </div>
          
          <div className="mt-16 text-sm opacity-75">
            <p>No credit card required • Free forever plan • Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home