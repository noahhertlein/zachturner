"use client";
import { motion } from 'framer-motion';
import { FaBuilding, FaWrench, FaSwimmer, FaStore, FaGlobeAmericas } from 'react-icons/fa';

// Experience data from Zachary's resume
const experiences = [
  {
    position: "Maintenance Technician",
    company: "Hill Place Apartments",
    location: "Fayetteville, AR",
    period: "05/2024 - Current",
    description: [
      "Performed daily maintenance and repairs across over 400 units, addressing a wide range of issues including plumbing, electrical, HVAC, drywall, and appliance malfunctions, ensuring optimal living conditions for 800+ residents.",
      "Managed a high volume of service tickets, prioritizing tasks based on urgency and resource availability to maintain smooth operations in a high-traffic student housing environment.",
      "Executed maintenance and repairs to complete rapid turnarounds for vacant units, focusing on high-priority and cosmetic improvements, successfully meeting the three-week deadline for all 400+ units.",
      "Provided reliable on-call support for emergency maintenance requests, effectively troubleshooting and resolving complex issues, from flooding and power outages to appliance breakdowns, ensuring 24/7 functionality and tenant satisfaction."
    ],
    icon: <FaWrench />
  },
  {
    position: "Leasing Community Intern",
    company: "Hill Place Apartments",
    location: "Fayetteville, AR",
    period: "07/2023 - 05/2024",
    description: [
      "Handled residential data for over 800 residents with reliability, resulting in a swift and expedited move-in process.",
      "Promoted benefits of the community, causing an increase in pre-lease percentages compared to nearby competitors.",
      "Collaborated with the leasing team to conduct market research and competitive analysis to inform pricing strategies and promotional efforts."
    ],
    icon: <FaBuilding />
  },
  {
    position: "Website Manager",
    company: "Wishes & Fishes",
    location: "Remote",
    period: "Contractual",
    description: [
      "Maintained upkeep of the website making sure of its constant availability pending updates to the software.",
      "Developed and implemented customer-centric strategies to enhance the online shopping experience, focusing on usability, accessibility, and customer satisfaction.",
      "Utilized data analytics tools to analyze website performance metrics and customer behavior, informing data-driven decisions to optimize the online shopping experience and support workflows."
    ],
    icon: <FaGlobeAmericas />
  },
  {
    position: "Crew Member",
    company: "Bull Shoals Lake Boat Dock",
    location: "Bull Shoals, AR",
    period: "05/2022 - 08/2022",
    description: [
      "Provided exceptional customer service to boat owners and guests, assisting with docking, fueling, and departure procedures.",
      "Coordinated boat rental operations, including scheduling reservations, conducting safety briefings, and processing rental agreements."
    ],
    icon: <FaSwimmer />
  },
  {
    position: "Shop Manager",
    company: "Branson Cedars Resort",
    location: "Branson, MO",
    period: "05/2017 - 12/2020",
    description: [
      "Managed day-to-day operations of the disc golf shop, including inventory management and sales transactions of more than 300 customers.",
      "Delivered expert guidance and product recommendations to customers, enhancing their shopping experience and promoting sales.",
      "Standardized accurate records of inventory levels, sales performance, and customer feedback, utilizing data to inform purchasing decisions and marketing initiatives."
    ],
    icon: <FaStore />
  }
];

const ExperienceCard = ({ 
  experience, 
  index 
}: { 
  experience: typeof experiences[0]; 
  index: number; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="cyber-border p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30">
            {experience.icon}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold">{experience.position}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 text-sm">
            <span className="font-medium text-[var(--accent)]">{experience.company}</span>
            <span className="hidden sm:block text-gray-500">•</span>
            <span className="text-gray-400">{experience.location}</span>
            <span className="hidden sm:block text-gray-500">•</span>
            <span className="text-gray-400">{experience.period}</span>
          </div>
          
          {typeof experience.description === 'string' ? (
            <p className="text-gray-300 mt-2">{experience.description}</p>
          ) : (
            <ul className="list-disc pl-4 mt-2 space-y-1">
              {experience.description.map((item, i) => (
                <li key={i} className="text-gray-300">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="tech-highlight">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[var(--primary)] mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 italic">
            Experienced in various roles that have developed my technical troubleshooting, customer service,
            and data management skills - all valuable foundations for a career in cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
