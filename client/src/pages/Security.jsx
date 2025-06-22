import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { FaShieldAlt, FaLock, FaEye, FaKey, FaHistory, FaExclamationTriangle, FaUser } from 'react-icons/fa'
import EncryptedProfilePreview from '../components/EncryptedProfilePreview'
import axios from 'axios'

const Security = () => {
  const { user } = useAuth()
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [settings, setSettings] = useState({
    enableProfileEncryption: true,
    enableClickTracking: true,
    showSecurityWarnings: true,
    hideUsernameInUrl: true
  })

  useEffect(() => {
    fetchLinks()
  }, [])

  const fetchLinks = async () => {
    try {
      const response = await axios.get('/api/links')
      setLinks(response.data.links || [])
    } catch (error) {
      console.error('Error fetching links:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateSecuritySettings = async (newSettings) => {
    try {
      setSettings(newSettings)
      // هنا يمكن إضافة API call لحفظ الإعدادات
      console.log('Security settings updated:', newSettings)
    } catch (error) {
      console.error('Error updating security settings:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Security Center</h1>
              <p className="text-slate-600">Manage your link security and privacy settings</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Security Settings */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <FaLock className="mr-2 text-blue-500" />
                Security Settings
              </h2>

              <div className="space-y-6">
                {/* Profile URL Encryption */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-medium text-slate-700">Profile URL Encryption</label>
                    <input
                      type="checkbox"
                      checked={settings.enableProfileEncryption}
                      onChange={(e) => updateSecuritySettings({
                        ...settings,
                        enableProfileEncryption: e.target.checked
                      })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                  <p className="text-sm text-slate-500">
                    Encrypt your profile URL to hide your username from public view
                  </p>
                </div>

                {/* Hide Username in URL */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-medium text-slate-700">Hide Username in URL</label>
                    <input
                      type="checkbox"
                      checked={settings.hideUsernameInUrl}
                      onChange={(e) => updateSecuritySettings({
                        ...settings,
                        hideUsernameInUrl: e.target.checked
                      })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                  <p className="text-sm text-slate-500">
                    Prevent username harvesting and improve privacy protection
                  </p>
                </div>

                {/* Click Tracking */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-medium text-slate-700">Click Tracking</label>
                    <input
                      type="checkbox"
                      checked={settings.enableClickTracking}
                      onChange={(e) => updateSecuritySettings({
                        ...settings,
                        enableClickTracking: e.target.checked
                      })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                  <p className="text-sm text-slate-500">
                    Track clicks for analytics while maintaining user privacy
                  </p>
                </div>

                
                {/* Security Warnings */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-medium text-slate-700">Security Warnings</label>
                    <input
                      type="checkbox"
                      checked={settings.showSecurityWarnings}
                      onChange={(e) => updateSecuritySettings({
                        ...settings,
                        showSecurityWarnings: e.target.checked
                      })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                  <p className="text-sm text-slate-500">
                    Show warnings for potentially unsafe links
                  </p>
                </div>
              </div>

              {/* Security Status */}
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <FaShieldAlt className="text-green-500" />
                  <span className="font-medium text-green-700">Security Status: Active</span>
                </div>
                <p className="text-sm text-green-600">
                  Your links are protected with enterprise-grade security
                </p>
              </div>
            </div>

            {/* Security Tips */}
            <div className="mt-6 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2 text-amber-500" />
                Security Tips
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Always use HTTPS URLs for better security</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Regularly review your link analytics for suspicious activity</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Enable all security features for maximum protection</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Keep your account password strong and unique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Encrypted Profile Preview */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                <FaUser className="mr-2 text-purple-500" />
                Your Encrypted Profile
              </h2>
              <p className="text-slate-600">
                Preview how your profile URL appears with encryption enabled
              </p>
            </div>

            {user?.username ? (
              <EncryptedProfilePreview username={user.username} />
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-slate-400 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Profile Yet</h3>
                <p className="text-slate-500 mb-4">
                  Complete your profile setup to see encryption features
                </p>
                <button
                  onClick={() => window.location.href = '/profile'}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Setup Profile
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Security Features Overview */}
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            🔒 Profile Privacy Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Username Encryption</h3>
              <p className="text-sm text-slate-600">
                Military-grade encryption hides your username from profile URLs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEye className="text-green-600 text-2xl" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Privacy Protection</h3>
              <p className="text-sm text-slate-600">
                Prevent username harvesting and protect your digital identity
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHistory className="text-purple-600 text-2xl" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Secure Access</h3>
              <p className="text-sm text-slate-600">
                Encrypted profile access with full functionality maintained
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security