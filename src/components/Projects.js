import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Database, Code, Globe } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Biz Hive',
      type: 'Full-stack SaaS Website',
      status: 'DEPLOYED',
      lines: '15,000+',
      description: 'A comprehensive business management platform with user authentication, dashboard analytics, and real-time data management. Features include user roles, payment integration, and responsive design.',
      tech: ['ReactJS', 'Java', 'HTML', 'TailwindCSS', 'MongoDB'],
      features: [
        'User Authentication & Authorization',
        'Dashboard Analytics',
        'Payment Integration',
        'Real-time Data Management',
        'Responsive Design'
      ],
      demoLink: 'https://biz-hive.vercel.app',
      githubLink: 'https://github.com/rounaq7/bizhive',
      icon: Globe,
      statusColor: 'green'
    },
    {
      title: 'Scoreazy',
      type: 'Frontend UI for Internship Task',
      status: 'DEPLOYED',
      lines: '8,500+',
      description: 'A modern score tracking and analytics interface designed for educational institutions. Features intuitive data visualization, student performance tracking, and interactive charts.',
      tech: ['ReactJS', 'HTML', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'Interactive Data Visualization',
        'Student Performance Tracking',
        'Responsive UI Design',
        'Chart Integration',
        'Modern Interface'
      ],
      demoLink: 'https://scoreasy.onrender.com',
      githubLink: 'https://github.com/rounaq7/scoreasy',
      icon: Code,
      statusColor: 'blue'
    },
    {
      title: 'WedNest',
      type: 'Wedding Planning Platform',
      status: 'COMPLETED',
      lines: '12,000+',
      description: 'A comprehensive wedding planning and management platform with vendor management, guest list tracking, budget planning, and event scheduling features.',
      tech: ['ReactJS', 'Java', 'Spring Boot', 'MySQL', 'CSS', 'HTML'],
      features: [
        'Vendor Management System',
        'Guest List Tracking',
        'Budget Planning Tools',
        'Event Scheduling',
        'Responsive Design'
      ],
      demoLink: '#',
      githubLink: 'https://github.com/rounaq7/wed-nest',
      icon: Globe,
      statusColor: 'purple'
    },
    {
      title: 'NutriScan',
      type: 'Health & Nutrition App',
      status: 'COMPLETED',
      lines: '10,000+',
      description: 'A mobile-first nutrition tracking application that helps users monitor their dietary intake, scan food items, and maintain healthy eating habits.',
      tech: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'Node.js', 'MongoDB'],
      features: [
        'Food Item Scanning',
        'Nutritional Analysis',
        'Diet Tracking',
        'Health Recommendations',
        'Progress Monitoring'
      ],
      demoLink: '#',
      githubLink: '#',
      icon: Code,
      statusColor: 'green'
    },
    {
      title: 'Student Management System',
      type: 'Complete Full-stack Platform',
      status: 'IN_DEVELOPMENT',
      lines: '25,000+',
      description: 'A comprehensive student management solution with complete CRUD operations, analytics dashboard, GPA reports, and advanced search functionality. Built with modern architecture patterns.',
      tech: ['ReactJS', 'HTML', 'CSS', 'Java', 'Maven', 'Spring Boot', 'MySQL/PostgreSQL'],
      features: [
        'Add/Edit/Delete Students',
        'Advanced Search & Filtering',
        'Analytics Dashboard',
        'GPA Reports & Analytics',
        'Database Management'
      ],
      demoLink: '#',
      githubLink: '#',
      icon: Database,
      statusColor: 'purple'
    },
    {
      title: 'Car Rental Management System',
      type: 'Full-stack Web Application',
      status: 'COMPLETED',
      lines: '20,000+',
      description: 'Developed a comprehensive web application to simplify car rental operations, featuring user authentication, real-time car availability tracking, secure payment processing, and an advanced admin dashboard for managing inventory, rentals, and customer data.',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'Azure', 'REST APIs', 'Tailwind CSS'],
      features: [
        'User Authentication & Authorization',
        'Real-time Car Availability Tracking',
        'Secure Payment Integration',
        'Advanced Admin Dashboard',
        'Inventory Management System',
        'Customer Data Management',
        'Containerized Deployment'
      ],
      demoLink: '#',
      githubLink: '#',
      icon: Globe,
      statusColor: 'green'
    },
    {
      title: 'Smart Traffic Control System',
      type: 'Route Optimization Platform',
      status: 'COMPLETED',
      lines: '15,000+',
      description: 'Developed an intelligent traffic control system that analyzes start and end points to find optimal routes using real-time traffic data and various DSA algorithms. Features advanced route optimization and traffic pattern analysis.',
      tech: ['Python', 'Next.js', 'REST APIs', 'DSA Algorithms', 'Tailwind CSS'],
      features: [
        'Real-time Route Analysis',
        'DSA Algorithm Implementation',
        'Traffic Pattern Recognition',
        'Optimal Route Calculation',
        'Interactive Map Interface',
        'Performance Optimization'
      ],
      demoLink: '#',
      githubLink: '#',
      icon: Code,
      statusColor: 'blue'
    }
  ];

  const getStatusColor = (color) => {
    switch (color) {
      case 'green': return 'text-green-400';
      case 'blue': return 'text-cyan-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-green-400';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-header font-mono">
            [PROJECTS_DIRECTORY]
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="cyber-card cyber-hover">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <project.icon className="w-8 h-8 text-green-400" />
                      <h3 className="text-2xl font-bold text-green-400 font-mono">
                        {project.title}
                      </h3>
                    </div>
                    <div className={`text-sm font-mono ${getStatusColor(project.statusColor)}`}>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          project.statusColor === 'green' ? 'bg-green-400' :
                          project.statusColor === 'blue' ? 'bg-cyan-400' :
                          'bg-purple-400'
                        }`}></div>
                        <span>{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Metadata */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm font-mono">
                    <div>
                      <span className="text-cyan-400">TYPE:</span>
                      <div className="text-gray-300">{project.type}</div>
                    </div>
                    <div>
                      <span className="text-cyan-400">LINES:</span>
                      <div className="text-gray-300">{project.lines}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <div className="text-cyan-400 font-mono text-sm mb-2">DESCRIPTION:</div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-cyan-400 font-mono text-sm mb-3">TECH_STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-cyan-400 font-mono text-sm mb-3">FEATURES:</div>
                    <ul className="text-gray-300 font-mono text-sm space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                                     {/* Action Buttons */}
                   <div className="flex space-x-4">
                     {project.demoLink !== '#' && (
                       <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="terminal-btn text-sm"
                         onClick={() => window.open(project.demoLink, '_blank')}
                       >
                         [LAUNCH_APP]
                       </motion.button>
                     )}
                     {project.githubLink !== '#' && (
                       <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="terminal-btn text-sm"
                         onClick={() => window.open(project.githubLink, '_blank')}
                       >
                         [VIEW_SOURCE]
                       </motion.button>
                     )}
                     {project.demoLink === '#' && project.githubLink === '#' && (
                       <div className="text-cyan-400 font-mono text-sm">
                         {project.status === 'IN_DEVELOPMENT' ? 'IN_DEVELOPMENT' : 'COMPLETED'}
                       </div>
                     )}
                   </div>
                </div>
              </div>

              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="cyber-card p-8 text-center"
                >
                  <div className="mb-6">
                    <project.icon className="w-16 h-16 mx-auto text-green-400 mb-4" />
                    <h4 className="text-xl font-bold text-green-400 font-mono mb-2">
                      {project.title}
                    </h4>
                    <div className="text-gray-400 font-mono text-sm">
                      {project.type}
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-cyan-400">Status:</span>
                      <span className={getStatusColor(project.statusColor)}>{project.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-400">Lines:</span>
                      <span className="text-gray-300">{project.lines}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-400">Tech:</span>
                      <span className="text-gray-300">{project.tech.length} items</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 