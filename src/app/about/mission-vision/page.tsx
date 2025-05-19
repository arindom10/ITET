import OurResponsibility from "@/Components/HomePageComponents/OurResposibility";
import React from "react";

const page = () => {
  const data = [
    {
      section: {
        color: "amber-700",
        icon: "https://i.postimg.cc/85DFSbLs/dart-mission-goal-success-svgrepo-com-1.png",
        title: "OUR",
        subtitle: "MISSION",
        subtitleColor: "#B07B1C",
        titleColor: "#333",
        paragraph:
          "To promote excellence in textile engineering and technology by empowering professionals through education, innovation, and collaboration for the advancement of the textile industry in Bangladesh and beyond.",
        paragraphColor: "#333",
      },
    },
    {
      section: {
        title: "OUR",
        subtitle: "Vision",
        subtitleColor: "#B07B1C",
        titleColor: "#333",
        paragraph:
          "To be the leading institution that shapes the future of textile engineering and technology, inspiring innovation, professional growth, and sustainable development in the global textile sector.",
        paragraphColor: "#333",
      },
    },
    {
      section: {
        title: "OUR",
        subtitle: "Values",
        subtitleColor: "#B07B1C",
        titleColor: "#333",
        paragraph:
          "Integrity: Upholding the highest ethical standards in all activities.\n" +
          "Excellence: Striving for professional and academic excellence.\n" +
          "Innovation: Encouraging creative solutions and continuous improvement.\n" +
          "Collaboration: Fostering teamwork and partnerships among professionals and industries.\n" +
          "Sustainability: Promoting responsible practices for a better future.\n" +
          "Service: Commitment to serving members, industry, and society with dedication.",
        paragraphColor: "#333",
      },
    },
  ];

  const bengaliData = [
    {
      section: {
        Bengali_title: "আমাদের",
        Bengali_subtitle: "লক্ষ্য",
        Bengali_subtitleColor: "#B07B1C",
        Bengali_titleColor: "#333",
        Bengali_paragraph:
          "বাংলাদেশ এবং তার বাইরেও টেক্সটাইল শিল্পের অগ্রগতির জন্য শিক্ষা, উদ্ভাবন এবং সহযোগিতার মাধ্যমে পেশাদারদের ক্ষমতায়নের মাধ্যমে টেক্সটাইল ইঞ্জিনিয়ারিং এবং প্রযুক্তিতে উৎকর্ষতা প্রচার করা।",
        Bengali_paragraphColor: "#333",
      },
    },
    {
      section: {
        Bengali_title: "আমাদের",
        Bengali_subtitle: "দৃষ্টিভঙ্গি",
        Bengali_subtitleColor: "#B07B1C",
        Bengali_titleColor: "#333",
        Bengali_paragraph:
          "টেক্সটাইল প্রকৌশল ও প্রযুক্তির ভবিষ্যৎ গঠনকারী, বিশ্বব্যাপী টেক্সটাইল খাতে উদ্ভাবন, পেশাদার প্রবৃদ্ধি এবং টেকসই উন্নয়নে অনুপ্রেরণা যোগানো শীর্ষস্থানীয় প্রতিষ্ঠান হওয়া।",
        Bengali_paragraphColor: "#333",
      },
    },
    {
      section: {
        Bengali_title: "আমাদের",
        Bengali_subtitle: "মূল্যবোধ",
        Bengali_subtitleColor: "#B07B1C",
        Bengali_titleColor: "#333",
        Bengali_paragraph:
          "সততা: সকল কর্মকাণ্ডে সর্বোচ্চ নৈতিক মান বজায় রাখা।\n" +
          "উৎকর্ষ: পেশাদার এবং একাডেমিক উৎকর্ষের জন্য প্রচেষ্টা।\n" +
          "উদ্ভাবন: সৃজনশীল সমাধান এবং ক্রমাগত উন্নতিকে উৎসাহিত করা।\n" +
          "সহযোগিতা: পেশাদার এবং শিল্পের মধ্যে দলগত কাজ এবং অংশীদারিত্ব বৃদ্ধি করা।\n" +
          "স্থায়িত্ব: উন্নত ভবিষ্যতের জন্য দায়িত্বশীল অনুশীলনের প্রচার।\n" +
          "সেবা: নিষ্ঠার সাথে সদস্য, শিল্প এবং সমাজের সেবা করার প্রতিশ্রুতি।",
        Bengali_paragraphColor: "#333",
      },
    },
  ];

  return (
    <div className="bg-[#FFF8F6] overflow-hidden">
        <div className="mt-12 py-10 mb-10">
        <h1 className="text-[#B07210] text-[40px] md:text-[60px] font-bold text-center mt-8 mb-16">
          ITET’s Mission & Vision
        </h1>
      </div>
      <OurResponsibility/>
    
        <div className="flex flex-col md:flex-row ">
          {/* Left sidebar with logo */}
         

          {/* Content area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-12 mt-8 md:mt-0 py-4">
            {/* English content */}
            {data.map((item, index) => (
              <div className="flex-1" key={index}>
                <h2
                  className="text-xl font-medium mb-2"
                  style={{ color: item.section.titleColor }}
                >
                  {item.section.title}
                </h2>
                <h1
                  className="text-5xl font-bold mb-6"
                  style={{ color: item.section.subtitleColor }}
                >
                  {item.section.subtitle}
                </h1>
                <p
                  className="leading-relaxed"
                  style={{ color: item.section.paragraphColor }}
                >
                  {item.section.paragraph}
                </p>
              </div>
            ))}

            {/* Bengali content */}
            {bengaliData.map((item, index) => (
              <div className="flex-1" key={index}>
                <h2
                  className="text-xl font-medium mb-2"
                  style={{ color: item.section.Bengali_titleColor }}
                >
                  {item.section.Bengali_title}
                </h2>
                <h1
                  className="text-5xl font-bold mb-6"
                  style={{ color: item.section.Bengali_subtitleColor }}
                >
                  {item.section.Bengali_subtitle}
                </h1>
                <p
                  className="leading-relaxed"
                  style={{ color: item.section.Bengali_paragraphColor }}
                >
                  {item.section.Bengali_paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border line */}
        <div className="mt-16 border-b w-2 h-2  border-[#B07B1C]"></div>
      
    </div>
  );
};

export default page;
