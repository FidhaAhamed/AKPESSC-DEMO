import { motion } from "framer-motion";

const speakersData = [
  {
    name: "Dr. Jane Foster",
    role: "AI Researcher, MIT",
    img: "/woman-giving-lecture-audience.jpg",
  },
  {
    name: "Elon Reeves",
    role: "CTO, SpaceTech",
    img: "/empowered-business-woman-working-city.jpg",
  },
  {
    name: "Sophia Kwon",
    role: "Cybersecurity Expert",
    img: "/medium-shot-woman-working-as-lawyer.jpg",
  },
  {
    name: "Rajesh Mehra",
    role: "Lead Data Scientist, Google",
    img: "/senior-business-man-giving-lecture.jpg",
  },
];

const Speakers = () => {
  return (
    <div id="speakers" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Floating Background Elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-40"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Meet Our Speakers
      </motion.h2>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mt-10">
        {speakersData.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 bg-gray-900 rounded-xl shadow-lg text-center overflow-hidden group"
          >
            {/* Speaker Image */}
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-transparent group-hover:border-cyan-400 transition-all"
            />

            {/* Speaker Name */}
            <h3 className="text-2xl font-semibold mt-6">{speaker.name}</h3>

            {/* Speaker Role */}
            <p className="text-gray-400 text-lg mt-2">{speaker.role}</p>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-all rounded-xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
