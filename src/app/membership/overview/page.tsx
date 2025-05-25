"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MembershipPlans() {
  const [billedYearly, setBilledYearly] = useState(true);

  const pricing = {
    yearly: {
      general: "5,000",
      lifetime: "15,000",
      renew: "1,000",
    },
    monthly: {
      general: "500",
      lifetime: "1,500",
      renew: "100",
    },
  };

  const activeBg = billedYearly ? "bg-blue-100" : "bg-pink-100";

  return (
    <div className="bg-[#f5f0e9] min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-gray-800">
          Home &gt; Membership
        </h2>
        <h1 className="text-4xl font-extrabold text-yellow-800 my-2">
          Membership Overview
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Become a recognized member of Bangladesh’s leading textile engineering
          community.
        </p>

        <h2 className="text-2xl text-black font-bold">
          Manage All Your Social Media Profiles
          <br />
          From One Place.
        </h2>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 my-6">
          <span
            className={
              billedYearly ? "text-blue-700 font-medium" : "text-gray-600"
            }
          >
            Billed Yearly
          </span>
          <Switch
            checked={billedYearly}
            onChange={setBilledYearly}
            className={`${
              billedYearly ? "bg-yellow-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
          >
            <span
              className={`${
                billedYearly ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
          <span
            className={
              !billedYearly ? "text-pink-700 font-medium" : "text-gray-600"
            }
          >
            Billed Monthly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* General Member */}
          <div
            className={`rounded-lg p-6 shadow-md flex flex-col justify-between ${activeBg}`}
          >
            <div>
              <span className="text-sm px-3 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
                GENERAL MEMBER
              </span>
              <p className="text-red-600 text-sm mt-2">
                Eligibility: Any Textile Graduate.
              </p>
              <h3 className="text-4xl font-extrabold my-4 text-blue-700">
                {pricing[billedYearly ? "yearly" : "monthly"].general}৳
              </h3>
              <p className="text-sm mb-4">
                {billedYearly ? "Per Year" : "Per Month"}
              </p>

              <ul className="text-left text-sm space-y-2 text-gray-700">
                <li>✅ Yearly membership with full access to resources.</li>
                <li>✅ Ability to vote and hold positions.</li>
                <li>✅ Certificates, training, and awards.</li>
                <li>✅ Journals and newsletters.</li>
                <li>✅ Discounted event fees.</li>
                <li className="text-red-600">❌ Permanent membership status</li>
                <li className="text-red-600">
                  ❌ No student grants or internship benefits
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
              Apply Now
            </button>
          </div>

          {/* Life-time Member */}
          <div
            className={`rounded-lg p-6 shadow-md flex flex-col justify-between ${activeBg}`}
          >
            <div>
              <span className="text-sm px-3 py-1 border border-pink-600 rounded-full text-pink-600 font-semibold">
                LIFE-TIME MEMBER
              </span>
              <p className="text-red-600 text-sm mt-2">
                Eligibility: Graduate with 5+ Years in Textile Industry.
              </p>
              <h3 className="text-4xl font-extrabold my-4 text-pink-700">
                {pricing[billedYearly ? "yearly" : "monthly"].lifetime}৳
              </h3>
              <p className="text-sm mb-4">
                {billedYearly ? "One-Time" : "Monthly (10 mo.)"}
              </p>

              <ul className="text-left text-sm space-y-2 text-gray-700">
                <li>✅ No renewal required.</li>
                <li>✅ Voting rights in general meetings.</li>
                <li>✅ Publication recognition.</li>
                <li>✅ Priority access to events.</li>
                <li>✅ Free workshop access.</li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-pink-700 text-white py-2 rounded hover:bg-pink-800">
              Apply Now
            </button>
          </div>

          {/* Re-new Membership */}
          <div
            className={`rounded-lg p-6 shadow-md flex flex-col justify-between ${activeBg}`}
          >
            <div>
              <span className="text-sm px-3 py-1 border border-cyan-600 rounded-full text-cyan-600 font-semibold">
                RE-NEW MEMBERSHIP
              </span>
              <p className="text-red-600 text-sm mt-2">
                Eligibility: By Special Nomination Only
              </p>
              <h3 className="text-4xl font-extrabold my-4 text-cyan-700">
                {pricing[billedYearly ? "yearly" : "monthly"].renew}৳
              </h3>
              <p className="text-sm mb-4">
                {billedYearly ? "One-Time" : "Monthly"}
              </p>

              <ul className="text-left text-sm space-y-2 text-gray-700">
                <li>✅ Symbolic membership</li>
                <li>✅ Listed in honorary directory</li>
                <li>✅ Invitation to honorary events</li>
                <li className="text-red-600">
                  ❌ No voting rights or involvement
                </li>
                <li className="text-red-600">❌ No training resources</li>
                <li className="text-red-600">❌ No certificates or awards</li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-cyan-700 text-white py-2 rounded hover:bg-cyan-800">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
