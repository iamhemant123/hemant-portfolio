import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-700"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto h-[76px] px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#hero"
          className="text-2xl lg:text-[28px] font-extrabold tracking-tight select-none"
        >
          <span className="text-slate-900 dark:text-white">
            Hemant
          </span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-medium text-slate-700 dark:text-gray-300 hover:text-cyan-500 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition"
          >
            Resume
          </a>

          {/* Theme Button */}

          <button
            onClick={() => setDark((prev) => !prev)}
            className="w-11 h-11 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            {dark ? (
              <HiOutlineSun
                size={26}
                className="text-white"
              />
            ) : (
              <HiOutlineMoon
                size={26}
                className="text-yellow-500"
              />
            )}
          </button>

        </div>

        {/* Mobile Right */}

        <div className="flex md:hidden items-center gap-2">

          <button
            onClick={() => setDark((prev) => !prev)}
            className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            {dark ? (
              <HiOutlineSun
                size={24}
                className="text-white"
              />
            ) : (
              <HiOutlineMoon
                size={24}
                className="text-yellow-500"
              />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center"
          >
            {menuOpen ? (
              <HiOutlineX
                size={30}
                className="text-slate-900 dark:text-white"
              />
            ) : (
              <HiOutlineMenuAlt3
                size={30}
                className="text-slate-900 dark:text-white"
              />
            )}
          </button>

        </div>

      </div>
      {/* Mobile Menu */}

      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden backdrop-blur-xl bg-white/95 dark:bg-slate-900/95"
      >
        <div className="flex flex-col items-center gap-6 py-8">

          {navLinks.map((item) => (
            <a
  key={item.id}
  href={`#${item.id}`}
  onClick={() => {
    console.log(item.id);

    setTimeout(() => {
      setMenuOpen(false);
    }, 1000);
  }}
  className="text-lg font-medium text-slate-800 dark:text-white hover:text-cyan-500 transition"
>
  {item.name}
</a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition"
          >
            Resume
          </a>

          {/* Mobile Theme Button */}

          <button
            onClick={() => setDark((prev) => !prev)}
            className="w-11 h-11 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            {dark ? (
              <HiOutlineMoon
                size={24}
                className="text-white"
              />
            ) : (
              <HiOutlineSun
                size={24}
                className="text-yellow-500"
              />
            )}
          </button>

        </div>
      </motion.div>

    </motion.header>
  );
}

export default Navbar;