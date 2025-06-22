import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaStar, FaGem, FaMagic } from 'react-icons/fa'
import QRCode from 'qrcode.react'

const ModernTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(139, 92, 246, 0.15) 0%, 
              rgba(236, 72, 153, 0.1) 25%, 
              rgba(59, 130, 246, 0.1) 50%, 
              rgba(16, 185, 129, 0.05) 75%, 
              transparent 100%
            ),
            linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 25%, 
              #334155 50%, 
              #475569 75%, 
              #64748b 100%
            )
          `
        }}
      ></div>

      {/* Floating Glass Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-56 h-56 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Floating Glass Shapes */}
        <div className="absolute top-32 right-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl rotate-45 animate-float border border-white/20"></div>
        <div className="absolute bottom-40 left-16 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full animate-float delay-700 border border-white/20"></div>
        <div className="absolute top-60 left-40 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl animate-float delay-300 border border-white/20"></div>
      </div>

      <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8">
        {/* Glass Profile Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>
          
          {/* Profile Header */}
          <div className="relative">
            <div className="h-36 sm:h-48 lg:h-56 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-blue-600/30 relative overflow-hidden">
              {/* Animated Mesh Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              
              {/* Floating Icons */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <FaStar className="text-yellow-300 text-xs sm:text-sm animate-pulse" />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <FaGem className="text-purple-300 text-xs sm:text-sm animate-pulse delay-300" />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <FaMagic className="text-pink-300 text-xs sm:text-sm animate-pulse delay-600" />
                </div>
              </div>
              
              {/* Decorative Lines */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
            
            {/* Glass Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-white/20 backdrop-blur-2xl rounded-full border-2 sm:border-4 border-white/30 shadow-2xl overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/90">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Rotating Glass Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-14 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                @{profile.username}
              </span>
            </h1>
            
            {profile.bio && (
              <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-sm mx-auto px-2">
                {profile.bio}
              </p>
            )}

            {/* Glass Action Buttons */}
            <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                title="Show QR Code"
              >
                <FaQrcode className="text-white text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={shareProfile}
                className="group relative p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                title="Share Profile"
              >
                <FaShare className="text-white text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Glass QR Code */}
            {showQR && (
              <div className="mb-8 p-6 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-inner">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <QRCode
                      value={window.location.href}
                      size={140}
                      level="H"
                      includeMargin={true}
                      fgColor="#1e293b"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                <p className="text-white/80 text-center font-medium">
                  Scan to visit this profile
                </p>
              </div>
            )}
          </div>

          {/* Glass Social Links */}
          <div className="px-8 pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full group relative overflow-hidden bg-white/10 backdrop-blur-2xl hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/30">
                          <i className={`${link.icon} text-white text-xl`}></i>
                        </div>
                        <div className="text-left">
                          <span className="font-bold text-white text-lg block group-hover:text-purple-300 transition-colors">
                            {link.platform_name}
                          </span>
                          <span className="text-white/60 text-sm">
                            Click to visit
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                          <FaExternalLinkAlt className="text-white/80 text-sm" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/30">
                  <FaExternalLinkAlt className="text-white/60 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No links yet</h3>
                <p className="text-white/60">Add your first social link to get started!</p>
              </div>
            )}
          </div>
        </div>

        {/* Glass Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-lg">
            <span className="text-sm text-white/60 mr-2">Powered by</span>
            <a
              href="/"
              className="font-bold text-white hover:text-purple-300 transition-all duration-300"
            >
              LinkProfile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernTemplate