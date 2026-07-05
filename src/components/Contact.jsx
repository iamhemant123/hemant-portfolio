import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message Sent Successfully 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {
      console.log(error);
      toast.error("Failed to Send Message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 bg-white dark:bg-slate-950 transition-colors duration-500"
    >

      {/* Background */}

      <div className="absolute -top-20 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[8px] text-cyan-500 font-semibold text-sm">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Let's Work Together
          </h2>

          <div className="w-24 h-1 rounded-full bg-cyan-500 mx-auto mt-5"></div>

          <p className="mt-6 max-w-2xl mx-auto leading-8 text-slate-600 dark:text-slate-400">
            Have a project in mind or looking for a MERN Stack Developer?
            Feel free to contact me.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-white dark:bg-slate-900 shadow-xl p-6 md:p-8"
          >

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <motion.a
                whileHover={{ x: 8 }}
                href="tel:+916399002454"
                className="flex items-center gap-4 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>

                <span className="font-medium">
                  +91 6399002454
                </span>
              </motion.a>

              <motion.a
                whileHover={{ x: 8 }}
                href="mailto:iamhemant639@gmail.com"
                className="flex items-center gap-4 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>

                <span className="font-medium break-all">
                  iamhemant639@gmail.com
                </span>
              </motion.a>

              <motion.a
                whileHover={{ x: 8 }}
                href="https://linkedin.com/in/iamhemant4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                  <FaLinkedin />
                </div>

                <span className="font-medium">
                  linkedin.com/in/iamhemant4
                </span>
              </motion.a>

              <motion.a
                whileHover={{ x: 8 }}
                href="https://github.com/iamhemant123"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 hover:bg-cyan-500 hover:text-white duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                  <FaGithub />
                </div>

                <span className="font-medium">
                  github.com/iamhemant123
                </span>
              </motion.a>

            </div>

          </motion.div>

                    {/* Right Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-cyan-500/20 bg-white dark:bg-slate-900 shadow-xl p-6 md:p-8 space-y-6"
          >

            {/* Name */}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />

            {/* Subject */}

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />

            {/* Message */}

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />

            {/* Success Message */}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-green-500 bg-green-100 dark:bg-green-900/20 p-4 text-center"
              >
                <div className="flex justify-center mb-2">
                  <FaCheckCircle className="text-3xl text-green-500" />
                </div>

                <h3 className="font-bold text-green-600 dark:text-green-400">
                  Thank You 🎉
                </h3>

                <p className="text-sm mt-1 text-slate-700 dark:text-slate-300">
                  Your message has been sent successfully.
                  I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Button */}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-600 py-4 font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >

              {loading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-20"
                    />

                    <path
                      d="M22 12a10 10 0 00-10-10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>

                  Sending...

                </>
              ) : success ? (
                <>
                  <FaCheckCircle />
                  Thank You
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}

            </motion.button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;