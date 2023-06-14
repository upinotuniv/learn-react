import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-gray-900 text-white">
      <div className="flex w-full gap-y-2 p-20">
        <div className="flex flex-1 flex-col gap-y-2 p-10">
          <h1 className="text-xl font-bold text-white border-b-4 border-white">
            The Lurah Restaurant
          </h1>
          <p className="text-lg font-normal text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            in molestiae totam tenetur aut quidem obcaecati nihil accusantium
            quis veniam?
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-y-2 p-10">
          <h1 className="text-xl font-bold text-white border-b-4 border-white">
            Contact Us
          </h1>
          <ol className="text-md font-normal text-white">
            <li>Address: Kenangan street 1, Ciputat, Tangerang Selatan</li>
            <li>Phone: +621234567890</li>
            <li>Email: lurah.restaurant@company.co.id</li>
          </ol>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 bg-[#0E0B02]">
        <h1 className="text-white text-sm">
          © Copyright Lurah Restaurant. All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
