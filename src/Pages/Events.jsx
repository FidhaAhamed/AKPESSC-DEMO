import { motion } from "framer-motion";

const eventsData = [
  {
    id: 1,
    title: "Inauguration Ceremony",
    date: "March 1, 2025",
    description: "Kickstart AKPESSC'25 with inspiring keynote speakers and a grand opening.",
    image: "https://source.unsplash.com/600x400/?conference,energy",
  },
  {
    id: 2,
    title: "Technical Workshops",
    date: "March 2, 2025",
    description: "Hands-on workshops by industry experts on power & energy innovations.",
    image: "https://source.unsplash.com/600x400/?technology,workshop",
  },
  {
    id: 3,
    title: "Panel Discussions",
    date: "March 3, 2025",
    description: "Engage with pioneers in the field discussing the future of sustainable energy.",
    image: "https://source.unsplash.com/600x400/?discussion,panel",
  },
  {
    id: 4,
    title: "Project Expo",
    date: "March 4, 2025",
    description: "A showcase of cutting-edge projects by students and researchers.",
    image: "https://source.unsplash.com/600x400/?expo,science",
  },
];

const Events = () => {
  return (
    <div id="events" className="relative bg-black text-white py-20 px-6 md:px-12">
      {/* Background Elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-16 w-56 h-56 bg-gradient-to-r from-cyan-500 to-green-500 blur-2xl opacity-40"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
      >
        Event Highlights
      </motion.h2>

      {/* Timeline Bar */}
      <div className="w-2 mx-auto bg-gradient-to-b from-blue-500 to-cyan-500 h-24 my-6 rounded-lg"></div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {eventsData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg relative transition-all"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                {event.title}
              </h3>
              <p className="text-gray-300 text-sm">{event.date}</p>
              <p className="text-gray-400 mt-3">{event.description}</p>
            </div>

            {/* Glowing Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-all"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
