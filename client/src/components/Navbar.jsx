import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { 
  FaUser, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes, 
  FaRocket,
  FaChartLine,
  FaCog,
  FaEye,
  FaShieldAlt
} from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-3 sm:py-4 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <FaRocket className="text-white text-sm sm:text-lg" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LinkProfile</span>
              <div className="text-xs text-slate-500 -mt-1 font-medium">Pro</div>
            </div>
            <div className="block sm:hidden">
              <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LinkProfile</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {user ? (
              <>
                <NavLink to="/dashboard" icon={FaChartLine}>Dashboard</NavLink>
                <NavLink to="/profile" icon={FaCog}>Profile</NavLink>
                <NavLink to="/analytics" icon={FaChartLine}>Analytics</NavLink>
                <NavLink to="/security" icon={FaShieldAlt}>Security</NavLink>
                
                {/* User Menu */}
                <div className="flex items-center space-x-3 ml-4 xl:ml-6 pl-4 xl:pl-6 border-l border-slate-200/60">
                  <Link 
                    to={`/${user.username}`} 
                    className="flex items-center space-x-2 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 font-medium"
                  >
                    <FaEye className="text-sm" />
                    <span className="hidden xl:inline">View Profile</span>
                    <span className="xl:hidden">Profile</span>
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    <div className="text-right hidden xl:block">
                      <div className="text-sm font-semibold text-slate-900">@{user.username}</div>
                      <div className="text-xs text-slate-500 truncate max-w-32">{user.email}</div>
                    </div>
                    <div className="w-9 h-9 xl:w-10 xl:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      {user.profile_image ? (
                        <img 
                          src={user.profile_image} 
                          alt={user.username}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-sm font-bold">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300 font-medium"
                  >
                    <FaSignOutAlt className="text-sm" />
                    <span className="hidden xl:inline">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2 xl:space-x-3 ml-4 xl:ml-6">
                  <Link 
                    to="/login" 
                    className="px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 font-medium"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span className="hidden xl:inline">Get Started Free</span>
                    <span className="xl:hidden">Sign Up</span>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {user && (
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                {user.profile_image ? (
                  <img 
                    src={user.profile_image} 
                    alt={user.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-white text-xs font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl p-4 space-y-2 shadow-xl">
              {user ? (
                <>
                  {/* User Info */}
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mb-4 border border-blue-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      {user.profile_image ? (
                        <img 
                          src={user.profile_image} 
                          alt={user.username}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-bold">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 truncate">@{user.username}</div>
                      <div className="text-sm text-slate-500 truncate">{user.email}</div>
                    </div>
                  </div>
                  
                  <MobileNavLink to="/dashboard" icon={FaChartLine} onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </MobileNavLink>
                  <MobileNavLink to="/profile" icon={FaCog} onClick={() => setIsMenuOpen(false)}>
                    Profile Settings
                  </MobileNavLink>
                  <MobileNavLink to="/analytics" icon={FaChartLine} onClick={() => setIsMenuOpen(false)}>
                    Analytics
                  </MobileNavLink>
                  <MobileNavLink to="/security" icon={FaShieldAlt} onClick={() => setIsMenuOpen(false)}>
                    Security
                  </MobileNavLink>
                 
                  <MobileNavLink to={`/${user.username}`} icon={FaEye} onClick={() => setIsMenuOpen(false)}>
                    View Public Profile
                  </MobileNavLink>
                  
                  <div className="border-t border-slate-200/60 pt-3 mt-4">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 p-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300 font-medium"
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <MobileNavLink to="/login" icon={FaUser} onClick={() => setIsMenuOpen(false)}>
                    Login
                  </MobileNavLink>
                  <div className="pt-3">
                    <Link 
                      to="/register" 
                      className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started Free
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Desktop Navigation Link Component
const NavLink = ({ to, icon: Icon, children }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 font-medium text-sm xl:text-base"
  >
    <Icon className="text-sm" />
    <span className="hidden xl:inline">{children}</span>
    <span className="xl:hidden">{children.split(' ')[0]}</span>
  </Link>
)

// Mobile Navigation Link Component
const MobileNavLink = ({ to, icon: Icon, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="flex items-center space-x-3 p-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 group"
  >
    <div className="w-8 h-8 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 rounded-lg transition-colors">
      <Icon className="text-base text-slate-600 group-hover:text-slate-900" />
    </div>
    <span className="font-medium">{children}</span>
  </Link>
)

export default Navbar