import React from "react";

const marketData = [
  {
    category: "Yarn Prices",
    icon: "\ud83e\uddf6", // 🧶
    unit: "BDT/kg",
    moreLink: "#",
    items: [
      { company: "ABC Yarns Ltd.", type: "100% Cotton Yarn", price: 250 },
      { company: "XYZ Textiles", type: "Polyester Yarn", price: 220 },
      { company: "Yarn World Ltd.", type: "Melange Yarn", price: 270 },
      { company: "Yarn 2 Ltd.", type: "Melange Yarn", price: 270 },
    ],
  },
  {
    category: "Chemical Prices",
    icon: "\u2697\ufe0f", // ⚗️
    unit: "BDT/kg",
    moreLink: "#",
    items: [
      { company: "XYZ Chemicals", type: "Reactive Dye Red", price: 850 },
      { company: "ColorTech Ltd.", type: "Textile Softener", price: 400 },
      { company: "EcoChem BD", type: "Bio-Enzyme for Washing", price: 750 },
      { company: "Yarn 2 Ltd.", type: "Melange Yarn", price: 270 },
    ],
  },
  {
    category: "Thread Prices",
    icon: "\ud83e\ude9c", // 🧜
    unit: "BDT/cone",
    moreLink: "#",
    items: [
      { company: "MNO Accessories", type: "Sewing Thread 40/2", price: 50 },
      { company: "Button House Ltd.", type: "Embroidery Thread", price: 80 },
    ],
  },
];

const TextileIndustryMarketUpdates = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-16 text-black">
          Textile Industry Market Updates
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {marketData.map((block, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    <span className="mr-2">{block.icon}</span>
                    {block.category}
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600 text-xl">
                    ...
                  </button>
                </div>
                <div className="space-y-3">
                  {block.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-sm items-center"
                    >
                      <div className="w-1/2 text-gray-700 truncate">
                        {item.company}
                      </div>
                      <div className="w-1/3 text-gray-500 truncate">
                        {item.type}
                      </div>
                      <div className="w-1/4 text-green-600 font-medium text-right">
                        {item.price}{" "}
                        <span className="text-xs">{block.unit}</span>
                      </div>
                      <div className="text-xs text-blue-500 whitespace-nowrap ml-2">
                        See More
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-right">
                <a
                  href={block.moreLink}
                  className="text-sm text-blue-500 font-semibold hover:underline"
                >
                  View More {block.category.split(" ")[0]}s →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextileIndustryMarketUpdates;
