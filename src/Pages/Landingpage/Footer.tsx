import React from "react";
import { FaXTwitter, FaYoutube, FaInstagram, FaTiktok, FaBehance } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Ajomafuwe Eric</h3>
          <p className="text-gray-400 text-sm mb-3">Find me on:</p>
          <div className="flex items-center gap-4 text-blue-500 text-lg mb-6">
            <a href="https://x.com/eric_ajeb" aria-label="X"><FaXTwitter /></a>
            <a href="https://www.youtube.com/@ericajeb" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.instagram.com/ericajeb" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@ericajeb" aria-label="TikTok"><FaTiktok /></a>
            <a href="https://www.behance.net/eajomafuwe29d6" aria-label="Behance"><FaBehance /></a>
          </div>

          <div className="mb-4">
            <p className="text-gray-400 text-sm">EMAIL</p>
            <p className="text-lg font-medium">Eajomafuwe@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Contact Me</p>
            <p className="text-lg font-medium">+2349039120237</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-gray-500 text-sm self-end md:self-auto">
          © 2025 — Copyright
        </div>
      </div>
    </footer>
  );
};

export default Footer;
