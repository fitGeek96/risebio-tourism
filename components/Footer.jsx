import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fustat-offer bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start text-left">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-right flex flex-col items-end">
            <Link href="/" className="text-right">
              <img
                src="/images/logo.png"
                alt="Agency Logo"
                className="mr-3 scale-[3] h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 
      hover:scale-110"
              />
            </Link>
            <p className="text-gray-400 text-right">
              <br />
              انطلق في رحلات لا تُنسى إلى أكثر الأماكن إثارة في العالم أين نتظرك
              المغامرة في كل زاوية من خلال تجارب السفر التي اخترناها بعناية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-right">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">استكشف</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="hover:text-teal-400 transition">
                    الرئيسية
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#packages">
                  <span className="hover:text-teal-400 transition">
                    أبرز العروض السياحية
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <span className="hover:text-teal-400 transition">
                    تواصل معنا
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-teal-400 transition">من نحن</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 text-right">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">
              تواصل معنا
            </h3>
            <p className="text-gray-400">Phone: +213 555 123 456</p>
            <p className="text-gray-400">Email: contact@traveladventures.com</p>
            <p className="text-gray-400">
              Address: 123 Adventure St., Tlemcen, Algeria
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-8 text-right">
          <a
            href="https://facebook.com"
            className="transform hover:scale-110 transition duration-300"
          >
            <svg
              className="w-8 h-8 text-gray-400 hover:text-teal-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Facebook Icon SVG */}
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="transform hover:scale-110 transition duration-300"
          >
            <svg
              className="w-8 h-8 text-gray-400 hover:text-teal-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Instagram Icon SVG */}
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="transform hover:scale-110 transition duration-300"
          >
            <svg
              className="w-8 h-8 text-gray-400 hover:text-teal-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Twitter Icon SVG */}
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-gray-500">
          <p>&copy; 2024 Rise Tourism. All Rights Reserved.</p>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-pattern pointer-events-none opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
