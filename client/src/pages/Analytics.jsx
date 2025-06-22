import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { 
  FaEye, 
  FaUsers, 
  FaChartLine, 
  FaCalendar, 
  FaGlobe, 
  FaLink,
  FaClock,
  FaShare,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa'

const Analytics = () => {
  const { user } = useAuth()
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [detailedData, setDetailedData] = useState(null)

  useEffect(() => {
    fetchAnalytics()
    fetchDetailedAnalytics(selectedPeriod)
  }, [selectedPeriod])

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('/api/analytics/dashboard')
      setAnalytics(response.data.analytics)
    } catch (error) {
      console.error('Analytics fetch error:', error)
      toast.error('Failed to load analytics')
    } finally {
      setLoading(false)
    }
  }

  const fetchDetailedAnalytics = async (period) => {
    try {
      const response = await axios.get(`/api/analytics/detailed/${period}`)
      setDetailedData(response.data)
    } catch (error) {
      console.error('Detailed analytics fetch error:', error)
    }
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num?.toString() || '0'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getGrowthIcon = (rate) => {
    if (rate > 0) return <FaArrowUp className="text-green-500" />
    if (rate < 0) return <FaArrowDown className="text-red-500" />
    return <FaClock className="text-gray-400" />
  }

  const getGrowthColor = (rate) => {
    if (rate > 0) return 'text-green-600'
    if (rate < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-modern py-8 relative z-10">
        {/* Header */}
        <div className="relative mb-12 overflow-hidden">
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-white/60 shadow-2xl">
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                <FaChartLine className="mr-2" />
                Analytics Dashboard
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
                    <span className="text-slate-800">Your Profile</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Performance
                    </span>
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
                  
                  <p className="text-xl text-slate-600 max-w-2xl">
                    Track your profile visits, engagement, and growth with detailed insights.
                  </p>
                </div>

                {/* Period Selector */}
                <div className="mt-6 lg:mt-0">
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-white/60">
                    {['week', 'month', 'year'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          selectedPeriod === period
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'text-slate-600 hover:bg-white/60'
                        }`}
                      >
                        {period.charAt(0).toUpperCase() + period.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Analytics Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Visits */}
          <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <FaEye className="text-white text-xl" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${getGrowthColor(analytics?.overview?.growthRate)}`}>
                {getGrowthIcon(analytics?.overview?.growthRate)}
                <span className="font-semibold">
                  {Math.abs(analytics?.overview?.growthRate || 0)}%
                </span>
              </div>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-800 mb-1">
                {formatNumber(analytics?.overview?.totalVisits)}
              </p>
              <p className="text-slate-600 font-medium">Total Profile Views</p>
              <p className="text-xs text-slate-500 mt-1">
                {analytics?.overview?.todayVisits || 0} today • {analytics?.overview?.weeklyVisits || 0} this week
              </p>
            </div>
          </div>

          {/* Unique Visitors */}
          <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <FaUsers className="text-white text-xl" />
              </div>
              <div className="text-emerald-600 text-sm font-semibold">
                {analytics?.overview?.uniqueVisitors > 0 
                  ? Math.round((analytics?.overview?.uniqueVisitors / analytics?.overview?.totalVisits) * 100) 
                  : 0}% unique
              </div>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-800 mb-1">
                {formatNumber(analytics?.overview?.uniqueVisitors)}
              </p>
              <p className="text-slate-600 font-medium">Unique Visitors</p>
              <p className="text-xs text-slate-500 mt-1">
                Individual users who visited
              </p>
            </div>
          </div>

          {/* Engagement Rate */}
          <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <FaChartLine className="text-white text-xl" />
              </div>
              <div className="text-purple-600 text-sm font-semibold">
                Engagement
              </div>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-800 mb-1">
                {analytics?.overview?.totalLinks > 0 
                  ? Math.round((analytics?.overview?.totalVisits / analytics?.overview?.totalLinks) * 10) / 10
                  : 0}
              </p>
              <p className="text-slate-600 font-medium">Avg. Views per Link</p>
              <p className="text-xs text-slate-500 mt-1">
                {analytics?.overview?.totalLinks || 0} active links
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <FaClock className="text-white text-xl" />
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/${user.username}`)
                  toast.success('Profile URL copied!')
                }}
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                <FaShare className="text-sm" />
              </button>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-800 mb-1">
                {analytics?.overview?.recentVisits || 0}
              </p>
              <p className="text-slate-600 font-medium">Recent Activity</p>
              <p className="text-xs text-slate-500 mt-1">
                Last 30 days visits
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Visits Chart */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 border border-white/60 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Visits Over Time</h2>
                  <p className="text-slate-600">Daily profile visits for the selected period</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Visits</span>
                </div>
              </div>

              {analytics?.charts?.visitsByDate?.length > 0 ? (
                <div className="space-y-4">
                  {/* Simple bar chart representation */}
                  <div className="h-64 flex items-end space-x-2 overflow-x-auto">
                    {analytics.charts.visitsByDate.slice(-14).map((day, index) => {
                      const maxVisits = Math.max(...analytics.charts.visitsByDate.map(d => d.visits))
                      const height = maxVisits > 0 ? (day.visits / maxVisits) * 100 : 0
                      
                      return (
                        <div key={index} className="flex flex-col items-center min-w-0 flex-1">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all duration-300 cursor-pointer group relative"
                            style={{ height: `${Math.max(height, 4)}%` }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {day.visits} visits
                            </div>
                          </div>
                          <div className="text-xs text-slate-500 mt-2 transform -rotate-45 origin-left">
                            {formatDate(day.date)}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Last 14 days</span>
                    <span>
                      Total: {analytics.charts.visitsByDate.reduce((sum, day) => sum + day.visits, 0)} visits
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <FaChartLine className="text-slate-400 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No data yet</h3>
                  <p className="text-slate-500">Share your profile to start collecting visit data</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity & Top Platforms */}
          <div className="space-y-8">
            {/* Top Platforms */}
            <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Your Platforms</h3>
              
              {analytics?.insights?.topPlatforms?.length > 0 ? (
                <div className="space-y-3">
                  {analytics.insights.topPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-2xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <i className={`${platform.icon} text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800">{platform.platform}</p>
                        <p className="text-sm text-slate-600">Connected</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaLink className="text-slate-400 text-2xl" />
                  </div>
                  <p className="text-slate-500 text-sm">No platforms connected yet</p>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="glass-card rounded-3xl p-6 border border-white/60 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Activity</h3>
              
              {analytics?.insights?.recentVisits?.length > 0 ? (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {analytics.insights.recentVisits.slice(0, 8).map((visit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-2xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <FaEye className="text-white text-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800">Profile Visit</p>
                        <p className="text-xs text-slate-500 truncate">
                          {new Date(visit.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaClock className="text-slate-400 text-2xl" />
                  </div>
                  <p className="text-slate-500 text-sm">No recent activity</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Member Since */}
        {analytics?.overview?.memberSince && (
          <div className="mt-8 glass-card rounded-3xl p-6 border border-white/60 shadow-lg">
            <div className="flex items-center justify-center space-x-4 text-slate-600">
              <FaCalendar className="text-blue-500" />
              <span className="font-medium">
                Member since {new Date(analytics.overview.memberSince).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Analytics 