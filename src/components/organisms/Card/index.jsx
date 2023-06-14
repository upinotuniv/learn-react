import React from "react";

export default function Card(props) {
  const { children } = props;
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center w-full bg-white rounded-lg h-screen">
        <div className="flex flex-col justify-center max-w-xs bg-gray-100 border rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  const { src } = props;
  return (
    <div className="flex justify-center items-center p-6">
      <img src={src} alt="image" className="rounded-lg" />
    </div>
  );
}

function Body(props) {
  const { title, children, price } = props;
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <h1 className="text-sm font-semibold text-gray-500">{price}</h1>
      </div>
      <p className="mt-3 text-base text-justify">{children}</p>
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
