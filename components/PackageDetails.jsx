import React from "react";
import Link from "next/link";
import "../app/globals.css";
import "../styles/style.css";

const PackageDetails = ({ title, description, price, image }) => {
  return (
    <div className="fustat-offer">
      <div
        className=" mx-auto bg-black bg-opacity-30 shadow-2xl rounded-lg 
      overflow-hidden text-right transition-all duration-300 hover:shadow-3xl"
      >
        {/* Image Section */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-md">
              {title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 bg-richBlack">
          <p
            className="text-shadow text-[1.5rem] md:text-[2rem] font-semibold text-snow 
            text-center mb-4 drop-shadow-md tracking-wide rubik-mono-one-regular"
          >
            {price} DA
          </p>
          <div className="text-center">
            <h2 className=" text-[1.6rem] md:text-[2rem] font-bold text-white mb-4">
              :طريقة الدفع
            </h2>
            <p className="text-gray-200 text-lg mb-4 leading-relaxed">
              أين مكنكم إرسال المبلغ باستخدام CCP إليكم المعلومات الخاصة بالحساب
            </p>

            {/* Payment Information */}
            <ul className="space-y-2 text-center text-gray-100 text-[1.2rem] leading-relaxed">
              <li className="font-bold">رقم الحساب: 00227041</li>
              <li className="font-bold">Risebio الاسم: وكالة السفر</li>
              <li className="font-bold">
                {" "}
                risebio@email.com : البريد الإلكتروني
              </li>
            </ul>

            {/* Important Note */}
            <p className="text-red-500 font-bold mt-6 text-lg">
              بمجرد إرسال المبلغ، يرجى إرسال إيصال الدفع إلى البريد الإلكتروني
              أو رقم الهاتف الموجود أعلاه. سيتم تأكيد حجزكم بعد استلام الدفع.
            </p>
          </div>
          <div className="text-center mt-6 mb-4">
            <Link href="/#packages" passHref>
              <button
                className="inline-block bg-yellow-400 hover:bg-yellow-600 text-richBlack 
            text-lg md:text-xl px-8 py-4 rounded transition-colors duration-300 font-bold drop-shadow-md"
              >
                عودة الى تصفح العروض
              </button>
            </Link>
          </div>
        </div>

        {/* Return Link */}
      </div>
    </div>
  );
};

export default PackageDetails;
