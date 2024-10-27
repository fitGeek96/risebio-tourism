"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send message.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-tr from-gray-900 via-purple-900 to-black p-10 w-[90%] md:w-2/3 lg:w-1/2 
      shadow-2xl mx-auto rounded-xl transition-transform duration-300 transform hover:scale-105"
    >
      <h2 className="text-[2.5rem] font-bold mb-8 text-right text-yellow-300 drop-shadow-lg">
        تواصل معنا
      </h2>

      <div className="mb-6">
        <label className="text-[1.2rem] font-semibold block text-yellow-200 mb-3 text-right">
          الاسم
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-3 text-gray-100 bg-black bg-opacity-60 border border-gray-500 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
        />
      </div>

      <div className="mb-6">
        <label className="text-[1.2rem] font-semibold block text-yellow-200 mb-3 text-right">
          الايميل
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-3 text-gray-100 bg-black bg-opacity-60 border border-gray-500 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
        />
      </div>

      <div className="mb-6">
        <label className="text-[1.2rem] font-semibold block text-yellow-200 mb-3 text-right">
          الرسالة
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-5 py-3 text-gray-100 bg-black bg-opacity-60 border border-gray-500 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          rows="5"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-500 text-black font-bold text-xl w-full py-3 rounded-lg hover:bg-yellow-600 
        transition-colors duration-300 hover:shadow-lg focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
      >
        {loading ? "Sending..." : "إرسال"}
      </button>
    </form>
  );
};

export default ContactForm;
