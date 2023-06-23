import React, { forwardRef } from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

const InputForm = forwardRef((props, ref) => {
  const { children, label } = props;
  return (
    <div className="mb-6">
      <Label {...props}>{children || label}</Label>
      <Input {...props} ref={ref} />
    </div>
  );
});

export default InputForm;
