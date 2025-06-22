import { useState } from 'react'
import { FaCopy, FaEye, FaEyeSlash, FaShieldAlt, FaExternalLinkAlt, FaQrcode, FaShare, FaDownload } from 'react-icons/fa'
import { createEncryptedProfileUrl, createFullEncryptedProfileUrl } from '../utils/profileEncryption'
import QRCode from 'qrcode.react'
import DownloadableQRCode from './DownloadableQRCode'

const EncryptedProfilePreview = ({ username }) => {
  const [showOriginal, setShowOriginal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [showDownloadableQR, setShowDownloadableQR] = useState(false)

  // إنشاء الروابط المشفرة
  const encryptedUrl = createEncryptedProfileUrl(username)
  const fullEncryptedUrl = createFullEncryptedProfileUrl(username)
  const originalUrl = `${window.location.origin}/${username}`

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareProfile = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${username}'s Profile`,
          text: `Check out ${username}'s secure profile on LinkProfile`,
          url: fullEncryptedUrl
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      copyToClipboard(fullEncryptedUrl)
    }
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <FaShieldAlt className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Encrypted Profile URL</h3>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Privacy Protected</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowQR(!showQR)}
            className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
            title="Show QR Code"
          >
            <FaQrcode />
          </button>
          <button
            onClick={() => setShowDownloadableQR(true)}
            className="p-2 text-slate-400 hover:text-emerald-500 transition-colors"
            title="Download QR Code"
          >
            <FaDownload />
          </button>
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            title={showOriginal ? "Hide original URL" : "Show original URL"}
          >
            {showOriginal ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* QR Code */}
      {showQR && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-200">
          <div className="inline-block p-4 bg-white rounded-xl shadow-lg">
            <QRCode
              value={fullEncryptedUrl}
              size={160}
              level="H"
              includeMargin={true}
              fgColor="#1e293b"
              bgColor="#ffffff"
            />
          </div>
          <p className="text-sm text-slate-600 mt-4 font-medium">
            🔒 Scan to visit encrypted profile
          </p>
        </div>
      )}

      {/* URLs Display */}
      <div className="space-y-4">
        {/* Encrypted URL */}
        <div>
          <label className="block text-sm font-semibold text-green-700 mb-2 flex items-center">
            <FaShieldAlt className="mr-2" />
            🔒 Encrypted Profile URL (Recommended)
          </label>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-green-50 rounded-lg p-4 font-mono text-sm text-green-800 break-all border border-green-200">
              {fullEncryptedUrl}
            </div>
            <button
              onClick={() => copyToClipboard(fullEncryptedUrl)}
              className="p-3 text-green-600 hover:text-green-700 hover:bg-green-100 rounded-lg transition-colors"
              title="Copy encrypted URL"
            >
              <FaCopy />
            </button>
          </div>
          <p className="text-xs text-green-600 mt-2 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Username is hidden and encrypted for privacy
          </p>
        </div>

        {/* Original URL (conditionally shown) */}
        {showOriginal && (
          <div>
            <label className="block text-sm font-semibold text-red-700 mb-2 flex items-center">
              <FaEye className="mr-2" />
              🔓 Original Profile URL (Visible to public)
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-red-50 rounded-lg p-4 font-mono text-sm text-red-800 break-all border border-red-200">
                {originalUrl}
              </div>
              <button
                onClick={() => copyToClipboard(originalUrl)}
                className="p-3 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition-colors"
                title="Copy original URL"
              >
                <FaCopy />
              </button>
            </div>
            <p className="text-xs text-red-600 mt-2 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Username is visible in this URL
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center space-x-4 text-xs text-slate-500">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Encrypted</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Privacy Protected</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Secure Access</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => window.open(fullEncryptedUrl, '_blank')}
            className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Test</span>
          </button>
          
          <button
            onClick={shareProfile}
            className="flex items-center space-x-1 px-3 py-2 text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
          >
            <FaShare />
            <span>Share</span>
          </button>
          
          {copied && (
            <div className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-600 rounded-lg text-sm animate-pulse">
              <FaCopy />
              <span>Copied!</span>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-start space-x-3">
          <FaShieldAlt className="text-blue-600 mt-1 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-semibold text-blue-800 mb-2">Privacy Benefits:</p>
            <ul className="space-y-1 text-blue-700">
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span>Your username is encrypted and hidden from URLs</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span>Prevents username harvesting and spam</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span>Secure access with decryption verification</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span>Professional and clean appearance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Downloadable QR Code Modal */}
      <DownloadableQRCode
        url={fullEncryptedUrl}
        username={username}
        profileImage={null} // يمكن تمرير صورة البروفايل إذا كانت متاحة
        isOpen={showDownloadableQR}
        onClose={() => setShowDownloadableQR(false)}
      />
    </div>
  )
}

export default EncryptedProfilePreview