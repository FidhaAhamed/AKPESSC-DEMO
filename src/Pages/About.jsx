import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Background Glows */}
      <div className="absolute w-full h-full">
        <div className="absolute top-16 left-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-16 w-56 h-56 bg-gradient-to-r from-cyan-500 to-green-500 blur-2xl opacity-40"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        About AKPESSC'25
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-lg md:text-xl text-center mt-4 max-w-3xl mx-auto"
      >
        AKPESSC'25 is a leading Power & Energy conference, bringing together
        innovators, engineers, and researchers to discuss the future of
        sustainable energy solutions.
      </motion.p>

      {/* About Content Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://source.unsplash.com/600x400/?technology,energy"
            alt="About Image"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </motion.div>

        {/* Right Text with Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="space-y-6"
        >
          {/* Feature Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
          >
            <h3 className="text-xl font-semibold">🌍 Sustainability Focus</h3>
            <p className="text-gray-200 mt-2">
              Exploring renewable energy solutions and sustainability in the
              modern world.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg"
          >
            <h3 className="text-xl font-semibold">🔬 Cutting-Edge Research</h3>
            <p className="text-gray-200 mt-2">
              Showcasing the latest advancements in power and energy
              technologies.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 shadow-lg"
          >
            <h3 className="text-xl font-semibold">🤝 Networking & Growth</h3>
            <p className="text-gray-200 mt-2">
              Connect with industry leaders, researchers, and innovators.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
