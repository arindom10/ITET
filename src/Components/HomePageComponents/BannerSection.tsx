"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partnerLogos = [
  "https://i.ibb.co/pr39PYRf/7dfa5b1677ff2de6870719e6593c44aa6aaf94bf.png",
  "https://i.ibb.co/twsp2F7d/56f31f6e6f87001e1ac02f74c1b92ca5f0d38689.png",
  "https://i.ibb.co/gFMrQGkd/6a089f2dbacce4dd5e472e9b26fd918862facd28.png",
  "https://i.ibb.co/nMfmrnpj/d9058bc76b06f540270083c229d818f43fcdc217.jpg",
  "https://i.ibb.co/mVmGvCQY/07207fb1bc8058dac22c492ad74da75744edd2bc.png",
];

const slideImages = [
  "https://i.ibb.co/jZLhcBxr/baf04c1c0efad031f5101798ff8561bdc2173154.jpg",
  "https://i.ibb.co/0yHDkm5w/71f769450a576f1910d5f25aa5bf668d39c722da.png",
  "https://i.ibb.co/jP27jRFW/53ce0043fe2aa4750badf2be78826ab1a260874f.png",
  "https://i.ibb.co/JWTwcXZJ/25ce165709f6333b6a98502feaf516db0c29a34d-1.jpg",
];

const events = [
  {
    title: "Bridging Cultures: Global Perspectives in",
    date: "10 May 2025",
    time: "9.00 AM to 5.00 PM",
    batch: "All Batch",
    location: "ITET, Dhaka",
  },
  {
    title: "Bridging Cultures: Global Perspectives in",
    date: "10 May 2025",
    time: "9.00 AM to 5.00 PM",
    batch: "All Batch",
    location: "ITET, Dhaka",
  },
  {
    title: "Bridging Cultures: Global Perspectives in",
    date: "10 May 2025",
    time: "9.00 AM to 5.00 PM",
    batch: "All Batch",
    location: "ITET, Dhaka",
  },
];

export default function BannerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 items-stretch">
        {/* Left + Event Section */}
        <div className="col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stay Connected + Partner Section */}
            <div className="bg-[#FAF2E9] p-6 rounded shadow">
              <h2 className="text-xl font-semibold text-[#A96928] mb-2">
                Stay Connected. <br /> Grow Together.
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Join the Textile Alumnl Network & access exclusive benefits.
                Join the Textile Alumnl Network & access exclusive benefits.Join
                the Textile Alumnl Network & access exclusive benefits.
              </p>
              <div className="flex gap-3 mb-6">
                <button className="bg-[#C2855A] text-white px-4 py-2 rounded text-sm hover:bg-[#a96928]">
                  Become A Member
                </button>
                <button className="border border-[#C2855A] text-[#C2855A] px-4 py-2 rounded text-sm hover:bg-[#C2855A] hover:text-white">
                  Become Ads Partner
                </button>
              </div>

              {/* Partner Slider - moved below */}
              <div className="mt-6 bg-white ">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#444]">
                    Our Premium <span className="text-[#C2855A]">Partners</span>
                  </h3>
                  <button className="text-sm text-[#A96928] hover:underline flex items-center gap-1">
                    View All <span className="text-xs">↗</span>
                  </button>
                </div>
                <Swiper
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  speed={3000}
                  freeMode={true}
                  grabCursor={true}
                  slidesPerView="auto"
                  spaceBetween={20}
                  modules={[Autoplay]}
                >
                  {partnerLogos.map((logo, i) => (
                    <SwiperSlide key={i} style={{ width: "auto" }}>
                      <div className="flex justify-center items-center p-2">
                        <img
                          src={logo}
                          alt={`partner-${i}`}
                          className="max-h-12 object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Events Section */}
            <div className="bg-[#E8F5FA] p-4 rounded shadow h-fit">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-700">
                  Up–Coming Events
                </h3>
                <button className="text-sm text-[#26A9C4] hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-3 max-h-[300px] overflow-y-auto scrollbar-thin">
                {events.map((event, idx) => (
                  <div key={idx} className="bg-white p-3 rounded shadow-sm">
                    <p className="font-medium text-sm text-gray-800 mb-1">
                      {event.title}
                    </p>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-600 mt-1">
                      <span className="text-[#FF7A7A] bg-[#FFECEC] px-2 py-[1px] rounded">
                        {event.batch}
                      </span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-6">
            <img
              src="https://i.ibb.co/RTTXSqTJ/3b2430433b1f139147863fc5549cc411a1cf06da.png"
              alt="bottom-banner"
              className="w-full h-3/5 object-cover rounded"
            />
          </div>
        </div>

        {/* Right Side Slide Section - vertical */}
        <div className="col-span-1 flex flex-col">
          <div className="relative w-full h-full min-h-[100%] rounded overflow-hidden">
            {slideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`w-full h-10/12 object-cover rounded transition-opacity duration-700 absolute top-0 left-0 ${
                  currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
