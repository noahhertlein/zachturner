"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaShieldAlt, FaCode, FaUniversity } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="tech-highlight">About</span> Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-[var(--primary)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Zachary's profile image */}
            <div className="relative h-[400px] w-full max-w-[400px] mx-auto cyber-border overflow-hidden rounded-lg">
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20 absolute"></div>
              <div className="relative w-full h-full">
                <Image 
                  src="/images/zach.jfif" 
                  alt="Zachary Turner" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="z-10 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse z-20"></div>
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--primary)] animate-pulse z-20" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[var(--secondary)] animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse z-20" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Hi, I'm Zachary Turner</h3>
            <p className="text-gray-300">
              I'm a cybersecurity student specializing in penetration testing and offensive security techniques. 
              Currently pursuing a Bachelor's degree in Cybersecurity at Southern New Hampshire University, 
              I've also completed 71 hours toward a Bachelor of Science in Computer Science at the University of Arkansas.
            </p>
            <p className="text-gray-300">
              My expertise is in penetration testing, network exploitation, and identifying security vulnerabilities. 
              I'm constantly expanding my knowledge through practical testing projects and certifications, 
              having already earned my Junior Penetration Tester certification and actively working toward Security+.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="cyber-border p-4 rounded-lg">
                <div className="text-3xl text-[var(--primary)] mb-2">
                  <FaShieldAlt />
                </div>
                <h4 className="font-bold">Penetration Testing</h4>
                <p className="text-sm text-gray-400">Ethical Hacking, Exploit Development</p>
              </div>
              
              <div className="cyber-border p-4 rounded-lg">
                <div className="text-3xl text-[var(--accent)] mb-2">
                  <FaCode />
                </div>
                <h4 className="font-bold">Development</h4>
                <p className="text-sm text-gray-400">C++, Python, BASH Scripting</p>
              </div>
              
              <div className="cyber-border p-4 rounded-lg">
                <div className="text-3xl text-[var(--secondary)] mb-2">
                  <FaUniversity />
                </div>
                <h4 className="font-bold">Education</h4>
                <p className="text-sm text-gray-400">SNHU, University of Arkansas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
