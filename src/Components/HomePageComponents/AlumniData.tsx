// components/AlumniSection.tsx

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const alumniList = [
  {
    name: "Tarif Al-Mozahhed",
    designation: "UI & UX Designer, GoInnovior Limited",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    image:
      "https://i.ibb.co/NkLSx6y/5012b13ecaa65890e6dc5c6959bcecc9b4a28ad2.jpg",
  },
  {
    name: "Mahbub J. Showvik",
    designation: "SQA Engineer, GoInnovior Limited",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    image:
      "https://i.ibb.co/Q7cwkZ6D/3591568da9fa93d110ad61e1acb108f7d6c2dae0.png",
  },
  {
    name: "Hasibur Rahman",
    designation: "Full-Stack Developer, GoInnovior Limited",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    image:
      "https://i.ibb.co/Q7nk6knR/851776b420146d51b235213736c6cb817ecb6519.png",
  },
  {
    name: "Tashnim Anin",
    designation: "Solution Architect, GoInnovior Limited",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    image:
      "https://i.ibb.co/dsY1DdHC/2ea83c343c53fe98abd1fd0f31e833e3fd3f2a22.jpg",
  },
];

export default function AlumniSection() {
  return (
    <section className="bg-[#FFF0F3] px-4 py-10 sm:px-6 lg:px-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          MEET OUR PROUD ALUMNI
        </h2>
        <a
          href="#"
          className="text-sm sm:text-base text-[#A94C4C] hover:underline font-medium"
        >
          View All →
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {alumniList.map((alumnus, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow overflow-hidden flex flex-col border border-gray-200 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="w-full h-[280px] relative">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                fill
                className="object-cover "
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-[#EFA00B]">
                {alumnus.name}
              </h3>
              <p className="text-sm font-medium text-gray-600">
                {alumnus.designation}
              </p>
              <h4 className="text-sm font-semibold mt-3">Message</h4>
              <p className="text-sm text-gray-600 mt-1">{alumnus.message}</p>
            </div>

            {/* Social Media Footer */}
            <div className="flex justify-center gap-6 py-3 bg-[#FF5252] text-white">
              <FaFacebookF className="hover:text-gray-200 cursor-pointer" />
              <FaInstagram className="hover:text-gray-200 cursor-pointer" />
              <FaLinkedinIn className="hover:text-gray-200 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
