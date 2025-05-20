'use client';
import QustionData from '@/Components/About/QustionData';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
    const [activeSection, setActiveSection] = useState("types")
  return (
    <div className='bg-[#FFF8F6] text-black overflow-hidden'>
         <div className="mt-12 py-10 mb-10">
        <h1 className="text-[#B07210] text-[40px] md:text-[60px] font-bold text-center mt-8 mb-16">
          Constitution
        </h1>
      </div>


      {/* member details  */}
      <h1 className="text-2xl font-medium text-center mb-8">Membership Details</h1>

      <div className="flex flex-col md:flex-row gap-4 mx-auto max-w-7xl">
        {/* Left sidebar navigation */}
        <div className="w-full md:w-1/4">
          <nav className="flex flex-col space-y-4">
            <button
              className={`px-4 py-2 text-left ${activeSection === "types" ? "bg-blue-500 text-white" : "hover:text-blue-600"}`}
              onClick={() => setActiveSection("types")}
            >
              Types of Members
            </button>
            <button
              className={`px-4 py-2 text-left ${activeSection === "eligibility" ? "bg-blue-500 text-white" : "hover:text-blue-600"}`}
              onClick={() => setActiveSection("eligibility")}
            >
              Eligibility for Becoming Member
            </button>
            <button
              className={`px-4 py-2 text-left ${activeSection === "rights" ? "bg-blue-500 text-white" : "hover:text-blue-600"}`}
              onClick={() => setActiveSection("rights")}
            >
              Rights and Responsibilities
            </button>
          </nav>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-2/5">
              <Image
                src="https://i.postimg.cc/zG2tDBXV/Frame-1261155742.png"
                alt="Textile professional working with equipment"
                width={428}
                height={500}
                className="rounded-md border border-gray-300"
              />
            </div>

            {/* Membership types */}
            <div className="w-full md:w-3/5 border border-gray-200 rounded-md p-4">
              {activeSection === "types" && (
                <>
                  <div className="mb-4">
                    <h2 className="font-medium">1. Life-Time Member</h2>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>For experienced textile professionals.</li>
                      <li>One-time fee.</li>
                      <li>Full voting rights and special recognition.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h2 className="font-medium">2. General Member</h2>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>For textile graduates and diploma holders.</li>
                      <li>Annual fee.</li>
                      <li>Voting rights and event access.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h2 className="font-medium">3. Honorary Member</h2>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Awarded for exceptional contribution to the textile sector.</li>
                      <li>No fee, no voting rights.</li>
                    </ul>
                  </div>
                </>
              )}

              {activeSection === "eligibility" && (
                <div className="mb-4">
                  <h2 className="font-medium">Eligibility Requirements</h2>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Must have a degree or diploma in textile related field.</li>
                    <li>Minimum 2 years of industry experience for Life-Time membership.</li>
                    <li>Recommendation from existing members may be required.</li>
                    <li>Application review by membership committee.</li>
                  </ul>
                </div>
              )}

              {activeSection === "rights" && (
                <div className="mb-4">
                  <h2 className="font-medium">Member Rights & Responsibilities</h2>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Attend annual general meetings and special events.</li>
                    <li>Participate in professional development programs.</li>
                    <li>Adhere to the organization's code of ethics.</li>
                    <li>Represent the organization professionally.</li>
                    <li>Pay membership fees on time (if applicable).</li>
                  </ul>
                </div>
              )}

              <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700 mt-2">
                Download PDF <FaArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-12 border-gray-300" />

      <QustionData />
    </div>
  )
}

export default page