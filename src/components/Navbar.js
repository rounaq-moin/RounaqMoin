import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Find the section in view
      const sections = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT', id: 'about' },
        { name: 'SKILLS', id: 'skills' },
        { name: 'PROJECTS', id: 'projects' },
        { name: 'ACHIEVEMENTS', id: 'achievements' },
        { name: 'CONTACT', id: 'contact' },
      ];
      let found = 'HOME';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = sections[i].name;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // For /particle route, highlight nothing
    if (window.location.pathname === '/particle') {
      setActiveSection('');
    }
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled 
          ? 'bg-black/90 border-b-2 border-green-400 shadow-lg shadow-green-400/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-green-400 cursor-pointer nav-bracket"
            onClick={() => scrollToSection('#home')}
          >
            [ROUNAQ_MOIN]
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-green-400 hover:text-cyan-400 transition-all duration-300 font-mono text-sm group"
                onClick={() => scrollToSection(item.href)}
              >
                {activeSection === item.name ? (
                  <span className="nav-bracket">[{item.name}]</span>
                ) : (
                  <>
                    <span className="nav-bracket group-hover:hidden">{item.name}</span>
                    <span className="nav-bracket hidden group-hover:inline">[{item.name}]</span>
                  </>
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-cyan-400 transition-colors font-mono"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 border-2 border-green-400 rounded-lg mt-2 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  className="text-green-400 hover:text-cyan-400 text-left font-mono text-sm transition-all duration-300 group"
                  onClick={() => scrollToSection(item.href)}
                >
                  {activeSection === item.name ? (
                    <span className="nav-bracket">[{item.name}]</span>
                  ) : (
                    <>
                      <span className="nav-bracket group-hover:hidden">{item.name}</span>
                      <span className="nav-bracket hidden group-hover:inline">[{item.name}]</span>
                    </>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 