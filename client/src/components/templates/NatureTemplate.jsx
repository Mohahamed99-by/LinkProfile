import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaLeaf, FaTree, FaSeedling } from 'react-icons/fa'
import QRCode from 'qrcode.react'

const NatureTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  const [leaves, setLeaves] = useState([])
  
  useEffect(() => {
    // Generate floating leaves
    const generateLeaves = () => {
      const newLeaves = []
      for (let i = 0; i < 15; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          rotation: Math.random() * 360,
          animationDelay: Math.random() * 5,
          animationDuration: Math.random() * 10 + 15
        })
      }
      setLeaves(newLeaves)
    }
    
    generateLeaves()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Nature Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Organic shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-200/30 via-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-lime-200/30 via-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-teal-200/20 via-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Floating Leaves */}
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute text-green-400/40 animate-float"
            style={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              fontSize: `${leaf.size}px`,
              transform: `rotate(${leaf.rotation}deg)`,
              animationDelay: `${leaf.animationDelay}s`,
              animationDuration: `${leaf.animationDuration}s`
            }}
          >
            🍃
          </div>
        ))}
        
        {/* Nature Elements */}
        <div className="absolute top-32 right-20 text-4xl animate-float">🌿</div>
        <div className="absolute bottom-40 left-16 text-3xl animate-float delay-700">🌱</div>
        <div className="absolute top-60 left-40 text-2xl animate-float delay-300">🍀</div>
        <div className="absolute bottom-60 right-40 text-3xl animate-float delay-1000">🌸</div>
      </div>

      <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8">
        {/* Nature Profile Card */}
        <div className="relative bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-green-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Organic shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent animate-pulse"></div>
          
          {/* Profile Header */}
          <div className="relative">
            <div className="h-36 sm:h-48 lg:h-56 bg-gradient-to-br from-green-400/20 via-emerald-400/20 to-teal-400/20 relative overflow-hidden">
              {/* Nature pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/10 via-emerald-300/10 to-teal-300/10 animate-pulse"></div>
              
              {/* Organic border */}
              <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-b-full"></div>
              
              {/* Nature Icons */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-green-300/50 shadow-lg">
                  <FaLeaf className="text-green-600 text-sm sm:text-lg animate-pulse" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-emerald-300/50 shadow-lg">
                  <FaTree className="text-emerald-600 text-sm sm:text-lg animate-pulse delay-300" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-teal-300/50 shadow-lg">
                  <FaSeedling className="text-teal-600 text-sm sm:text-lg animate-pulse delay-600" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 text-2xl animate-float">🌺</div>
              <div className="absolute bottom-8 right-12 text-xl animate-float delay-500">🦋</div>
            </div>
            
            {/* Nature Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-32 h-32 bg-white/90 backdrop-blur-2xl rounded-full border-4 border-green-300/60 shadow-2xl overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover filter brightness-105 saturate-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-green-700">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Growing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping"></div>
                <div className="absolute inset-2 rounded-full border border-emerald-400/30 animate-ping delay-1000"></div>
                <div className="absolute inset-4 rounded-full border border-teal-400/30 animate-ping delay-500"></div>
                
                {/* Nature glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 pb-8 px-8 text-center">
            <h1 className="text-4xl font-black text-green-800 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                @{profile.username}
              </span>
            </h1>
            
            {profile.bio && (
              <p className="text-green-700 mb-8 text-lg leading-relaxed max-w-xs mx-auto">
                {profile.bio}
              </p>
            )}

            {/* Nature Action Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-4 bg-green-100/80 backdrop-blur-md hover:bg-green-200/80 rounded-2xl transition-all duration-300 hover:scale-110 border border-green-300/60 hover:border-green-400/80 shadow-lg hover:shadow-xl"
                title="Show QR Code"
              >
                <FaQrcode className="text-green-600 text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={shareProfile}
                className="group relative p-4 bg-emerald-100/80 backdrop-blur-md hover:bg-emerald-200/80 rounded-2xl transition-all duration-300 hover:scale-110 border border-emerald-300/60 hover:border-emerald-400/80 shadow-lg hover:shadow-xl"
                title="Share Profile"
              >
                <FaShare className="text-emerald-600 text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Nature QR Code */}
            {showQR && (
              <div className="mb-8 p-6 bg-green-50/80 backdrop-blur-2xl rounded-2xl border border-green-200/60 shadow-inner">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-lg border-2 border-green-300/50">
                    <QRCode
                      value={window.location.href}
                      size={140}
                      level="H"
                      includeMargin={true}
                      fgColor="#166534"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                <p className="text-green-700 text-center font-medium">
                  Scan to grow your connection 🌱
                </p>
              </div>
            )}
          </div>

          {/* Nature Social Links */}
          <div className="px-8 pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => {
                  const natureColors = [
                    { from: 'from-green-500', to: 'to-emerald-500', bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-600' },
                    { from: 'from-emerald-500', to: 'to-teal-500', bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-600' },
                    { from: 'from-teal-500', to: 'to-cyan-500', bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-600' },
                    { from: 'from-lime-500', to: 'to-green-500', bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-600' },
                    { from: 'from-green-600', to: 'to-emerald-600', bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-600' },
                    { from: 'from-emerald-600', to: 'to-green-600', bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-600' }
                  ]
                  
                  const color = natureColors[index % natureColors.length]
                  
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.url)}
                      className={`w-full group relative overflow-hidden bg-white/80 backdrop-blur-2xl hover:bg-white/90 rounded-2xl p-6 border ${color.border}/60 hover:${color.border} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Nature shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/50`}>
                            <i className={`${link.icon} text-white text-xl`}></i>
                          </div>
                          <div className="text-left">
                            <span className={`font-bold ${color.text} text-lg block group-hover:text-green-700 transition-colors`}>
                              {link.platform_name}
                            </span>
                            <span className="text-green-600 text-sm">
                              Grow your network 🌿
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`w-10 h-10 ${color.bg} backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border ${color.border}/50`}>
                            <FaExternalLinkAlt className={`${color.text} text-sm`} />
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-green-100/80 backdrop-blur-2xl rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-green-200/60">
                  <FaExternalLinkAlt className="text-green-500 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Plant your first seed 🌱</h3>
                <p className="text-green-600">Add your first social link to start growing!</p>
              </div>
            )}
          </div>
        </div>

        {/* Nature Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-2xl rounded-2xl border border-green-200/60 shadow-lg">
            <span className="text-sm text-green-600 mr-2">Grown with 💚 by</span>
            <a
              href="/"
              className="font-bold text-green-700 hover:text-green-800 transition-all duration-300"
            >
              LinkProfile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NatureTemplate