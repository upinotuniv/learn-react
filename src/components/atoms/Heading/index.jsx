import React from "react";

export default function Heading(props) {
  const { title } = props;
  return (
    <div className="flex justify-between items-center w-full px-20 mt-20">
      <h1 className="text-4xl font-extrabold border-l-4 border-green-700 px-2 text-orange">
        {title}
      </h1>
    </div>
  );
}
