"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ContactBar from "../HomePageComponents/ContactBar";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => setOpenDropdown(item);
  const handleMouseLeave = () => setOpenDropdown(null);
  const handleClick = (item: string) => setActiveItem(item);

  const menuItems = [
    "Home",
    "About ITET",
    "Membership",
    "Jobs & Internships",
    "More Pages",
  ];

  const dropdownLinks = [
    "History Of ITET",
    "ITET’s Mission & Vision",
    "Constitution",
    "Committee Members",
    "Welfare Trust",
  ];

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <ContactBar />

      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm text-[#000000] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/fdRwkwLH/2c092a7d21883b03ef6b61ab45c3239fbd8b64e6.jpg"
              alt="ITET Logo"
              width={50}
              height={50}
            />
            <div>
              <h1 className="font-bold text-sm sm:text-base">
                Institution of Textile
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Engineers And Technologist (ITET)
              </p>
            </div>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-6 text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item ? "text-yellow-700 font-semibold" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item)}
                onClick={() => handleClick(item)}
              >
                <div className="flex items-center gap-1">
                  {item}
                  {item !== "Home" && (
                    <FaChevronDown className="text-xs mt-[1px]" />
                  )}
                </div>
              </li>
            ))}

            {/* CTA Button */}
            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Query & Answer
              </button>
            </li>

            {/* Search Icon */}
            <li>
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>

      {/* Global Dropdown */}
      {openDropdown && openDropdown !== "Home" && (
        <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2  bg-white shadow-lg p-6 w-[700px] flex z-40 rounded">
          {/* Left column */}
          <div className="w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-yellow-700">
              {openDropdown}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {dropdownLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="flex justify-between hover:text-yellow-600 cursor-pointer"
                >
                  <span>{link}</span>
                  <span>→</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="w-1/2 pl-6">
            <Image
              src="https://i.ibb.co/KzyDK2HP/25ce165709f6333b6a98502feaf516db0c29a34d.jpg"
              alt="Promo"
              width={300}
              height={200}
              className="rounded"
            />
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-1 text-[#000000]">
                Support for Small Businesses
              </h4>
              <p className="text-xs text-gray-600">
                Explore the many resources available to Dartmouth small business
                owners.
              </p>
              <button className="mt-2 bg-yellow-700 text-white px-4 py-1 text-sm rounded hover:bg-yellow-800">
                Explore All →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
