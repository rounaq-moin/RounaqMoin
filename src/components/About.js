import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Database, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: GraduationCap,
      label: 'EDUCATION',
      value: 'B.Tech CSE',
      subtext: 'SRMIST, Chennai - 3rd Year'
    },
    {
      icon: Code,
      label: 'CGPA',
      value: '9.28',
      subtext: 'Current Academic Performance'
    },
    {
      icon: Database,
      label: 'EXPERIENCE',
      value: 'Full-Stack',
      subtext: 'Web Development'
    },
    {
      icon: Globe,
      label: 'PROJECTS',
      value: '10+',
      subtext: 'Completed Projects'
    }
  ];

  const personalStats = [
    {
      icon: Code,
      label: 'AGE',
      value: '20',
      subtext: 'Born: 08/12/2004'
    },
    {
      icon: Database,
      label: 'LANGUAGES',
      value: '4',
      subtext: 'English, Hindi, Urdu, Telugu'
    },
    {
      icon: Globe,
      label: 'LOCATION',
      value: 'Anantapur, AP',
      subtext: 'Andhra Pradesh, India'
    },
    {
      icon: GraduationCap,
      label: 'NATIONALITY',
      value: 'Indian',
      subtext: 'From India'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-header font-mono">
            [ABOUT_ME.txt]
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="cyber-card space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-green-400 font-mono mb-4">
                {/* Full-Stack Developer & CSE Student */}
              </h3>
              
                             <div className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed">
                 <p>
                   {/* I&apos;m a passionate 3rd-year Computer Science student at SRMIST with a strong academic record 
                   (CGPA: 9.28) and a deep interest in full-stack web development. My journey in technology 
                   began with curiosity and has evolved into a commitment to creating innovative digital solutions. */}
                   I&apos;m a passionate 3rd-year Computer Science student at SRMIST, Chennai with a strong academic record 
                   (CGPA: 9.28) and a deep interest in full-stack web development. My journey in technology 
                   began with curiosity and has evolved into a commitment to creating innovative digital solutions.
                 </p>
                 
                 <p>
                   {/* I specialize in modern web technologies including React.js for frontend development, 
                   Spring Boot for robust backend systems, and MongoDB/MySQL for database management. 
                   My approach combines technical expertise with creative problem-solving to deliver 
                   user-centric applications. */}
                   I specialize in modern web technologies including React.js for frontend development, 
                   Spring Boot for robust backend systems, and MongoDB/MySQL for database management. 
                   My approach combines technical expertise with creative problem-solving to deliver 
                   user-centric applications.
                 </p>
                 
                 <p>
                   {/* Beyond coding, I&apos;m constantly learning and exploring new technologies to stay ahead 
                   in this rapidly evolving field. I believe in writing clean, maintainable code and 
                   creating experiences that make a difference. */}
                   Beyond coding, I&apos;m constantly learning and exploring new technologies to stay ahead 
                   in this rapidly evolving field. I believe in writing clean, maintainable code and 
                   creating experiences that make a difference.
                 </p>
                 
                 <p>
                   {/* Personal Background: I&apos;m Rounaq Moin Y S, a 20-year-old from Anantapur, Andhra Pradesh. 
                   I&apos;m fluent in English, Hindi, Urdu, and Telugu. My interests include coding, exploring new technologies, 
                   writing fantasy stories, and learning Japanese development. */}
                   Personal Background: I&apos;m Rounaq Moin Y S, a 20-year-old from Anantapur, Andhra Pradesh. 
                   I&apos;m fluent in English, Hindi, Urdu, and Telugu. My interests include coding, exploring new technologies, 
                   writing fantasy stories, and learning Japanese development.
                 </p>
               </div>
            </div>
          </motion.div>

                     {/* Right Column - Stats Cards */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="space-y-6"
           >
             <div className="grid grid-cols-2 gap-6">
               {stats.map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, y: 30 }}
                   animate={inView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                   className="cyber-card text-center cyber-hover"
                 >
                   <div className="flex justify-center mb-4">
                     <stat.icon className="w-8 h-8 text-green-400" />
                   </div>
                   <div className="text-yellow-400 font-mono text-lg font-bold mb-2">
                     {stat.value}
                   </div>
                   <div className="text-green-400 font-mono text-xs mb-1">
                     {stat.label}
                   </div>
                   <div className="text-gray-400 font-mono text-xs">
                     {stat.subtext}
                   </div>
                 </motion.div>
               ))}
             </div>
             
             <div className="grid grid-cols-2 gap-6">
               {personalStats.map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, y: 30 }}
                   animate={inView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                   className="cyber-card text-center cyber-hover border-cyan-400/30"
                 >
                   <div className="flex justify-center mb-4">
                     <stat.icon className="w-8 h-8 text-cyan-400" />
                   </div>
                   <div className="text-yellow-400 font-mono text-lg font-bold mb-2">
                     {stat.value}
                   </div>
                   <div className="text-cyan-400 font-mono text-xs mb-1">
                     {stat.label}
                   </div>
                   <div className="text-gray-400 font-mono text-xs">
                     {stat.subtext}
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
        </div>

                 {/* Additional Info Section */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="mt-16"
         >
           <div className="cyber-card">
             <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
               {/* Technical Specifications */}
             </h3>
             <div className="grid md:grid-cols-3 gap-6 text-sm font-mono">
               <div>
                 <h4 className="text-cyan-400 mb-3">Frontend Stack:</h4>
                 <ul className="text-gray-300 space-y-1">
                   <li>• React.js & Next.js</li>
                   <li>• TypeScript</li>
                   <li>• Tailwind CSS</li>
                   <li>• Framer Motion</li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-cyan-400 mb-3">Backend Stack:</h4>
                 <ul className="text-gray-300 space-y-1">
                   <li>• Spring Boot</li>
                   <li>• Java</li>
                   <li>• REST APIs</li>
                   <li>• Microservices</li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-cyan-400 mb-3">Database & Tools:</h4>
                 <ul className="text-gray-300 space-y-1">
                   <li>• MongoDB</li>
                   <li>• MySQL</li>
                   <li>• Git & GitHub</li>
                   <li>• Docker</li>
                 </ul>
               </div>
             </div>
           </div>
         </motion.div>

         {/* Personal Details Section */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 1.0 }}
           className="mt-8"
         >
           <div className="cyber-card">
             <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
               {/* Personal Details & Education */}
             </h3>
             <div className="grid md:grid-cols-2 gap-8 text-sm font-mono">
               <div>
                 <h4 className="text-cyan-400 mb-3">Personal Information:</h4>
                 <ul className="text-gray-300 space-y-2">
                   <li><span className="text-yellow-400">Name:</span> Rounaq Moin Y S</li>
                   <li><span className="text-yellow-400">Age:</span> 20 years</li>
                   <li><span className="text-yellow-400">Date of Birth:</span> 08/12/2004</li>
                   <li><span className="text-yellow-400">Nationality:</span> Indian</li>
                   <li><span className="text-yellow-400">Location:</span> Anantapur, Andhra Pradesh</li>
                   <li><span className="text-yellow-400">Address:</span> 19/1/568-A, Gooty Road, Anantapur, AP - 515001</li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-cyan-400 mb-3">Education History:</h4>
                 <ul className="text-gray-300 space-y-2">
                   <li><span className="text-yellow-400">Current:</span> B.Tech CSE - SRMIST, Chennai (3rd Year)</li>
                   <li><span className="text-yellow-400">PUC:</span> Krupanidhi PU College, Bangalore (460/500)</li>
                   <li><span className="text-yellow-400">10th Grade:</span> Montessori Indus School, Kurnool (425/500)</li>
                   <li><span className="text-yellow-400">Languages:</span> English, Hindi, Urdu, Telugu</li>
                 </ul>
               </div>
             </div>
           </div>
         </motion.div>

         {/* Interests & Skills Section */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 1.2 }}
           className="mt-8"
         >
           <div className="cyber-card">
             <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
               {/* Interests & Technical Focus */}
             </h3>
             <div className="grid md:grid-cols-2 gap-8 text-sm font-mono">
               <div>
                 <h4 className="text-cyan-400 mb-3">Interests & Hobbies:</h4>
                 <ul className="text-gray-300 space-y-2">
                   <li>• Coding and problem solving</li>
                   <li>• Exploring new technologies and tools</li>
                   <li>• Writing fantasy stories</li>
                   <li>• Japanese development (learning)</li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-cyan-400 mb-3">Technical Focus Areas:</h4>
                 <ul className="text-gray-300 space-y-2">
                   <li>• Frontend expertise (React.js, Next.js)</li>
                   <li>• Database Management (MySQL, MongoDB)</li>
                   <li>• Full-Stack Development</li>
                   <li>• DAA & DSA problem solving</li>
                   <li>• Basics of C, C++ programming</li>
                 </ul>
               </div>
             </div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default About; 