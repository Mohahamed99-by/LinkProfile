import { useState } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaStar, FaHeart, FaDownload } from 'react-icons/fa'
import SimpleQRCode from '../SimpleQRCode'
import DownloadableQRCode from '../DownloadableQRCode'

const ClassicTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  const [showDownloadableQR, setShowDownloadableQR] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-yellow-200/30 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-xl animate-float delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-32 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-40 right-16 w-6 h-6 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full animate-float delay-700"></div>
      </div>

      <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Profile Card with enhanced design */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-500">
          {/* Profile Header with animated gradient */}
          <div className="relative">
            <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2">
                <FaStar className="text-yellow-300 animate-pulse text-sm sm:text-base" />
                <FaHeart className="text-pink-300 animate-pulse delay-300 text-sm sm:text-base" />
              </div>
            </div>
            
            {/* Enhanced profile image with glow effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full border-2 sm:border-4 border-white shadow-2xl overflow-hidden ring-2 sm:ring-4 ring-blue-200/50">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-lg -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Info */}
          <div className="pt-12 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mb-2 sm:mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                @{profile.username}
              </span>
            </h1>
            
            {profile.bio && (
              <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-sm mx-auto px-2">
                {profile.bio}
              </p>
            )}

            {/* Enhanced Action Buttons */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Show QR Code"
              >
                <FaQrcode className="text-white text-base sm:text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={() => setShowDownloadableQR(true)}
                className="group relative p-3 sm:p-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Download QR Code"
              >
                <FaDownload className="text-white text-base sm:text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={shareProfile}
                className="group relative p-3 sm:p-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Share Profile"
              >
                <FaShare className="text-white text-base sm:text-lg group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Enhanced QR Code */}
            <SimpleQRCode
              url={window.location.href}
              username={profile.username}
              profileImage={profile.profile_image}
              showQR={showQR}
              setShowQR={setShowQR}
            />
          </div>

          {/* Enhanced Social Links */}
          <div className="px-4 sm:px-8 pb-6 sm:pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-white to-slate-50 hover:from-blue-50 hover:to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/60 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <i className={`${link.icon} text-white text-base sm:text-lg`}></i>
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="font-bold text-slate-800 text-base sm:text-lg block group-hover:text-blue-600 transition-colors truncate">
                            {link.platform_name}
                          </span>
                          <span className="text-slate-500 text-xs sm:text-sm">
                            Click to visit
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FaExternalLinkAlt className="text-blue-600 text-xs sm:text-sm" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaExternalLinkAlt className="text-slate-400 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">No links yet</h3>
                <p className="text-slate-500">Add your first social link to get started!</p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
            <span className="text-sm text-slate-600 mr-2">Powered by</span>
            <a
              href="/"
              className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              LinkProfile
            </a>
          </div>
        </div>

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
  )
}

export default ClassicTemplate