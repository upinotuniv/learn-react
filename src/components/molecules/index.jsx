import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

export default function InputForm(props) {
  const { label, htmlFor, name, placeholder, type, onChange, children } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{children || label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
