import React from "react";

export default function Wrapper(props) {
  const { children } = props;
  return <div className="w-full bg-gray-100">{children}</div>;
}
