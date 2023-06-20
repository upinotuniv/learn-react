import React from "react";
import FormInput from "../../molecules/FormInput";
import Label from "../../atoms/Label";
import Button from "../../atoms/Button";
import { IconBoxSeam, IconMapPin } from "@tabler/icons-react";

export default function FeeCheck() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("shippingFrom", e.target.shippingFrom.value);
    localStorage.setItem("shippingTo", e.target.shippingTo.value);
    localStorage.setItem("packageWeight", e.target.packageWeight.value);
    localStorage.setItem("long", e.target.long.value);
    localStorage.setItem("width", e.target.width.value);
    localStorage.setItem("height", e.target.height.value);
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full px-8 gap-y-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center w-full gap-y-4">
        <FormInput
          htmlFor="shippingFrom"
          name="shippingFrom"
          id="shippingFrom"
          placeholder="Shipping From"
          icon={
            <IconMapPin className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2" />
          }
        />

        <FormInput
          htmlFor="shippingTo"
          name="shippingTo"
          id="shippingTo"
          placeholder="Shipping To"
          icon={
            <IconMapPin className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2" />
          }
        />

        <FormInput
          htmlFor="packageWeight"
          name="packageWeight"
          id="packageWeight"
          placeholder="Package Weight"
          icon={
            <IconBoxSeam className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2" />
          }
        />
      </div>
      <div className="flex flex-col w-full gap-y-2">
        <Label htmlFor="packageDimensions">Package Dimension</Label>
        <div className="flex justify-center items-center w-full gap-x-4">
          <FormInput
            htmlFor="long"
            name="long"
            id="long"
            space="pl-10"
            icon={
              <>
                <h1 className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2 text-xl">
                  L
                </h1>

                <h1 className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2 left-14 text-xl">
                  cm
                </h1>
              </>
            }
          />

          <FormInput
            htmlFor="width"
            name="width"
            id="width"
            space="pl-10"
            icon={
              <>
                <h1 className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2 text-xl">
                  W
                </h1>

                <h1 className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2 left-14 text-xl">
                  cm
                </h1>
              </>
            }
          />

          <FormInput
            htmlFor="height"
            name="height"
            id="height"
            space="pl-10"
            icon={
              <>
                <h1 className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2 text-xl">
                  H
                </h1>

                <h1 className="pointer-events-none w-8 h-8 ml-4 absolute top-1/2 transform -translate-y-1/2 left-14 text-xl">
                  cm
                </h1>
              </>
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Button>Check</Button>
      </div>
    </form>
  );
}
