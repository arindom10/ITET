"use client";

import Image from "next/image";

const items = [
  {
    id: "01",
    title: "Scholarship",
    description:
      "De create building thinking about your requirement and latest tread on our marketplace area",
    icon: "https://i.ibb.co/n8nZg9qx/682f65eae2155f87cfd8d46bc9ab82d377c427fd.png",
    bg: "bg-gray-50",
    dot: "bg-yellow-500",
    text: "text-yellow-600",
    position: "top",
  },
  {
    id: "02",
    title: "Help Current Students",
    description:
      "De create building thinking about your requirement and latest tread on our marketplace area",
    icon: "https://i.ibb.co/gMwfJXzr/57eaf0ccc1e68ba93d22bd2ae2e3f25a40dc50b0.png",
    bg: "bg-blue-50",
    dot: "bg-blue-500",
    text: "text-blue-600",
    // position: "bottom",
  },
  {
    id: "03",
    title: "Help Alumni",
    description:
      "De create building thinking about your requirement and latest tread on our marketplace area",
    icon: "https://i.ibb.co/WW050Zjd/00c6c2a9660bb7a24fee997c431c446b43c27100.png",
    bg: "bg-pink-100",
    dot: "bg-pink-500",
    text: "text-pink-600",
    // position: "top",
  },
  {
    id: "04",
    title: "Build Our Community",
    description:
      "De create building thinking about your requirement and latest tread on our marketplace area",
    icon: "https://i.ibb.co/8D7dgmgV/82cfdf6ecad44000ed7dca998886925fae74490a.png",
    bg: "bg-cyan-100",
    dot: "bg-cyan-500",
    text: "text-cyan-600",
    // position: "bottom",
  },
];

export default function OurObjectives() {
  return (
    <section className="py-20 bg-white relative overflow-visible">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-20">
        OUR RESPONSIBILITY
      </h2>

      <div className="flex flex-wrap justify-center items-start gap-10 max-w-7xl mx-auto relative z-10 px-4 md:px-0">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative w-full sm:w-64 p-6 rounded-xl shadow-md ${item.bg} z-10 flex flex-col justify-between`}
            style={{
              marginTop: item.position === "top" ? "0" : "125px",
            }}
          >
            {/* Number Position */}
            {item.position === "top" && (
              <div
                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-9 h-9 ${item.dot} rounded-full text-white text-sm font-bold flex items-center justify-center shadow-md z-20`}
              >
                {item.id}
              </div>
            )}

            <div className="flex justify-start mb-4 mt-6">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
            </div>

            <h3 className={`font-semibold ${item.text} text-base mb-2`}>
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {item.position === "bottom" && (
              <div
                className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-9 h-9 ${item.dot} rounded-full text-white text-sm font-bold flex items-center justify-center shadow-md z-20`}
              >
                {item.id}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dotted Arrows */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* From 1 to 2 */}
        <img
          src="https://i.ibb.co/qYj1nJw1/how-work-box-arrow-1-svg-fill-1.png"
          className="absolute left-[29%] top-[430px] hidden md:block"
          alt="arrow 1"
        />

        {/* From 2 to 3 */}
        <img
          src="https://i.ibb.co/2fGrgg6/how-work-box-arrow-2-svg-fill.png"
          className="absolute left-[43%] top-[175px] hidden md:block"
          alt="arrow 2"
        />

        {/* From 3 to 4 */}
        <img
          src="https://i.ibb.co/Kj7752Jh/how-work-box-arrow-1-svg-fill.png"
          className="absolute left-[60%] top-[430px] hidden md:block"
          alt="arrow 3"
        />
      </div>
    </section>
  );
}
