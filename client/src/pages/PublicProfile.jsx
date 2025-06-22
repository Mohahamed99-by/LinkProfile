import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { templates } from '../components/templates'
import { trackProfileView, trackLinkClick } from '../utils/analytics'

const PublicProfile = () => {
  const { username } = useParams()
  const [searchParams] = useSearchParams()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    fetchProfile()
  }, [username])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('Fetching profile for username:', username)
      const response = await axios.get(`/api/profile/${username}`)
      console.log('Profile response:', response.data)
      setProfile(response.data.profile)
      
      // Track profile view (respects cookie preferences)
      trackProfileView(username)
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
    // Track link click (respects cookie preferences)
    trackLinkClick(platform, url)
    
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const shareProfile = async () => {
    const url = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.username}'s Profile`,
          text: `Check out ${profile.username}'s profile on LinkProfile`,
          url: url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(url)
      alert('Profile URL copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-cyan-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-cyan-400 rounded-full animate-spin border-t-transparent"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Profile Not Found</h1>
          <p className="text-gray-300 mb-6">
            {error === 'Profile not found' 
              ? `The profile "@${username}" doesn't exist or has been removed.`
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

  // Check if there's a preview parameter
  const previewTemplate = searchParams.get('preview')
  
  // Get the template component, use preview template if provided, otherwise use profile template, default to classic
  const templateToUse = previewTemplate || profile.template || 'classic'
  const TemplateComponent = templates[templateToUse] || templates.classic

  return (
    <>
      {previewTemplate && (
        <div className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">🎨 Preview Mode: {templateToUse.charAt(0).toUpperCase() + templateToUse.slice(1)} Template</p>
        </div>
      )}
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

export default PublicProfile