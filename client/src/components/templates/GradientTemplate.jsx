import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaFire, FaRainbow, FaSun } from 'react-icons/fa'
import QRCode from 'qrcode.react'

const GradientTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  const [currentGradient, setCurrentGradient] = useState(0)
  
  const gradients = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-purple-500 via-pink-500 to-red-500',
    'from-blue-500 via-purple-500 to-pink-500',
    'from-green-500 via-blue-500 to-purple-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-indigo-500 via-purple-500 to-pink-500'
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [gradients.length])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradients[currentGradient]} transition-all duration-2000 ease-in-out`}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-56 h-56 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-gradient-to-br from-white/25 to-transparent rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-3xl rotate-45 animate-float backdrop-blur-sm"></div>
        <div className="absolute bottom-40 left-16 w-12 h-12 bg-white/25 rounded-full animate-float delay-700 backdrop-blur-sm"></div>
        <div className="absolute top-60 left-40 w-20 h-20 bg-white/15 rounded-2xl animate-float delay-300 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10 py-8">
        {/* Gradient Profile Card */}
        <div className="relative bg-white/20 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Rainbow Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
          
          {/* Profile Header */}
          <div className="relative">
            <div className="h-44 bg-gradient-to-br from-white/30 via-white/20 to-white/10 relative overflow-hidden">
              {/* Animated Rainbow Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 animate-pulse"></div>
              
              {/* Floating Status Icons */}
              <div className="absolute top-6 right-6 flex space-x-3">
                <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
                  <FaFire className="text-orange-300 text-lg animate-pulse" />
                </div>
                <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
                  <FaRainbow className="text-pink-300 text-lg animate-pulse delay-300" />
                </div>
                <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
                  <FaSun className="text-yellow-300 text-lg animate-pulse delay-600" />
                </div>
              </div>
              
              {/* Gradient Waves */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/40 to-transparent"></div>
            </div>
            
            {/* Rainbow Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-32 h-32 bg-white/40 backdrop-blur-2xl rounded-full border-4 border-white/50 shadow-2xl overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/50 to-white/30 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl font-bold text-white drop-shadow-lg">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Rainbow Ring Animation */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 animate-spin p-1" style={{ animationDuration: '6s' }}>
                  <div className="w-full h-full rounded-full bg-transparent"></div>
                </div>
                
                {/* Pulsing Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/40 to-purple-400/40 blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8 text-center">
            <h1 className="text-4xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                @{profile.username}
              </span>
            </h1>
            
            {profile.bio && (
              <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-xs mx-auto drop-shadow-md">
                {profile.bio}
              </p>
            )}

            {/* Rainbow Action Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-4 bg-white/30 backdrop-blur-md hover:bg-white/40 rounded-2xl transition-all duration-300 hover:scale-110 border border-white/40 hover:border-white/60 shadow-lg hover:shadow-xl"
                title="Show QR Code"
              >
                <FaQrcode className="text-white text-lg group-hover:scale-110 transition-transform drop-shadow-md" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={shareProfile}
                className="group relative p-4 bg-white/30 backdrop-blur-md hover:bg-white/40 rounded-2xl transition-all duration-300 hover:scale-110 border border-white/40 hover:border-white/60 shadow-lg hover:shadow-xl"
                title="Share Profile"
              >
                <FaShare className="text-white text-lg group-hover:scale-110 transition-transform drop-shadow-md" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Rainbow QR Code */}
            {showQR && (
              <div className="mb-8 p-6 bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/40 shadow-inner">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-lg border-4 border-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                    <div className="bg-white rounded-xl p-2">
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
                </div>
                <p className="text-white font-medium drop-shadow-md">
                  Scan to visit this profile
                </p>
              </div>
            )}
          </div>

          {/* Rainbow Social Links */}
          <div className="px-8 pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => {
                  const linkGradients = [
                    'from-pink-500 to-rose-500',
                    'from-purple-500 to-indigo-500',
                    'from-blue-500 to-cyan-500',
                    'from-green-500 to-emerald-500',
                    'from-yellow-500 to-orange-500',
                    'from-red-500 to-pink-500'
                  ]
                  
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.url)}
                      className="w-full group relative overflow-hidden bg-white/30 backdrop-blur-2xl hover:bg-white/40 rounded-2xl p-6 border border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Rainbow Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${linkGradients[index % linkGradients.length]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/30`}>
                            <i className={`${link.icon} text-white text-xl drop-shadow-md`}></i>
                          </div>
                          <div className="text-left">
                            <span className="font-bold text-white text-lg block group-hover:text-yellow-200 transition-colors drop-shadow-md">
                              {link.platform_name}
                            </span>
                            <span className="text-white/80 text-sm drop-shadow-sm">
                              Click to visit
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/50 shadow-lg">
                            <FaExternalLinkAlt className="text-white text-sm drop-shadow-sm" />
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-white/40 backdrop-blur-2xl rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/50">
                  <FaExternalLinkAlt className="text-white/80 text-3xl drop-shadow-md" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">No links yet</h3>
                <p className="text-white/80 drop-shadow-md">Add your first social link to get started!</p>
              </div>
            )}
          </div>
        </div>

        {/* Rainbow Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/40 shadow-lg">
            <span className="text-sm text-white/80 mr-2 drop-shadow-sm">Powered by</span>
            <a
              href="/"
              className="font-bold text-white hover:text-yellow-200 transition-all duration-300 drop-shadow-md"
            >
              LinkProfile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientTemplate