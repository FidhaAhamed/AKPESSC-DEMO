import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-12 overflow-hidden">
      {/* Floating Gradient Elements */}
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-500 to-indigo-500 blur-3xl opacity-40"></div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left relative z-10">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            AKPESSC'25
          </h2>
          <p className="text-gray-400 mt-2">
            Powering the future of energy with innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-all">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="text-gray-400 hover:text-cyan-400 transition-all">
                Events
              </a>
            </li>
            <li>
              <a href="#tickets" className="text-gray-400 hover:text-cyan-400 transition-all">
                Tickets
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-gray-400 hover:text-cyan-400 transition-all">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-10 relative z-10">
        © 2025 AKPESSC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
