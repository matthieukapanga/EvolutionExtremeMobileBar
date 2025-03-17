import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="navbar fixed w-full z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Evolution Bar
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}