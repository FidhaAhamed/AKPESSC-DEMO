import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-black bg-opacity-70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white text-3xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          AKPESSC'25
        </motion.div>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex flex-1 justify-center space-x-16">
          {["Home", "About", "Events", "Tickets", "Speakers", "Sponsors", "Gallery"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white text-lg font-medium cursor-pointer transition-all
                             before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px]
                             before:bg-gradient-to-r from-cyan-400 to-purple-500 before:transition-all before:duration-300
                             hover:before:w-full hover:text-cyan-400"
                >
                  {item}
                </a>
              </motion.div>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Menu (Centered with Hover Effect) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-3/4 h-screen bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
        >
          {["Home", "About", "Events", "Tickets", "Speakers", "Sponsors", "Gallery"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-2xl font-bold tracking-wider transition-all
                             hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-400 to-purple-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </motion.div>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
