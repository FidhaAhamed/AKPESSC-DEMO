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
    <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Event Logo */}
      <motion.img
        src="/akpessc logo.png"
        alt="AKPESSC'25 Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-56 md:w-96 lg:w-[32rem] xl:w-[40rem] mb-10"
      />

      {/* Event Host */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        MACE, Kothamangalam
      </motion.h1>

      {/* Event Dates */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative text-gray-300 text-2xl md:text-4xl font-bold mt-2"
      >
        March 15-17, 2025
      </motion.h2>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative mt-6 flex space-x-4 md:space-x-6 p-4 md:p-6"
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
