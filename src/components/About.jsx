import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  FaDownload,
  FaUserGraduate,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaReact className="text-3xl text-cyan-400" />,
      title: "Frontend",
      desc: "React.js, Tailwind CSS, JavaScript",
    },
    {
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      title: "Backend",
      desc: "Node.js, Express.js, REST APIs",
    },
    {
      icon: <FaDatabase className="text-3xl text-yellow-400" />,
      title: "Database",
      desc: "MongoDB & Mongoose",
    },
    {
      icon: <FaLaptopCode className="text-3xl text-purple-500" />,
      title: "Full Stack",
      desc: "Complete MERN Applications",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Blur */}

      <div className="absolute -top-32 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-500 uppercase tracking-[8px] font-semibold text-sm ">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Passionate MERN Developer
          </h2>

          <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

              {/* Profile Image */}

              <motion.img
                src="/profile.png"
                alt="Hemant Kumar Singh"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative w-60 h-60 md:w-56 md:h-56 object-cover rounded-full border-[5px] border-white dark:border-slate-800 shadow-[0_0_25px_rgba(6,182,212,.35)]"
              />
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-5">
              Hi, I'm{" "}
              <span className="text-cyan-500">
                Hemant Kumar Singh 👋
              </span>
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-7 text-[15px] mb-5">
              I'm a passionate MERN Stack Developer who loves building modern,
              scalable and responsive web applications. I enjoy transforming
              ideas into real-world digital products using clean code and best
              development practices.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-7 text-[15px] mb-7">
              My expertise includes React.js, Node.js, Express.js, MongoDB,
              Tailwind CSS, JWT Authentication, REST APIs and Payment Gateway
              Integration. I continuously learn new technologies to improve my
              development skills and deliver high-quality applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
                            {/* Education */}

              <div className="flex items-center gap-3 p-3 rounded-2xl border border-cyan-500/20 bg-white dark:bg-slate-900 shadow-md hover:shadow-cyan-500/20 transition-all duration-300">
                <FaUserGraduate className="text-cyan-500 text-xl flex-shrink-0" />

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Education
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    B.Tech CSE
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-3 p-3 rounded-2xl border border-cyan-500/20 bg-white dark:bg-slate-900 shadow-md hover:shadow-cyan-500/20 transition-all duration-300">
                <FaMapMarkerAlt className="text-cyan-500 text-xl flex-shrink-0" />

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Location
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-7">

              {/* Get In Touch */}

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </a>

              {/* Resume */}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold transition-all duration-300"
              >
                <FaDownload />
                Resume
              </a>

            </div>

          </motion.div>

        </div>

        {/* Skills Cards */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group bg-white dark:bg-slate-900 border border-cyan-500/20 rounded-3xl p-5 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-6">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;