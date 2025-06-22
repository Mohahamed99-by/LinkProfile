import { Routes, Route, useLocation } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import PublicProfile from './pages/PublicProfile'
import Analytics from './pages/Analytics'
import Privacy from './pages/Privacy'
import Security from './pages/Security'
import EncryptedProfile from './pages/EncryptedProfile'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { user } = useAuth()
  const location = useLocation()
  
  // Check if current route is a public profile page, encrypted profile, or redirect page
  const isPublicProfile = location.pathname.match(/^\/[^\/]+$/) && 
                         !['/', '/login', '/register', '/privacy', '/security', '/dashboard', '/profile', '/analytics'].includes(location.pathname)
  const isEncryptedProfile = location.pathname.startsWith('/p/')
  const isRedirectPage = location.pathname.startsWith('/redirect/')

  return (
    <div className="min-h-screen flex flex-col">
      {/* Show Navbar only for non-public profile pages, non-encrypted profiles, and non-redirect pages */}
      {!isPublicProfile && !isEncryptedProfile && !isRedirectPage && <Navbar />}
      
      <main className={`flex-1 ${!isPublicProfile && !isEncryptedProfile && !isRedirectPage ? 'pt-16 sm:pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/profile/:username" element={<PublicProfile />} />
          
          {/* Encrypted Profile Route */}
          <Route path="/p/:encryptedUsername" element={<EncryptedProfile />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } />
          
          {/* Catch-all route for usernames - must be last */}
          <Route path="/:username" element={<PublicProfile />} />
        </Routes>
      </main>
      
      {/* Show Footer only for non-public profile pages, non-encrypted profiles, and non-redirect pages */}
      {!isPublicProfile && !isEncryptedProfile && !isRedirectPage && <Footer />}
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  )
}

export default App