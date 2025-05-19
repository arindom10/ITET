import Image from "next/image";

export default function ChairmanSection() {
  const chairmanData = [
    {
      image:
        "https://i.ibb.co/21X3nRxs/df808745d4eeae509bbfb902288411fb819999c2.jpg",
      signature:
        "https://i.ibb.co/v6CH0RzH/145069a46d6738ab0c1e4eebd52838504c872aee-1.png",
      name: "Prof. Dr. XYZ Rahman",
    },
    {
      image:
        "https://i.ibb.co/4g22b21k/1af2086220affecd5f498aeca93f64918a91bf86.jpg",
      signature:
        "https://i.ibb.co/v6CH0RzH/145069a46d6738ab0c1e4eebd52838504c872aee-1.png",
      name: "Prof. Dr. XYZ Rahman",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-center text-xl text-black sm:text-2xl md:text-3xl font-semibold mb-12">
        MESSAGE FROM THE CHAIRMAN
      </h2>

      {/* Chairman Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chairmanData.map((chairman, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-[#F8F8F8] rounded-xl shadow p-6 gap-6"
          >
            {/* Left Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={chairman.image}
                alt="Chairman"
                width={200}
                height={200}
                className="rounded-[30px] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <Image
                src={chairman.signature}
                alt="Signature"
                width={120}
                height={60}
                className="mx-auto md:mx-0 mb-2"
              />
              <p className="text-sm text-gray-500">Honorable</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {chairman.name}
              </h3>
              <p className="text-base font-semibold text-black mt-1">
                Chairman
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Ensuring Quality Textile Education
              </p>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                It’s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text since the
                1500s...
              </p>
              <button className="mt-4 bg-[#1A4ED3] text-white text-sm px-5 py-2 rounded hover:bg-blue-700 transition">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Image */}
      <div className="mt-12 flex justify-center">
        <Image
          src="https://i.ibb.co/jP8KrTNN/01fcf4ad264dcedb4247d60ae95682cebf750f28.png"
          alt="Bkash Banner"
          width={1200}
          height={300}
          className="w-full max-w-[1200px]  object-cover rounded-md"
        />
      </div>
    </section>
  );
}
