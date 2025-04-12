import dynamic from 'next/dynamic';

// Static imports for components that don't need client-side functionality
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="relative">
      {/* Main navigation */}
      <Navbar />
      
      {/* Hero section with animated particles */}
      <Hero />
      
      {/* About section */}
      <About />
      
      {/* Skills section */}
      <Skills />
      
      {/* Experience section */}
      <Experience />
      
      {/* Projects section */}
      <Projects />
      
      {/* Contact section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
