import Image from "next/image";

const committees = [
  {
    title: "Press and Publication Committee",
    members: [
      {
        name: "Engr. Md. Sazedul Haque",
        role: "CONVENER",
        image:
          "https://i.ibb.co/3mj0G4Vt/edaaf96dd5dcf67f85d69f1dca773391ee1ee2dd.png",
      },
      {
        name: "Engr. Md. Saidur Rahman Robin",
        role: "JOINT-CONVENER",
        image:
          "https://i.ibb.co/fBCt4v7/1f83fd012c17d6d4a66fd224e77b4b423ef9f013.png",
      },
      {
        name: "Engr. Suman Mir",
        role: "JOINT-CONVENER",
        image:
          "https://i.ibb.co/9kqkP8fB/fd3755775de957ced8968b7b7c05e47c22c520fa.png",
      },
      {
        name: "Engr. Chandra Shekhar Das",
        role: "MEMBER SECRETARY",
        image:
          "https://i.ibb.co/RGpKFMNh/4d89cd21fc9403283725eae08121928782ca6f41.png",
      },
    ],
  },
  {
    title: "Sports and Cultural Committee",
    members: [
      {
        name: "Engr. S.M. Mizanur Rahman",
        role: "CONVENER",
        image:
          "https://i.ibb.co/FbQJR2n2/53396cfc84277c24cd53cf4f23f65ca392f543cd.png",
      },
      {
        name: "Engr. Md. Saiful Islam Sumon",
        role: "JOINT-CONVENER",
        image:
          "https://i.ibb.co/Lz5MYg03/e1993681379471c63d3b5d551554527063eddf17.png",
      },
      {
        name: "Engr. Istaque Ahmed Nabil",
        role: "JOINT-CONVENER",
        image:
          "https://i.ibb.co/Kx4y2xS1/0add672489d0d819795d67265fd1cc85703b997b.png",
      },
      {
        name: "Engr. Istaque Ahmed Nabil",
        role: "MEMBER SECRETARY",
        image:
          "https://i.ibb.co/F4sVMMpC/97611da0b1d9d4a6e324eecffa24edb84872aeb2.png",
      },
    ],
  },
];

export default function CommitteeSection() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto text-black bg-gray-100">
      <div className="grid md:grid-cols-2 gap-10">
        {committees.map((committee, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-3 mb-6">
              {committee.title}
            </h2>

            {/* First 3 cards in responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.members.slice(0, 3).map((member, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-xl p-4 flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 relative mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-xs font-semibold text-yellow-600 uppercase">
                    {member.role}
                  </p>
                  <p className="text-sm font-medium mt-1">{member.name}</p>
                </div>
              ))}
            </div>

            {/* Fourth card below the first column (takes full width on small screens) */}
            {committee.members.length > 3 && (
              <div className="mt-6 grid grid-cols-1">
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center text-center">
                  <div className="w-32 h-32 relative mb-4">
                    <Image
                      src={committee.members[3].image}
                      alt={committee.members[3].name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-xs font-semibold text-yellow-600 uppercase">
                    {committee.members[3].role}
                  </p>
                  <p className="text-sm font-medium mt-1">
                    {committee.members[3].name}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
