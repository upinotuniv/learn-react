import React from "react";
import FormInput from "../../molecules/FormInput";
import Button from "../../atoms/Button";
import { IconBarcode } from "@tabler/icons-react";

export default function TrackPackage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("trackingCode", e.target.trackingCode.value);
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full px-8 gap-y-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center w-full gap-y-4">
        <FormInput
          htmlFor="trackingCode"
          name="trackingCode"
          id="trackingCode"
          placeholder="Enter your Tracking Code"
          icon={
            <IconBarcode className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2" />
          }
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
