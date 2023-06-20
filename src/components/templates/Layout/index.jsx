import React from "react";
import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center w-full relative top-20">
        {children}
      </div>

      <Footer />
    </>
  );
}
