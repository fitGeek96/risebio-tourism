import Navbar from "@/components/Navbar";
import Image from "next/image";
import "../app/globals.css";
import "../styles/style.css";
import Footer from "@/components/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="bg-black bg-opacity-50 fustat-offer">
      <Navbar />

      <section
        id="about-us"
        className="bg-gradient-to-b from-gray-800 to-black py-20 px-6 
        md:px-12 text-white relative flex flex-col justify-items-center"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/about-bg.jpg"
            alt="Travel background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        {/* Content */}
        <div className="relative z-10 container mx-auto text-center space-y-8 mb-[4rem]">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow-lg">
            من نحن
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
            <span className="text-yellow-500 font-extrabold">Rise</span>
            مرحبًا بكم في
            <p>
              بوابتكم للحصول على أفضل العروض السياحية المذهلة التي تأسر قلوبكم
              نحن نؤمن بأن السفر ليس مجرد اكتشاف أماكن جديدة، بل هو خلق تجارب لا
              تُنسى تعيد الحيوية للحياة. مع فريقنا المتفاني وعروضنا المصممة
              خصيصًا لكم، سنأخذكم في مغامرات ملهمة وجولات سياحية تجعل كل لحظة
              .مميزة
            </p>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
            نهدف إلى تقديم خدمة متميزة تجعل من تخطيط سفركم تجربة سهلة، ممتعة
            ومليئة بالإثارة. بدءًا من حجز الفنادق وتأجير السيارات، وصولاً إلى
            تسهيلات التأشيرة والخدمات السياحية الأخرى، نحن هنا لنجعل كل خطوة من
            .رحلتكم سلسة ومرنة
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
            انضموا إلينا واكتشفوا كيف يمكنكم أن تعيشوا مغامراتكم القادمة مع{" "}
          </p>
          <Link href="/#packages">
            <button className="mt-8 py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
              اكتشف المزيد عن خدماتنا
            </button>
          </Link>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default AboutUs;
