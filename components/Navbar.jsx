import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 text-white fustat-offer">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/images/logo.png" className="h-12 w-auto" alt="Logo" />
        <div className="text-[1.2rem] text-yellow-300 font-bold">
          <Link className="px-4" href="/#packages">
            تصفح أبرز العروض
          </Link>
          <Link className="px-4" href="#contact">
            تولصل معنا
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
