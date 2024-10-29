import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";
import ContactForm from "../components/ContactForm";
import "../styles/style.css";
import Link from "next/link";

const packages = [
  {
    title: "جولة سياحية الى تونس",
    description:
      "Explore the rich history of Tlemcen with a guided tour of its ancient sites.",
    image: "/images/slide1.jpg",
    price: "5000",
  },
  {
    title: "جولة سياحية الى تركيا",
    description:
      "A thrilling adventure through Tlemcen’s breathtaking landscapes.",
    image: "/images/slide2.jpg",
    price: "7000",
  },
  {
    title: "رحلة الى دبي ",
    description:
      "Discover the modern and traditional sides of Tlemcen in this city tour.",
    image: "/images/slide3.jpg",
    price: "4000",
  },
];

export default function Home() {
  return (
    <div className="bg-richBlack">
      <video
        className="absolute w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/5057526/5057526-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-400 via-teal-300 to-transparent opacity-50 z-5"></div>
      {/* Navbar and Hero with z-10 to appear above video */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
      <section id="packages" className="container mx-auto py-16 px-6">
        <h2 className="fustat-offer text-4xl md:text-5xl font-extrabold text-center mb-12 text-white drop-shadow-md">
          أبرز العروض
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              image={pkg.image}
              price={pkg.price}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 fustat-offer">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
