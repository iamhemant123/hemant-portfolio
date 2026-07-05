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
      className="relative overflow-hidden bg-white dark:bg-slate-950 py-20 transition-colors duration-500"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[8px] text-cyan-500">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            Have a project in mind or looking for a MERN Stack Developer?
            Feel free to contact me.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Left Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full min-w-0 overflow-hidden rounded-3xl border border-cyan-500/20 bg-white p-5 shadow-xl dark:bg-slate-900 sm:p-6 md:p-8"
          >
            <h3 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
              Get In Touch
            </h3>

            <div className="space-y-5">
                            {/* Phone */}

              <motion.a
                whileHover={{ x: 6 }}
                href="tel:+916399002454"
                className="group flex w-full min-w-0 items-center gap-4 rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:bg-cyan-500 dark:bg-slate-800"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                  <FaPhoneAlt />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-cyan-100">
                    Phone
                  </p>

                  <span className="block break-all font-medium text-slate-900 transition-colors duration-300 group-hover:text-white dark:text-white">
                    +91 6399002454
                  </span>
                </div>
              </motion.a>

              {/* Email */}

              <motion.a
                whileHover={{ x: 6 }}
                href="mailto:iamhemant639@gmail.com"
                className="group flex w-full min-w-0 items-center gap-4 rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:bg-cyan-500 dark:bg-slate-800"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                  <FaEnvelope />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-cyan-100">
                    Email
                  </p>

                  <span className="block break-all text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-base">
                    iamhemant639@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* LinkedIn */}

              <motion.a
                whileHover={{ x: 6 }}
                href="https://linkedin.com/in/iamhemant4"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full min-w-0 items-center gap-4 rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:bg-cyan-500 dark:bg-slate-800"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                  <FaLinkedin />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-cyan-100">
                    LinkedIn
                  </p>

                  <span className="block break-all text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-base">
                    linkedin.com/in/iamhemant4
                  </span>
                </div>
              </motion.a>

              {/* GitHub */}

              <motion.a
                whileHover={{ x: 6 }}
                href="https://github.com/iamhemant123"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full min-w-0 items-center gap-4 rounded-2xl bg-slate-50 p-4 transition-all duration-300 hover:bg-cyan-500 dark:bg-slate-800"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-xl text-white transition-transform duration-300 group-hover:scale-110">
                  <FaGithub />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-cyan-100">
                    GitHub
                  </p>

                  <span className="block break-all text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-base">
                    github.com/iamhemant123
                  </span>
                </div>
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
            className="w-full min-w-0 overflow-hidden rounded-3xl border border-cyan-500/20 bg-white p-5 shadow-xl dark:bg-slate-900 sm:p-6 md:p-8 space-y-6"
          >
                        {/* Name */}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            {/* Subject */}

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            {/* Message */}

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            {/* Success Message */}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-green-500 bg-green-100 p-5 text-center dark:bg-green-900/20"
              >
                <div className="mb-2 flex justify-center">
                  <FaCheckCircle className="text-4xl text-green-500" />
                </div>

                <h3 className="font-bold text-green-600 dark:text-green-400">
                  Thank You 🎉
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Your message has been sent successfully.
                  <br />
                  I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Submit Button */}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70"
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
