import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDust() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    let animationFrame;
    const render = () => {
      // Draw dark background directly onto canvas for performance
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
        
        if (Math.random() > 0.99) {
          p.alpha = Math.random() * 0.6 + 0.2;
        }
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-20 w-full h-full opacity-80"
      />
      
      {/* Background Animated Orbs for Premium SaaS Feel */}
      <motion.div 
        className="fixed top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen mix-blend-color-dodge -z-10 bg-violet-600/10 pointer-events-none blur-[120px]"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -50, -100, -50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen mix-blend-color-dodge -z-10 bg-cyan-600/10 pointer-events-none blur-[100px]"
        animate={{
          x: [0, -100, 0, 50, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 0.9, 1.1, 1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed top-[40%] right-[40%] w-[35vw] h-[35vw] rounded-full mix-blend-screen mix-blend-color-dodge -z-10 bg-emerald-600/5 pointer-events-none blur-[100px]"
        animate={{
          x: [0, 80, -20, 0],
          y: [0, -80, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}
