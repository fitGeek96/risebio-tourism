const Hero = () => {
  return (
    <section
      id="hero"
      className="ruwudu-regular relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/adventure-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">
          تجارب لا تُنسى <br /> ومغامرات خرافية تأسر القلوب
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
