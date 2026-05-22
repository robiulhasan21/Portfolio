import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#0b1020] text-gray-400 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column: Brand & Connect */}
          <div className="space-y-6">
            <div>
              <h2 className="text-white text-2xl font-bold mb-4">Robiul Hasan</h2>
              <p className="max-w-xs leading-relaxed">
              Network Engineer with expertise in designing, implementing, and maintaining 
              robust network infrastructures. Passionate about solving complex networking 
              challenges and ensuring seamless connectivity.
              </p>
            </div>
            
            <div>
              <p className="text-white font-semibold mb-4 text-lg">Connect</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, link: "https://github.com/robiulhasan21" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/robiul-hasan15/" },
                  { icon: <FaEnvelope />, link: "mailto:robiulhasan2k25@gmail.com" },
                  { icon: <FaWhatsapp />, link: "https://wa.me/8801319290231" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Quick Links (Updated) */}
          <div className="md:ml-auto">
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:text-purple-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:ml-auto">
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                <a href="mailto:robiulhasan2k25@gmail.com" className="hover:text-purple-500 transition-colors">
                  robiulhasan2k25@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-500" />
                <a href="tel:+8801319290231" className="hover:text-purple-500 transition-colors">
                  +880 1319-290231
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Robiul Hasan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer