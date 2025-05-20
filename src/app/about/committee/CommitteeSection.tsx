"use client";

import Image from "next/image";

const committees = {
  "Seminar, Innovation & Skill Advancement": [
    {
      name: "Engr. S.M. Farhana Iqbal",
      role: "CONVENER",
      image:
        "https://i.ibb.co/LbBZmSR/37d9db3d5f7e1ecabf53e99167c56a002ab0109a.png",
    },
    {
      name: "Engr. Monjus S.M. Russel",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/k6QPR9rD/04dfc43f0a121fbed6ff0d8c483236bb8d72693c.png",
    },
    {
      name: "Engr. Md. Rezaul Karim Faruk",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/4ZHRJNVZ/05c663f3843d14bd418cddd4c26b5afcc232b627.png",
    },
    {
      name: "Engr. Md. Farukul Islam Joni",
      role: "MEMBER SECRETARY",
      image:
        "https://i.ibb.co/DgKJpwrR/ea700ba69b407f13db6a6d15396df03cc51038c4.png",
    },
  ],
  "Social Welfare and Event Management": [
    {
      name: "Engr. Muhammad Asiful Alam",
      role: "CONVENER",
      image:
        "https://i.ibb.co/S7MvGgfH/47120d0ab27272dcb9c14c1aa495f591948debb1.png",
    },
    {
      name: "Engr. Md Ayub Hossain Mukul",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/rGkrqWQ4/c333739abb95aeab0e9582e67366d028fcd72d99.png",
    },
    {
      name: "Engr. Md. Anwar Hossain",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/sSpsczm/fd76d801824f0690dbe52f8f06144caa0fd20bed.png",
    },
    {
      name: "Engr. Md. Moydul Islam (Moid)",
      role: "MEMBER SECRETARY",
      image:
        "https://i.ibb.co/27g8jR0j/e4a1650f84c36877c601341e6b93aaf7accf94a0.png",
    },
  ],
};

const MemberCard = ({ name, role, image }) => (
  <div className="bg-white rounded-xl shadow p-3 text-center w-[180px]">
    <Image
      src={image}
      alt={name}
      width={200}
      height={200}
      className="rounded object-cover mx-auto"
    />
    <p className="text-xs text-yellow-600 font-semibold mt-2">{role}</p>
    <p className="text-sm font-medium">{name}</p>
  </div>
);

const CommitteeSection = ({ title, members }) => (
  <div className="w-full md:w-1/2 px-4">
    <h2 className="text-xl font-bold mb-4 border-l-4 border-cyan-500 pl-2">
      {title} Committee
    </h2>

    {/* First row: 3 cards */}
    <div className="flex gap-4 justify-start">
      {members.slice(0, 3).map((member, idx) => (
        <MemberCard key={idx} {...member} />
      ))}
    </div>

    {/* Second row: 1 card under 1st */}
    <div className="mt-4 ml-0">
      <div className="w-[180px]">
        <MemberCard {...members[3]} />
      </div>
    </div>
  </div>
);

export default function StandingCommittees() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="flex flex-col md:flex-row text-black justify-center gap-8">
        {Object.entries(committees).map(([title, members]) => (
          <CommitteeSection key={title} title={title} members={members} />
        ))}
      </div>
    </div>
  );
}
