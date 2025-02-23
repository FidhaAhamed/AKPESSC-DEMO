import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const faqs = [
  { question: "What is the event about?", answer: "The event is a gathering of technology enthusiasts to explore innovations and ideas." },
  { question: "How can I register?", answer: "You can register through our official website by filling out the registration form." },
  { question: "Is there an entry fee?", answer: "Yes." },
  { question: "Will there be online participation?", answer: "Yes, we will be streaming key sessions online for remote attendees." }
];

const FAQLocation = () => {
  return (
    <section id="faq-location" className="relative bg-black py-20 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* FAQ Section */}
        <div>
          {/* Section Title */}
                  <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
                >
                  FAQ
                </motion.h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-white/20 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-sm text-gray-300 mt-2">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
                >
                  Location
                </motion.h2>
          <div className="relative w-full h-80 mt-8 overflow-hidden rounded-lg border border-white/20">
          <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5500639865463!2d76.6193309!3d10.053936999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e6154a2133e5%3A0x2c26b2d532bb30ea!2sMar%20Athanasius%20College%20of%20Engineering%20-%20Kothamangalam!5e0!3m2!1sen!2sin!4v1718273487535!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <MapPin className="text-cyan-400" />
            <p className="text-gray-300">Mar Athanasius College of Engineering, Kothamangalam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQLocation;
