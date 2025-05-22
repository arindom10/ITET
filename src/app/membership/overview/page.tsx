"use client";

import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

type BillingCycle = "yearly" | "monthly";

const MembershipOverview = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");

  const pricing = {
    general: {
      yearly: 5000,
      monthly: 500,
    },
    lifetime: {
      yearly: 15000,
      monthly: 1300,
    },
    renew: {
      yearly: 1000,
      monthly: 100,
    },
  };

  return (
    <div className="bg-[#f8f4ee] min-h-screen px-4 sm:px-8 py-12 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xl text-gray-600">Home {">"} Membership</p>
          <h1 className="text-5xl font-bold text-yellow-800 mt-2">
            Membership Overview
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            Become a recognized member of Bangladesh’s leading textile
            engineering community.
          </p>
        </div>

        <div className="text-center my-12">
          <h2 className="text-2xl font-semibold mb-2">
            Manage All Your Social Media Profiles
            <br />
            From One Place.
          </h2>
          <p className="text-sm text-gray-500 italic">get 3 months free</p>

          <div className="flex justify-center items-center gap-4 mt-4">
            <span className="text-sm">Billed Yearly</span>
            <button
              className="w-14 h-8 bg-gray-300 rounded-full relative flex items-center px-1"
              onClick={() =>
                setBillingCycle(
                  billingCycle === "yearly" ? "monthly" : "yearly"
                )
              }
            >
              <div
                className={`w-6 h-6 bg-[#B07210] rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === "monthly" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span className="text-sm">Billed Monthly</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* General Member */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-sm font-bold text-blue-600 mb-1">
              GENERAL MEMBER
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              Eligibility: Any Textile Graduate.
            </p>
            <h2 className="text-4xl font-bold text-blue-700">
              {pricing.general[billingCycle]} <span className="text-xl">৳</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Per {billingCycle === "yearly" ? "Year" : "Month"}
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Yearly membership with full access to
                resources.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Ability to vote and hold positions
                (based on tenure).
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Eligibility for certificates,
                training, and awards.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Access to journals and newsletters.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Discounted fees for ITET-organized
                events.
              </li>
              <li className="flex items-start gap-2 text-red-500">
                <XCircle size={16} /> Permanent membership status
              </li>
              <li className="flex items-start gap-2 text-red-500">
                <XCircle size={16} /> Student grants or internship benefits
              </li>
            </ul>

            <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
              Apply Now
            </button>
          </div>

          {/* Life-Time Member */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-sm font-bold text-pink-600 mb-1">
              LIFE-TIME MEMBER
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              Eligibility: Graduate With 5+ Years in Textile Industry.
            </p>
            <h2 className="text-4xl font-bold text-pink-700">
              {pricing.lifetime[billingCycle]}{" "}
              <span className="text-xl">৳</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {billingCycle === "yearly" ? "One-time" : "Monthly equivalent"}
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Permanent membership with no renewal
                required.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Voting rights in general meetings.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Recognition in publications and
                website.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Priority access to seminars, training,
                and networking events.
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Free access to most workshops and
                publications.
              </li>
            </ul>

            <button className="mt-6 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
              Apply Now
            </button>
          </div>

          {/* Re-New Membership */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-sm font-bold text-sky-500 mb-1">
              RE-NEW MEMBERSHIP
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              Eligibility: By Special Nomination Only
            </p>
            <h2 className="text-4xl font-bold text-sky-600">
              {pricing.renew[billingCycle]} <span className="text-xl">৳</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">One Time</p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Symbolic membership (no fee required)
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Name listed in honorary members
                directory
              </li>
              <li className="flex items-start gap-2 text-green-600">
                <CheckCircle size={16} /> Invitation to ceremonial or honorary
                events
              </li>
              <li className="flex items-start gap-2 text-red-500">
                <XCircle size={16} /> Voting rights or operational involvement
              </li>
              <li className="flex items-start gap-2 text-red-500">
                <XCircle size={16} /> Regular access to resources or training
              </li>
              <li className="flex items-start gap-2 text-red-500">
                <XCircle size={16} /> Certificate-based recognition or awards
              </li>
            </ul>

            <button className="mt-6 w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipOverview;
