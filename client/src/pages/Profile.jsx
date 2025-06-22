import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { templateOptions } from '../components/templates'
import { 
  FaSave, 
  FaUpload, 
  FaPlus, 
  FaTrash, 
  FaEdit, 
  FaTimes, 
  FaUser,
  FaLink,
  FaPalette,
  FaImage,
  FaExternalLinkAlt,
  FaRocket,
  FaEye
} from 'react-icons/fa'

const Profile = () => {
  const { user, updateUser } = useAuth()
  const [formData, setFormData] = useState({
    username: user?.username || '',
    bio: user?.bio || '',
    theme: user?.theme || 'light',
    template: user?.template || 'classic'
  })
  const [links, setLinks] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showAddLink, setShowAddLink] = useState(false)
  const [showPlatformSelector, setShowPlatformSelector] = useState(false)
  const [showTemplateModal, setShowTemplateModal] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(user?.template || 'classic')
  const [newLink, setNewLink] = useState({
    platform_name: '',
    url: '',
    icon: ''
  })
  const urlInputRef = useRef(null)

  useEffect(() => {
    fetchData()
  }, [])

  // Automatically focus the URL input when the form appears
  useEffect(() => {
    if (showAddLink && urlInputRef.current) {
      urlInputRef.current.focus()
    }
  }, [showAddLink])

  const fetchData = async () => {
    setLoading(true);
    try {
      const linksPromise = axios.get('/api/links');
      const platformsPromise = axios.get('/api/links/platforms');

      const [linksResponse, platformsResponse] = await Promise.all([
        linksPromise.catch(err => {
          console.error("Error fetching links:", err);
          toast.error('Failed to load your links. Please try logging in again.');
          throw new Error('Failed to load links');
        }),
        platformsPromise.catch(err => {
          console.error("Error fetching platforms:", err);
          toast.error('Failed to load platforms data. The platform list may be unavailable.');
          throw new Error('Failed to load platforms');
        })
      ]);

      setLinks(linksResponse.data.links);
      setPlatforms(platformsResponse.data.platforms);
    } catch (error) {
      // Errors are handled in the individual catch blocks,
      // but we can have a general catch here if needed.
      console.error("An error occurred during data fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await axios.put('/api/profile', formData)
      updateUser(response.data.user)
      toast.success('Profile updated successfully')
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await axios.post('/api/profile/upload-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      
      // Update user context with new image
      updateUser({ ...user, profile_image: response.data.imageUrl })
      toast.success('Profile image updated successfully')
    } catch (error) {
      toast.error('Failed to upload image')
    }
  }

  const handleAddLink = async (e) => {
    e.preventDefault()
    
    if (!newLink.platform_name || !newLink.url) {
      toast.error('Please fill in all fields')
      return
    }

    try {
      const response = await axios.post('/api/links', newLink)
      setLinks([...links, response.data.link])
      setNewLink({ platform_name: '', url: '', icon: '' })
      setShowAddLink(false)
      setShowPlatformSelector(false)
      toast.success('Link added successfully')
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to add link')
    }
  }

  const handleDeleteLink = async (linkId) => {
    if (!window.confirm('Are you sure you want to delete this link?')) {
      return
    }

    try {
      await axios.delete(`/api/links/${linkId}`)
      setLinks(links.filter(link => link.id !== linkId))
      toast.success('Link deleted successfully')
    } catch (error) {
      toast.error('Failed to delete link')
    }
  }

  const handlePlatformSelect = (platform) => {
    setNewLink({
      platform_name: platform.name,
      url: '',
      icon: platform.icon
    })
    setShowPlatformSelector(false)
    setShowAddLink(true)
  }

  // Get available platforms (exclude already added ones)
  const availablePlatforms = platforms.filter(platform => 
    !links.some(link => link.platform_name === platform.name)
  )

  // Template modal handlers
  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId)
  }

  const handleTemplateConfirm = async () => {
    try {
      const updatedFormData = { ...formData, template: selectedTemplate }
      const response = await axios.put('/api/profile', updatedFormData)
      setFormData(updatedFormData)
      updateUser(response.data.user)
      setShowTemplateModal(false)
      toast.success('Template updated successfully')
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to update template')
    }
  }

  const handleTemplateCancel = () => {
    setSelectedTemplate(formData.template)
    setShowTemplateModal(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Éléments décoratifs de fond */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-amber-100/30 rounded-full blur-3xl"></div>
        
        {/* Éléments géométriques flottants */}
        <div className="absolute top-40 left-10 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-60 right-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-xl -rotate-12 animate-float delay-1000"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-45 animate-float delay-500"></div>
      </div>

      <div className="container-modern py-8 relative z-10">
        {/* En-tête moderne */}
        <div className="relative mb-12 overflow-hidden">
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-white/60 shadow-2xl">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-amber-400/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                <FaUser className="mr-2" />
                Profile Settings
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
                <span className="text-slate-800">Customize Your</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Digital Identity
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
              
              <p className="text-xl text-slate-600 max-w-2xl">
                Personalize your profile and manage your social links to create the perfect digital presence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
        {/* Paramètres de profil modernes */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg">
              {/* En-tête de section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <FaUser className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Profile Information</h2>
                  <p className="text-slate-600">Update your personal details</p>
                </div>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Username
                  </label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 text-slate-900 placeholder-slate-500"
                    placeholder="Enter username"
                    minLength={3}
                  />
                  <div className="mt-2 p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                      🔗 Your profile URL: <span className="font-bold">linkprofile.com/{formData.username || 'username'}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 resize-none text-slate-900 placeholder-slate-500"
                    rows={4}
                    placeholder="Tell people about yourself..."
                    maxLength={500}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-slate-500">Share your story with the world</p>
                    <span className={`text-sm font-medium ${formData.bio.length > 450 ? 'text-red-500' : 'text-slate-500'}`}>
                      {formData.bio.length}/500
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Profile Template
                  </label>
                  <div className="p-4 bg-white/80 border border-slate-200 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          {(() => {
                            const currentTemplate = templateOptions.find(t => t.id === formData.template) || templateOptions[0]
                            
                            return currentTemplate.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                              ></div>
                            ))
                          })()}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {templateOptions.find(t => t.id === formData.template)?.name || 'Classic'}
                          </p>
                          <p className="text-sm text-slate-600">Current template</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowTemplateModal(true)}
                        className="group relative inline-flex items-center justify-center px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center font-semibold">
                          <FaPalette className="mr-2 group-hover:scale-110 transition-transform" />
                          Change Template
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center">
                    {saving ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <FaSave className="mr-2 group-hover:scale-110 transition-transform" />
                    )}
                    {saving ? 'Saving Changes...' : 'Save Changes'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

          {/* Image de profil moderne */}
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg">
              {/* En-tête de section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <FaImage className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Profile Image</h2>
                  <p className="text-slate-600">Upload your profile picture</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
                {/* Aperçu de l'image */}
                <div className="relative group">
                  <div className="w-32 h-32 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {user?.profile_image ? (
                      <img
                        src={user.profile_image}
                        alt="Profile"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-4xl font-black text-white">
                          {user?.username?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Badge décoratif */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                    <FaImage className="text-white text-sm" />
                  </div>
                </div>
                
                {/* Contrôles d'upload */}
                <div className="flex-1 text-center sm:text-left">
                  <label className="group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                    <span className="relative z-10 flex items-center font-semibold">
                      <FaUpload className="mr-2 group-hover:scale-110 transition-transform" />
                      Choose New Image
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  
                  <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <p className="text-sm text-emerald-700 font-medium mb-1">
                      📸 Upload Guidelines
                    </p>
                    <ul className="text-xs text-emerald-600 space-y-1">
                      <li>• JPG, PNG formats supported</li>
                      <li>• Maximum file size: 5MB</li>
                      <li>• Square images work best</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>

          {/* Liens sociaux modernes */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg">
              {/* En-tête de section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="mb-4 sm:mb-0">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mr-4">
                      <FaLink className="text-white text-xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Social Links</h2>
                      <p className="text-slate-600">Connect your social platforms</p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowPlatformSelector(!showPlatformSelector)}
                  disabled={availablePlatforms.length === 0}
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center font-semibold">
                    <FaPlus className="mr-2 group-hover:scale-110 transition-transform" />
                    Add New Link
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-rose-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

            {/* Modal de sélection de plateforme moderne */}
              {showPlatformSelector && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                  <div className="glass-card rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-white/60 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Choose a Platform</h3>
                        <p className="text-slate-600">Select a social platform to add to your profile</p>
                      </div>
                      <button
                        onClick={() => setShowPlatformSelector(false)}
                        className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-2xl transition-all duration-300"
                      >
                        <FaTimes className="text-xl" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {availablePlatforms.map((platform) => (
                        <button
                          key={platform.id}
                          onClick={() => handlePlatformSelect(platform)}
                          className="group relative p-6 bg-white/80 border border-white/60 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                        >
                          {/* Effet de brillance */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          
                          <div className="relative z-10 flex flex-col items-center">
                            <div 
                              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                              style={{ backgroundColor: platform.color + '20' }}
                            >
                              <i 
                                className={`${platform.icon} text-2xl`}
                                style={{ color: platform.color }}
                              ></i>
                            </div>
                            <span className="text-sm font-semibold text-slate-800 text-center group-hover:text-blue-600 transition-colors">
                              {platform.name}
                            </span>
                          </div>
                          
                          {/* Bordure animée */}
                          <div 
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"
                            style={{ backgroundColor: platform.color }}
                          ></div>
                        </button>
                      ))}
                    </div>
                    
                    {availablePlatforms.length === 0 && (
                      <div className="text-center py-16">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                          <FaRocket className="text-green-500 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">All Set!</h3>
                        <p className="text-slate-600">You've added all available platforms to your profile.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            {/* Add Link Form */}
            {showAddLink && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Add {newLink.platform_name} Link</h3>
                  <button
                    onClick={() => {
                      setShowAddLink(false)
                      setNewLink({ platform_name: '', url: '', icon: '' })
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <form onSubmit={handleAddLink} className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: platforms.find(p => p.name === newLink.platform_name)?.color + '20' || '#3B82F620'
                      }}
                    >
                      <i 
                        className={`${newLink.icon} text-lg`}
                        style={{ 
                          color: platforms.find(p => p.name === newLink.platform_name)?.color || '#3B82F6'
                        }}
                      ></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{newLink.platform_name}</p>
                      <p className="text-sm text-gray-500">Platform selected</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL
                    </label>
                    <input
                      ref={urlInputRef}
                      type="url"
                      value={newLink.url}
                      onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 text-slate-900 placeholder-slate-500"
                      placeholder={`https://${newLink.platform_name.toLowerCase()}.com/yourusername`}
                      required
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="btn-primary flex-1"
                    >
                      Add Link
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddLink(false)
                        setNewLink({ platform_name: '', url: '', icon: '' })
                      }}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Links List */}
            <div className="space-y-3">
              {links.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPlus className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No links yet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Start by adding your first social media link
                  </p>
                  <button
                    onClick={() => setShowPlatformSelector(true)}
                    className="btn-primary"
                  >
                    Add Your First Link
                  </button>
                </div>
              ) : (
                links.map((link) => {
                  const platform = platforms.find(p => p.name === link.platform_name)
                  return (
                    <div
                      key={link.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ 
                            backgroundColor: platform?.color + '20' || '#3B82F620'
                          }}
                        >
                          <i 
                            className={`${link.icon} text-lg`}
                            style={{ 
                              color: platform?.color || '#3B82F6'
                            }}
                          ></i>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{link.platform_name}</p>
                          <p className="text-sm text-gray-600 truncate max-w-xs">{link.url}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteLink(link.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Template Selection Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/60 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Choose Your Template</h3>
                <p className="text-slate-600">Select a design that represents your style</p>
              </div>
              <button
                onClick={handleTemplateCancel}
                className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-2xl transition-all duration-300"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {templateOptions.map((template) => (
                <div
                  key={template.id}
                  className={`group relative cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    selectedTemplate === template.id 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-slate-200 bg-white/80 hover:border-slate-300'
                  }`}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  {/* Template Preview */}
                  <div className="relative mb-4 h-32 rounded-2xl overflow-hidden" style={{
                    background: template.id === 'classic' ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' :
                               template.id === 'modern' ? 'linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #ec4899 100%)' :
                               template.id === 'minimal' ? 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)' :
                               template.id === 'gradient' ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)' :
                               template.id === 'neon' ? 'linear-gradient(135deg, #000000 0%, #00ffff 50%, #ff1493 100%)' :
                               template.id === 'cosmic' ? 'linear-gradient(135deg, #0f0f23 0%, #8b5cf6 30%, #ec4899 70%, #3b82f6 100%)' :
                               template.id === 'nature' ? 'linear-gradient(135deg, #064e3b 0%, #10b981 50%, #059669 100%)' :
                               'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
                  }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                          template.id === 'neon' ? 'bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.6)]' :
                          template.id === 'modern' ? 'bg-white/20 backdrop-blur-sm' :
                          template.id === 'cosmic' ? 'bg-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]' :
                          template.id === 'nature' ? 'bg-emerald-400 shadow-lg' :
                          'bg-white shadow-lg'
                        }`}></div>
                        <div className={`h-2 w-16 rounded mx-auto mb-1 ${
                          template.id === 'neon' ? 'bg-pink-400 shadow-[0_0_10px_rgba(255,20,147,0.6)]' :
                          template.id === 'modern' ? 'bg-white/30' :
                          template.id === 'minimal' ? 'bg-gray-300' :
                          template.id === 'cosmic' ? 'bg-pink-400/80' :
                          template.id === 'nature' ? 'bg-green-400' :
                          'bg-white/80'
                        }`}></div>
                        <div className={`h-1 w-12 rounded mx-auto ${
                          template.id === 'neon' ? 'bg-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.6)]' :
                          template.id === 'modern' ? 'bg-white/20' :
                          template.id === 'minimal' ? 'bg-gray-200' :
                          template.id === 'cosmic' ? 'bg-blue-400/60' :
                          template.id === 'nature' ? 'bg-green-300' :
                          'bg-white/60'
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          {template.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-4 h-4 rounded-full shadow-sm"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">{template.name}</h4>
                      </div>
                      {selectedTemplate === template.id && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">{template.desc}</p>
                    <p className="text-xs text-slate-500 italic">{template.preview}</p>
                    
                    <div className="flex items-center space-x-2 pt-2">
                      <a
                        href={`/${user?.username}?preview=${template.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaEye className="inline mr-1" />
                        Preview
                      </a>
                    </div>
                  </div>

                  {/* Selection Overlay */}
                  {selectedTemplate === template.id && (
                    <div className="absolute inset-0 bg-blue-500/10 rounded-3xl border-2 border-blue-500 pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <div className="text-sm text-slate-600">
                Selected: <span className="font-semibold text-slate-800">
                  {templateOptions.find(t => t.id === selectedTemplate)?.name || 'None'}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleTemplateCancel}
                  className="px-6 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleTemplateConfirm}
                  disabled={selectedTemplate === formData.template}
                  className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Apply Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Profile 