import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-16">
      <div className="flex justify-center items-center w-1/4">
        <h1 className="text-4xl font-bold text-white">Gocen</h1>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <ul className="flex justify-center items-center gap-x-12 text-lg font-thin text-white">
          <li>
            <a href="#" className="hover:font-medium">
              Track Package
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-medium">
              Fee Check
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-medium">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-medium">
              News
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-medium">
              Career
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-1/4">
        <button className="px-8 py-3 rounded-full border border-white text-white text-xl font-medium hover:bg-white hover:text-gray-950 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
