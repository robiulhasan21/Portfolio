import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'


const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once: true}}
    id='about'
    className="min-h-screen flex items-center pt-20 pb-16
      bg-linear-to-br from-[#0b1020] via-[#11153a] to-[#0b1020]"
    >
        <div className='container mx-auto px-6'>
           {/* Heading */}
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
        About Me
        
        </motion.h2>

           <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get 
            to know more about my background and passion</p>

            {/* image + my journey */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* image */}
                <div className='md:w-1/3 rounded-2xl overflow-hidden mx-auto'>
                    <motion.img 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 0.9, ease:'easeOut'}}
                    viewport={{once: false, amount: 0.2}}
                    className='w-full h-full object-cover'
                    src={assets.profileImg} alt="Profile" /> 
                </div>
                {/* Text content */}
                <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease:'easeOut'}}
                viewport={{once: false, amount: 0.2}}
                className='md:w-1/2 mx-auto'
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6'>I'm a passionate Network Engineer with experience 
                            in designing, managing, and securing network infrastructures. My journey started 
                            with learning basic networking concepts and has evolved into handling complex network 
                            systems, troubleshooting issues, and ensuring reliable connectivity.</p>
                        <p className='text-gray-300 mb-12'>When I'm not working on networks, I enjoy exploring 
                            new technologies, learning about cybersecurity, and improving my skills to build 
                            secure and efficient communication systems. I believe in continuous learning and 
                            adapting to the ever-changing world of technology.</p>

                            {/* Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform 
                                            duration-300 hover:-translate-y-2 cursor-pointer'>
                                                <div className={`${item.color} text-4xl mb-4`}>
                                                    <Icon />
                                                </div>
                                                <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                                                <p className='text-gray-400'>{item.description}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                    </div>

                </motion.div>

            </div>
        </div>
      
    </motion.div>
  )
}

export default About
