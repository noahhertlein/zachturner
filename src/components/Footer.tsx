"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaChevronUp, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-gray-800 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 w-10 h-10 rounded-full flex items-center justify-center text-[var(--primary)] mb-8 transition-colors"
          >
            <FaChevronUp />
          </motion.button>

          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="text-[var(--primary)] text-2xl">
              <FaShieldAlt />
            </div>
            <span className="font-bold text-xl tracking-tighter glow-text font-[family-name:var(--font-geist-mono)]">
              ZT<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          <div className="flex gap-8 mb-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex gap-6 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/zacharyalexturner/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#0077B5' }}
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:zturner1102@protonmail.com"
              whileHover={{ y: -3, color: '#D14836' }}
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              &copy; {currentYear} Zachary Turner. All rights reserved.
            </p>
            <p>
              Cybersecurity Student based in Fayetteville, Arkansas
            </p>
          </div>
        </div>
      </div>

      {/* Cyber-themed border animation */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="h-full w-[50%] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent animate-scanline"></div>
      </div>
    </footer>
  );
};

export default Footer;
