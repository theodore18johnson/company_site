import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownTimerProps = {
  endDate: string;
  onComplete?: () => void;
};

// Animation variants defined outside component to prevent recreation on each render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

// Extracted TimeUnit component for better code organization and memoization
const TimeUnit = memo(({ value, label }: { value: number; label: string }) => {
  const digits = String(value).padStart(2, '0').split('');
  
  return (
    <motion.div 
      className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 w-48 relative overflow-hidden border border-white/10 shadow-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="flex justify-center">
        {digits.map((digit, index) => (
          <div key={`${label}-${index}`} className="h-12 w-6 relative overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={`${label}-${index}-${digit}`}
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                exit={{ y: -40 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
                className="text-4xl font-bold absolute inset-x-0 flex justify-center"
              >
                {digit}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-300 mt-2 text-center font-medium">{label}</div>
    </motion.div>
  );
});

const CountdownTimer = ({ endDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEnded, setIsEnded] = useState<boolean>(false);

  useEffect(() => {
    const targetDate = new Date(endDate).getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        // More efficient calculation using division and modulo
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
        setIsEnded(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        
        if (!isEnded) {
          setIsEnded(true);
          onComplete?.();
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate, onComplete, isEnded]);

  return (
    <div className="mb-12">
      <motion.div 
        className="flex justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </motion.div>
    </div>
  );
};

export default memo(CountdownTimer); 