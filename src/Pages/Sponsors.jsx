import { motion } from "framer-motion";

const sponsorsData = [
  { name: "Tesla", img: "/tesla-logo-png-2226.png" },
  { name: "Microsoft", img: "/logo-windows-13518.png" },
  { name: "Amazon", img: "/amazon-png-logo-vector-6701.png" },
];

const Sponsors = () => {
  return (
    <div id="sponsors" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Our Sponsors
      </motion.h2>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-5xl mx-auto mt-12">
        {sponsorsData.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900 rounded-2xl p-8 flex flex-col justify-center items-center shadow-xl overflow-hidden group"
          >
            {/* Sponsor Logo */}
            <img
              src={sponsor.img}
              alt={sponsor.name}
              className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-90 group-hover:opacity-100 transition-all"
            />

            {/* Sponsor Name */}
            <h3 className="text-xl font-semibold mt-6">{sponsor.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
