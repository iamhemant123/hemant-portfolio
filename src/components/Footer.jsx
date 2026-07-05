import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-950 border-t border-cyan-500/10 transition-colors duration-500">

      {/* Background Glow */}

      <div className="absolute -top-20 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16">

        {/* Top */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <motion.h2
              whileHover={{
                scale: 1.05,
              }}
              className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent"
            >
              Hemant.
            </motion.h2>

            <p className="text-slate-600 dark:text-slate-400 mt-5 leading-8">
              MERN Stack Developer passionate about building scalable,
              responsive and modern web applications using React,
              Node.js, Express.js and MongoDB.
            </p>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([title, link]) => (

                <motion.li
                  key={title}
                  whileHover={{
                    x: 8,
                  }}
                >

                  <a
                    href={link}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-all duration-300"
                  >
                    {title}
                  </a>

                </motion.li>

              ))}

            </ul>

          </motion.div>

          {/* Connect */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">
              <motion.a
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}
                href="https://github.com/iamhemant123"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}
                href="https://linkedin.com/in/iamhemant4"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=iamhemant639@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
              </motion.a>

            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-7">
              Open to freelance, internships and full-time opportunities.
            </p>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="border-t border-cyan-500/10 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-500 dark:text-slate-400 text-center">
            © {year} Hemant Kumar Singh. All Rights Reserved.
          </p>

          <p className="text-slate-500 dark:text-slate-400 text-center">
            Designed & Developed by Hemant Kumar Singh
          </p>

          <motion.a
            whileHover={{
              y: -5,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            href="#hero"
            className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center transition-all duration-300"
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;