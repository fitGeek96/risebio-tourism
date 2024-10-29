"use client";
import Link from "next/link";

const PackageCard = ({ title, description, price, image }) => {
  return (
    <div
      className="relative bg-black shadow-xl rounded-lg overflow-hidden 
    fustat-offer mx-3 transition-all duration-300 hover:shadow-2xl hover:scale-105"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-t-lg transition-transform duration-300 
          hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
      </div>

      {/* Content Section */}
      <div
        className="p-5 bg-gradient-to-r from-richBlack via-transparent to-richBlack 
      text-right"
      >
        <h3
          className="text-2xl font-extrabold mb-3 text-yellow-400 leading-tight 
        drop-shadow-lg"
        >
          {title}
        </h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-gray-100">
            {price} DZD
          </span>
          <Link
            href={{
              pathname: "/package",
              query: { title, description, image, price },
            }}
            passHref
          >
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold 
            text-lg px-4 py-2 rounded transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              ... المزيد من المعلومات
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
