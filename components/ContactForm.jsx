"use client";
import { useState } from "react";
import {
  FaUserGraduate,
  FaPhone,
  FaChevronDown,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { GiLaurelsTrophy } from "react-icons/gi";

const LEVELS = ["متقدم", "متوسط", "مبتدأ"];

export default function AcademicForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    numTel: "",
    level: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    message: "",
  });

  // Keep existing state management and handlers

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
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-french-blue-dark via-french-blue to-french-blue-light">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/95 rounded-xl shadow-academic p-8 w-full max-w-md space-y-8
        border-2 border-french-gold/20 transform transition-transform duration-300 hover:shadow-academic-hover"
      >
        {/* French Academic Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-3xl font-bold font-lora bg-gradient-to-r from-french-blue-dark to-french-gold bg-clip-text text-transparent">
              أقوى دورة تكوينية لاحتراف اللغة الفرنسية مع الأستاذة عبلة
            </h2>
          </div>
          <p className="text-french-blue-dark/80 text-lg font-medium">
            التميز التعليمي على الطريقة الفرنسية
          </p>

          <div className="h-[2px] bg-gradient-to-r from-french-gold via-white to-french-gold w-4/5 mx-auto" />
        </div>

        {/* Form Elements */}
        <div className="space-y-6">
          <div className="relative">
            <Input
              icon={<FaUserGraduate className="text-french-blue-dark/60" />}
              type="text"
              name="fullName"
              placeholder="الاسم الكامل"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <Input
              icon={<FaPhone className="text-french-blue-dark/60" />}
              type="tel"
              name="numTel"
              placeholder="رقم الهاتف"
              value={formData.numTel}
              onChange={handleChange}
            />
          </div>

          {/* French-styled Select */}
          <div className="relative group">
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-12 border-2 border-french-gold/20 rounded-lg
              focus:ring-2 focus:ring-french-blue-dark focus:border-transparent bg-white
              text-french-blue-dark placeholder-french-blue-dark/60 text-right appearance-none
              transition-all duration-200 group-hover:border-french-gold/40"
            >
              <option value="" className="text-french-blue-dark/60">
                المستوى الحالي
              </option>
              {LEVELS.map((level) => (
                <option
                  key={level}
                  value={level}
                  className="text-french-blue-dark"
                >
                  {level}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-french-blue-dark/40 group-hover:text-french-gold" />
          </div>

          {/* Submit Button with French Motto */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-4 bg-gradient-to-r from-french-blue-dark to-french-blue 
            hover:from-french-blue hover:to-french-gold text-white font-semibold rounded-lg
            transition-all duration-300 flex items-center justify-center gap-3
            shadow-md hover:shadow-lg border-2 border-white/20"
          >
            {status.loading ? (
              <ImSpinner8 className="animate-spin text-xl" />
            ) : (
              <>
                <FaBookOpen />
                <span className="relative">تأكيد التسجيل</span>
              </>
            )}
          </button>

          {/* Status Message */}
          {status.message && (
            <p
              className={`text-center mt-4 text-lg ${
                status.message.includes("تم")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}

          {/* French Academic Footer */}
          {/* <div className="pt-6 border-t border-french-gold/20 flex items-center justify-center gap-4">
            <img
              src="/marianne.png"
              alt="French Republic Symbol"
              className="h-8 w-auto opacity-80"
            />
            <span className="text-french-blue-dark/70 text-sm">
              وزارة التربية الوطنية والتعليم العالي
            </span>
          </div> */}
        </div>
      </form>
    </div>
  );
}

const Input = ({ icon, ...props }) => (
  <div className="relative">
    <input
      {...props}
      className="w-full px-4 py-3 pr-12 border-2 border-french-gold/20 rounded-lg
      focus:ring-2 focus:ring-french-blue-dark focus:border-transparent bg-white
      text-french-blue-dark placeholder-french-blue-dark/60 text-right transition-all duration-200
      hover:border-french-gold/40"
    />
    <div className="absolute left-4 top-1/2 -translate-y-1/2">{icon}</div>
  </div>
);
