import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaDiscord, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Check scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollToTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: FaGithub, href: "https://github.com/Vaibhavkulshrestha12", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/vaibhav-kulshrestha-053924283/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/Vaibhav_1208", label: "Twitter" },
    { icon: FaInstagram, href: "https://www.instagram.com/potato_o_0/", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/+917355479199", label: "WhatsApp" },
    { icon: FaDiscord, href: "https://discord.com/users/idk_alpha_", label: "Discord" },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-lg group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Floating particles background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 400,
              }}
              animate={{
                y: [Math.random() * 400, Math.random() * 400],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-orange-400" />
                  <a href="mailto:vaibhavkulshrestha1208@gmail.com" className="text-sm">
                    vaibhavkulshrestha1208@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <FaPhoneAlt className="text-orange-400" />
                  <span className="text-sm">+91 73554 79199</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="text-orange-400" />
                  <span className="text-sm">Punjab, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Me', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Experience', path: '/experience' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <motion.div key={link.name} whileHover={{ x: 5 }}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Connect
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:from-orange-500 hover:to-amber-600 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-lg group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                About
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Full Stack Developer passionate about creating amazing digital experiences. 
                Always learning, always building.
              </p>
              
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-gray-400">Available for projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="mt-12 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Vaibhav Kulshrestha. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              and lots of ☕
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};