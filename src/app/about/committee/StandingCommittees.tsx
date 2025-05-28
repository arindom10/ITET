import Image from "next/image";

const committees = {
  Finance: [
    {
      name: "Engr. Md. Zahirul Islam Liton",
      role: "CONVENER",
      image:
        "https://i.ibb.co/1G1t6HTK/cedb720a834428d01435bb807bfe8c878f4482ce.png",
    },
    {
      name: "Engr. Md. Shamim Dewan",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/hJ7BbHFX/33fec0f77bc9ba66797ef1428d964cd5a4c5e5d6.png",
    },
    {
      name: "Engr. Md. Razib Hossain",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/0j1Pktqy/580c22c8f62caf35ba307cb2a812d8f33f6e4e6f.png",
    },
    {
      name: "Engr. Md. Mostafizur Rahman Mamun",
      role: "MEMBER SECRETARY",
      image:
        "https://i.ibb.co/qMxz5Ndb/a419d0620b2e4fe92e0f33e9c1c1149d91a25f21.png",
    },
  ],
  Membership: [
    {
      name: "Engr. Rezaul Karim Reza",
      role: "CONVENER",
      image:
        "https://i.ibb.co/kswPhHsP/7c1788cce76309aa4d92687b8873c15d587b4e8c.png",
    },
    {
      name: "Engr. Md. Ariful Islam",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/MxDNfXNb/666b5826c31e5017b82de8bc5244eb0f168d0caa.png",
    },
    {
      name: "Engr. Md. Nayeb Ul Islam",
      role: "JOINT-CONVENER",
      image:
        "https://i.ibb.co/MDn9VsLx/67ed5cc3b8550897ab55574e1411b8ce7a872d0f.png",
    },
    {
      name: "Engr. Md. Arfan Ali Pk.",
      role: "MEMBER SECRETARY",
      image:
        "https://i.ibb.co/fVVdWFyn/798c199d95d5c784ef6c6838be75f3572ea44de2.png",
    },
  ],
};

type CommitteeMember = {
  name: string;
  role: string;
  image: string;
};

type CommitteeSectionProps = {
  title: string;
  members: CommitteeMember[];
};

const CommitteeSection = ({ title, members }: CommitteeSectionProps) => (
  <div className="w-full md:w-1/2 px-4">
    <h2 className="text-xl font-bold mb-4 border-l-4 border-cyan-500 pl-2">
      {title} Committee
    </h2>
    <div className="grid grid-cols-3 gap-4">
      {members.map((member, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-2 text-center">
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
            className="rounded"
          />
          <p className="text-xs text-yellow-600 font-semibold mt-2">
            {member.role}
          </p>
          <p className="text-sm font-medium">{member.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function StandingCommittees() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h1 className="text-center text-2xl font-bold mb-10 text-black">
        STANDING COMMITTEES OF ITET
      </h1>
      <div className="flex flex-col md:flex-row justify-center text-black gap-8">
        <CommitteeSection title="Finance" members={committees.Finance} />
        <CommitteeSection title="Membership" members={committees.Membership} />
      </div>
    </div>
  );
}
