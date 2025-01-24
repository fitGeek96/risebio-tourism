"use client";
import { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const LEVELS = ["متقدم", "متوسط", "مبتدأ"];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    numTel: "",
    level: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      const response = await fetch("/api/send-selection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus({
        loading: false,
        message: data.success
          ? "تم تسجيلك بنجاح , سيتم التواصل معك في أقرب وقت ممكن"
          : "فشل في إرسال اختيارك.",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        loading: false,
        message: "حدث خطأ أثناء إرسال اختيارك.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg space-y-8 transform transition-all duration-500 hover:scale-105"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-red-400">
            عدد المقاعد جد محودود <br />
            <br /> سجل الآن
          </h2>
          {/* <p className="text-gray-500">سهولة وأمان في الحجز</p> */}
        </div>

        <div className="space-y-6 text-gray-500">
          <Input
            type="text"
            name="fullName"
            placeholder="الاسم و اللقب"
            value={formData.fullName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="numTel"
            placeholder="رقم الهاتف"
            value={formData.numTel}
            onChange={handleChange}
          />

          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="form-input block w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-right
            text-gray-500"
          >
            <option value="">المستوى الحالي</option>
            {LEVELS.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          {/* <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            /> */}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {status.loading ? "جاري الإرسال..." : "إرسال"}
          </button>

          {status.message && (
            <p
              className={`text-center ${
                status.message.includes("تم")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
          <img src="/images/flag.png" alt="french Flag" />
        </div>
      </form>
    </div>
  );
}

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-right transition-all duration-200 bg-gray-50"
  />
);
