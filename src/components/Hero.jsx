import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen pt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[150px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-500 font-semibold text-lg tracking-wide"
        >
          👋 Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 font-black leading-tight"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white">
            Hemant
          </span>

          <span className="block mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Kumar Singh
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300"
        >
          MERN Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-8 text-slate-600 dark:text-slate-400"
        >
          I build scalable, responsive and modern full-stack web applications
          using React, Node.js, Express.js and MongoDB. Passionate about writing
          clean code and developing fast, user-friendly web experiences that
          solve real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            View Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <FaDownload className="group-hover:-translate-y-1 transition-transform duration-300" />
            Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 flex justify-center gap-6"
        >
          <a
            href="https://github.com/iamhemant123"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-2xl text-slate-700 dark:text-white shadow-md hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/iamhemant4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-2xl text-slate-700 dark:text-white shadow-md hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;