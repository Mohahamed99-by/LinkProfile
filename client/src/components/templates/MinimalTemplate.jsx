import { useState } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaLeaf, FaFeather, FaCircle } from 'react-icons/fa'
import QRCode from 'qrcode.react'

const MinimalTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft geometric shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl animate-float delay-1000"></div>
        
        {/* Minimal floating elements */}
        <div className="absolute top-32 right-20 w-2 h-2 bg-gray-300 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-16 w-1 h-1 bg-gray-400 rounded-full animate-float delay-700"></div>
        <div className="absolute top-60 left-40 w-3 h-3 bg-gray-200 rounded-full animate-float delay-300"></div>
        
        {/* Subtle lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Profile Card */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
          {/* Minimal Header */}
          <div className="relative">
            <div className="h-24 sm:h-32 lg:h-36 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              
              {/* Minimal status indicators */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
              </div>
            </div>
            
            {/* Clean Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full border-2 sm:border-4 border-white shadow-lg overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-600">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Subtle ring */}
                <div className="absolute inset-0 rounded-full border border-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Clean Profile Info */}
          <div className="pt-10 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-8 text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">
              @{profile.username}
            </h1>
            
            {profile.bio && (
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm mx-auto px-2">
                {profile.bio}
              </p>
            )}

            {/* Minimal Action Buttons */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                title="Show QR Code"
              >
                <FaQrcode className="text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
              <button
                onClick={shareProfile}
                className="group p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                title="Share Profile"
              >
                <FaShare className="text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
            </div>

            {/* Clean QR Code */}
            {showQR && (
              <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    <QRCode
                      value={window.location.href}
                      size={120}
                      level="H"
                      includeMargin={true}
                      fgColor="#374151"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Scan to visit this profile
                </p>
              </div>
            )}
          </div>

          {/* Clean Social Links */}
          <div className="px-4 sm:px-8 pb-6 sm:pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-3">
                {profile.links.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full group relative overflow-hidden bg-gray-50 hover:bg-gray-100 rounded-2xl p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-102 shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-105 transition-transform">
                          <i className={`${link.icon} text-gray-600 group-hover:text-gray-800 transition-colors`}></i>
                        </div>
                        <div className="text-left">
                          <span className="font-semibold text-gray-900 block group-hover:text-gray-700 transition-colors">
                            {link.platform_name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            Click to visit
                          </span>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaExternalLinkAlt className="text-gray-500 text-xs" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <FaExternalLinkAlt className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No links yet</h3>
                <p className="text-gray-500 text-sm">Add your first social link to get started</p>
              </div>
            )}
          </div>
        </div>

        {/* Clean Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-500 mr-2">Powered by</span>
            <a
              href="/"
              className="text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              LinkProfile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinimalTemplate