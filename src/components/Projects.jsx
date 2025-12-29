import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id="projects"
    className="min-h-screen flex items-center pt-20 pb-16
    bg-linear-to-br from-[#0b1020] via-[#11153a] to-[#0b1020]">
        <div className='container mx-auto px-6'>
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
                className="text-4xl font-bold text-center text-white mb-14">
                My Projects

            </motion.h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">A 
            selection of my recent work</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
            max-w-6xl mx-auto'>
                {/* Project Card */}
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
            <div className='text-center mt-12'>
                <a
                  href="#" className='inline-flex items-center px-6 py-3 border
                  border-purple rounded-lg font-medium hover:bg-purple/20
                  transition duration-300'>
                  <span>View All Projects</span>
                  <FaArrowRight className='ml-2'/>
                </a>
            </div>
        </div>
      
    </motion.div>
  )
}

export default Projects
