import { useState, useRef } from 'react'
import { FaDownload, FaQrcode, FaTimes, FaShare, FaCopy, FaPalette } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas'

const DownloadableQRCode = ({ 
  url, 
  username, 
  profileImage, 
  isOpen, 
  onClose 
}) => {
  const [downloading, setDownloading] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState('modern')
  const [copied, setCopied] = useState(false)
  const qrRef = useRef(null)

  const styles = {
    modern: {
      name: 'Modern',
      gradient: 'from-blue-500 to-purple-600',
      bgColor: '#ffffff',
      fgColor: '#1e293b',
      accentColor: '#3b82f6'
    },
    elegant: {
      name: 'Elegant',
      gradient: 'from-gray-800 to-gray-900',
      bgColor: '#f8fafc',
      fgColor: '#0f172a',
      accentColor: '#64748b'
    },
    vibrant: {
      name: 'Vibrant',
      gradient: 'from-pink-500 to-orange-500',
      bgColor: '#ffffff',
      fgColor: '#be185d',
      accentColor: '#ec4899'
    },
    nature: {
      name: 'Nature',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: '#f0fdf4',
      fgColor: '#166534',
      accentColor: '#22c55e'
    },
    cosmic: {
      name: 'Cosmic',
      gradient: 'from-purple-600 to-indigo-800',
      bgColor: '#faf5ff',
      fgColor: '#581c87',
      accentColor: '#8b5cf6'
    }
  }

  const currentStyle = styles[selectedStyle]

  const downloadQRCode = async () => {
    if (!qrRef.current) return

    try {
      setDownloading(true)
      
      // إنشاء canvas من العنصر
      const canvas = await html2canvas(qrRef.current, {
        backgroundColor: null,
        scale: 3, // جودة عالية
        useCORS: true,
        allowTaint: true,
        width: 400,
        height: 500
      })

      // تحويل إلى blob وتنزيل
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${username}-qr-code-${selectedStyle}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }, 'image/png', 1.0)

    } catch (error) {
      console.error('Error downloading QR code:', error)
    } finally {
      setDownloading(false)
    }
  }

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url)
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
          url: url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      copyUrl()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 mt-20 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${currentStyle.gradient} rounded-xl flex items-center justify-center`}>
              <FaQrcode className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">QR Code</h3>
              <p className="text-sm text-gray-500">Download & Share</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>

        {/* Style Selector */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 mb-4">
            <FaPalette className="text-gray-600" />
            <span className="font-medium text-gray-900">Choose Style</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(styles).map(([key, style]) => (
              <button
                key={key}
                onClick={() => setSelectedStyle(key)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedStyle === key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-full h-6 bg-gradient-to-r ${style.gradient} rounded mb-2`}></div>
                <span className="text-xs font-medium text-gray-700">{style.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* QR Code Preview */}
        <div className="p-6">
          <div 
            ref={qrRef}
            className="relative mx-auto"
            style={{ width: '320px', height: '400px' }}
          >
            {/* QR Code Card */}
            <div 
              className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative"
              style={{ backgroundColor: currentStyle.bgColor }}
            >
              {/* Header Gradient */}
              <div className={`h-20 bg-gradient-to-r ${currentStyle.gradient} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center space-x-3">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt={username}
                        className="w-8 h-8 rounded-full border-2 border-white/50"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-white font-semibold text-sm">@{username}</p>
                      <p className="text-white/80 text-xs">LinkProfile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="flex flex-col items-center justify-center px-6 py-8">
                <div className="bg-white p-4 rounded-2xl shadow-lg mb-4">
                  <QRCode
                    value={url}
                    size={160}
                    level="H"
                    includeMargin={false}
                    fgColor={currentStyle.fgColor}
                    bgColor="#ffffff"
                  />
                </div>
                
                <h3 className="font-bold text-lg mb-2" style={{ color: currentStyle.fgColor }}>
                  Scan to Visit To visit my profile
                </h3> 
              
              </div>

              {/* Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentStyle.accentColor }}></div>
                  <span className="text-xs font-medium" style={{ color: currentStyle.fgColor }}>
                    Powered by LinkProfile
                  </span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentStyle.accentColor }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-gray-200 space-y-3">
          {/* Download Button */}
          <button
            onClick={downloadQRCode}
            disabled={downloading}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r ${currentStyle.gradient} text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <FaDownload className={downloading ? 'animate-bounce' : ''} />
            <span>{downloading ? 'Downloading...' : 'Download QR Code'}</span>
          </button>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={shareProfile}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <FaShare className="text-sm" />
              <span className="text-sm font-medium">Share</span>
            </button>
            
            <button
              onClick={copyUrl}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <FaCopy className="text-sm" />
              <span className="text-sm font-medium">
                {copied ? 'Copied!' : 'Copy URL'}
              </span>
            </button>
          </div>
        </div>

        {/* Tips */}
        <div className="px-6 pb-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm">💡 Tips for best results:</h4>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Print on white paper for better scanning</li>
              <li>• Ensure good lighting when scanning</li>
              <li>• Keep QR code size at least 2cm x 2cm</li>
              <li>• Test scanning before printing in bulk</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadableQRCode