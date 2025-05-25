"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ContactBar from "../HomePageComponents/ContactBar";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (item: string) => setOpenDropdown(item);
  const handleMouseLeave = () => setOpenDropdown(null);
  const handleClick = (item: string) => setActiveItem(item);
  const toggleDropdown = (item: string) => {
    if (openDropdown === item) setOpenDropdown(null);
    else setOpenDropdown(item);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About ITET", path: "/AboutITET", hasDropdown: true },
    { label: "Membership", path: "/membership", hasDropdown: true },
    { label: "Jobs & Internships", path: "/jobs", hasDropdown: true },
    { label: "More Pages", path: "/more", hasDropdown: true },
  ];

  const dropdownLinksMap: Record<string, { label: string; path: string }[]> = {
    "About ITET": [
      { label: "History Of ITET", path: "/about/history" },
      { label: "ITET’s Mission & Vision", path: "/about/mission-vision" },
      { label: "Constitution", path: "/about/constitution" },
      { label: "Committee Members", path: "/about/committee" },
      { label: "Welfare Trust", path: "/about/welfare-trust" },
    ],
    Membership: [
      { label: "Membership Overview", path: "/membership/overview" },
      {
        label: "Directory & Update Information",
        path: "/membership/LoginPanel",
      },
      { label: "Register Now", path: "/membership/register" },
    ],
    "Jobs & Internships": [
      { label: "Job Circulars", path: "/jobs/circulars" },
      { label: "Internship Opportunities", path: "/jobs/internships" },
    ],
    "More Pages": [
      { label: "News & Events", path: "/more/news-events" },
      { label: "Partnerships", path: "/more/partnerships" },
      { label: "Directory & Member List", path: "/more/directory" },
      { label: "CV & Bio-Data Resources", path: "/more/cv-biodata" },
      { label: "Wall Magazine", path: "/more/wall-magazine" },
      { label: "Ask & Answer→Gallery", path: "/more/gallery" },
    ],
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <ContactBar />

      <nav className="bg-white border-b shadow-sm text-[#000000] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
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

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-6 text-sm font-medium">
            {menuItems.map(({ label, path, hasDropdown }) => (
              <li
                key={label}
                className={`relative cursor-pointer ${
                  activeItem === label ? "text-yellow-700 font-semibold" : ""
                }`}
                onMouseEnter={() => hasDropdown && handleMouseEnter(label)}
                onClick={() => handleClick(label)}
              >
                <Link href={path} className="flex items-center gap-1">
                  {label}
                  {hasDropdown && (
                    <FaChevronDown className="text-xs mt-[1px]" />
                  )}
                </Link>
              </li>
            ))}

            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Query & Answer
              </button>
            </li>

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

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col gap-2 px-4 py-3">
              {menuItems.map(({ label, path, hasDropdown }) => (
                <li key={label} className="border-b last:border-none">
                  {hasDropdown ? (
                    <>
                      <button
                        className={`w-full flex justify-between items-center py-2 text-left ${
                          activeItem === label
                            ? "text-yellow-700 font-semibold"
                            : "text-gray-700"
                        }`}
                        onClick={() => {
                          toggleDropdown(label);
                          setActiveItem(label);
                        }}
                      >
                        <span>{label}</span>
                        <FaChevronDown
                          className={`transition-transform ${
                            openDropdown === label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === label && (
                        <ul className="pl-4 pb-2 text-sm text-gray-600 space-y-1">
                          {dropdownLinksMap[label]?.map(({ label, path }) => (
                            <li key={label}>
                              <Link
                                href={path}
                                className="block hover:text-yellow-600"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={path}
                      className={`block py-2 ${
                        activeItem === label
                          ? "text-yellow-700 font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        setActiveItem(label);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}

              <li>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm mt-2">
                  Query & Answer
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop Global Dropdown */}
      {openDropdown && !mobileMenuOpen && (
        <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-6 w-[700px] flex z-40 rounded">
          <div className="w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-yellow-700">
              {openDropdown}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {dropdownLinksMap[openDropdown]?.map(({ label, path }) => (
                <li
                  key={label}
                  className="flex justify-between hover:text-yellow-600 cursor-pointer"
                >
                  <Link href={path} className="flex justify-between w-full">
                    <span>{label}</span>
                    <span>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
              <button className="mt-2 bg-yellow-800 text-white px-4 py-1 text-sm rounded hover:bg-yellow-500">
                Explore All →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
