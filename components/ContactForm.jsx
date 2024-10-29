"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-selection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, destination, date }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("تم إرسال اختيارك إلى الموزع!");
      } else {
        setMessage("فشل في إرسال اختيارك.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("حدث خطأ أثناء إرسال اختيارك.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 w-full 
    max-w-lg mx-auto transition-all duration-500 transform hover:scale-105"
    >
      <h2 className="text-3xl font-bold text-center text-yellow-950 mb-6">
        يرجى اختيار الوجهة والتاريخ
      </h2>
      <input
        type="text"
        placeholder="أدخل اسم المستخدم"
        className="w-full px-4 py-2 mb-4 border-b-2 border-yellow-400 
        bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 
        text-lg text-right text-richBlack"
      />
      <select
        className="w-full px-2 py-2 mb-4 border-b-2 border-yellow-400 
      bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 
      text-lg text-right text-richBlack"
      >
        <option>اختر الوجهة</option>
        <option value="دبي">دبي</option>
        <option value="تونس">تونس</option>
        <option value="تركيا">تركيا</option>
      </select>
      <input
        type="date"
        className="w-full py-2 mb-4 border-b-2 border-yellow-400 bg-transparent 
        focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg text-right text-richBlack"
      />
      <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-xl font-bold text-black transition-all duration-300 shadow-lg hover:shadow-xl">
        إرسال
      </button>
    </form>
  );
}
