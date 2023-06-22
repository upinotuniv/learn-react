import React from "react";

export default function Card(props) {
  const { children } = props;
  return (
    <div className="flex justify-center flex-wrap items-center w-[40%] h-[35%] bg-gray-100 border rounded-lg drop-shadow-lg">
      {children}
    </div>
  );
}

function Header(props) {
  const { src } = props;
  return (
    <div className="flex justify-center items-center p-6 w-full">
      <img src={src} alt="image" className="rounded-lg w-40 h-auto" />
    </div>
  );
}

function Body(props) {
  const { title, children, price } = props;
  return (
    <div className="flex justify-center items-center flex-col px-6 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-md font-bold text-slate-900 truncate">{title}</h1>
        <h1 className="text-sm font-semibold text-gray-500">{price}</h1>
      </div>
      <div className="flex justify-start items-center">
        <p className="text-sm text-clip overflow-y-auto h-44">{children}</p>
      </div>
    </div>
  );
}

function Footer(props) {
  const { children } = props;
  return (
    <div className="flex flex-col justify-center items-center w-full p-6 gap-y-4">
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
