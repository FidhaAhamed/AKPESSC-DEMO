import { motion } from "framer-motion";
import { useState } from "react";

const ticketOptions = [
  {
    title: "IEEE Member",
    price: "₹799",
    image: "/images/ieee-ticket.png",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    title: "Non-IEEE Member",
    price: "₹899",
    image: "/images/non-ieee-ticket.png",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "IEEE PES Member",
    price: "₹699",
    image: "/images/ieee-pes-ticket.png",
    gradient: "from-purple-500 to-pink-500",
  },
];

const Tickets = () => {
  return (
    <div id="tickets" className="relative bg-black text-white py-20 px-6 md:px-12">
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-16 w-40 h-40 bg-gradient-to-r from-blue-500 to-green-500 blur-3xl opacity-40"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Get Your Pass
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
        {ticketOptions.map((ticket, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 bg-gradient-to-b ${ticket.gradient} rounded-xl shadow-lg text-center`}
          >
            <img src={ticket.image} alt={ticket.title} className="mx-auto w-24 h-24 mb-4" />
            <h3 className="text-2xl font-semibold">{ticket.title}</h3>
            <p className="text-4xl font-bold text-white my-4">{ticket.price}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 w-full py-2 rounded-lg text-white font-semibold bg-black bg-opacity-40 border border-white hover:bg-white hover:text-black transition-all"
            >
              Buy Now
            </motion.button>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-all rounded-xl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
