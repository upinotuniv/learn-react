import React from "react";

export default function Card(props) {
  const { children, row = "flex-row" } = props;
  return (
    <div
      className={`flex justify-center ${row} items-center w-full px-40 gap-x-20`}
    >
      {children}
    </div>
  );
}

function Image(props) {
  const { src } = props;
  return (
    <div className="flex flex-1 justify-center items-center">
      <img src={src} alt="image" className="shadow-2xl rounded-lg" />
    </div>
  );
}

function Body(props) {
  const { children, title } = props;
  return (
    <div className="flex flex-1 flex-col justify-start gap-y-6 px-8">
      <h1 className="text-[#3B3B3B] font-bold text-4xl">{title}</h1>
      <p className="text-[#383838] font-normal text-xl">{children}</p>
    </div>
  );
}

Card.Image = Image;
Card.Body = Body;
