import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 lg:px-16 py-12 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 border-b border-gray-800 pb-10">
          <h2 className="text-xl font-medium mb-4 lg:mb-0">
            Subscribe To Newsletter
          </h2>
          <div className="flex items-center w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your mail"
              className="flex-1 py-2 px-4 md bg-gray-900 text-white outline-none border border-[#B07210]"
            />
            <button className="bg-white text-black px-4 py-2  font-medium hover:bg-[#B07210]">
              Submit Button ↗
            </button>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo and Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="https://i.ibb.co/fdRwkwLH/2c092a7d21883b03ef6b61ab45c3239fbd8b64e6.jpg"
                alt="Logo"
                width={50}
                height={50}
              />
              <div>
                <h3 className="font-semibold text-base">
                  Institution of Textile
                </h3>
                <p className="text-xs text-gray-400">
                  Engineers And Technologist (ITET)
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-3">
              We are passionate education dedicated <br /> to providing
              high-quality resources <br /> learners all backgrounds.
            </p>
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-xl" />
              <p className="text-gray-400 mb-1 hover:text-[#B07210]">
                BSCIC Industrial Estate, Konabari, <br /> Gazipur, Bangladesh
              </p>
            </div>
            <div className="flex gap-1">
              <IoCallOutline />
              <p className="text-gray-400 hover:text-[#B07210]">
                +880 1752-542222
              </p>
            </div>
          </div>

          {/* Our Campus */}
          <div>
            <h4 className="font-semibold text-base mb-3 underline">
              Our Campus
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-500">Academic</li>
              <li className="hover:text-red-500">Athletics</li>
              <li className="hover:text-red-500">Campus life</li>
              <li className="hover:text-red-500">Research</li>
              <li className="hover:text-red-500">Academic Area</li>
            </ul>
          </div>

          {/* Our Pages */}
          <div>
            <h4 className="font-semibold text-base mb-3 underline">
              Our Pages
            </h4>
            <ul className="space-y-2 text-gray-400 ">
              <li className="hover:text-red-500">About</li>
              <li className="hover:text-red-500">Tution Fee</li>
              <li className="hover:text-red-500">Alumni</li>
              <li className="hover:text-red-500">Faculty Staff</li>
              <li className="hover:text-red-500">Event</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="font-semibold text-base mb-3">Recent Posts</h4>
            <div className="space-y-5 text-gray-400">
              <div className="flex space-x-3">
                <Image
                  src="https://i.ibb.co/FbV5xSKP/467d542c319e9cdc5543b13935e551311ed63cfe.png"
                  alt="Post 1"
                  width={60}
                  height={40}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-xs">📅 August 6, 2024</p>
                  <p className="hover:text-[#B07210]">
                    Those Inequalities Are Inequalities That
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Image
                  src="https://i.ibb.co/wZQM19Tc/38d5b44eb123ff5d550c62c1f2a0f28085dc7dbf.png"
                  alt="Post 2"
                  width={60}
                  height={40}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-xs">📅 July 4, 2024</p>
                  <p className="hover:text-[#B07210]">
                    After Decades Of Improvement, Cardiovascular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          Copyright @ 2025. All Rights Reserved by{" "}
          <span className="text-white font-semibold hover:text-[#B07210]">
            360D Soul Limited.
          </span>
        </div>
      </div>
    </footer>
  );
}
