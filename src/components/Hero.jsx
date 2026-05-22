import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { assets } from '../assets/assets'

const Hero = () => {
  // 3D motion values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Create an array for the particles
  const particles = Array.from({ length: 15 });

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden
      bg-linear-to-br from-[#0b1020] via-[#11153a] to-[#0b1020]"
    >
      {/* --- NEON PARTICLES LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              // Random sizes and colors
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: i % 2 === 0 ? '#22d3ee' : '#7c3aed',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: i % 2 === 0 
                ? '0 0 10px #22d3ee, 0 0 20px #22d3ee' 
                : '0 0 10px #7c3aed, 0 0 20px #7c3aed',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-pink-400 to-cyan-500"
              style={{ backgroundSize: "200% auto" }}
              animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Robiul Hasan
            </motion.span>
          </h1>

          <div className="w-full flex justify-center md:justify-start">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 typewriter text-white">
              Network Engineer
            </h2>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Network Engineer with expertise in designing, implementing, and maintaining robust network infrastructures. Passionate about solving complex networking challenges and ensuring seamless connectivity.
          </p>

          {/* Buttons Container - Center for mobile */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <a href="#projects" className="px-6 py-3 border border-white bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              View Work
            </a>
            <a href="https://drive.google.com/file/d/1k0_u-swNvoDMtXpX08kg6T1_bGRS-c08/view?usp=sharing" className="px-6 py-3 border border-purple-600 text-white rounded-lg font-medium hover:bg-purple-600/20 transition duration-300">
              DOWNLOAD CV
            </a>
          </div>

          <div className="mt-4 sm:mt-6 flex items-center space-x-4 text-sm sm:text-base">
            <a href="https://github.com/robiulhasan21" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple text-2xl transition-colors drop-shadow-[0_0_6px_rgba(124,58,237,0.12)]">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/robiul-hasan15/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple text-2xl transition-colors drop-shadow-[0_0_6px_rgba(34,211,238,0.12)]">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/its.robiulhasan/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple text-2xl transition-colors drop-shadow-[0_0_6px_rgba(124,58,237,0.08)]">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/md__robi__ul/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-purple text-2xl transition-colors drop-shadow-[0_0_6px_rgba(236,72,153,0.12)]">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE : FLOAT + 3D */}
        <div className="md:w-1/2 flex justify-center perspective-[1000px] order-1 md:order-2 mb-8 md:mb-0">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="relative
              w-50 h-50         
              sm:w-64 sm:h-64   
              md:w-80 md:h-80 
              flex items-center justify-center cursor-pointer"
            >
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full
                bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
                blur-3xl opacity-80 animate-pulse"
                style={{ transform: 'translateZ(-20px)' }}
              />

              {/* Neon ring */}
              <div
                className="absolute inset-1 rounded-full
                bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
                blur-sm"
                style={{ transform: 'translateZ(-10px)' }}
              />

              {/* Image + Neon Border */}
              <div
                className="relative z-10 w-full h-full rounded-full
                p-1.25 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
                shadow-[0_0_45px_rgba(168,85,247,0.9)]"
                style={{ transform: 'translateZ(30px)' }}
              >
                <img
                  src={assets.profileImg}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover bg-[#0f0f0f]"
                />
              </div>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero