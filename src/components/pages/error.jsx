import React from "react";

export default function Error() {
  return (
    <div className="flex justify-center items-center w-full h-screen px-96 bg-gray-200">
      <div className="flex flex-col justify-center items-center w-full px-36">
        <h1 className="text-[200px] font-black text-[#265AD4] tracking-widest">
          404
        </h1>
        <p className="text-2xl font-bold text-center ">
          Something went wrong or the page you are looking for was not found
        </p>
      </div>
    </div>
  );
}
