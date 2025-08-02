import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [glitchText, setGlitchText] = useState('ROUNAQ_MOIN');
  const [userInput, setUserInput] = useState('');
  const [isInteractive, setIsInteractive] = useState(false);
  const [inputHistory, setInputHistory] = useState([]);
  const terminalRef = useRef(null);

  const commands = useMemo(() => [
    { cmd: '$ whoami', output: '> rounaq_moin' },
    { cmd: '$ cat skills.txt', output: '> React.js, Spring Boot, MongoDB, MySQL...' },
    { cmd: '$ ls projects/', output: '> biz_hive/ scoreazy/ student_mgmt/' },
    { cmd: '$ echo "Ready to code!"', output: '> Ready to code!' }
  ], []);

  const easterEggs = useMemo(() => ({
    'help': [
      'Welcome to Rounaq\'s Interactive Terminal! 🚀',
      '',
      'How to use:',
      '  • Click on the terminal window to focus it',
      '  • Type commands and press Enter to execute',
      '  • Use "clear" to reset the terminal',
      '  • Use "exit" to close interactive mode',
      '',
      'Available commands:',
      '  help     - Show this help message',
      '  portfolio - View portfolio details',
      '  skills   - Show technical skills',
      '  contact  - Get contact information',
      '  ls       - List files and directories',
      '  pwd      - Show current directory',
      '  clear    - Clear terminal screen',
      '  exit     - Close interactive mode',
      '',
      '💡 Tip: Try typing "portfolio" to learn more about me!'
    ],
    'portfolio': [
      'Portfolio Details:',
      '  Name: Rounaq Moin',
      '  Role: Full-Stack Developer',
      '  Experience: 3+ years',
      '  Specialties: React, Spring Boot, Cloud',
      '  Status: Available for opportunities'
    ],
    'skills': [
      'Technical Skills:',
      '  Frontend: React.js, Vue.js, TypeScript',
      '  Backend: Spring Boot, Node.js, Python',
      '  Database: MongoDB, MySQL, PostgreSQL',
      '  Cloud: AWS, Docker, Kubernetes',
      '  Tools: Git, Jenkins, Jira'
    ],
    'contact': [
      'Contact Information:',
      '  Email: rounaq@example.com',
      '  LinkedIn: linkedin.com/in/rounaq',
      '  GitHub: github.com/rounaq',
      '  Location: Remote / On-site',
      '  Available: Immediately'
    ],
    'ls': [
      'Directory listing:',
      '  projects/     - Project files',
      '  skills.txt    - Skills information',
      '  portfolio.md  - Portfolio details',
      '  contact.txt   - Contact information'
    ],
    'pwd': '> /home/rounaq/portfolio',
    'clear': 'clear',
    'exit': 'exit'
  }), []);

  // Scroll to bottom of terminal
  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  // Accumulate all previous commands, only type the last one
  useEffect(() => {
    let isMounted = true;
    let lines = [];
    let i = 0;
    
    function typeNextCommand() {
      if (i < commands.length - 1) {
        lines.push(commands[i].cmd);
        lines.push(commands[i].output);
        setTerminalLines([...lines]);
        i++;
        setTimeout(() => {
          typeNextCommand();
          scrollToBottom();
        }, 400);
      } else {
        // Type out the last command
        let charIndex = 0;
        const lastCmd = commands[i].cmd + '\n' + commands[i].output;
        function typeChar() {
          if (!isMounted) return;
          if (charIndex <= lastCmd.length) {
            setTypedText(lastCmd.slice(0, charIndex));
            charIndex++;
            setTimeout(() => {
              typeChar();
              scrollToBottom();
            }, 40);
          } else {
            // Enable interactive mode after last command
            setTimeout(() => {
              setIsInteractive(true);
              setTerminalLines([...lines, commands[i].cmd, commands[i].output]);
              setTypedText('');
              scrollToBottom();
            }, 1000);
          }
        }
        setTerminalLines([...lines]);
        typeChar();
      }
    }
    typeNextCommand();
    return () => { isMounted = false; };
  }, [commands]);

  // Handle user input
  useEffect(() => {
    if (!isInteractive) return;

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        const command = userInput.trim().toLowerCase();
        setInputHistory(prev => [...prev, `$ ${userInput}`]);
        
        if (easterEggs[command]) {
          if (command === 'clear') {
            setTerminalLines([]);
            setInputHistory([]);
            setUserInput('');
            return;
          }
          if (command === 'exit') {
            setIsInteractive(false);
            setUserInput('');
            return;
          }
          
          const response = easterEggs[command];
          if (Array.isArray(response)) {
            setTerminalLines(prev => [...prev, `$ ${userInput}`, ...response]);
          } else {
            setTerminalLines(prev => [...prev, `$ ${userInput}`, `> ${response}`]);
          }
        } else if (command) {
          setTerminalLines(prev => [...prev, `$ ${userInput}`, `> Command not found: ${userInput}`]);
        }
        setUserInput('');
        setTimeout(scrollToBottom, 100);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [userInput, isInteractive]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const symbols = '!@#$%^&*';
      const randomSymbols = Array.from({ length: glitchText.length }, () => 
        symbols[Math.floor(Math.random() * symbols.length)]
      ).join('');
      setGlitchText(randomSymbols);
      setTimeout(() => {
        setGlitchText('ROUNAQ_MOIN');
      }, 100);
    }, 2000);
    return () => clearInterval(glitchInterval);
  }, [easterEggs, glitchText.length]);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Terminal Window - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Instruction Text */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-cyan-400 text-sm font-mono mb-2 text-center"
          >
            💡 Try typing "help" and then enter if not working then refresh the page
          </motion.div>
          
          <div className="terminal-window p-6 h-96 flex flex-col">
            {/* Terminal Header */}
            <div className="terminal-header mb-4 flex-shrink-0">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-black text-xs font-mono ml-4">terminal@rounaq:~</span>
            </div>
            
            {/* Terminal Content - Scrollable */}
            <div 
              ref={terminalRef}
              className="text-green-400 font-mono text-sm leading-relaxed flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent"
              style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: '#22c55e transparent'
              }}
            >
              <pre className="whitespace-pre-wrap">
                {terminalLines.join('\n')}
                {typedText}
                {isInteractive && (
                  <>
                    <br />
                    <span>$ {userInput}</span>
                  </>
                )}
                {showCursor && <span className="typing-cursor">|</span>}
              </pre>
            </div>
            
            {/* Interactive Input (hidden but functional) */}
            {isInteractive && (
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="absolute opacity-0 pointer-events-none"
                autoFocus
              />
            )}
          </div>
        </motion.div>

        {/* Main Content - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center lg:text-left"
        >
          {/* INITIALIZING Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-cyan-400 text-lg font-mono mb-4">INITIALIZING...</h2>
          </motion.div>

          {/* Glitch Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8"
          >
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-green-400 font-mono glitch"
              data-text={glitchText}
            >
              {glitchText}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-gray-300 font-mono">
              Full-Stack Developer | Creative Technologist | Storyteller
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-400 font-mono leading-relaxed max-w-2xl">
              Crafting digital experiences with cutting-edge technology and creative innovation. 
              Transforming ideas into elegant, scalable solutions that make a difference.
            </p>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-8"
          >
            <div className="text-green-400 font-mono text-sm status-ready">
              STATUS: READY_FOR_DEPLOYMENT
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="terminal-btn font-mono text-lg"
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            >
              [EXECUTE_PORTFOLIO.sh]
            </motion.button>
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:bottom-8"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToAbout}
              className="text-green-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 