import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ElanceForge",
    subtitle: "Digital Agency Platform",
    image: "/projects/elanceforge.png",
    description:
      "Complete MERN Stack Digital Agency Platform with secure authentication, email verification, project management, payment integration, and role-based dashboards.",
    github: "https://github.com/iamhemant123/elance-forge-web",
    live: "https://elance-forge-web.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind","JWT","Email Verification","Razorpay"],
  },

  {
    title: "Personal Portfolio",
    subtitle: "Developer Portfolio",
    image: "/projects/portfolio.png",
    description:
      "A modern and responsive portfolio showcasing my skills and projects. Built with React, Tailwind CSS, and Framer Motion to provide a smooth and engaging user experience across all devices.",
    github: "https://github.com/iamhemant123/hemant-portfolio",
    live: "https://hemant-portfolio-wheat.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[8px] text-cyan-500 font-semibold text-sm">
            PROJECTS
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-500 rounded-full mx-auto mt-5"></div>

          <p className="mt-5 max-w-3xl mx-auto leading-7 text-slate-600 dark:text-slate-400">
            Here are some of my featured MERN Stack projects built
            using modern technologies with clean UI and responsive
            design.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid lg:grid-cols-2 gap-6 justify-items-center">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="w-full max-w-[430px] overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
            >

              {/* Image */}

              <div className="h-52 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain p-3 transition duration-500 hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-5">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-cyan-500 text-sm font-semibold mt-1">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-5">
                                  {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-cyan-500/20 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}

                </div>

              

                {/* Buttons */}

                <div className="flex gap-3 mt-6">

                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white text-sm font-medium transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;