"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPanel() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#d6bd81] to-[#ffffff] px-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-md p-8 md:p-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-black">
          Members Login Panel
        </h1>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-1 text-black">
            Email or Membership ID
          </label>
          <input
            type="text"
            placeholder="balamia@gmail.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c49c3d]"
          />
        </div>

        {/* Password */}
        <div className="mb-5 relative">
          <label className="block text-sm font-semibold mb-1 text-black">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

        {/* Remember Me */}
        <div className="flex items-center mb-6 text-sm">
          <input
            id="remember"
            type="checkbox"
            className="mr-2 accent-[#8dc5d6] w-4 h-4"
          />
          <label
            htmlFor="remember"
            className="text-[#4c9cb1] font-semibold cursor-pointer"
          >
            Remember Me (7 Days)
          </label>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-[#b88700] to-[#d6a756] hover:from-[#a17600] hover:to-[#c1923a] transition-all"
        >
          Login Now
        </button>

        {/* Forgot Password */}
        <div className="mt-6 text-center text-sm text-[#6c757d]">
          Forgot Your Password?{" "}
          <a href="#" className="text-[#3a8edb] font-semibold hover:underline">
            Reset Now
          </a>
        </div>
      </div>
    </div>
  );
}
