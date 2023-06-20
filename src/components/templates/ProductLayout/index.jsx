import React from "react";
import Button from "../../atoms/Button";
import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";

export default function ProductLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center w-full h-screen bg-redmiTen bg-cover bg-fixed">
        <div className="flex flex-col justify-center items-center w-full h-full bg-black/50 space-y-4">
          <h1 className="text-[60px] font-extrabold text-white underline underline-offset-8 drop-shadow-lg">
            Redmi 10
          </h1>
          <p className="text-md font-semibold text-white text-center w-1/2 drop-shadow-lg">
            50MP AI quad camera | 90Hz AdaptiveSync display
          </p>
          <div className="flex justify-center items-center w-[10%]">
            <Button>Find More</Button>
          </div>
        </div>
      </div>

      {children}

      <Footer />
    </>
  );
}
