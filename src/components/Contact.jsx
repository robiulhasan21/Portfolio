import React from "react"
import { motion } from "framer-motion"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent (demo)")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="min-h-screen flex items-center pt-20 pb-16
      bg-linear-to-br from-[#0b1020] via-[#11153a] to-[#0b1020]">

      <div className="container mx-auto px-6">
        {/* Neon Box Title */}
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
  Get In Touch

</motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="max-w-2xl mx-auto">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(168,85,247,0.6)",
                "0 0 40px rgba(34,211,238,0.7)",
                "0 0 20px rgba(168,85,247,0.6)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-2xl p-0.5 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400"
          >
            <div className="rounded-3xl p-6 bg-linear-to-br from-[#0f1333] via-[#171b45] to-[#0f1333] backdrop-blur-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-indigo-900/40 text-white border border-indigo-400/30 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition" />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg bg-indigo-900/40 text-white border border-indigo-400/30 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 transition" />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-indigo-900/40 text-white border border-indigo-400/30 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition" />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Your Message</label>
                  <textarea rows={5} required className="w-full px-4 py-3 rounded-lg bg-indigo-900/40 text-white border border-indigo-400/30 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition" />
                </div>

                <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-linear-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/40">Send Message →</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
