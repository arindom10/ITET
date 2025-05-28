"use client";
import { SlLocationPin } from "react-icons/sl";
import { CiHeadphones } from "react-icons/ci";
import { PiQuestionMarkLight } from "react-icons/pi";
import { DiDropbox } from "react-icons/di";

const contactData = [
  {
    type: "address",
    icon: SlLocationPin,
    title: "ADDRESS",
    details: [
      "House # 34, Road # 4,",
      "Sector # 9",
      "Sonargaon Janapath, Uttara",
      "Model Town,",
      "Dhaka-1230, Bangladesh",
    ],
  },
  {
    type: "support",
    icon: CiHeadphones,
    title: "SUPPORT ENQUIRY",
    details: ["support@itet.com", "+18443165544"],
  },
  {
    type: "ads",
    icon: DiDropbox,
    title: "ADS PARTNERS ENQUIRY",
    details: ["info@itet.com", "+18443165544"],
  },
  {
    type: "general",
    icon: PiQuestionMarkLight,
    title: "GENERAL ENQUIRY",
    details: ["info@itet.com", "+18443165544"],
  },
];

export default function QustionData() {
  return (
    <div className="container max-w-7xl mx-auto p-6 px-4">
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-[#B07210] mr-3"></div>
        <h2 className="text-2xl font-medium text-gray-700">
          Have more questions? Contact us!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border rounded-lg p-6">
        {contactData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              key={index}
            >
              <div className="mb-4 text-gray-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 space-y-1">
                {item.details.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
