import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";
import ContactForm from "../components/ContactForm";
import "../styles/style.css";

const packages = [
  {
    title: "جولة سياحية الى مدينة وهران",
    description:
      "Explore the rich history of Tlemcen with a guided tour of its ancient sites.",
    image: "/images/historical-tour.jpg",
    price: "5000",
  },
  {
    title: "جولة سياحية الى تلمسان",
    description:
      "A thrilling adventure through Tlemcen’s breathtaking landscapes.",
    image: "/images/nature-adventure.jpg",
    price: "7000",
  },
  {
    title: "رحلة الى صحراء الجزائر",
    description:
      "Discover the modern and traditional sides of Tlemcen in this city tour.",
    image: "/images/city-exploration.jpg",
    price: "4000",
  },
];

export default function Home() {
  return (
    <div className="bg-black bg-opacity-50">
      <Navbar />
      <Hero />
      <section id="packages" className="container mx-auto my-16 fustat-offer">
        <h2 className="text-[4rem] font-bold text-center mb-10">أبرز العروض</h2>
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
