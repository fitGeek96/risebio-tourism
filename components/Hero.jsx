const Hero = () => {
  return (
    <section
      id="hero"
      className="ruwudu-regular relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/adventure-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1
          className="text-5xl md:text-6xl sm:text-[1.2rem] font-bold leading-tight 
    animate-fade-in-up py-8 px-[2rem]"
        >
          <p className="mt-10">
            {" "}
            رحلات <span className="text-yellowSolar">لا تُنسى</span>{" "}
          </p>
          <p className="mt-2"> ومغامرات خرافية تأسر القلوب</p>
        </h1>

        <p className="my-6 text-xl md:text-2xl text-gray-200">
          اكتشف عروضنا السياحية المحلية و العالمية
        </p>
        <a
          href="#packages"
          className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 px-8 py-4 text-xl font-semibold rounded transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce"
        >
          تصفح العروض
        </a>
      </div>
    </section>
  );
};

export default Hero;
