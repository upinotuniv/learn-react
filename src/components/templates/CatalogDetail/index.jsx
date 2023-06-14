import React from "react";
import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";

export default function CatalogDetail(props) {
  const { children } = props;
  return (
    <div className="w-full h-fit bg-gray-50">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-wrap justify-center items-center w-full gap-x-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
