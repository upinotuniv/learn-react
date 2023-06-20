import React from "react";

export default function Title(props) {
  const { size, justify = "text-center", children } = props;
  return (
    <h1 className={`${size} font-bold text-white tracking-normal ${justify}`}>
      {children}
    </h1>
  );
}
