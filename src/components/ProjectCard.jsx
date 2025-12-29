import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="rounded-2xl p-0.5 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400">
      <div className="bg-[#0f1333] rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_18px_rgba(168,85,247,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-500 flex flex-col group">
        {/* Image Container with Neon Overlay */}
        <div className="overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-sm z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 bg-linear-to-b from-transparent to-[#0b0f2a]/20">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {description}
          </p>

          {/* Tech Tags Neon */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-[#264969] text-gray-200 rounded-full
                text-sm font-medium border border-pink/10 transition">         
                {item}
              </span>
            ))}
          </div>

          {/* Buttons Neon */}
          <div className="flex gap-4 mt-auto">
            <a
              href={demo}
              className="flex-1 text-center py-2 rounded-lg
              bg-linear-to-r from-green-700 to-green-700
              text-white font-bold text-sm
              shadow-lg shadow-purple-500/40
              hover:from-green-500 hover:to-green-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.28)] transition duration-300"
            >
              LIVE DEMO
            </a>

            <a
              href={code}
              className="flex-1 text-center py-2 rounded-lg
              border border-green-500/40 text-green-200 font-bold text-sm
              hover:bg-green-500/40 hover:text-white
              transition duration-300"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard