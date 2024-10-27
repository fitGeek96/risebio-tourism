const Hero = () => {
  return (
    <section
      id="#hero"
      className="rakkas-regular bg-cover bg-no-repeat bg-center h-screen text-white parallax"
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-[6rem] font-bold text-center">
          اكتشف جمال الجزائر
        </h1>
        <p className="mt-4 text-[2rem]">
          اكتشف عروضنا السياحية المحلية الحصرية
        </p>
        <a
          href="#packages"
          className="fustat-offer mt-8 bg-yellow-500 px-6 py-3 rounded"
        >
          <span className="text-[2rem] font-medium">تصفح العروض</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
