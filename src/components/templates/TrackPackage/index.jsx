import React, { useState } from "react";
import TrackPackage from "../../organisms/TrackPackage";

export default function TrackPackageLayout(props) {
  const [active, setActive] = useState("TrackPackage");
  const { handleMove } = props;

  return (
    <div className="w-full h-screen">
      <div className="w-full absolute top-72 p-72">
        <div className="flex bg-white rounded-2xl shadow-2xl py-4">
          <div className="flex flex-col flex-1 justify-center items-center px-10 py-24 space-y-16">
            <img
              src="/images/delivery.png"
              alt="icon"
              className="w-56 h-56 transform"
            />
            <p className="text-[#3B3B3B] text-3xl font-bold text-center">
              Track packages easier with Gocen Platform
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center w-full space-y-8">
              <div className="flex justify-start items-center w-full px-8 pb-32 pt-8 gap-x-2">
                <button
                  className={
                    active === "FeeCheck"
                      ? "px-8 py-4 font-semibold transition duration-300 bg-[#dde7ff] text-[#265AD4] rounded-full"
                      : "px-8 py-4 font-semibold transition duration-300 text-[#3B3B3B] rounded-full"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("FeeCheck");
                    handleMove(e);
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
                  }}
                >
                  Track Package
                </button>
              </div>
              <div className="flex justify-center items-center w-full">
                <TrackPackage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
