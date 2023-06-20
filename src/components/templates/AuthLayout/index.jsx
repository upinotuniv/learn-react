import React from "react";

export default function AuthLayout(props) {
  const { children } = props;
  return (
    <div className="flex justify-center items-center w-full h-screen bg-signInBg bg-cover bg-center ">
      <div className="flex justify-end items-center absolute bg-wave bg-right bg-cover w-full h-full">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-5xl font-extrabold text-onPrimary drop-shadow-lg animate-bounce">
              REDMI 10
            </h1>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center py-10 px-20 object-center">
            <div className="flex justify-center items-center w-full py-8 px-20">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
