import React from "react";
import Button from "../../atoms/Button";

export default function DetailApps(props) {
  const { row, image, title, desc } = props;
  return (
    <div
      className={`flex ${row} justify-center items-center w-full px-40 py-40 gap-x-20`}
    >
      <div className="flex flex-1 justify-center items-center">
        <img src={image} alt="image" className="shadow-2xl" />
      </div>
      <div className="flex flex-1 flex-col justify-start gap-y-6 px-8">
        <h1 className="text-[#3B3B3B] font-bold text-4xl">{title}</h1>
        <p className="text-[#383838] font-normal text-xl">{desc}</p>
        <Button width="w-1/3">Learn More</Button>
      </div>
    </div>
  );
}
