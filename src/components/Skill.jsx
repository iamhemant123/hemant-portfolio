import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiRender,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-sky-400" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="dark:text-black text-white" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="dark:text-black text-white" />,
  },
  {
    name: "Render",
    icon: <SiRender className="text-purple-500" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="dark:text-black text-white" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[8px] text-cyan-500 font-semibold text-sm">
            Skills
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Technologies I Use
          </h2>

          <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-8">
            I build modern, scalable and responsive full-stack web
            applications using the MERN Stack, REST APIs and industry
            standard development tools.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white dark:bg-slate-900 p-7 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
            >

              {/* Animated Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="text-6xl mb-5"
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>

                <div className="mt-4 w-10 h-1 rounded-full bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Animation */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-16 flex justify-center"
        >
          <div className="px-6 py-3 rounded-full border border-cyan-500/20 bg-white dark:bg-slate-900 shadow-lg">
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              🚀 Always Learning • Always Building • Always Improving
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;