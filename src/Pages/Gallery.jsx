import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const images = [
  "https://source.unsplash.com/random/800x600?nature",
  "https://source.unsplash.com/random/800x600?tech",
  "https://source.unsplash.com/random/800x600?festival",
  "https://source.unsplash.com/random/800x600?music",
  "https://source.unsplash.com/random/800x600?city",
  "https://source.unsplash.com/random/800x600?conference",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="gallery" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Floating Background Effects */}
      <div className="absolute w-full h-full">
        <div className="absolute top-16 left-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 blur-3xl opacity-30"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Event Gallery
      </motion.h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-10">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg group"
            onClick={() => setSelectedImage(img)}
          >
            {/* Image */}
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 md:h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 transition-all"></div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full p-4"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full hover:bg-red-700 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <IoClose size={24} />
            </button>

            {/* Fullscreen Image */}
            <img src={selectedImage} alt="Full View" className="w-full rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
