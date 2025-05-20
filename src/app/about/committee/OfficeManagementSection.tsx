const teamMembers = [
  {
    name: "Engr. Md. Aminul Islam",
    title: "CONVENER",
    image:
      "https://i.ibb.co/cXtBrg9B/1b50ad2a3e67e918605c16e66389fdfab779ffbb.png",
  },
  {
    name: "Engr. Md. Tuhin Ebna Sahir",
    title: "MEMBER SECRETARY",
    image:
      "https://i.ibb.co/qYTyKtCk/b26f850b1bba16cbdaab7b16e4c01946fe189a83.png",
  },
  {
    name: "Engr. Russel Ahmad",
    title: "JOINT-CONVENER",
    image:
      "https://i.ibb.co/FqkRvkhZ/2eb2354834442cbe75f842312a121db389c156b2.png",
  },
  {
    name: "Engr. A.S.M. Ashik Istiak (Likhon)",
    title: "JOINT-CONVENER",
    image:
      "https://i.ibb.co/xt9x0bSR/3b80f2e476e58b617f99ad690d71692d85d1a33a.png",
  },
];

const OfficeManagementSection = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Office Management Commitment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 text-center"
          >
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded"
              />
            </div>
            <p className="text-xs font-bold text-gray-600 uppercase mb-1">
              {member.title}
            </p>
            <p className="text-sm font-medium text-gray-900">{member.name}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 pt-6 mb-6">
        <p className="text-lg font-semibold text-gray-800">
          Our Leaders Are Building A Future Where Textile Engineering Meets
          Innovation, Excellence, And Global Collaboration.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold mb-6">
          Have more questions? Contact us!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="font-semibold text-gray-700 mb-2">ADDRESS</p>
            <p className="text-sm text-gray-600">
              House # 34, Road # 4,
              <br />
              Sector # 9<br />
              Sonargaon Janapath, Uttara Model Town,
              <br />
              Dhaka-1230, Bangladesh
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">SUPPORT ENQUIRY</p>
            <p className="text-sm text-gray-600">
              support@itet.com
              <br />
              +18443165544
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">
              Ads PARTNERS ENQUIRY
            </p>
            <p className="text-sm text-gray-600">
              info@itet.com
              <br />
              +18443165544
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">GENARAL ENQUIRY</p>
            <p className="text-sm text-gray-600">
              info@itet.com
              <br />
              +18443165544
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeManagementSection;
