import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../assets/assets'

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center bg-linear-to-br from-[#0b1020] 
      via-[#11153a] to-[#0b1020] pt-20 pb-16 justify-center 
      overflow-hidden"
    >
      <div className="max-w-5xl w-full">
        {/* Glowing Title */}
        <motion.h2
        initial={{ opacity: 0.6 }}
        animate={{
            opacity: [0.6, 1, 0.6],
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
        className="text-4xl font-bold text-center text-white mb-14"
        >
        Skills
        
        </motion.h2>

        <div className="flex flex-col gap-12">
          {skillsData.map((section, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-5"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase">
                {section.category}
              </h3>

              {/* Skill Tags Wrapper */}
              <div className="flex flex-wrap gap-4">
                {section.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    // 3D Floating Animation (Up and Down)
                    animate={{
                      y: [0, -12, 0], // Up-Down movement
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2, // Random duration for natural 3D feel
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2, // Random start time
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateX: 15, // 3D Tilt on hover
                      rotateY: 15,
                      z: 50
                    }}
                    className={`${skill.color} px-6 py-2.5 rounded-2xl text-white font-bold text-[16px] 
                      shadow-[0_10px_20px_rgba(0,0,0,0.3)] border border-white/20 cursor-pointer
                      perspective-1000 transform-gpu`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills