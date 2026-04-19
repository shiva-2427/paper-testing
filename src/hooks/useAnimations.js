import { useState, useEffect } from 'react';

// Animate numbers counting up on load
export function useCounter(endValue, durationMs = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const pct = Math.min(progress / durationMs, 1);
      
      // Simple easeOut
      const easeOut = 1 - Math.pow(1 - pct, 3);
      setCount(Math.floor(easeOut * endValue));

      if (pct < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, durationMs]);

  return count;
}

// Animate typewriter text (for Pulse insight bullets)
export function useTypewriter(text, speedMs = 30) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speedMs);
    
    return () => clearInterval(interval);
  }, [text, speedMs]);

  return displayedText;
}
