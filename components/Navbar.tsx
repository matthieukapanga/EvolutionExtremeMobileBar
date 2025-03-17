"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for the hamburger

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar fixed w-full z-50 py-4 bg-black bg-opacity-70">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Evolution Bar
          </Link>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-pink-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Book Now</Button>
            </Link>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`md:hidden flex flex-col space-y-4 pt-4 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link href="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
          <Link href="/gallery" className="nav-link" onClick={toggleMenu}>Gallery</Link>
          <Link href="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          <Link href="/contact">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full">Book Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
