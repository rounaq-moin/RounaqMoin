import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL_PROTOCOL',
      value: 'rounaqmoin7@gmail.com',
      link: 'mailto:rounaqmoin7@gmail.com',
      status: 'ONLINE'
    },
    {
      icon: Linkedin,
      title: 'LINKEDIN_NETWORK',
      value: 'linkedin.com/in/rounaq-moin-7375251a5',
      link: 'https://www.linkedin.com/in/rounaq-moin-7375251a5/',
      status: 'CONNECTED'
    },
    {
      icon: Github,
      title: 'GITHUB_REPOSITORY',
      value: 'github.com/rounaq-moin',
      link: 'https://github.com/rounaq-moin',
      status: 'ACTIVE'
    },
    {
      icon: MessageCircle,
      title: 'PHONE_NUMBER',
      value: '+91 7995249067',
      link: 'tel:+917995249067',
      status: 'ACTIVE'
    },
    {
      icon: MessageCircle,
      title: 'AVAILABILITY_STATUS',
      value: 'Student - Available for opportunities',
      link: '#',
      status: 'READY'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Show default message indicating email functionality isn't active yet
      alert(`📧 EMAIL_FUNCTIONALITY_NOT_ACTIVE

The contact form functionality is currently under development.

Please send your message directly to: rounaqmoin7@gmail.com

Thank you for your interest in connecting with me!`);
    }, 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ONLINE': return 'text-green-400';
      case 'CONNECTED': return 'text-cyan-400';
      case 'ACTIVE': return 'text-purple-400';
      case 'READY': return 'text-yellow-400';
      default: return 'text-green-400';
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-header font-mono">
            [CONTACT_PROTOCOLS]
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cyber-card">
              <h3 className="text-2xl font-semibold text-green-400 font-mono mb-8">
                {/* Connection Protocols */}
              </h3>
              
                             <p className="text-gray-300 font-mono text-sm mb-8 leading-relaxed">
                 I'm always interested in new opportunities, collaborations, and interesting projects. 
                 Whether you have a question, want to discuss a potential project, or just want to say hello, 
                 feel free to reach out through any of the available protocols below.
                 
                 <span className="text-cyan-400 block mt-2">
                   Note: The contact form will open your email client with a pre-filled message.
                 </span>
               </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="cyber-card cyber-hover block"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <contact.icon className="w-6 h-6 text-green-400" />
                        <div>
                          <div className="text-green-400 font-mono text-sm font-semibold">
                            {contact.title}
                          </div>
                          <div className="text-gray-300 font-mono text-sm">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                      <div className={`text-sm font-mono ${getStatusColor(contact.status)}`}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            contact.status === 'ONLINE' ? 'bg-green-400' :
                            contact.status === 'CONNECTED' ? 'bg-cyan-400' :
                            contact.status === 'ACTIVE' ? 'bg-purple-400' :
                            'bg-yellow-400'
                          }`}></div>
                          <span>{contact.status}</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="cyber-card">
              <h3 className="text-2xl font-semibold text-green-400 font-mono mb-8">
                {/* Message Interface */}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    NAME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-green-400 text-gray-300 font-mono rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-green-400 text-gray-300 font-mono rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    SUBJECT:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-green-400 text-gray-300 font-mono rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter subject..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border-2 border-green-400 text-gray-300 font-mono rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Enter your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="terminal-btn w-full font-mono text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="status-loading">SENDING...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      [SEND_MESSAGE]
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* System Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 cyber-card text-center"
        >
          <div className="text-green-400 font-mono text-sm mb-4">
            {/* System Status: All protocols operational */}
          </div>
          <div className="text-gray-300 font-mono text-sm">
            Ready to establish connection and collaborate on innovative projects.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 