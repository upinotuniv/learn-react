import React from "react";

export default function Card(props) {
  const { children } = props;
  return (
    <div className="flex flex-col justify-center items-center px-4 py-12 space-y-8 bg-white shadow-2xl">
      {children}
    </div>
  );
}

function Head(props) {
  const { children } = props;
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex justify-center items-center rounded-full p-8 bg-[#dde7ff]">
        {children}
      </div>
    </div>
  );
}

function Body(props) {
  const { title, children } = props;
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-y-4">
      <h1 className="text-[#3B3B3B] font-bold text-2xl">{title}</h1>
      <p className="text-[#383838] font-normal text-xl text-center">
        {children}
      </p>
    </div>
  );
}

Card.Head = Head;
Card.Body = Body;
