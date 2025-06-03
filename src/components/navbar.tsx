"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
         <Image src="/hologramlogo.png" alt="Hologram Logo" width={40} height={40} />
        <div className="text-2xl font-bold text-black">Hologram Academy</div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-cyan-600 transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition">About</Link>
          <Link href="/class" className="text-gray-700 hover:text-cyan-600 transition">Class</Link>
          <Link href="/events1" className="text-gray-700 hover:text-cyan-600 transition">Events</Link>
          <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-cyan-600">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-cyan-600">About</Link>
          <Link href="/class" className="block text-gray-700 hover:text-cyan-600">Class</Link>
          <Link href="/events1" className="text-gray-700 hover:text-cyan-600 transition">Events</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-cyan-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
