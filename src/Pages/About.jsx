import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const faqs = [
    {
      question: "What is AKPESSC'25?",
      answer:
        "AKPESSC'25 is a leading Power & Energy conference, bringing together innovators, engineers, and researchers to discuss the future of sustainable energy solutions.",
    },
    {
      question: "Where is AKPESSC'25 happening?",
      answer:
        "The event will take place at Mar Athanasius College of Engineering, Kothamangalam, Kerala.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students, researchers, professionals, and enthusiasts in the field of power and energy are welcome to participate.",
    },
    {
      question: "How can I register?",
      answer:
        "Registration details will be announced soon on the official website. Stay tuned!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="about" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Background Glows */}
      <div className="absolute w-full h-full">
        <div className="absolute top-16 left-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-16 w-56 h-56 bg-gradient-to-r from-cyan-500 to-green-500 blur-2xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About MACE Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <motion.img src="/mace.jpg" alt="MACE" className="w-full h-48 object-cover rounded-lg" />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mt-4"
          >
            About MACE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg text-center mt-2"
          >
            Mar Athanasius College of Engineering (MACE) is one of the premier engineering institutions in India, fostering innovation and excellence in education and research.
          </motion.p>
        </div>

        {/* About AKPESSC Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <motion.img src="/akpessc.jpg" alt="AKPESSC'25" className="w-full h-48 object-cover rounded-lg" />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mt-4"
          >
            About AKPESSC'25
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg text-center mt-2"
          >
            AKPESSC'25 is a leading Power & Energy conference, bringing together innovators, engineers, and researchers to discuss the future of sustainable energy solutions.
          </motion.p>
        </div>
      </div>

      </section>
  );
};

export default About;
