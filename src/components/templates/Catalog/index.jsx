import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Navbar from "../../organisms/Navbar";
import Head from "../../organisms/Head";
import Footer from "../../organisms/Footer";

export default function CatalogLayout(props) {
  const { children } = props;
  return (
    <div className="w-full h-fit bg-gray-50">
      <Navbar
        search={
          <>
            <img
              src="/images/searchIcon.svg"
              alt="icon"
              className="absolute px-8"
            />
            <Input placeHolder="Search your food..." />
          </>
        }
      />
      <Head />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center items-center w-full py-16">
          <h1 className="text-4xl font-bold text-slate-700 border-b-4 border-sky-100">
            OUR MENU
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full gap-x-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
