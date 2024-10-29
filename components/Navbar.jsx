// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fustat-offer fixed top-0 left-0 w-full bg-opacity-70 bg-gradient-to-b from-black to-transparent z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Agency Logo"
            className="h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 
            hover:scale-110 scale-[2]"
          />
        </Link>
        <div className="hidden md:flex space-x-8 text-yellow-500">
          <Link
            href="/services"
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
            href="/about"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            من نحن
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            تواصل معنا
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
