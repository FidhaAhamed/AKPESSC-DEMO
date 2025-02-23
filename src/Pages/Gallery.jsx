import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/Gallery/akson-1K8pIbIrhkQ-unsplash.jpg", width: 400, height: 600 },
  { src: "/Gallery/front-view-multiracial-group-friends.jpg", width: 600, height: 400 },
  { src: "/Gallery/joel-muniz-xTkxZN_DV8o-unsplash.jpg", width: 500, height: 500 },
  { src: "/Gallery/leah-hetteberg-Kb8_42IFMFk-unsplash.jpg", width: 700, height: 400 },
  { src: "/Gallery/man-smiling-taking-self-photo-him-his-friends-with-trees-background.jpg", width: 400, height: 800 },
  { src: "/Gallery/omar-lopez-T6zu4jFhVwg-unsplash.jpg", width: 600, height: 600 },
  { src: "/Gallery/viktor-krc-E7qSsgMsXyA-unsplash.jpg", width: 500, height: 700 },
  { src: "/Gallery/man-smiling-taking-self-photo-him-his-friends-with-trees-background.jpg", width: 800, height: 400 },
  { src: "/Gallery/front-view-multiracial-group-friends.jpg", width: 400, height: 500 },
  { src: "/Gallery/leah-hetteberg-Kb8_42IFMFk-unsplash.jpg", width: 400, height: 300 },
  { src: "/Gallery/viktor-krc-E7qSsgMsXyA-unsplash.jpg", width: 400, height: 300 },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Gallery = () => {
  return (
    <section id="gallery" className="relative overflow-hidden bg-black py-16 px-6">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Section Title */}
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Gallery
      </motion.h2>
        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full mt-12 p-6 border-2 border-white/20 rounded-lg backdrop-blur-sm"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer group"
              style={{
                gridColumn: `span ${image.width > image.height ? 1 : 1}`,
                gridRow: `span ${image.height > image.width ? 2 : 1}`,
              }}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
