import { useState } from 'react'
import { FaQrcode, FaDownload, FaShare, FaCopy, FaExternalLinkAlt } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import DownloadableQRCode from './DownloadableQRCode'

const QRCodeWidget = ({ username, profileUrl, profileImage }) => {
  const [showDownloadableQR, setShowDownloadableQR] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy URL:', error)
    }
  }

  const shareProfile = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${username}'s Profile`,
          text: `Check out ${username}'s profile`,
          url: profileUrl
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      copyUrl()
    }
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <FaQrcode className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">QR Code</h3>
            <p className="text-sm text-slate-500">Share your profile easily</p>
          </div>
        </div>
      </div>

      {/* QR Code Display */}
      <div className="text-center mb-6">
        <div className="inline-block p-4 bg-white rounded-2xl shadow-lg border border-slate-200">
          <QRCode
            value={profileUrl}
            size={120}
            level="H"
            includeMargin={true}
            fgColor="#1e293b"
            bgColor="#ffffff"
          />
        </div>
        <div className="text-sm text-slate-600 mt-3">
          <p>Scan to visit your profile</p>
        </div>
      </div>

      {/* URL Display */}
      <div className="mb-6">
        <label className="block text-xs font-medium text-slate-700 mb-2">Profile URL</label>
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-slate-50 rounded-lg p-3 border">
            <p className="text-sm text-slate-600 font-mono break-all">
              {profileUrl.length > 35 ? `${profileUrl.substring(0, 35)}...` : profileUrl}
            </p>
          </div>
          <button
            onClick={copyUrl}
            className="p-3 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            title="Copy URL"
          >
            <FaCopy />
          </button>
        </div>
        {copied && (
          <p className="text-xs text-green-600 mt-1 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Copied to clipboard!
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => setShowDownloadableQR(true)}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
        >
          <FaDownload />
          <span>Download QR Code</span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={shareProfile}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
          >
            <FaShare className="text-sm" />
            <span className="text-sm font-medium">Share</span>
          </button>
          
          <button
            onClick={() => window.open(profileUrl, '_blank')}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm font-medium">Visit</span>
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2 text-sm">💡 QR Code Tips:</h4>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Perfect for business cards and flyers</li>
          <li>• Works with any smartphone camera</li>
          <li>• Download in high quality for printing</li>
        </ul>
      </div>

      {/* Downloadable QR Code Modal */}
      <DownloadableQRCode
        url={profileUrl}
        username={username}
        profileImage={profileImage}
        isOpen={showDownloadableQR}
        onClose={() => setShowDownloadableQR(false)}
      />
    </div>
  )
}

export default QRCodeWidget