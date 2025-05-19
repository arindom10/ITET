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
    <div className="bg-white text-black overflow-hidden ">
      <div className="mt-12">
        <h1 className="text-[#B07210] text-[40px] md:text-[60px] font-bold text-center mt-8">
          History of ITET
        </h1>
      </div>

      <div className="px-4 py-8">
        <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {aboutData.map((item) => (
            <div key={item._id} className=" p-6 flex md:flex-col items-center">
              <div className="flex">
                <div className=" font-semibold mb-4 mx-12 text-[30px] text-[#B07210]">
                  {item.title}
                </div>
                <div className="text-gray-700 mb-4 px-2 text-justify text-[#444444] text-[18px]">
                  {item.bengali}
                </div>
                <div className="text-gray-700 mx-18 text-justify text-[#444444] text-[18px]">
                  {item.english}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-14 mt-12">
          <h1 className="text-6xl font-bold text-[#444444]">
            আইটিইটি-র বিবর্তনের সময়রেখা <br />
            -১৯৮৩ সাল থেকে
          </h1>
          <p className="mt-8 justify-self-end text-[#666666]">
            ১৫ আগস্ট ১৯৮৩ সালে দ্য ইনস্টিটিউশন অব টেক্সটাইল ইঞ্জিনিয়ার্স এন্ড
            টেকনোলজিস্টস, বাংলাদেশ প্রতিষ্ঠার সিদ্ধান্ত গৃহীত হয় এবং ১৭ আগস্ট
            ১৯৮৪ <br />
            সালে গঠনতন্ত্র চূড়ান্ত করে সংগঠনটি আনুষ্ঠানিকভাবে নিবন্ধিত হয়। ওই
            তারিখ থেকে গঠনতন্ত্র কার্যকর হয়।
          </p>
        </div>
      </div>

      {/* timeline  */}
       <div className=" mx-auto px-4 py-16 mb-16">
      {/* Timeline container */}
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-600"></div>

        {/* Timeline nodes */}
        <div className="flex justify-between relative">
          {/* Node 1 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center relative z-10">
              <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            </div>
            <div className="h-6 w-0.5 bg-amber-600 mt-0"></div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-amber-600">১৯৮০</h3>
              <p className="text-sm mt-2 max-w-[350px] text-gray-800">প্রতিষ্ঠার সিদ্ধান্ত গৃহীত</p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center relative z-10">
              <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            </div>
            <div className="h-6 w-0.5 bg-amber-600 mt-0"></div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-amber-600">১৯৮০</h3>
              <p className="text-sm mt-2 max-w-[150px] text-gray-800">উপদেষ্টা বোর্ড এবং প্রস্তুতিমূলক কমিটি গঠন</p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center relative z-10">
              <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            </div>
            <div className="h-6 w-0.5 bg-amber-600 mt-0"></div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-amber-600">১৯৮১</h3>
              <p className="text-sm mt-2 max-w-[150px] text-gray-800">
                খসড়া সংবিধান উপস্থাপন করা হয়েছে, সংশোধনীর প্রস্তাব করা হয়েছে
              </p>
            </div>
          </div>

          {/* Node 4 */}
          <div className="flex flex-col items-center">
           <div className="w-6 h-6 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center relative z-10">
              <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            </div>
            <div className="h-6 w-0.5 bg-amber-600 mt-0"></div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-amber-600">১৯৮১</h3>
              <p className="text-sm mt-2 max-w-[150px] text-gray-800">
                চূড়ান্ত সংবিধান গৃহীত এবং সমিতি নিবন্ধন আইনের অধীনে আনুষ্ঠানিকভাবে নিবন্ধিত সংগঠন
              </p>
            </div>
          </div>

          {/* Node 5 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-amber-600 flex items-center justify-center relative z-10">
              <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            </div>
            <div className="h-6 w-0.5 bg-amber-600 mt-0"></div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-amber-600">১৯৮১</h3>
              <p className="text-sm mt-2 max-w-[180px] text-gray-800">
                সংগঠনটি আনুষ্ঠানিকভাবে সোসাইটিজ রেজিস্ট্রেশন আইন (১৯৬০ সালের আইন নং XXI) এর অধীনে নিবন্ধিত হয়েছিল
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* explore gallary  */}
      <div className="bg-yellow-50">
        <div className="mx-14 pt-12">
          <div className="text-3xl font-thin">
            <h1>
              Explore Our
              <span className="text-[#B07210] px-1">Gallery</span>
            </h1>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <h3>You’ll find something to spark your curiosity and enhance</h3>
            </div>
            <div className="flex items-center gap-2 text-[#B07210] cursor-pointer">
              <p>View All</p>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
        {/* image  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="relative ">
            <img
              className="absolute "
              src="https://i.postimg.cc/zG2tDBXV/Frame-1261155742.png"
              alt=""
            />
            <div className="absolute top-10 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur items-center justify-center flex flex-col p-6 ">
                <GoArrowUpRight className="text-4xl" />
                <h1 className="text-xl font-bold text-center px-4 p-2">
                  Explore <br /> More
                </h1>
              </div>
            </div>
          </div>
          <img
            src="https://i.postimg.cc/zG2tDBXV/Frame-1261155742.png"
            alt=""
          />
          <img
            src="https://i.postimg.cc/zG2tDBXV/Frame-1261155742.png"
            alt=""
          />
          <img
            src="https://i.postimg.cc/zG2tDBXV/Frame-1261155742.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
