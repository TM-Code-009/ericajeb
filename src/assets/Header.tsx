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
    <header className="w-full bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img src={img} alt="Profile" className="h-12 w-12 rounded-xl object-cover" />
          <div className="text-xs sm:text-sm leading-tight">
            <p className="font-bold text-base sm:text-lg">Eric Ajomafuwe</p>
            <p className="text-gray-300">Product Designer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <IoPerson className="text-[#1976D2]" />
            About Me
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TiBook className="text-[#1976D2]" />
            Journal
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TbDeviceTvOld className="text-[#1976D2]" />
            Newsletter
          </div>
          <div className="flex items-center gap-2">
            Find me on:
            <span className="flex gap-2 text-[#1976D2] text-lg">
              <BsTwitterX className="cursor-pointer hover:text-white transition" />
              <FaYoutube className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
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
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <IoPerson className="text-[#1976D2]" />
            About Me
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TiBook className="text-[#1976D2]" />
            Journal
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#1976D2] transition">
            <TbDeviceTvOld className="text-[#1976D2]" />
            Newsletter
          </div>
          <div className="flex items-center gap-2">
            Find me on:
            <span className="flex gap-3 text-[#1976D2] text-lg">
              <BsTwitterX className="cursor-pointer hover:text-white transition" />
              <FaYoutube className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
            </span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
