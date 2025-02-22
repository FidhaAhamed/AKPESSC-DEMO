import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black/90 py-12 px-6 md:px-16 overflow-hidden backdrop-blur-lg shadow-lg text-white">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            AKPESSC'25
          </h2>
          <p className="text-gray-300 mt-2">
            Powering the future of energy with innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all">About</a></li>
            <li><a href="#events" className="text-gray-300 hover:text-cyan-400 transition-all">Events</a></li>
            <li><a href="#tickets" className="text-gray-300 hover:text-cyan-400 transition-all">Tickets</a></li>
            <li><a href="#gallery" className="text-gray-300 hover:text-cyan-400 transition-all">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-300 mt-2">John Doe</p>
          <p className="text-gray-400 text-sm">+91 98765 43210</p>
          <p className="text-gray-300 mt-2">Jane Smith</p>
          <p className="text-gray-400 text-sm">+91 87654 32109</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center mt-8 space-x-6">
        <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all text-xl">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all text-xl">
          <FaXTwitter />
        </a>
        <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all text-xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all text-xl">
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-12 pb-6">
        © 2025 AKPESSC. All Rights Reserved. Design and Developed by <a href="https://github.com/FidhaAhamed" className="text-gray-200">Fidha Ahamed.</a>
      </div>
    </footer>
  );
};

export default Footer;
