import Image from "next/image";
import StandingCommittees from "./StandingCommittees";
import CommitteeSection from "./CommitteeSection";
import SportsCommitess from "./SportsCommitess";
import OfficeManagementSection from "./OfficeManagementSection";

export default function CommitteeMembers() {
  const members = [
    {
      role: "CONVENOR",
      name: "Engr. Ehsanul Karim Kaiser",
      image:
        "https://i.ibb.co/9kNYGLgT/e7ed2684ac34be3acf3a72e8a178de1f32bfab1f.png",
    },
    {
      role: "CO - CONVENOR",
      name: "Engr. Md. Shamsuzzaman, CIP",
      image:
        "https://i.ibb.co/1tnD21LZ/8036b8490c9231a4b01ff7c51120ebd5b8571951.png",
    },
    {
      role: "CO - CONVENOR",
      name: "Engr. A.T.M Shamsu Uddin Khan",
      image:
        "https://i.ibb.co/yc5YT8cs/7ed531ff9e28ca41cb6dff71c5dabdfcfca3e0a7.png",
    },
    {
      role: "MEMBER SECRETARY",
      name: "Engr. Md. Enayet Hossain",
      image:
        "https://i.ibb.co/qYMy2zrQ/844eed12487f0ce28cc867e6817da04d95de127e.png",
    },
  ];

  const generalMembers = [
    {
      role: "MEMBER",
      name: "Engr. Md. Sayedur Rahman",
      image:
        "https://i.ibb.co/Mx1nD8jW/19bc6484c82e962ea7635a55a1bebf32245bbf37.png",
    },
    {
      role: "MEMBER",
      name: "Engr. A.B.M Sirajul Islam",
      image:
        "https://i.ibb.co/Df55vKxb/bc51a055b27431dac249cd7792758dec7682a840.png",
    },
    {
      role: "MEMBER",
      name: "Engr. A.K.M Mohsin Ahmed",
      image:
        "https://i.ibb.co/6cfxhSCG/b8eaf77dd2633e90f80e1733e16dd5be1d232ee4.png",
    },
    {
      role: "MEMBER",
      name: "Engr. Md. Sumayel Mullik",
      image:
        "https://i.ibb.co/9H4FhRJD/36dab0bb6cbadcda112a880dcd7934474a72672c.png",
    },
    {
      role: "MEMBER",
      name: "Engr. A.S.M Hafizur Rahman",
      image:
        "https://i.ibb.co/60hpnH1B/8601ae664e83b9f73d910ad5c98776b0446bf5c3.png",
    },
    {
      role: "MEMBER",
      name: "Engr. Md. Saiful Islam Shahin",
      image:
        "https://i.ibb.co/99qz1qWm/45dc7e7880a8979256333964e8835b9da183f791.png",
    },
    {
      role: "MEMBER",
      name: "Engr. Muhammad Abu Hossen",
      image:
        "https://i.ibb.co/VYRSFHhW/81107b3bb6a757901f8fc1503f5f28d3c623772e.png",
    },
    {
      role: "MEMBER",
      name: "Engr. Md. Khaledul Islam Mithun",
      image:
        "https://i.ibb.co/VpSH7V8R/4dd8aea966621abe012602b696427eec713aa45d.png",
    },
    {
      role: "MEMBER",
      name: "Engr. Md. Mynul Islam Palash",
      image:
        "https://i.ibb.co/93qHY6hR/27dedd5b3b77c3254117fb3e7719bf1298d5231a.png",
    },
  ];

  const renderStandingCommittee = (images) => {
    const leftImages = images.slice(0, 4);
    const rightImages = images.slice(4);

    const renderColumn = (images) => (
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-3 gap-6">
          {images.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md border border-gray-300"
            >
              <img
                src={img}
                alt={`Committee ${idx + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-300">
            <img
              src={images[3]}
              alt={`Committee 4`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    );

    return (
      <div className="flex flex-col md:flex-row gap-8">
        {renderColumn(leftImages)}
        {renderColumn(rightImages)}
      </div>
    );
  };

  const renderMemberCard = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-4 border-4 border-pink-200"
    >
      <div className="aspect-[3/4] relative mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="text-sm font-semibold text-yellow-600 uppercase mb-1">
        {member.role}
      </div>
      <div className="text-base font-medium text-gray-900 text-center whitespace-pre-line">
        {member.name}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f6f0e8] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-xl text-center font-bold text-black mb-2">
          Home › About Us
        </div>
        <h1 className="text-4xl font-bold text-center text-[#8b5e3c] mb-4">
          Committee Members
        </h1>
        <p className="text-center text-gray-700 mb-8">
          At ITET, our leadership team is made up of visionary textile engineers
          and technologists who work tirelessly to advance the institution’s
          mission.
        </p>

        <h2 className="text-xl font-semibold text-[#1f1f1f] border-l-4 border-pink-500 pl-4 mb-6">
          Interim Convening Committee of the Estate - Bangladesh
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {members.map(renderMemberCard)}
        </div>

        <h2 className="text-xl font-semibold text-[#1f1f1f] border-l-4 border-pink-500 pl-4 mb-6">
          Members
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-6">
          {generalMembers.slice(0, 5).map(renderMemberCard)}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {generalMembers.slice(5).map(renderMemberCard)}
        </div>
        <StandingCommittees />
        <CommitteeSection />
        <SportsCommitess />
        <OfficeManagementSection />
      </div>
    </div>
  );
}
