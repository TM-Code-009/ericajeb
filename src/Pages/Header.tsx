import { useState } from "react"
import { IoPerson } from "react-icons/io5"
import img from "../assets/image.png"
import { TiBook } from "react-icons/ti"
import { TbDeviceTvOld } from "react-icons/tb"
import { BsTwitterX } from "react-icons/bs"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-[#121212] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <a href="/">
            <img
              src={img}
              alt="Profile"
              className="h-12 w-12 rounded-xl object-cover"
            />
          </a>
          <div className="text-xs sm:text-sm leading-tight">
            <p className="font-bold text-base sm:text-lg">Eric Ajomafuwe</p>
            <p className="text-gray-300">Product Designer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/about" className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <IoPerson className="text-[#1976D2]" />
            About Me
          </a>
          <a href="/journal" className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TiBook className="text-[#1976D2]" />
            Journal
          </a>
          <a href="#newsletter" className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TbDeviceTvOld className="text-[#1976D2]" />
            Newsletter
          </a>
          <div className="flex items-center gap-2">
            Find me on:
            <span className="flex gap-2 text-[#1976D2] text-lg">
              <a href="https://x.com/eric_ajeb"><BsTwitterX className="cursor-pointer hover:text-white transition" /></a>
              <a href="https://www.youtube.com/@ericajeb"><FaYoutube className="cursor-pointer hover:text-white transition" /></a>
              <a href="https://www.instagram.com/ericajeb">
              <FaInstagram className="cursor-pointer hover:text-white transition" />
              </a>
              
            </span>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm">
          <a href="/about" className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <IoPerson className="text-[#1976D2]" />
            About Me
          </a>
          <a href="/journal" className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TiBook className="text-[#1976D2]" />
            Journal
          </a>
          <a href="#newsletter" className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TbDeviceTvOld className="text-[#1976D2]" />
            Newsletter
          </a>
          <div className="flex items-center gap-2">
            Find me on:
            <span className="flex gap-3 text-[#1976D2] text-lg">
            <a href="https://x.com/eric_ajeb"><BsTwitterX className="cursor-pointer hover:text-white transition" /></a>
            <a href="https://www.youtube.com/@ericajeb"><FaYoutube className="cursor-pointer hover:text-white transition" /></a>
              <a href="https://www.instagram.com/ericajeb">
              <FaInstagram className="cursor-pointer hover:text-white transition" />
              </a>
          
            </span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
