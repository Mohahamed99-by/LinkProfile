import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { templates } from '../components/templates'
import { trackProfileView, trackLinkClick } from '../utils/analytics'
import { decryptUsername, isValidEncryptedUsername } from '../utils/profileEncryption'

const EncryptedProfile = () => {
  const { encryptedUsername } = useParams()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showQR, setShowQR] = useState(false)
  const [actualUsername, setActualUsername] = useState('')

  useEffect(() => {
    decryptAndFetchProfile()
  }, [encryptedUsername])

  const decryptAndFetchProfile = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // فك تشفير اسم المستخدم
      const decryptedUsername = decryptUsername(encryptedUsername)
      console.log('Decrypting username:', encryptedUsername, '->', decryptedUsername)
      
      // التحقق من صحة اسم المستخدم ��لمفكوك
      if (!isValidEncryptedUsername(encryptedUsername)) {
        setError('Invalid or corrupted profile link')
        return
      }
      
      setActualUsername(decryptedUsername)
      
      // جلب بيانات البروفايل باستخدام اسم المستخدم الأصلي
      const response = await axios.get(`/api/profile/${decryptedUsername}`)
      console.log('Profile response:', response.data)
      setProfile(response.data.profile)
      
      // تتبع زيارة البروفايل (مع اسم المستخدم الأصلي)
      trackProfileView(decryptedUsername)
    } catch (error) {
      console.error('Profile fetch error:', error)
      console.error('Error response:', error.response?.data)
      console.error('Error status:', error.response?.status)
      
      if (error.response?.status === 404) {
        setError('Profile not found')
      } else {
        setError('Failed to load profile. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLinkClick = (url, platform = 'unknown') => {
    // تتبع النقرة على الرابط
    trackLinkClick(platform, url)
    
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const shareProfile = async () => {
    // استخدام الرابط المشفر للمشاركة
    const url = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${actualUsername}'s Profile`,
          text: `Check out ${actualUsername}'s profile on LinkProfile`,
          url: url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // نسخ الرابط المشفر إلى الحافظة
      navigator.clipboard.writeText(url)
      alert('Profile URL copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin mx-auto"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
            
            {/* Security Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">
            🔓 Decrypting Profile
          </h2>
          <p className="text-blue-200 mb-2">
            Verifying and loading secure profile...
          </p>
          <p className="text-sm text-blue-300">
            🔒 Your privacy is protected
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Profile Access Error</h1>
          <p className="text-gray-300 mb-6">
            {error === 'Profile not found' 
              ? `The encrypted profile link is invalid or the profile has been removed.`
              : error
            }
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Get the template component
  const templateToUse = profile.template || 'classic'
  const TemplateComponent = templates[templateToUse] || templates.classic

  return (
    <>
      {/* Security Badge */}
      <div className="fixed top-4 right-4 z-50 bg-green-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg border border-green-500/30">
        <div className="flex items-center space-x-2 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Secure Profile</span>
        </div>
      </div>

      <TemplateComponent
        profile={profile}
        showQR={showQR}
        setShowQR={setShowQR}
        shareProfile={shareProfile}
        handleLinkClick={handleLinkClick}
      />
    </>
  )
}

export default EncryptedProfile