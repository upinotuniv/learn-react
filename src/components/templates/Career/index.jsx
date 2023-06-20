import React from "react";
import DetailApps from "../../organisms/DetailApps";

export default function Career() {
  const data = [
    {
      id: 1,
      image: "/images/integrated-package.png",
      title: "Integrated Package",
      desc: "Supported by our latest system iteration, you can easily track your package from anywhere and anytime. You don't need to worry anymore about the security and condition of the package you sent. just track from hp. all under control",
      row: "flex-row",
    },
    {
      id: 2,
      image: "/images/leading-digital-solution.png",
      title: "Leading digital solution for your company",
      desc: "With the pick-up service system, you don't have to bother managing your business anymore. just prepare your package well then there will be a courier who is willing to pick up your package to be sent as soon as possible",
      row: "flex-row-reverse",
    },
  ];

  return (
    <div className="flex flex-col ustify-center items-center w-full">
      {data.map((news) => (
        <DetailApps
          key={news.id}
          image={news.image}
          title={news.title}
          desc={news.desc}
          row={news.row}
        />
      ))}

      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center space-x-24 py-10">
          <img
            src="/images/download-removebg-preview (3).png"
            alt="logo"
            className="w-full h-32"
          />
          <img
            src="/images/download-removebg-preview (2).png"
            alt="logo"
            className="w-full h-14"
          />
          <img
            src="/images/download-removebg-preview (1).png"
            alt="logo"
            className="w-full h-10"
          />
          <img
            src="/images/download-removebg-preview.png"
            alt="logo"
            className="w-full h-10"
          />
        </div>
      </div>

      {/* Send package quickly and easily right now */}
      <div className="flex justify-center items-center w-full px-40 pt-20 gap-x-20 bg-[#265AD4] shadow-inner">
        <div className="flex flex-1 flex-col justify-start gap-y-6 px-8">
          <h1 className="text-white font-bold text-5xl">
            Send packages quickly and easily right now!
          </h1>
          <p className="text-white font-thin text-lg">
            Feel easy by downloading our application on Google play and App
            Store. Get it now
          </p>
          <div className="flex justify-start items-center gap-x-8">
            <button className="px-4 py-1 bg-black border border-white text-white text-lg font-semibold w-1/3 rounded-lg">
              <div className="flex justify-start items-center w-full py-1 gap-x-1">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/google-play.png"
                    alt="logo"
                    className="w-10 h-8"
                  />
                </div>
                <div className="flex flex-col justify-start items-start w-full">
                  <h1 className="text-xs">GET IT ON</h1>
                  <h1 className="text-lg">Google Play</h1>
                </div>
              </div>
            </button>
            <button className="px-4 py-1 bg-black border border-white text-white text-lg font-semibold w-1/3 rounded-lg">
              <div className="flex justify-start items-center w-full py-1 gap-x-1">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/apple.png"
                    alt="logo"
                    className="w-10 h-8"
                  />
                </div>
                <div className="flex flex-col justify-start items-start w-full">
                  <h1 className="text-xs">Download on the</h1>
                  <h1 className="text-lg">App Store</h1>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img src="/images/phone-1.png" alt="image" />
        </div>
      </div>
    </div>
  );
}
