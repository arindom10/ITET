import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function ContactBar() {
  return (
    <div className="bg-[#26A9C4] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 py-2 px-4">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 max-w-xs">
            <FaMapMarkerAlt className="mt-1 text-xl shrink-0" />
            <span>
              BSCIC Industrial Estate, Konabari,
              <br />
              Gazipur, Bangladesh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@itet.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+880 1752-542222</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <Link href="#" className="hover:underline">
              Members Portal
            </Link>
            <Link href="#" className="hover:underline">
              Advertiser Portal
            </Link>
            <Link href="#" className="hover:underline">
              Contact Us
            </Link>
          </div>

          <span className="hidden sm:block mx-2">|</span>

          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
