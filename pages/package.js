"use client";
import Navbar from "@/components/Navbar";
import "../styles/style.css";
import PackageDetails from "@/components/PackageDetails";
import { useRouter } from "next/router";

const Package = () => {
  const { title, description, price, image } = useRouter().query;
  return (
    <div className="bg-black bg-opacity-50">
      <Navbar />
      <PackageDetails
        title={title}
        description={description}
        price={price}
        image={image}
      />
    </div>
  );
};

export default Package;
