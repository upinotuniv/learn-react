import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

export default function FormInput(props) {
  const { htmlFor, type = "text", text } = props;
  return (
    <div className="flex flex-col justify-start w-full">
      <Label className="text-lg font-semibold" htmlFor={htmlFor} text={text} />
      <Input type={type} {...props} />
    </div>
  );
}
