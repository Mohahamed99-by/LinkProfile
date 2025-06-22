import { Link } from 'react-router-dom'
import { FaArrowLeft, FaShieldAlt, FaCookie, FaUserShield, FaDatabase } from 'react-icons/fa'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="container-modern py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 border border-white/60 shadow-2xl mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-800 mb-2">Privacy Policy</h1>
              <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <p className="text-xl text-slate-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 border border-white/60 shadow-lg sticky top-8">
              <h3 className="font-bold text-slate-800 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                <a href="#information-we-collect" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Information We Collect
                </a>
                <a href="#how-we-use" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  How We Use Information
                </a>
                <a href="#cookies" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Cookies & Tracking
                </a>
                <a href="#data-sharing" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Data Sharing
                </a>
                <a href="#data-security" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Data Security
                </a>
                <a href="#your-rights" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Your Rights
                </a>
                <a href="#contact" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Information We Collect */}
            <section id="information-we-collect" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaDatabase className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• <strong>Account Information:</strong> Username, email address, and password</li>
                    <li>• <strong>Profile Information:</strong> Bio, profile image, and social media links</li>
                    <li>• <strong>Usage Data:</strong> How you interact with our service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• <strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                    <li>• <strong>Log Data:</strong> IP address, access times, pages viewed</li>
                    <li>• <strong>Analytics Data:</strong> User interactions, feature usage, performance metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="how-we-use" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">Service Provision</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Create and manage your account</li>
                    <li>• Display your profile and links</li>
                    <li>• Provide customer support</li>
                    <li>• Process your requests</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">Improvement & Analytics</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Analyze usage patterns</li>
                    <li>• Improve our services</li>
                    <li>• Develop new features</li>
                    <li>• Monitor performance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <FaCookie className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Cookies & Tracking Technologies</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-600">
                  We use cookies and similar technologies to enhance your experience and analyze our traffic. 
                  You can control cookie preferences through our cookie banner.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Necessary Cookies</h4>
                    <p className="text-sm text-green-700">
                      Essential for website functionality. These cannot be disabled.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-blue-700">
                      Help us understand how visitors use our website.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Functional Cookies</h4>
                    <p className="text-sm text-purple-700">
                      Remember your preferences and settings.
                    </p>
                  </div>

                  <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-pink-700">
                      Used to show relevant advertisements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section id="data-sharing" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Data Sharing & Disclosure</h2>
              
              <div className="space-y-4">
                <p className="text-slate-600">
                  We do not sell, trade, or rent your personal information to third parties. We may share information in these limited circumstances:
                </p>

                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Service Providers:</strong> Trusted partners who help us operate our service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-security" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FaUserShield className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Data Security</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-600">
                  We implement appropriate security measures to protect your personal information:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-2">Technical Safeguards</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Encryption in transit and at rest</li>
                      <li>• Secure database storage</li>
                      <li>• Regular security updates</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-2">Administrative Safeguards</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Limited access controls</li>
                      <li>• Employee training</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Rights & Choices</h2>
              
              <div className="space-y-4">
                <p className="text-slate-600">
                  You have the following rights regarding your personal information:
                </p>

                <div className="grid gap-4">
                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-2">Access & Portability</h4>
                    <p className="text-sm text-slate-600">Request a copy of your personal data in a portable format.</p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-2">Correction</h4>
                    <p className="text-sm text-slate-600">Update or correct inaccurate personal information.</p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-2">Deletion</h4>
                    <p className="text-sm text-slate-600">Request deletion of your personal data (subject to legal requirements).</p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-2">Opt-out</h4>
                    <p className="text-sm text-slate-600">Withdraw consent for data processing or marketing communications.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="glass-card rounded-2xl p-8 border border-white/60 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Us</h2>
              
              <div className="space-y-4">
                <p className="text-slate-600">
                  If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
                </p>

                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="space-y-2">
                    <p className="text-blue-800"><strong>Email:</strong> privacy@linkprofile.com</p>
                    <p className="text-blue-800"><strong>Response Time:</strong> We'll respond within 30 days</p>
                  </div>
                </div>

                <p className="text-sm text-slate-500">
                  This Privacy Policy may be updated from time to time. We'll notify you of any material changes 
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy