import React from "react";

export default function AuthLayout(props) {
  const { children, title, sub, footer, background, type } = props;
  return (
    <>
      {type === "login" ? (
        <div
          className={`flex justify-center items-center w-full h-screen ${background} bg-cover`}
        >
          <div className="flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center bg-white w-[35%] rounded-xl">
              <div className="flex flex-col bg-white rounded-xl w-full h-full">
                <div className="flex flex-col justify-center items-center w-full h-[20%] py-10">
                  <h1 className="text-gray-900 font-bold text-5xl uppercase">
                    {title}
                  </h1>
                  <h1 className="text-gray-700 font-bold text-2xl">{sub}</h1>
                </div>
                <div className="flex flex-col justify-center items-center px-10 w-full">
                  {children}
                </div>
                <div className="flex justify-center items-center w-full gap-x-2 py-10">
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex justify-center items-center w-full h-screen ${background} bg-cover`}
        >
          <div className="flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center bg-white w-1/2 h-[90%] overflow-y-auto rounded-xl">
              <div className="flex flex-col bg-white rounded-xl w-full h-full">
                <div className="flex flex-col justify-center items-center w-full py-10">
                  <h1 className="text-gray-900 font-bold text-5xl uppercase">
                    {title}
                  </h1>
                  <h1 className="text-gray-700 font-bold text-2xl">{sub}</h1>
                </div>
                <div className="flex flex-col justify-center items-center px-10 w-full">
                  {children}
                </div>
                <div className="flex justify-center items-center w-full gap-x-2 py-10">
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
