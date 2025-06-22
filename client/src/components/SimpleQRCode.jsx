import { useState } from 'react'
import { FaQrcode, FaDownload, FaTimes } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import DownloadableQRCode from './DownloadableQRCode'

const SimpleQRCode = ({ url, username, profileImage, showQR, setShowQR }) => {
  const [showDownloadableQR, setShowDownloadableQR] = useState(false)

  if (!showQR) return null

  return (
    <>
      {/* Simple QR Code Display */}
      <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200/50 shadow-inner">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800">QR Code</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDownloadableQR(true)}
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
              title="Download QR Code"
            >
              <FaDownload />
            </button>
            <button
              onClick={() => setShowQR(false)}
              className="p-2 text-slate-500 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
              title="Close QR Code"
            >
              <FaTimes />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-white rounded-2xl shadow-lg">
            <QRCode
              value={url}
              size={140}
              level="H"
              includeMargin={true}
              fgColor="#1e293b"
              bgColor="#ffffff"
            />
          </div>
        </div>
        
        <div className="text-sm text-slate-600 text-center font-medium">
          <p>Scan to visit this profile</p>
        </div>
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowDownloadableQR(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <FaDownload />
            <span>Download QR Code</span>
          </button>
        </div>
      </div>

      {/* Downloadable QR Code Modal */}
      <DownloadableQRCode
        url={url}
        username={username}
        profileImage={profileImage}
        isOpen={showDownloadableQR}
        onClose={() => setShowDownloadableQR(false)}
      />
    </>
  )
}

export default SimpleQRCode