import { useState, useEffect } from 'react'
import { FaCookie, FaTimes, FaCheck, FaCog } from 'react-icons/fa'
import { 
  getCookieConsent, 
  saveCookieConsent, 
  defaultCookiePreferences, 
  allAcceptedPreferences,
  hasAnyConsent 
} from '../utils/cookieUtils'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState(defaultCookiePreferences)

  useEffect(() => {
    // Check if user has already made a choice using utility function
    if (!hasAnyConsent()) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences using safe utility function
      const savedPreferences = getCookieConsent()
      if (savedPreferences) {
        setPreferences(savedPreferences)
      } else {
        // If getCookieConsent returns null, show banner
        const timer = setTimeout(() => {
          setShowBanner(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    setPreferences(allAcceptedPreferences)
    saveCookieConsent(allAcceptedPreferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    setPreferences(defaultCookiePreferences)
    saveCookieConsent(defaultCookiePreferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    saveCookieConsent(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 pointer-events-none">
        {/* Cookie Banner */}
        <div className="fixed bottom-0 left-0 right-0 pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200/60 shadow-2xl">
            <div className="container-modern py-6">
              {!showSettings ? (
                // Main Banner
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaCookie className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        We use cookies
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        We use cookies to enhance your browsing experience, provide personalized content, 
                        and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                      </p>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-2 underline"
                      >
                        Customize preferences
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors font-semibold"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                // Settings Panel
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <FaCog className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">Cookie Preferences</h3>
                        <p className="text-slate-600 text-sm">Choose which cookies you want to accept</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <div className="grid gap-4">
                    {/* Necessary Cookies */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">Necessary Cookies</h4>
                        <div className="flex items-center">
                          <span className="text-sm text-slate-500 mr-2">Always Active</span>
                          <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">Analytics Cookies</h4>
                        <button
                          onClick={() => handlePreferenceChange('analytics')}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-slate-300 justify-start'
                          } px-1`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                        </button>
                      </div>
                      <p className="text-sm text-slate-600">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">Functional Cookies</h4>
                        <button
                          onClick={() => handlePreferenceChange('functional')}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.functional ? 'bg-blue-500 justify-end' : 'bg-slate-300 justify-start'
                          } px-1`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                        </button>
                      </div>
                      <p className="text-sm text-slate-600">
                        These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">Marketing Cookies</h4>
                        <button
                          onClick={() => handlePreferenceChange('marketing')}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.marketing ? 'bg-blue-500 justify-end' : 'bg-slate-300 justify-start'
                          } px-1`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
                        </button>
                      </div>
                      <p className="text-sm text-slate-600">
                        These cookies are used to track visitors across websites to display relevant advertisements and marketing content.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 px-6 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors font-semibold"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <FaCheck className="mr-2" />
                      Save Preferences
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookieConsent