import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  
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
          <motion.img src="/MACE.jpg" alt="MACE" className="w-full h-64 object-cover rounded-lg" />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mt-4"
          >
            About IEEE MACE SB
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg text-center mt-2"
          >
            The IEEE Student Branch MACE (Student Branch Code: 32041), established on November 17th, 1988, is one of the largest student branches 
            globally, with over 300 student members. For over 35 years, IEEE MACE SB has conducted numerous events to enhance students' skills and 
            prepare them for the rapidly changing industry. The branch offers a Hardware Laboratory for technical project development and regularly
             conducts training programs, talks, professional awareness sessions, hackathons, industrial visits, debates, quizzes, and workshops. 
             We are committed to meeting students' interests and guiding them to become responsible professionals for a better tomorrow.         
            </motion.p>
        </div>

        {/* About AKPESSC Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <motion.img src="/group 2 akpessc.png" alt="AKPESSC'25" className="w-full h-64 object-cover rounded-lg" />
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
            The All Kerala Power & Energy Society Student Congress (AKPESSC'25) is the flagship event of the IEEE PES Kerala Chapter, 
            organized in association with PES Student Branch Chapter MACE, Kothamangalam. Scheduled for the 15th, 16th, and 17th of March 2025 at 
            Mar Athanasius College of Engineering, Kothamangalam. This year's theme is "Energizing the Future." AKPESSC'25 aims to unite the Power and 
            Energy Society volunteers from all student branches in Kerala. This event provides a platform for technical advancements and knowledge 
            sharing, inspiring participants through a series of events, workshops, and networking opportunities. 
          </motion.p>
        </div>
      </div>

      </section>
  );
};

export default About;
