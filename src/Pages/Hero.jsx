import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
      {/* Background Animated Blobs */}
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-20 w-56 h-56 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-r from-cyan-400 to-green-500 blur-2xl opacity-50 animate-bounce"></div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Welcome to <br /> AKPESSC'25
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl"
      >
        The Premier Power & Energy Conference – Uniting Innovators, Engineers, and Leaders.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#register"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6 px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg
                   transition-transform transform hover:scale-110 hover:shadow-[0px_0px_20px_rgba(0,255,255,0.8)]"
      >
        Register Now
      </motion.a>

      {/* Floating Particles */}
      <div className="absolute w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.random() * 2, duration: 1 }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Custom CSS for Floating Effect */}
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
