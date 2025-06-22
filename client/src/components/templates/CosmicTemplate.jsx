import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaRocket, FaStar, FaMoon } from 'react-icons/fa'
import QRCode from 'qrcode.react'

const CosmicTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  const [stars, setStars] = useState([])
  
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3
        })
      }
      setStars(newStars)
    }
    
    generateStars()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Cosmic Nebula Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-indigo-500/15 rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Floating Cosmic Elements */}
        <div className="absolute top-32 right-20 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-float shadow-[0_0_20px_rgba(255,255,0,0.6)]"></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full animate-float delay-700 shadow-[0_0_15px_rgba(0,255,255,0.6)]"></div>
        <div className="absolute top-60 left-40 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-float delay-300 shadow-[0_0_10px_rgba(255,20,147,0.6)]"></div>
      </div>

      <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8">
        {/* Cosmic Profile Card */}
        <div className="relative bg-black/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Cosmic Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse"></div>
          
          {/* Profile Header */}
          <div className="relative">
            <div className="h-36 sm:h-48 lg:h-56 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 relative overflow-hidden">
              {/* Aurora Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
              
              {/* Cosmic Border */}
              <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
              
              {/* Floating Cosmic Icons */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-purple-400/50 shadow-[0_0_15px_rgba(147,51,234,0.6)]">
                  <FaRocket className="text-cyan-400 text-sm sm:text-lg animate-pulse" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-pink-400/50 shadow-[0_0_15px_rgba(236,72,153,0.6)]">
                  <FaStar className="text-yellow-400 text-sm sm:text-lg animate-pulse delay-300" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                  <FaMoon className="text-purple-400 text-sm sm:text-lg animate-pulse delay-600" />
                </div>
              </div>
            </div>
            
            {/* Cosmic Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-black/60 backdrop-blur-2xl rounded-full border-2 sm:border-4 border-purple-400/50 shadow-2xl overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover filter brightness-110 contrast-125"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Orbital Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin shadow-[0_0_20px_rgba(0,255,255,0.4)]" style={{ animationDuration: '10s' }}></div>
                <div className="absolute inset-2 rounded-full border border-pink-400/30 animate-spin shadow-[0_0_15px_rgba(236,72,153,0.4)]" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin shadow-[0_0_10px_rgba(147,51,234,0.4)]" style={{ animationDuration: '6s' }}></div>
                
                {/* Cosmic Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8 text-center">
            <h1 className="text-4xl font-black text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                @{profile.username}
              </span>
            </h1>
            
            {profile.bio && (
              <p className="text-purple-200 mb-8 text-lg leading-relaxed max-w-xs mx-auto">
                {profile.bio}
              </p>
            )}

            {/* Cosmic Action Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-4 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-2xl transition-all duration-300 hover:scale-110 border border-purple-400/50 hover:border-purple-400 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]"
                title="Show QR Code"
              >
                <FaQrcode className="text-purple-400 text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={shareProfile}
                className="group relative p-4 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-2xl transition-all duration-300 hover:scale-110 border border-pink-400/50 hover:border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]"
                title="Share Profile"
              >
                <FaShare className="text-pink-400 text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Cosmic QR Code */}
            {showQR && (
              <div className="mb-8 p-6 bg-black/60 backdrop-blur-2xl rounded-2xl border border-purple-400/50 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_0_20px_rgba(147,51,234,0.6)] border-2 border-purple-400/50">
                    <QRCode
                      value={window.location.href}
                      size={140}
                      level="H"
                      includeMargin={true}
                      fgColor="#000000"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                <p className="text-purple-300 text-center font-medium">
                  Scan to explore this cosmic profile
                </p>
              </div>
            )}
          </div>

          {/* Cosmic Social Links */}
          <div className="px-8 pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => {
                  const cosmicColors = [
                    { from: 'from-purple-500', to: 'to-pink-500', shadow: 'rgba(147,51,234,0.6)' },
                    { from: 'from-cyan-500', to: 'to-blue-500', shadow: 'rgba(0,255,255,0.6)' },
                    { from: 'from-pink-500', to: 'to-rose-500', shadow: 'rgba(236,72,153,0.6)' },
                    { from: 'from-indigo-500', to: 'to-purple-500', shadow: 'rgba(99,102,241,0.6)' },
                    { from: 'from-violet-500', to: 'to-purple-500', shadow: 'rgba(139,92,246,0.6)' },
                    { from: 'from-blue-500', to: 'to-cyan-500', shadow: 'rgba(59,130,246,0.6)' }
                  ]
                  
                  const color = cosmicColors[index % cosmicColors.length]
                  
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.url)}
                      className="w-full group relative overflow-hidden bg-black/50 backdrop-blur-2xl hover:bg-black/70 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        boxShadow: `0 0 20px ${color.shadow}40`
                      }}
                    >
                      {/* Cosmic Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/20`}
                               style={{ boxShadow: `0 0 15px ${color.shadow}` }}>
                            <i className={`${link.icon} text-white text-xl`}></i>
                          </div>
                          <div className="text-left">
                            <span className="font-bold text-white text-lg block group-hover:text-purple-300 transition-colors">
                              {link.platform_name}
                            </span>
                            <span className="text-purple-300 text-sm">
                              Explore the cosmos
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-purple-400/50">
                            <FaExternalLinkAlt className="text-purple-400 text-sm" />
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-black/60 backdrop-blur-2xl rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-purple-400/50">
                  <FaExternalLinkAlt className="text-purple-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No cosmic links detected</h3>
                <p className="text-purple-300">Launch your first connection to the stars!</p>
              </div>
            )}
          </div>
        </div>

        {/* Cosmic Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-2xl rounded-2xl border border-purple-400/50 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <span className="text-sm text-purple-300 mr-2">Powered by</span>
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

export default CosmicTemplate