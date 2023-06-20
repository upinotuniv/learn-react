import React from "react";

export default function Label(props) {
  const {
    children,
    htmlFor,
    text,
    weight = "font-semibold",
    size = "text-lg",
  } = props;
  return (
    <label htmlFor={htmlFor} className={`${weight} ${size}`}>
      {children || text}
    </label>
  );
}
