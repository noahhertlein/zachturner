"use client";
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTerminal, FaCode, FaToolbox, FaServer, FaNetworkWired } from 'react-icons/fa';

const skillCategories = [
  {
    name: "Penetration Testing",
    icon: <FaShieldAlt />,
    skills: ["Metasploit", "BurpSuite", "WireShark", "Hydra", "Vulnerability Assessment", "Exploitation", "Information Security"],
    color: "var(--primary)"
  },
  {
    name: "Security Tools",
    icon: <FaToolbox />,
    skills: ["Nmap", "DirBuster", "JohnTheRipper", "Windows Defender/Firewall", "NetCat", "Kali"],
    color: "#22cc88"
  },
  {
    name: "Languages",
    icon: <FaCode />,
    skills: ["C++", "Python", "BASH"],
    color: "var(--accent)"
  },
  {
    name: "Environments & Tools",
    icon: <FaServer />,
    skills: ["Linux", "VirtualBox", "Vim", "GitHub", "Visual Studio Code", "SSH"],
    color: "var(--secondary)"
  },
  {
    name: "Business Applications",
    icon: <FaTerminal />,
    skills: ["Entrata", "Leonardo247", "BigCommerce"],
    color: "#0066aa"
  },
  {
    name: "Soft Skills",
    icon: <FaNetworkWired />,
    skills: ["Customer Service", "Troubleshooting", "Communication", "Detail Oriented", "Team-Player"],
    color: "#5200a8"
  }
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{proficiency}%</span>
      </div>
      <div className="cyber-border h-2.5 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, var(--primary), var(--accent))` }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="cyber-border p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
    >
      <div className="text-3xl mb-4" style={{ color: category.color }}>
        {category.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="text-sm px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const mainSkills = [
    { name: "Vulnerability Assessment", proficiency: 90 },
    { name: "Penetration Testing", proficiency: 85 },
    { name: "Information Security", proficiency: 80 },
    { name: "Technical Troubleshooting", proficiency: 85 },
    { name: "Python & C++", proficiency: 75 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="tech-highlight">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[var(--primary)] mx-auto"></div>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6"
          >
            Core Competencies
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {mainSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="cyber-border p-6 rounded-lg bg-black/50 backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold mb-4 text-[var(--accent)]">Certifications</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 bg-[var(--primary)]/20 rounded-full text-[var(--primary)]">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h5 className="font-semibold">CompTIA Security+</h5>
                    <p className="text-sm text-gray-400">Expected 05/2025</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 bg-[var(--accent)]/20 rounded-full text-[var(--accent)]">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h5 className="font-semibold">Junior Penetration Tester</h5>
                    <p className="text-sm text-gray-400">03/2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 bg-[var(--secondary)]/20 rounded-full text-[var(--secondary)]">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h5 className="font-semibold">Introduction to Cyber Security Learning</h5>
                    <p className="text-sm text-gray-400">10/2022</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
