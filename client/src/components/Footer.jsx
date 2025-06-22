import { Link } from 'react-router-dom'
import { FaHeart, FaShieldAlt, FaCookie } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-modern">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LinkProfile</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Create beautiful link-in-bio pages with advanced customization and analytics.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/templates" className="text-slate-400 hover:text-white transition-colors">Templates</Link></li>
              <li><Link to="/analytics" className="text-slate-400 hover:text-white transition-colors">Analytics</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <FaShieldAlt className="mr-2 text-xs" />
                  Privacy Policy
                </Link>
              </li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li>
                <button 
                  onClick={() => {
                    localStorage.removeItem('cookieConsent')
                    window.location.reload()
                  }}
                  className="text-slate-400 hover:text-white transition-colors flex items-center text-left"
                >
                  <FaCookie className="mr-2 text-xs" />
                  Cookie Settings
                </button>
              </li>
              <li><Link to="/security" className="text-slate-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LinkProfile. All rights reserved.
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <span>Made with</span>
            <FaHeart className="mx-2 text-red-500 animate-pulse" />
            <span>for creators worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer