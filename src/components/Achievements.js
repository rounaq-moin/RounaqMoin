import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap, Star } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Academic Excellence',
      subtitle: 'SRMIST - B.Tech CSE',
      description: 'Maintaining a strong academic record with a CGPA of 9.28 in the 3rd year of Computer Science Engineering.',
      icon: GraduationCap,
      status: 'ACTIVE',
      details: [
        '3rd Year B.Tech Computer Science Engineering',
        'Current CGPA: 9.28',
        'Consistent academic performance',
        'Active participation in technical events'
      ]
    },
    {
      title: 'Full-Stack Development',
      subtitle: 'Professional Experience',
      description: 'Comprehensive experience across the entire web development stack with modern technologies and best practices.',
      icon: Award,
      status: 'VERIFIED',
      details: [
        'Frontend: React.js, HTML5, CSS3, Tailwind CSS',
        'Backend: Java, Spring Boot, REST APIs',
        'Databases: MongoDB, MySQL, PostgreSQL',
        'Tools: Git, NPM, Postman, Maven'
      ]
    },
    {
      title: 'AWS Academy Certificate',
      subtitle: 'Cloud Computing',
      description: 'Certified in AWS cloud services and infrastructure management through AWS Academy program.',
      icon: Award,
      status: 'CERTIFIED',
      details: [
        'AWS Cloud Fundamentals',
        'Infrastructure as a Service (IaaS)',
        'Cloud Security Best Practices',
        'Scalable Architecture Design'
      ]
    },
    {
      title: 'Hewlett Packard Enterprise',
      subtitle: 'Enterprise Solutions',
      description: 'Certified in HPE enterprise technologies and solutions for business infrastructure.',
      icon: Star,
      status: 'CERTIFIED',
      details: [
        'Enterprise Infrastructure',
        'Business Solutions',
        'Technology Integration',
        'Professional Development'
      ]
    },
    {
      title: 'First Prize - Solar Tracking System',
      subtitle: 'Innovation Award',
      description: 'Developed and presented a working model of a Solar Tracking System, showcasing innovation and technical expertise in renewable energy technology.',
      icon: Award,
      status: 'COMPLETED',
      details: [
        'Working model development',
        'Renewable energy technology',
        'Innovation showcase',
        'Technical expertise demonstration'
      ]
    },
    {
      title: 'IEEE Computer Society Ideathon Winner',
      subtitle: 'Competition Award',
      description: 'Secured first place in an Ideathon conducted by the IEEE Computer Society, demonstrating creative problem-solving and exceptional teamwork skills.',
      icon: Star,
      status: 'COMPLETED',
      details: [
        'Creative problem-solving',
        'Teamwork skills',
        'IEEE competition winner',
        'Technical innovation'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'VERIFIED': return 'text-cyan-400';
      case 'CERTIFIED': return 'text-yellow-400';
      default: return 'text-green-400';
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-header font-mono">
            [ACHIEVEMENTS_DATABASE]
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="cyber-card cyber-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <achievement.icon className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-xl font-bold text-green-400 font-mono mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>
                <div className={`text-sm font-mono ${getStatusColor(achievement.status)}`}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      achievement.status === 'ACTIVE' ? 'bg-green-400' :
                      achievement.status === 'VERIFIED' ? 'bg-cyan-400' :
                      'bg-yellow-400'
                    }`}></div>
                    <span>{achievement.status}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <div className="text-cyan-400 font-mono text-sm mb-2">DESCRIPTION:</div>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Details */}
              <div>
                <div className="text-cyan-400 font-mono text-sm mb-3">DETAILS:</div>
                <ul className="text-gray-300 font-mono text-sm space-y-2">
                  {achievement.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 cyber-card"
        >
          <h3 className="text-xl font-semibold text-green-400 font-mono mb-6">
            {/* Achievement Summary */}
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm font-mono">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">9.28</div>
              <div className="text-cyan-400">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">4</div>
              <div className="text-cyan-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">3rd</div>
              <div className="text-cyan-400">Year CSE</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-cyan-400">Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 