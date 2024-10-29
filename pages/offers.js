"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      const response = await fetch("/api/get-offers");
      const data = await response.json();
      setOffers(data.offers);
    }
    fetchOffers();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Available Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <PackageCard
              key={index}
              title={offer.title}
              description={offer.description}
              image={offer.image}
              price={offer.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
