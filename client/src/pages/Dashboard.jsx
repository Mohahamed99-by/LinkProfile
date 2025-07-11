import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import QRCodeWidget from '../components/QRCodeWidget'
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaExternalLinkAlt, 
  FaQrcode,
  FaEye,
  FaMousePointer,
  FaCalendarAlt,
  FaChartLine,
  FaCopy,
  FaShare,
  FaRocket,
  FaSync,
  FaLink
} from 'react-icons/fa'

const Dashboard = () => {
  const { user } = useAuth()
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(false)
  const [stats, setStats] = useState({
    todayVisits: 0
  })

  useEffect(() => {
    fetchLinks()
    fetchBasicStats()
  }, [])

  const fetchLinks = async () => {
    try {
      const response = await axios.get('/api/links')
      setLinks(response.data.links)
    } catch (error) {
      toast.error('Failed to load links')
    } finally {
      setLoading(false)
    }
  }

  const fetchBasicStats = async () => {
    setStatsLoading(true)
    try {
      const response = await axios.get('/api/analytics/dashboard')
      const { analytics } = response.data
      
      setStats({
        todayVisits: analytics.overview.todayVisits || 0
      })
      
      toast.success('Stats updated')
    } catch (error) {
      console.error('Failed to load basic stats:', error)
      toast.error('Failed to load stats')
    } finally {
      setStatsLoading(false)
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

  const copyProfileUrl = () => {
    const url = `${window.location.origin}/profile/${user.username}`
    navigator.clipboard.writeText(url)
    toast.success('Profile URL copied to clipboard!')
  }

  const shareProfile = async () => {
    const url = `${window.location.origin}/profile/${user.username}`
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${user.username}'s Profile`,
          text: 'Check out my social links!',
          url: url,
        })
      } catch (error) {
        copyProfileUrl()
      }
    } else {
      copyProfileUrl()
    }
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

      <div className="container-modern py-6 relative z-10">
        {/* En-tête de bienvenue moderne */}
        <div className="relative mb-8 overflow-hidden">
          {/* Carte principale avec effet de verre */}
          <div className="glass-card rounded-2xl p-6 lg:p-8 border border-white/60 shadow-xl">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-amber-400/10 rounded-full -ml-12 -mb-12"></div>
            
            {/* Contenu principal */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-6 lg:mb-0">
                  {/* Badge de statut */}
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Active Account
                  </div>
                  
                  {/* Titre de bienvenue */}
                  <h1 className="text-3xl lg:text-4xl font-black mb-3 leading-tight">
                    <span className="text-slate-800">Welcome back,</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      @{user.username}!
                    </span>
                  </h1>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                  
                  <p className="text-base text-slate-600 mb-4 max-w-2xl">
                    Your digital presence is <span className="font-semibold text-blue-600">thriving</span>! 
                    Manage your links, track analytics, and grow your audience.
                  </p>
                  
                  {/* Boutons d'action */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={copyProfileUrl}
                      className="group inline-flex items-center px-4 py-2 bg-white/80 border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <FaCopy className="mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-slate-700">Copy URL</span>
                    </button>
                    
                    <button
                      onClick={shareProfile}
                      className="group inline-flex items-center px-4 py-2 bg-white/80 border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <FaShare className="mr-2 text-purple-500 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-slate-700">Share Profile</span>
                    </button>
                  </div>
                </div>
                
                {/* Bouton principal */}
                <div className="flex-shrink-0">
                  <Link
                    to={`/profile/${user.username}`}
                    className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaExternalLinkAlt className="mr-2 group-hover:scale-110 transition-transform" />
                      View Live Profile
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Quick Overview Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="mb-3 sm:mb-0">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
              <FaRocket className="mr-2" />
              Quick Overview
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-800 mb-1">
              Dashboard <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Summary</span>
            </h2>
            <p className="text-base text-slate-600">Your essential metrics at a glance</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link
              to="/analytics"
              className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaChartLine className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Analytics</span>
            </Link>
            
            <button
              onClick={fetchBasicStats}
              disabled={statsLoading}
              className="group inline-flex items-center px-4 py-2 bg-white/80 border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaSync className={`mr-2 text-blue-500 group-hover:scale-110 transition-transform ${statsLoading ? 'animate-spin' : ''}`} />
              <span className="font-semibold text-slate-700">Refresh</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Overview - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={FaLink}
            title="Active Links"
            value={links.length}
            gradient="from-indigo-500 to-purple-600"
            description="Connected platforms"
            loading={loading}
          />
          <StatCard
            icon={FaEye}
            title="Today's Views"
            value={stats.todayVisits}
            gradient="from-pink-500 to-rose-500"
            description="Profile visits today"
            loading={statsLoading}
          />
          <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <Link
                to="/analytics"
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold hover:bg-emerald-200 transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="relative z-10">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Analytics</p>
              <p className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                Detailed
              </p>
              <p className="text-sm text-slate-600 font-medium">View comprehensive analytics</p>
            </div>
          </div>
        </div>

      {/* Grille de contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gestion des liens moderne */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg">
              {/* En-tête de section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="mb-4 sm:mb-0">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                    <FaLink className="mr-2" />
                    Social Links
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-2">
                    Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Digital Links</span>
                  </h2>
                  <p className="text-lg text-slate-600">Manage and organize your social media presence</p>
                </div>
                
                <Link
                  to="/profile"
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center font-semibold">
                    <FaPlus className="mr-2 group-hover:scale-110 transition-transform" />
                    Add New Link
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {links.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="space-y-4">
                  {links.map((link, index) => (
                    <LinkCard
                      key={link.id}
                      link={link}
                      index={index}
                      onDelete={handleDeleteLink}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          {/* QR Code Widget */}
          <QRCodeWidget
            username={user.username}
            profileUrl={`${window.location.origin}/${user.username}`}
            profileImage={user.profile_image}
          />

          {/* Profile Preview */}
          <div className="card bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200/60">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Preview</h3>
            <div className="bg-white rounded-xl p-4 border border-slate-200/60">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  {user.profile_image ? (
                    <img
                      src={user.profile_image}
                      alt={user.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-slate-900">@{user.username}</h4>
                <p className="text-sm text-slate-600 mb-3">{user.bio || 'Digital Creator'}</p>
                <Link
                  to={`/profile/${user.username}`}
                  className="btn-ghost text-sm"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

// Stat Card Component
const StatCard = ({ icon: Icon, title, value, gradient, description, isText = false, loading = false, growth = null }) => (
  <div className="group relative glass-card rounded-xl p-4 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
    {/* Effet de brillance au survol */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    
    {/* En-tête avec icône */}
    <div className="flex items-center justify-between mb-4">
      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
        <Icon className="text-white text-xl" />
        
        {/* Points décoratifs */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Growth indicator or status */}
      {growth !== null ? (
        <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
          growth >= 0 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {growth >= 0 ? '+' : ''}{growth}%
        </div>
      ) : (
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
      )}
    </div>
    
    {/* Contenu */}
    <div className="relative z-10">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">{title}</p>
      
      {loading ? (
        <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg animate-pulse mb-2"></div>
      ) : (
        <p className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300">
          {isText ? value : value.toLocaleString()}
        </p>
      )}
      
      <p className="text-sm text-slate-600 font-medium">{description}</p>
    </div>
    
    {/* Bordure animée */}
    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-lg`}></div>
  </div>
)

// Composant LinkCard Moderne
const LinkCard = ({ link, index, onDelete }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    {/* Effet de brillance */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    
    <div className="flex items-center justify-between relative z-10">
      <div className="flex items-center space-x-3">
        {/* Icône de plateforme */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <i className={`${link.icon} text-white text-lg`}></i>
          </div>
          {/* Point décoratif */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Informations du lien */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-0.5">
            {link.platform_name}
          </h3>
          <p className="text-sm text-slate-600 truncate max-w-xs lg:max-w-sm">
            {link.url}
          </p>
          
          {/* Badge de statut */}
          <div className="inline-flex items-center mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            <div className="w-1 h-1 bg-green-500 rounded-full mr-1"></div>
            Active
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-400 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 hover:scale-110"
          title="Visit Link"
        >
          <FaExternalLinkAlt className="text-base" />
        </a>
        <Link
          to={`/profile?edit=${link.id}`}
          className="p-2 text-slate-400 hover:text-emerald-600 transition-all duration-300 rounded-lg hover:bg-emerald-50 hover:scale-110"
          title="Edit Link"
        >
          <FaEdit className="text-base" />
        </Link>
        <button
          onClick={() => onDelete(link.id)}
          className="p-2 text-slate-400 hover:text-red-600 transition-all duration-300 rounded-lg hover:bg-red-50 hover:scale-110"
          title="Delete Link"
        >
          <FaTrash className="text-base" />
        </button>
      </div>
    </div>
    
    {/* Bordure animée */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
  </div>
)

// Composant EmptyState Moderne
const EmptyState = () => (
  <div className="text-center py-12">
    {/* Illustration moderne */}
    <div className="relative mb-6">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
        <div className="relative">
          <FaLink className="text-blue-500 text-3xl" />
          {/* Éléments décoratifs */}
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
            <FaPlus className="text-white text-xs" />
          </div>
        </div>
      </div>
      
      {/* Points décoratifs flottants */}
      <div className="absolute top-4 left-1/2 transform -translate-x-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 right-1/2 transform translate-x-8 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
    </div>
    
    {/* Contenu */}
    <h3 className="text-xl lg:text-2xl font-black text-slate-800 mb-3">
      Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>?
    </h3>
    
    <p className="text-base text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
      Start building your digital presence by adding your first social media link and watch your audience grow!
    </p>
    
    {/* Bouton d'action */}
    <Link
      to="/profile"
      className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <span className="relative z-10 flex items-center">
        <FaRocket className="mr-2 group-hover:scale-110 transition-transform" />
        Add Your First Link
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
    
    {/* Suggestions */}
    <div className="mt-6 flex flex-wrap justify-center gap-2">
      {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((platform, index) => (
        <span key={index} className="px-3 py-1 bg-white/60 text-slate-600 rounded-full text-sm font-medium border border-white/40">
          {platform}
        </span>
      ))}
    </div>
  </div>
)

// Quick Action Card Component
const QuickActionCard = ({ to, icon: Icon, title, description, gradient }) => (
  <Link
    to={to}
    className="card group hover:scale-105 transition-all duration-300 block"
  >
    <div className="flex items-start space-x-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white text-lg" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600">
          {description}
        </p>
      </div>
    </div>
  </Link>
)

export default Dashboard