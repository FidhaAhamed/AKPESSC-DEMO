import { motion } from "framer-motion";

const sponsorsData = [
  { name: "Tesla", img: "https://via.placeholder.com/150" },
  { name: "Google", img: "https://via.placeholder.com/150" },
  { name: "Microsoft", img: "https://via.placeholder.com/150" },
  { name: "Amazon", img: "https://via.placeholder.com/150" },
  { name: "Intel", img: "https://via.placeholder.com/150" },
  { name: "SpaceX", img: "https://via.placeholder.com/150" },
];

const Sponsors = () => {
  return (
    <div id="sponsors" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Floating Background Elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-40"></div>
      </div>

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto mt-10">
        {sponsorsData.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="relative bg-gray-900 rounded-xl p-4 flex justify-center items-center shadow-lg overflow-hidden group"
          >
            {/* Sponsor Logo */}
            <img
              src={sponsor.img}
              alt={sponsor.name}
              className="w-24 h-24 object-contain opacity-80 group-hover:opacity-100 transition-all"
            />

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-all rounded-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Marquee for Premium Sponsors */}
      <div className="overflow-hidden mt-16">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {sponsorsData.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.img}
              alt={sponsor.name}
              className="w-32 h-32 object-contain opacity-80 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
