import React from "react"
import { motion } from "framer-motion"

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "Dhaka International University",
    gpa: "CGPA: 3.15",
    year: "2022 - 2026",
  },
  {
    degree: "Higher Secondary Certificate in Science",
    school: "Chhengarchar Govt. College",
    gpa: "GPA: 4.08",
    year: "2019 - 2021",
  },
  {
    degree: "Secondary School Certificate in Science",
    school: "Kalipur High School and College",
    gpa: "GPA: 4.11",
    year: "2019",
  },
]

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="education"
      className="min-h-screen flex items-center pt-20 pb-16
      bg-linear-to-br from-[#0b1020] via-[#11153a] to-[#0b1020]">

      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
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
          Education
        </motion.h2>

        {/* Cards */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              // Animated Neon Border and Glow
              animate={{
                borderColor: ["#7c3aed33", "#22d3ee66", "#7c3aed33"],
                boxShadow: [
                  "0 0 10px rgba(124, 58, 237, 0.1)",
                  "0 0 25px rgba(34, 211, 238, 0.2)",
                  "0 0 10px rgba(124, 58, 237, 0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5, // Staggers the animation for each box
              }}
              className="relative bg-white/5 backdrop-blur-xl border-2 rounded-2xl p-6 md:p-8 overflow-hidden"
            >
              {/* Content stays above the glow */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>

                <p className="text-gray-300 mt-2">{edu.school}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-4 py-1 text-sm rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30">
                    {edu.gpa}
                  </span>
                  <span className="px-4 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                    {edu.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education