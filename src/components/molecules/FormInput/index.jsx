import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

export default function FormInput(props) {
  const { htmlFor, name, placeholder, type, onChange, children, label } = props;
  return (
    <div className="py-2">
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
