"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fustat-offer fixed top-0 left-0 w-full bg-opacity-70 bg-gradient-to-b from-black to-transparent z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Agency Logo"
            className="h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-yellow-500">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            الرئيسية
          </Link>
          <Link
            href="/#services"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            الخدمات
          </Link>
          <Link
            href="/tours"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            الرحلات
          </Link>
          <Link
            href="/#about"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            من نحن
          </Link>
          <Link
            href="/#book"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            تواصل معنا
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center space-y-6 text-white text-xl">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            الرئيسية
          </Link>
          <Link
            href="/#services"
            className="hover:text-yellow-300"
            onClick={toggleMenu}
          >
            الخدمات
          </Link>
          <Link
            href="/#packages"
            className="hover:text-yellow-300"
            onClick={toggleMenu}
          >
            الرحلات
          </Link>
          <Link
            href="/#about"
            className="hover:text-yellow-300"
            onClick={toggleMenu}
          >
            من نحن
          </Link>
          <Link
            href="/#contact"
            className="hover:text-yellow-300"
            onClick={toggleMenu}
          >
            تواصل معنا
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
