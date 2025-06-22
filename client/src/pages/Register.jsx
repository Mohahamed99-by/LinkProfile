import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, FaRocket, FaArrowLeft, FaCheck } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long')
      return
    }

    setLoading(true)

    const result = await register(formData.username, formData.email, formData.password)
    
    if (result.success) {
      navigate('/dashboard')
    }
    
    setLoading(false)
  }

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-xl animate-float delay-500"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl animate-float delay-700"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md w-full space-y-8">
          {/* Back to Home Button */}
          <div className="flex justify-start">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to home</span>
            </Link>
          </div>

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-3">
                Join LinkProfile
              </h2>
              <p className="text-slate-600 text-lg">
                Create your professional link hub
              </p>
            </div>

            {/* Registration Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 text-slate-900 placeholder-slate-500"
                      placeholder="Choose your username"
                      minLength={3}
                    />
                  </div>
                  <div className="mt-2 p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <p className="text-sm text-purple-700 font-medium">
                      🔗 Your profile URL: <span className="font-bold">linkprofile.com/{formData.username || 'username'}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 text-slate-900 placeholder-slate-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 text-slate-900 placeholder-slate-500"
                      placeholder="Create a strong password"
                      minLength={6}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5" />
                      ) : (
                        <FaEye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 text-slate-900 placeholder-slate-500"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash className="h-5 w-5" />
                      ) : (
                        <FaEye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-purple-600 hover:text-purple-500 transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-4 px-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <FaCheck className="group-hover:scale-110 transition-transform" />
                    <span>Create your account</span>
                  </div>
                )}
              </button>

              {/* Sign in link */}
              <div className="text-center pt-4">
                <p className="text-slate-600">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="font-semibold text-purple-600 hover:text-purple-500 transition-colors"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Register 