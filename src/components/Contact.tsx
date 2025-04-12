"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isTestMode, setIsTestMode] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setIsTestMode(!!data.note);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsTestMode(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    }
  };
  
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "zturner1102@protonmail.com",
      link: "mailto:zturner1102@protonmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "(417) 699-8106",
      link: "tel:4176998106",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Fayetteville, Arkansas",
      link: null,
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/zacharyalexturner",
      link: "https://www.linkedin.com/in/zacharyalexturner/",
    },
  ];
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="tech-highlight">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[var(--primary)] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="cyber-border p-6 rounded-lg bg-black/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {submitSuccess && isTestMode ? (
              <div className="text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-md p-4 mb-6">
                <p>Message received! Currently in testing mode:</p>
                <p className="text-sm mt-1">In development, emails are only sent to the site owner. 
                Confirmation emails to submitters will be enabled once the site is deployed with a verified domain.</p>
              </div>
            ) : submitSuccess ? (
              <div className="text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-md p-4 mb-6">
                Your message has been sent successfully. I&apos;ll get back to you soon!
              </div>
            ) : null}
            
            {submitError ? (
              <div className="text-red-500 bg-red-500/10 border border-red-500/20 rounded-md p-4 mb-6">
                Error: {submitError}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-black font-medium rounded-md transition-colors disabled:opacity-70 cyber-border"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="cyber-border p-4 rounded-lg bg-black/30">
                  <div className="text-2xl text-[var(--primary)] mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                      target={item.title === "LinkedIn" ? "_blank" : ""}
                      rel={item.title === "LinkedIn" ? "noopener noreferrer" : ""}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="cyber-border p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-[var(--accent)]">Availability</h4>
              <p className="text-gray-300 mb-4">
                Currently seeking internship and full-time opportunities in cybersecurity. 
                Open to remote positions as well as relocating for the right opportunity.
              </p>
              <div className="text-gray-400 space-y-2">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-[var(--primary)]">Within 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Available for:</span>
                  <span className="text-[var(--primary)]">Full-time / Internship</span>
                </div>
                <div className="flex justify-between">
                  <span>Interview Availability:</span>
                  <span className="text-[var(--primary)]">Flexible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
