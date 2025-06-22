import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaQrcode, FaShare, FaBolt, FaRocket, FaGamepad } from 'react-icons/fa'
import QRCode from 'qrcode.react'

const NeonTemplate = ({ profile, showQR, setShowQR, shareProfile, handleLinkClick }) => {
  const [glitchText, setGlitchText] = useState(profile.username)
  
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    const originalText = profile.username
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        const glitched = originalText.split('').map(char => 
          Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('')
        setGlitchText(glitched)
        
        setTimeout(() => setGlitchText(originalText), 100)
      }
    }, 2000)
    
    return () => clearInterval(glitchInterval)
  }, [profile.username])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Neon Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse delay-500"></div>
        
        {/* Floating Neon Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.8)] animate-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-pink-400 rounded-full shadow-[0_0_25px_rgba(255,20,147,0.8)] animate-float delay-700"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-float delay-300"></div>
        
        {/* Geometric Neon Elements */}
        <div className="absolute top-32 right-20 w-8 h-8 border-2 border-cyan-400 rotate-45 shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-float"></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 border-2 border-pink-400 shadow-[0_0_20px_rgba(255,20,147,0.6)] animate-float delay-1000"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10 py-8">
        {/* Neon Profile Card */}
        <div className="relative bg-black/80 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(0,255,255,0.3)]">
          {/* Glitch Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-pink-500/5 to-yellow-500/5 animate-pulse"></div>
          
          {/* Profile Header */}
          <div className="relative">
            <div className="h-40 bg-gradient-to-r from-black via-cyan-900/50 to-pink-900/50 relative overflow-hidden">
              {/* Scanning Lines Effect */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-500"></div>
              </div>
              
              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-pink-400 shadow-[0_0_10px_rgba(255,20,147,0.8)]"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-yellow-400 shadow-[0_0_10px_rgba(255,255,0,0.8)]"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-green-400 shadow-[0_0_10px_rgba(0,255,0,0.8)]"></div>
              
              {/* Status Icons */}
              <div className="absolute top-4 right-12 flex space-x-2">
                <FaBolt className="text-yellow-400 animate-pulse shadow-[0_0_10px_rgba(255,255,0,0.8)]" />
                <FaRocket className="text-cyan-400 animate-pulse delay-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                <FaGamepad className="text-pink-400 animate-pulse delay-600 shadow-[0_0_10px_rgba(255,20,147,0.8)]" />
              </div>
            </div>
            
            {/* Neon Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <div className="w-28 h-28 bg-black rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.8)] overflow-hidden">
                  {profile.profile_image ? (
                    <img
                      src={profile.profile_image}
                      alt={profile.username}
                      className="w-full h-full object-cover filter brightness-110 contrast-125"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900 to-pink-900 flex items-center justify-center">
                      <span className="text-3xl font-bold text-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.8)]">
                        {profile.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Rotating Neon Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-pink-400/50 shadow-[0_0_20px_rgba(255,20,147,0.6)] animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-2 rounded-full border border-yellow-400/30 shadow-[0_0_15px_rgba(255,255,0,0.4)] animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>

          {/* Profile Info with Glitch Effect */}
          <div className="pt-20 pb-8 px-8 text-center">
            <h1 className="text-3xl font-black mb-3 tracking-wider font-mono">
              <span className="text-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.8)] glitch-text">
                @{glitchText}
              </span>
            </h1>
            
            {profile.bio && (
              <p className="text-green-400 mb-8 text-lg leading-relaxed max-w-xs mx-auto font-mono shadow-[0_0_10px_rgba(0,255,0,0.6)]">
                {profile.bio}
              </p>
            )}

            {/* Neon Action Buttons */}
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => setShowQR(!showQR)}
                className="group relative p-4 bg-black border-2 border-cyan-400 hover:border-cyan-300 rounded-2xl transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]"
                title="Show QR Code"
              >
                <FaQrcode className="text-cyan-400 text-lg group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={shareProfile}
                className="group relative p-4 bg-black border-2 border-pink-400 hover:border-pink-300 rounded-2xl transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(255,20,147,0.4)] hover:shadow-[0_0_30px_rgba(255,20,147,0.8)]"
                title="Share Profile"
              >
                <FaShare className="text-pink-400 text-lg group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,20,147,0.8)]" />
                <div className="absolute inset-0 bg-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Neon QR Code */}
            {showQR && (
              <div className="mb-8 p-6 bg-black/60 rounded-2xl border border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.6)]">
                    <QRCode
                      value={window.location.href}
                      size={140}
                      level="H"
                      includeMargin={true}
                      fgColor="#000000"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                <p className="text-cyan-400 text-center font-mono font-bold shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                  &gt; SCAN_TO_ACCESS &lt;
                </p>
              </div>
            )}
          </div>

          {/* Neon Social Links */}
          <div className="px-8 pb-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link, index) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full group relative overflow-hidden bg-black/60 hover:bg-black/80 rounded-2xl p-5 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-black border-2 border-cyan-400 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.6)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <i className={`${link.icon} text-cyan-400 text-lg shadow-[0_0_10px_rgba(0,255,255,0.8)]`}></i>
                        </div>
                        <div className="text-left">
                          <span className="font-bold text-cyan-400 text-lg block group-hover:text-pink-400 transition-colors font-mono shadow-[0_0_10px_rgba(0,255,255,0.6)]">
                            {link.platform_name.toUpperCase()}
                          </span>
                          <span className="text-green-400 text-sm font-mono shadow-[0_0_5px_rgba(0,255,0,0.6)]">
                            &gt; CLICK_TO_ACCESS
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black border border-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,20,147,0.6)]">
                          <FaExternalLinkAlt className="text-pink-400 text-sm shadow-[0_0_5px_rgba(255,20,147,0.8)]" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-black border-2 border-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                  <FaExternalLinkAlt className="text-cyan-400 text-3xl shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono shadow-[0_0_15px_rgba(0,255,255,0.8)]">
                  &gt; NO_LINKS_DETECTED &lt;
                </h3>
                <p className="text-green-400 font-mono shadow-[0_0_10px_rgba(0,255,0,0.6)]">
                  Initialize your first connection...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Neon Footer */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-black/60 backdrop-blur-sm rounded-2xl border border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            <span className="text-sm text-green-400 mr-2 font-mono shadow-[0_0_5px_rgba(0,255,0,0.6)]">POWERED_BY</span>
            <a
              href="/"
              className="font-bold text-cyan-400 hover:text-pink-400 transition-all duration-300 font-mono shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            >
              LINKPROFILE.EXE
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
          color: #ff1493;
          z-index: -1;
        }
        
        .glitch-text::after {
          animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
          color: #00ffff;
          z-index: -2;
        }
        
        @keyframes glitch-anim-1 {
          0% { clip: rect(42px, 9999px, 44px, 0); }
          5% { clip: rect(12px, 9999px, 59px, 0); }
          10% { clip: rect(48px, 9999px, 29px, 0); }
          15% { clip: rect(42px, 9999px, 73px, 0); }
          20% { clip: rect(63px, 9999px, 27px, 0); }
          25% { clip: rect(34px, 9999px, 55px, 0); }
          30% { clip: rect(86px, 9999px, 73px, 0); }
          35% { clip: rect(20px, 9999px, 20px, 0); }
          40% { clip: rect(26px, 9999px, 60px, 0); }
          45% { clip: rect(25px, 9999px, 66px, 0); }
          50% { clip: rect(57px, 9999px, 98px, 0); }
          55% { clip: rect(5px, 9999px, 46px, 0); }
          60% { clip: rect(82px, 9999px, 31px, 0); }
          65% { clip: rect(54px, 9999px, 27px, 0); }
          70% { clip: rect(28px, 9999px, 99px, 0); }
          75% { clip: rect(45px, 9999px, 69px, 0); }
          80% { clip: rect(23px, 9999px, 85px, 0); }
          85% { clip: rect(54px, 9999px, 84px, 0); }
          90% { clip: rect(45px, 9999px, 47px, 0); }
          95% { clip: rect(37px, 9999px, 20px, 0); }
          100% { clip: rect(4px, 9999px, 91px, 0); }
        }
        
        @keyframes glitch-anim-2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          5% { clip: rect(52px, 9999px, 74px, 0); }
          10% { clip: rect(79px, 9999px, 85px, 0); }
          15% { clip: rect(75px, 9999px, 5px, 0); }
          20% { clip: rect(67px, 9999px, 61px, 0); }
          25% { clip: rect(14px, 9999px, 79px, 0); }
          30% { clip: rect(1px, 9999px, 66px, 0); }
          35% { clip: rect(86px, 9999px, 30px, 0); }
          40% { clip: rect(23px, 9999px, 98px, 0); }
          45% { clip: rect(85px, 9999px, 72px, 0); }
          50% { clip: rect(71px, 9999px, 75px, 0); }
          55% { clip: rect(2px, 9999px, 48px, 0); }
          60% { clip: rect(30px, 9999px, 16px, 0); }
          65% { clip: rect(59px, 9999px, 50px, 0); }
          70% { clip: rect(41px, 9999px, 62px, 0); }
          75% { clip: rect(2px, 9999px, 82px, 0); }
          80% { clip: rect(47px, 9999px, 73px, 0); }
          85% { clip: rect(3px, 9999px, 27px, 0); }
          90% { clip: rect(26px, 9999px, 55px, 0); }
          95% { clip: rect(42px, 9999px, 97px, 0); }
          100% { clip: rect(38px, 9999px, 49px, 0); }
        }
      `}</style>
    </div>
  )
}

export default NeonTemplate