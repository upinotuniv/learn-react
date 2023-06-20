import React from "react";

export default function SubTitle(props) {
  const { justify = "text-center", children } = props;
  return (
    <p className={`text-xl font-thin text-white ${justify}`}>{children}</p>
  );
}
