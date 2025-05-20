import Image from "next/image";
import React from "react";
import QustionData from "@/Components/About/QustionData";

const page = () => {
  const trusteeImg = [
    {
      id: 1,
      img: "https://i.postimg.cc/9fbCshYm/b129c1e4400beb9fdfdc78748ddc9d512af3b7c9.jpg",
      name: "Engr. Nasima Yasmin",
      position: "Trustee Secretary",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/LX0R63WG/17495777b6f375488fdef0cd10bfe5a730b103ac.jpg",
      name: "Engr. A.K.M. Jalal Uddin",
      position: "Trustee Secretary",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/Gty03wGs/bb7f73a9cf8f176d0c59d17f25b009f126d2719a.jpg",
      name: "Prof. Dr. Farzana Ahmed",
      position: "Trustee Secretary",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/bdc7sC9V/1e832cd596aa7da2d61d5f318e6fe73ff4f2a059.jpg",
      name: "Engr. Syed Kamal Hossain",
      position: "Trustee Member",
    },
  ];
  return (
    <div className="bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mt-12 py-10 mb-10">
          <h1 className="text-[#B07210] text-[40px] md:text-[60px] font-bold text-center mt-8 mb-16">
            Welfare Trust
          </h1>
          <p className="items-center justify-center mx-auto leading-relaxed w-3/5">
            A pillar of wisdom, experience, and ethical leadership — the Board
            of Trustees of ITET ensures the institution stays true to its
            mission, fosters transparency, and promotes sustainable growth in
            the textile engineering community.
          </p>
        </div>
        <div className="flex items-center ">
          <div className="w-1 h-6 bg-[#B07210] mr-6"></div>
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-[#444444] mx-2">
              Responsibilities
            </h2>
          </div>
        </div>
        <div className="space-y-2 py-4">
          <li>Strategic Oversight & Vision.</li>
          <li>Policy and Governance Review.</li>
          <li>Financial and Ethical Accountability.</li>
          <li>Upholding the Constitution and Core Values.</li>
          <li>Supporting Institutional Partnerships and Growth</li>
        </div>

        {/* meet  */}
        <div className="flex items-center mx-4 py-8">
          <div className="w-1 h-6 bg-[#B07210] mr-6"></div>
          <div className="flex items-center mb-0">
            <h2 className="text-3xl font-bold text-[#444444]">
              Meet Our Trustees
            </h2>
          </div>
        </div>
        {/* image  meet */}
        <div className="mt-8">
          <div className="w-[350px] p-3 bg-[#FFDCE3] rounded-t-lg ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://i.postimg.cc/0jNKMncv/1af2086220affecd5f498aeca93f64918a91bf86.jpg"
                alt="Textile professional working with equipment"
                width={320}
                height={600}
                className="h-110 object-cover rounded-md items-center justify-center mx-auto "
              />
            </div>
            <div className="bg-[#FCE8E8] w-80 h-16 rounded mt-2 items-center justify-center mx-auto">
              <div className="m-4 mt-2">
                <h1 className="text-xl font-bold text-[#B07210]">Chairman</h1>
                <p className="text-xl font-thin">Prof. Dr. Mahmudul Haque</p>
              </div>
            </div>
          </div>
        </div>
        {/* image end meet  */}
        <div className="py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto">
            {trusteeImg.map((item) => (
              <div
                key={item.id}
                className="w-[250px] p-3 bg-[#FFDCE3] rounded-lg mx-auto"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={340}
                    height={600}
                    className="h-100 object-cover rounded-md mx-auto"
                  />
                </div>
                <div className="bg-[#FCE8E8] w-56 h-16 rounded mt-2 mx-auto flex flex-col px-4 py-2">
                  <h1 className="text-[16px] font-bold text-[#B07210]">
                    {item.position}
                  </h1>
                  <p className="text-[16px] font-thin">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* meet  */}
        <div className="flex items-center mx-4 py-8">
          <div className="w-1 h-6 bg-[#B07210] mr-6"></div>
          <div className="flex items-center mb-0">
            <h2 className="text-3xl font-bold text-[#444444]">
              Trustee Secretary
            </h2>
          </div>
        </div>

        {/* image  trustee */}
        <div className="py-20">
          <div className="w-[350px] p-3 bg-[#FFDCE3] rounded-t-lg ">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://i.postimg.cc/bdc7sC9V/1e832cd596aa7da2d61d5f318e6fe73ff4f2a059.jpg"
                alt="Textile professional working with equipment"
                width={320}
                height={600}
                className="h-110 object-cover rounded-md items-center justify-center mx-auto "
              />
            </div>
            <div className="bg-[#FCE8E8] w-80 h-16 rounded mt-2 items-center justify-center mx-auto">
              <div className="m-4 mt-2">
                <h1 className="text-xl font-bold text-[#B07210]">Trustee Secretary</h1>
                <p className="text-xl font-thin">Engr. Syed Kamal Hossain</p>
              </div>
            </div>
          </div>
        </div>
        {/* image end trustee  */}
        <div>
          <div className="flex items-center mx-4 ">
            <div className="w-1 h-6 bg-[#B07210] mr-6"></div>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold text-[#444444]">
                Term & Operations
              </h2>
            </div>
          </div>
          <div className="space-y-2 py-4">
            <li>
              <span className="font-bold">Tenure:</span> 3-year renewable terms.
            </li>
            <li>
              <span className="font-bold">Meetings:</span> Twice annually or as
              needed..
            </li>
            <li>
              <span className="font-bold">Reports:</span> Summary decisions
              shared with Executive Committee.
            </li>
          </div>
        </div>
        {/* term and condition list end  */}

        <div className="flex items-center mx-4 py-6">
          <div className="w-1 h-14 bg-[#B07210] mr-6"></div>
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-[#444444]">
              The Board of Trustees ensures that ITET remains strong,
              future-ready, and accountable to its members and the nation.
            </h2>
          </div>
        </div>
        <hr className="mt-12 mb-12 border-gray-300" />

        <QustionData />
      </div>
    </div>
  );
};

export default page;
