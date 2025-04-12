"use client";
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Fayetteville Crime Hotspot Map",
    description: "Developed a custom Java application to automatically extract and analyze crime data from Fayetteville Police Department logs. Utilized Geopandas to visualize crime hotspots, enabling targeted analysis and strategic decision-making for crime prevention efforts.",
    technologies: ["Python", "Java", "Geopandas", "Data Analysis"],
    image: "/crime-map.jpg", 
    icons: <FaMapMarkedAlt />,
    links: {
      github: "#", // Placeholder GitHub link
      live: "#", // Placeholder live link
    },
    achievement: "UA Hackathon 3rd Place"
  },
  // More projects can be added here as they are created
];

// Custom cybersecurity-themed project cards
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="cyber-border rounded-lg overflow-hidden">
        {/* Project Image/Background */}
        <div className="relative h-60 w-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20">
          {/* If an actual project image is available, uncomment this */}
          {/* {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            />
          )} */}
        </div>
        
        {/* Project Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            {/* Achievement Badge */}
            {project.achievement && (
              <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30">
                {project.achievement}
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">
              {project.description}
            </p>
          </div>
          
          <div>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-gray-800/70 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--primary)] transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--primary)] transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-3xl text-[var(--primary)]/20">
            {project.icons}
          </div>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="tech-highlight">Projects</span> & Work
          </h2>
          <div className="mt-2 h-1 w-20 bg-[var(--primary)] mx-auto"></div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
          
          {/* Future Projects Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="cyber-border p-6 rounded-lg bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center h-60 text-center"
          >
            <div className="text-4xl text-[var(--accent)]/50 mb-4">+</div>
            <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
            <p className="text-gray-400 text-sm">
              Currently working on several cybersecurity projects and research
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 font-medium rounded-md transition-colors"
          >
            Interested in collaboration? Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
