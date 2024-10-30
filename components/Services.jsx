import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "خدمات خاصة بالإمارات العربية المتحدة",
      description:
        "الإمارات العربية المتحدة هي أرض العجائب، ونحن هنا لمساعدتك في اكتشاف كنوزها. يمكن أن تكون عملية الحصول على التأشيرة معقدة، ولكن مع توجيهات خبرائنا، يمكنك الحصول على تأشيرة زيارة إلى الإمارات العربية المتحدة بسهولة، مما يسمح لك باستكشاف جمال وثقافة هذه الأمة الآسرة",
      image: "/images/d.jpg",
      bookingLink: "/#book",
      imagePosition: "right",
    },
    {
      title: "حجز الفنادق",
      description:
        "نحن ملتزمون في وكالتنا بتقديم أفضل خدمة حجز فندقي لعملائنا الكرام، بغض النظر عن وجهتك أو تفضيلاتك. نحن نفخر بتقديم تجربة حجز ممتازة ومريحة، مع التركيز على الجودة والموثوقية",
      image: "/images/h.jpg",
      bookingLink: "/#book",
      imagePosition: "left",
    },
    {
      title: "تأجير السيارات والنقل من المطار",
      description:
        "نحن نؤمن بأن الطريق الأقل ارتيادًا غالبًا ما يؤدي إلى تجارب رائعة. مع خدمتنا الشاملة لتأجير السيارات والنقل من المطار، لديك الحرية في استكشاف الوجهة التي اخترتها بالسرعة التي تناسبك. من السيارات الفاخرة إلى الخيارات العملية، نقدم مجموعة متنوعة من المركبات التي تناسب تفضيلاتك",
      image: "/images/car.jpg",
      bookingLink: "/#book",
      imagePosition: "right",
    },
  ];

  return (
    <section id="services" className="fustat-offer relative py-20 bg-gray-50">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -z-10"></div>

      {/* Main Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl text-richBlack font-bold relative inline-block">
          <span className="relative z-10">الخدمات</span>
          <span className="absolute -top-1 left-0 w-full text-gray-200 z-0">
            الخدمات
          </span>
          <svg
            className="absolute left-0 right-0 bottom-0"
            width="100%"
            height="10"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 25 0, 50 5 T 100 5"
              stroke="yellow" // Change color as needed
              strokeWidth="3" // Adjust the thickness of the line
              fill="none"
            />
          </svg>
        </h2>
      </div>

      {/* Services Container */}
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              service.imagePosition === "left"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            } items-center mb-20 gap-8`}
          >
            {/* Info Section */}
            <div className="flex-1 p-8 text-right">
              <h2 className="text-3xl font-bold mb-6 text-bleuCiel">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
