import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import icon from '../assets/icon.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const neonClass = "animate-neon-pulse hover:text-white transition-colors duration-300";

  return (
    <nav className='fixed w-full z-50 bg-[#0b1020]/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        
        {/* Logo Section */}
        <a href="#" className='flex items-center gap-3 text-3xl font-bold text-white group'>
          {/* Animated Symbol */}
          <motion.img 
            src={icon} 
            alt="Logo"
            className="w-10 h-10 object-contain"
            animate={{
              y: [0, -5, 0], // Floating effect
              filter: [
                "drop-shadow(0 0 5px #7c3aed)",
                "drop-shadow(0 0 15px #22d3ee)",
                "drop-shadow(0 0 5px #7c3aed)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Name with pulsing neon text */}
          <motion.span
            animate={{
              textShadow: [
                "0 0 8px #7c3aed, 0 0 16px #7c3aed",
                "0 0 16px #22d3ee, 0 0 32px #22d3ee",
                "0 0 8px #7c3aed, 0 0 16px #7c3aed",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Robiul Hasan
          </motion.span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-10'>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative text-white font-medium group ${neonClass}`}
            >
              <span>{link.name}</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className='md:hidden text-white'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='md:hidden fixed inset-0 top-18 bg-[#0b1020] h-screen p-8 flex flex-col space-y-8 text-center'>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              onClick={() => setShowMenu(false)} 
              href={link.href} 
              className={`text-2xl font-semibold text-white ${neonClass}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 0 0 4px #a855f7, 0 0 8px #a855f7;
            color: #d8b4fe;
          }
          50% {
            text-shadow: 0 0 12px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7;
            color: #ffffff;
          }
        }
        .animate-neon-pulse {
          animation: neon-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </nav>
  )
}

export default Navbar