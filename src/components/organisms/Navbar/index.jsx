import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full bg-primary p-8 fixed shadow-2xl z-50 bg-waveNav bg-cover bg-center">
      <div className="flex justify-between items-center gap-x-2">
        <div className="flex justify-center items-center">
          <img
            src="/images/download-removebg-preview.png"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-2xl font-extrabold text-white drop-shadow-lg">
          Redmi 10
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex items-center gap-x-12 text-md font-bold ">
          <a
            href="#"
            className="text-white focus:font-black focus:text-primary outline-none focus:text-xl ease-in duration-300"
          >
            <li>Home</li>
          </a>

          <a
            href="#"
            className="text-white focus:font-black focus:text-primary outline-none focus:text-xl ease-in duration-300"
          >
            <li>Detail Product</li>
          </a>

          <a
            href="#"
            className="text-white focus:font-black focus:text-primary outline-none focus:text-xl ease-in duration-300"
          >
            <li>Review</li>
          </a>

          <a
            href="#"
            className="text-white focus:font-black focus:text-primary outline-none focus:text-xl ease-in duration-300"
          >
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
