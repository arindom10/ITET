"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  const aboutData = [
    {
      _id: 1,
      title: "আইটিইটি সম্পর্কে",
      bengali:
        "দ্য ইনস্টিটিউশন অব টেক্সটাইল ইঞ্জিনিয়ার্স অ্যান্ড টেকনোলজিস্টস (সংক্ষেপে আইটিইটি নামে পরিচিত) বাংলাদেশের টেক্সটাইল শিক্ষা ও প্রযুক্তিগত উন্নয়নে নিয়োজিত একটি প্রাতিষ্ঠানিক আইনগত সত্তা সম্পন্ন শীর্ষস্থানীয় পেশাদারী সংস্থা। এটি দেশের টেক্সটাইল খাতে সর্বপ্রাচীন ও সর্বাধিক প্রভাবশালী প্রতিষ্ঠান হিসাবে স্বীকৃত। এই সংস্থাটি টেক্সটাইল শিল্পের সাথে সংশ্লিষ্ট সকল প্রকৌশলী ও প্রযুক্তিবিদের জন্য একটি সমন্বয়কারী মাতৃ সংগঠনের ভূমিকা পালন করে থাকে।",
      english:
        "The Institution of Textile Engineers and Technologists (abbreviated as ITET) is the leading professional body with institutional legal entity dedicated to textile education and technological development in Bangladesh. It is recognized as the oldest and most influential institution in the textile sector of the country. The organization plays the role of a coordinating parent organization for all engineers and technologists associated with the textile industry.",
    },
    {
      _id: 2,
      title: "প্রশাসনিক কাঠামো ও কার্যক্রম",
      bengali:
        "সংস্থার প্রধান কার্যালয় ঢাকা মহানগরের উত্তরা ১১ সেক্টরে অবস্থিত। এটি টেক্সটাইল প্রকৌশলী ও প্রযুক্তিবিদের সামাজিক ও পেশাগত মান উন্নয়নে দ্য ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ (আইইবি)-এর সাথে ঘনিষ্ঠভাবে কাজ করে। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের বস্ত্র অধিদপ্তর টেক্সটাইল শিল্পের অব্যাহত উন্নয়নকল্পে নিয়মিতভাবে আইটিইটি -এর পরামর্শ গ্রহণ করে থাকে।",
      english:
        "The head office of the organization is located in Sector 11, Uttara, Dhaka. It works closely with the Institution of Engineers, Bangladesh (IEB) to improve the social and professional standards of textile engineers and technologists. The Department of Textiles, Government of the People's Republic of Bangladesh, regularly consults ITET for the continuous development of the textile industry.",
    },
    {
      _id: 3,
      title: "প্রতিষ্ঠার ঐতিহাসিক প্রেক্ষাপট",
      bengali:
        "১৫ আগস্ট ১৯৮৩ তারিখে ঢাকায় অনুষ্ঠিত এক সম্মেলনে কতিপয় প্রগতিশীল টেক্সটাইল প্রকৌশলী ও প্রযুক্তিবিদ 'দ্য ইনস্টিটিউশন অব টেক্সটাইল ইঞ্জিনিয়ার্স এন্ড টেকনোলজিস্টস, বাংলাদেশ' নামে একটি পেশাদারী সংগঠন প্রতিষ্ঠার সিদ্ধান্ত গ্রহণ করেন। উক্ত সভায় গঠনতন্ত্র প্রণয়নের জন্য একটি উপদেষ্টা বোর্ড ও প্রস্তুতিমূলক কমিটি গঠিত হয়। প্রস্তুতিমূলক কমিটি কর্তৃক প্রণীত গঠনতন্ত্রের খসড়া ২৭ এপ্রিল ১৯৮৪ তারিখে বাংলাদেশ ম্যানেজমেন্ট ডেভেলপমেন্ট সেন্টারে আয়োজিত সাধারণ সভায় উপস্থাপন করা হয়। সভায় উপস্থিত সদস্যগণ বিস্তারিত আলোচনান্তে কতিপয় সংশোধনীসহ পরবর্তী সভায় চূড়ান্ত অনুমোদনের সুপারিশ করেন। ১৭ আগস্ট ১৯৮৪ তারিখে ঢাকাস্থ পরমাণু শক্তি কমিশন অডিটোরিয়ামে অনুষ্ঠিত অতিরিক্ত সাধারণ সভায় চূড়ান্ত গঠনতন্ত্র গৃহীত হয়। ১৯৬০ সালের সোসাইটি নিবন্ধন আইন (XXI নং আইন) অনুসারে 'দ্য ইনস্টিটিউশন অব টেক্সটাইল ইঞ্জিনিয়ার্স এন্ড টেকনোলজিস্টস, বাংলাদেশ' নামে সংগঠন ১৭ আগস্ট ১৯৮৪ তারিখে আনুষ্ঠানিকভাবে নিবন্ধিত হয়। উক্ত তারিখে গৃহীত সিদ্ধান্ত বলে এই সংবিধান কার্যকর হয়।",
      english:
        "On 15 August 1983, a number of progressive textile engineers and technologists decided to establish a professional organization called 'The Institution of Textile Engineers and Technologists, Bangladesh' at a conference held in Dhaka. An advisory board and a preparatory committee were formed in that meeting to formulate the constitution. The draft constitution prepared by the preparatory committee was presented at the general meeting held at the Bangladesh Management Development Center on 27 April 1984. After detailed discussion, the members present at the meeting recommended final approval with some amendments at the next meeting. The final constitution was adopted at the additional general meeting held at the Atomic Energy Commission Auditorium in Dhaka on 17 August 1984. The organization was officially registered under the name 'The Institution of Textile Engineers and Technologists, Bangladesh' on 17 August 1984 under the Societies Registration Act (Act No. XXI) of 1960. This Constitution comes into force as of the decision taken on that date.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Heading */}
      <section className="px-4 lg:px-16 py-10">
        <h1 className="text-[#B07210] text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          History of ITET
        </h1>
      </section>

      {/* About Section with Two Column Layout */}
      <section className="px-4 lg:px-16 py-4 space-y-10">
        {aboutData.map((item) => (
          <div
            key={item._id}
            className="bg-yellow-50 shadow-md p-6 rounded-lg space-y-4"
          >
            <h2 className="text-2xl font-semibold text-[#B07210] mb-4">
              {item.title}
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 text-[#444444] text-justify text-base leading-relaxed">
                {item.bengali}
              </div>
              <div className="w-full lg:w-1/2 text-[#444444] text-justify text-base leading-relaxed">
                {item.english}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="px-4 lg:px-16 py-12">
        <h2 className="text-3xl font-bold mb-8 text-[#444444]">
          আইটিইটি-র বিবর্তনের সময়রেখা - ১৯৮৩ সাল থেকে
        </h2>
        <div className="relative">
          <div className="absolute top-3 left-0 right-0 h-1 bg-amber-600"></div>
          <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-full md:w-1/5"
              >
                <div className="w-6 h-6 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <div className="h-6 w-px bg-amber-600 mt-0"></div>
                <div className="mt-4 text-center text-sm text-gray-800">
                  <h3 className="text-xl font-bold text-amber-600">১৯৮০ +</h3>
                  <p className="mt-2 max-w-[180px] mx-auto">
                    Timeline description here...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-yellow-50 px-4 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-light">
            Explore Our{" "}
            <span className="text-[#B07210] font-semibold">Gallery</span>
          </h2>
          <div className="flex items-center gap-2 text-[#B07210] cursor-pointer">
            <p>View All</p>
            <GoArrowUpRight />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="relative group">
              <img
                src="https://i.postimg.cc/zG2tDBXV/Frame-1261155742.png"
                alt="Gallery"
                className="w-full h-full object-cover"
              />
              {i === 0 && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center opacity-100">
                  <GoArrowUpRight className="text-3xl" />
                  <p className="text-xl font-bold">
                    Explore
                    <br />
                    More
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
