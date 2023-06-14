import React from "react";

export default function Input(props) {
  const { children } = props;
  return (
    <label label className={"text-slate-500 mb-1 block"} {...props}>
      {children}
    </label>
  );
}
