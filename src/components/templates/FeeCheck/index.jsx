import React, { useState } from "react";
import FeeCheck from "../../organisms/FeeCheck";

export default function FeeCheckLayout(props) {
  const [active, setActive] = useState("FeeCheck");
  const { handleMove } = props;

  return (
    <div className="w-full h-screen">
      <div className="w-full absolute top-72 p-72">
        <div className="flex justify-center items-center bg-white rounded-2xl shadow-2xl py-4">
          <div className="flex flex-col flex-1 justify-center items-center px-10 py-24 space-y-16">
            <img
              src="/images/package.png"
              alt="icon"
              className="w-56 h-56 transform rotate-12"
            />
            <p className="text-[#3B3B3B] text-3xl font-bold text-center">
              We need information about your package
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full space-y-8">
              <div className="flex justify-start items-center w-full px-8 gap-x-2">
                <button
                  className={
                    active === "FeeCheck"
                      ? "px-8 py-4 font-semibold transition duration-300 bg-[#dde7ff] text-[#265AD4] rounded-full"
                      : "px-8 py-4 font-semibold transition duration-300 text-[#3B3B3B] rounded-full"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("FeeCheck");
                  }}
                >
                  Fee Check
                </button>
                <button
                  className={
                    active === "TrackPackage"
                      ? "px-8 py-4 font-semibold transition duration-300 bg-[#dde7ff] text-[#265AD4] rounded-full"
                      : "px-8 py-4 font-semibold transition duration-300 text-[#3B3B3B] rounded-full"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("TrackPackage");
                    handleMove(e);
                  }}
                >
                  Track Package
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <FeeCheck />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
