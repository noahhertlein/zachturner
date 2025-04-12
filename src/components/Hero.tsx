"use client";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 50 + 0)}, ${Math.floor(Math.random() * 150 + 100)}, ${Math.floor(Math.random() * 150 + 100)}, ${Math.random() * 0.5 + 0.3})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        const width = canvas?.width || window.innerWidth;
        const height = canvas?.height || window.innerHeight;
        
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20)); // Reduced for better performance with profile image
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function connectParticles() {
      if (!ctx || !canvas) return;
      const maxDistance = 150;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(0, 170, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="cyber-grid"></div>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10"
      />
      
      <div className="container mx-auto px-4 lg:px-8 z-10 pt-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0 md:space-x-4">
          <div className="flex flex-col space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-1"
            >
              <h2 className="text-[var(--primary)] text-xl sm:text-2xl font-[family-name:var(--font-geist-mono)]">
                Hello, I&apos;m
              </h2>
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-glitch" 
                data-text="Zachary Turner"
              >
                Zachary Turner
              </h1>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-light"
            >
              <span className="tech-highlight">Penetration Testing</span> Specialist & 
              <span className="text-[var(--accent)]"> Cybersecurity</span> Student
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-base sm:text-lg text-gray-300"
            >
              Currently seeking internship and full-time opportunities in cybersecurity.
              Based in Fayetteville, Arkansas.
            </motion.p>
          </div>

          {/* Profile picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden md:block"
          >
            <div className="relative w-80 h-80 cyber-border overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20"></div>
              <Image 
                src="/images/zach.jfif" 
                alt="Zachary Turner" 
                fill 
                style={{ objectFit: 'cover' }}
                className="z-10 opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse z-20"></div>
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--primary)] animate-pulse z-20" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[var(--secondary)] animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse z-20" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-black font-medium rounded-md transition-colors cyber-border"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 font-medium rounded-md transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex gap-5 pt-2"
          >
            <motion.a
              href="https://www.linkedin.com/in/zacharyalexturner/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#0077B5' }}
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:zturner1102@protonmail.com"
              whileHover={{ y: -5, color: '#D14836' }}
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#6e5494' }}
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
