import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const eventDate = new Date("2025-03-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
      {/* Background Animated Blobs */}
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-20 w-56 h-56 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-r from-cyan-400 to-green-500 blur-2xl opacity-50 animate-bounce"></div>
      </div>

      {/* Event Logo */}
      <motion.img
        src="/logo.png"
        alt="AKPESSC'25 Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 md:w-48 lg:w-56 mb-4"
      />

      {/* Event Host */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-4xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        MACE, Kothamangalam
      </motion.h1>

      {/* Event Dates */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-2xl md:text-4xl font-bold mt-2"
      >
        March 15-17, 2025
      </motion.h2>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 flex space-x-4 md:space-x-6  p-4 md:p-6 "
      >
        {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
          <div key={unit} className="flex flex-col items-center p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-md">
            <span className="text-white text-4xl md:text-6xl font-bold">
              {Object.values(timeLeft)[index]}
            </span>
            <span className="text-sm md:text-lg text-gray-200 mt-1">{unit}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
