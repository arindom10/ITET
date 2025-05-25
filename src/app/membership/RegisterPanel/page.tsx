"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterPanel() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#d6bd81] to-[#ffffff] px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-md p-8 md:p-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-black">
          Members Registration Panel
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-black">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-black">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
        </div>

        {/* Membership ID */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-black">
            Membership ID (If Any)
          </label>
          <input
            type="text"
            placeholder="Optional"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-black">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+8801XXXXXXXXX"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-1 text-black">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-black">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Re-type your password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center mb-6 text-sm">
          <input
            id="terms"
            type="checkbox"
            className="mr-2 accent-[#8dc5d6] w-4 h-4"
          />
          <label
            htmlFor="terms"
            className="text-[#4c9cb1] font-semibold cursor-pointer"
          >
            I agree to the Terms & Conditions
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-[#b88700] to-[#d6a756] hover:from-[#a17600] hover:to-[#c1923a] transition-all"
        >
          Register Now
        </button>

        {/* Link to Login */}
        <div className="mt-6 text-center text-sm text-[#6c757d]">
          Already a member?{" "}
          <Link
            href="/membership/LoginPanel"
            className="text-[#3a8edb] font-semibold hover:underline"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}
