import React from "react";
import Navbar from "../../organisms/Navbar";
import Banner from "../../organisms/Banner";

export default function Head() {
  return (
    <div className="w-full h-screen bg-[url('/images/banner.png')] bg-cover">
      <Navbar />
      <Banner />
    </div>
  );
}
