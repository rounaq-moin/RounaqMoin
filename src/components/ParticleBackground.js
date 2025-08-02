import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "01";
    const codeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
    const matrixArray = matrix.split("");
    const codeArray = codeChars.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    const codeDrops = [];
    
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
      codeDrops[x] = Math.random() * -100; // Random starting position
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix rain (binary)
      ctx.fillStyle = '#22c55e';
      ctx.font = fontSize + 'px JetBrains Mono';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Vertical code scanning (every 3rd column)
      ctx.fillStyle = 'rgba(34, 197, 94, 0.8)';
      ctx.font = '12px JetBrains Mono';
      
      for (let i = 0; i < codeDrops.length; i += 3) { // Every 3rd column
        const char = codeArray[Math.floor(Math.random() * codeArray.length)];
        ctx.fillText(char, i * fontSize, codeDrops[i]);
        
        codeDrops[i] += 2; // Move faster than matrix rain
        
        if (codeDrops[i] > canvas.height) {
          codeDrops[i] = Math.random() * -100;
        }
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain"
      style={{ background: 'transparent' }}
    />
  );
};

export default MatrixRain; 