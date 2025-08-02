import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiJavascript, 
  SiSpringboot, 
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiNpm,
  SiPostman,
  SiAmazonaws,
  SiTensorflow,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiWordpress,
  SiPhp,
  SiCplusplus,
  SiC,
  SiNextdotjs
} from 'react-icons/si';
import { SiOpenjdk } from 'react-icons/si';
import { FaBrain, FaMicrochip, FaCode, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    {
      name: 'React.js',
      icon: SiReact,
      proficiency: 90,
      description: 'Building dynamic and responsive user interfaces with modern React hooks and functional components.',
      experience: 'Advanced component architecture, state management, and performance optimization.'
    },
    {
      name: 'Spring Boot',
      icon: SiSpringboot,
      proficiency: 85,
      description: 'Developing robust RESTful APIs and microservices with Spring Boot framework.',
      experience: 'REST APIs, JPA/Hibernate, Spring Security, and microservices architecture.'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      proficiency: 80,
      description: 'Full-stack React framework for production-ready applications.',
      experience: 'Server-side rendering, API routes, and optimized performance.'
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      proficiency: 85,
      description: 'Managing relational databases with SQL for structured data operations.',
      experience: 'Database design, complex queries, stored procedures, and performance tuning.'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      proficiency: 90,
      description: 'Core programming language for web development and dynamic functionality.',
      experience: 'ES6+ features, async programming, DOM manipulation, and modern JS patterns.'
    },
    {
      name: 'Java',
      icon: SiOpenjdk,
      proficiency: 80,
      description: 'Object-oriented programming for backend development and enterprise applications.',
      experience: 'Core Java, collections framework, multithreading, and design patterns.'
    },
    {
      name: 'HTML5',
      icon: SiHtml5,
      proficiency: 95,
      description: 'Semantic markup and structure for modern web applications.',
      experience: 'Semantic HTML, accessibility standards, and responsive design principles.'
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      proficiency: 85,
      description: 'Styling and layout design for beautiful user interfaces.',
      experience: 'Flexbox, Grid, animations, and responsive design techniques.'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      proficiency: 90,
      description: 'Utility-first CSS framework for rapid UI development.',
      experience: 'Custom configurations, responsive design, and component styling.'
    },
    {
      name: 'Docker',
      icon: SiDocker,
      proficiency: 75,
      description: 'Containerization platform for consistent deployment and scaling.',
      experience: 'Container orchestration, Docker Compose, and microservices deployment.'
    },
    {
      name: 'Kubernetes',
      icon: SiKubernetes,
      proficiency: 70,
      description: 'Container orchestration platform for automated deployment and scaling.',
      experience: 'Pod management, service discovery, and cluster administration.'
    },
    {
      name: 'Git',
      icon: SiGit,
      proficiency: 85,
      description: 'Version control and collaborative development workflows.',
      experience: 'Branch management, code reviews, and CI/CD integration.'
    },
    {
      name: 'NPM',
      icon: SiNpm,
      proficiency: 80,
      description: 'Package management and dependency handling for Node.js projects.',
      experience: 'Package publishing, script automation, and dependency optimization.'
    },
    {
      name: 'Postman',
      icon: SiPostman,
      proficiency: 85,
      description: 'API testing and development platform for backend services.',
      experience: 'API documentation, automated testing, and team collaboration.'
    }
  ];

  const learningSkills = [
    {
      name: 'Responsive AI',
      icon: FaBrain,
      proficiency: 70,
      description: 'Learning AI/ML concepts and responsive AI systems for modern applications.',
      experience: 'Neural networks, machine learning algorithms, and AI integration patterns.'
    },
    {
      name: 'Nanocomputing',
      icon: FaMicrochip,
      proficiency: 65,
      description: 'Exploring quantum computing and nanotechnology principles.',
      experience: 'Quantum algorithms, nanoscale computing, and emerging computing paradigms.'
    },
    {
      name: 'DAA & DSA',
      icon: FaCode,
      proficiency: 80,
      description: 'Data Structures and Algorithms for efficient problem-solving.',
      experience: 'Advanced algorithms, data structures, time complexity analysis, and optimization techniques.'
    },
    {
      name: 'AWS Cloud',
      icon: SiAmazonaws,
      proficiency: 75,
      description: 'Amazon Web Services for cloud infrastructure and deployment.',
      experience: 'EC2, S3, Lambda, CloudFormation, and serverless architecture patterns.'
    },
    {
      name: 'Python',
      icon: SiPython,
      proficiency: 70,
      description: 'Python programming for AI/ML and automation tasks.',
      experience: 'Data analysis, automation scripts, and machine learning libraries.'
    },
    {
      name: 'TensorFlow',
      icon: SiTensorflow,
      proficiency: 60,
      description: 'Deep learning framework for AI and machine learning projects.',
      experience: 'Neural networks, model training, and AI application development.'
    },
    {
      name: 'WordPress',
      icon: SiWordpress,
      proficiency: 65,
      description: 'Content Management System for website development and customization.',
      experience: 'Theme development, plugin customization, and WordPress deployment.'
    },
    {
      name: 'PHP',
      icon: SiPhp,
      proficiency: 70,
      description: 'Server-side scripting language for web development and WordPress.',
      experience: 'Dynamic website creation, database integration, and CMS development.'
    },
    {
      name: 'C++',
      icon: SiCplusplus,
      proficiency: 75,
      description: 'Object-oriented programming for system-level development.',
      experience: 'Data structures, algorithms, and performance-critical applications.'
    },
    {
      name: 'C Programming',
      icon: SiC,
      proficiency: 70,
      description: 'Procedural programming language for system and embedded development.',
      experience: 'Memory management, pointer manipulation, and low-level programming.'
    },
    {
      name: 'Azure',
      icon: FaCloud,
      proficiency: 65,
      description: 'Microsoft Azure cloud platform for application deployment.',
      experience: 'Cloud services, virtual machines, and Azure DevOps integration.'
    }
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView, skills.length]);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-header font-mono">
            [SKILLS_MATRIX.json]
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card cyber-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                  <h3 className="text-green-400 font-mono font-semibold">{skill.name}</h3>
                </div>
                <div className="text-yellow-400 font-mono text-sm">
                  {skill.proficiency}%
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-cyan-400 font-mono text-xs mb-2">PROFICIENCY:</div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </div>
              
              <div className="text-gray-300 font-mono text-xs leading-relaxed">
                <div className="text-cyan-400 mb-1">// {skill.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning & Emerging Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-green-400 font-mono mb-8 text-center">
            [LEARNING_MATRIX.json]
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                className="cyber-card cyber-hover border-cyan-400/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-cyan-400 font-mono font-semibold">{skill.name}</h3>
                  </div>
                  <div className="text-yellow-400 font-mono text-sm">
                    {skill.proficiency}%
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-cyan-400 font-mono text-xs mb-2">LEARNING_PROGRESS:</div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill bg-cyan-400"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 1.0 }}
                    />
                  </div>
                </div>
                
                <div className="text-gray-300 font-mono text-xs leading-relaxed">
                  <div className="text-cyan-400 mb-1">// {skill.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Skill Detail */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="cyber-card"
        >
          <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
            // Current Focus: {skills[currentSkill]?.name}
          </h3>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSkill}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h4 className="text-cyan-400 font-mono mb-3">DESCRIPTION:</h4>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  {skills[currentSkill]?.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-cyan-400 font-mono mb-3">EXPERIENCE:</h4>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  {skills[currentSkill]?.experience}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 cyber-card"
        >
          <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
            // Skills Summary
          </h3>
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-mono">
             <div>
               <h4 className="text-cyan-400 mb-3">Frontend Technologies:</h4>
               <div className="text-gray-300 space-y-1">
                 <div>• React.js (90%)</div>
                 <div>• Next.js (80%)</div>
                 <div>• JavaScript (90%)</div>
                 <div>• HTML5 (95%)</div>
                 <div>• CSS3 (85%)</div>
                 <div>• Tailwind CSS (90%)</div>
               </div>
             </div>
             <div>
               <h4 className="text-cyan-400 mb-3">Backend & DevOps:</h4>
               <div className="text-gray-300 space-y-1">
                 <div>• Spring Boot (85%)</div>
                 <div>• Java (80%)</div>
                 <div>• Docker (75%)</div>
                 <div>• Kubernetes (70%)</div>
                 <div>• REST APIs (85%)</div>
                 <div>• Git (85%)</div>
               </div>
             </div>
             <div>
               <h4 className="text-cyan-400 mb-3">Database & Tools:</h4>
               <div className="text-gray-300 space-y-1">
                 <div>• MySQL (85%)</div>
                 <div>• NPM (80%)</div>
                 <div>• Postman (85%)</div>
                 <div>• WordPress (65%)</div>
                 <div>• PHP (70%)</div>
               </div>
             </div>
             <div>
               <h4 className="text-cyan-400 mb-3">Learning & Emerging:</h4>
               <div className="text-gray-300 space-y-1">
                 <div>• Responsive AI (70%)</div>
                 <div>• Nanocomputing (65%)</div>
                 <div>• DAA & DSA (80%)</div>
                 <div>• AWS Cloud (75%)</div>
                 <div>• Python (70%)</div>
                 <div>• C++ (75%)</div>
                 <div>• C Programming (70%)</div>
                 <div>• Azure (65%)</div>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 