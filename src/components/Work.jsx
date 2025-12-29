import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-br from-[#0b1020] via-[#11153a] to-[#0b1020] overflow-hidden"
    >
      <div className='container mx-auto px-6 relative z-10'>
        {/* Animated Neon Title */}
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
          Work Experience
        </motion.h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          My professional journey so far
        </p>

        <div className='max-w-3xl mx-auto'>
          <div className='space-y-12 relative'>
            
            {/* Pulsing Vertical Timeline Line */}
            <motion.div 
              animate={{
                backgroundColor: ["#7c3aed", "#22d3ee", "#7c3aed"],
                boxShadow: [
                    "0 0 10px #7c3aed",
                    "0 0 20px #22d3ee",
                    "0 0 10px #7c3aed"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className='absolute left-0 top-0 w-0.5 h-full rounded-full'
            />

            {workData.map((data, index) => (
              <div key={index} className="relative pl-12 group cursor-pointer">
                
                {/* Timeline Pulsing Dot */}
                <motion.div 
                   animate={{
                    backgroundColor: ["#7c3aed", "#22d3ee", "#7c3aed"],
                    scale: [1, 1.2, 1],
                    boxShadow: [
                        "0 0 8px #7c3aed",
                        "0 0 20px #22d3ee",
                        "0 0 8px #7c3aed"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='absolute -left-2.75 top-0 w-6 h-6 rounded-full border-4 border-[#0b1020]'
                />

                {/* Neon Card Box */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="rounded-2xl p-0.5 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400"
                >
                    <div className='bg-[#0f1333] rounded-2xl p-6 shadow-[0_0_15px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500'>
                        <div className='flex justify-between items-start mb-2'>
                            <h3 className='text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors'>
                                {data.role}
                            </h3>
                            <motion.span 
                                animate={{
                                    boxShadow: ["0 0 5px #7c3aed", "0 0 15px #22d3ee", "0 0 5px #7c3aed"]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className='px-3 py-1 bg-white/5 text-purple-300 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium'
                            >
                                {data.duration}
                            </motion.span>
                        </div>
                        <p className='text-cyan-400/80 font-medium mb-2'>{data.company}</p>
                        <p className='text-gray-300 leading-relaxed'>{data.description}</p>
                    </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work