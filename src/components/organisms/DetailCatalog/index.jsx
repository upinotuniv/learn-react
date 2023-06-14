import React, { useState } from "react";
import Button from "../../atoms/Button";

export default function CatalogDetail() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex justify-center items-center w-full p-10 bg-gray-50 space-x-12">
      <div className="flex flex-col flex-1 justify-center items-center py-12 space-y-8">
        <div className="flex justify-center items-center">
          <img
            src="/images/ella-olsson-mmnKI8kMxpc-unsplash.jpg"
            alt="image"
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center space-x-8">
          <button
            className="flex justify-center items-center"
            onClick={handleIncrement}
          >
            <h1 className="font-bold text-5xl">+</h1>
          </button>
          <h1 className="text-5xl font-bold ">{count}</h1>
          <button
            className="flex justify-center items-center"
            onClick={handleDecrement}
          >
            <h1 className="font-bold text-5xl">-</h1>
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 space-y-4">
        <div className="flex justify-end items-center w-full px-2">
          <button>
            <img src="/images/heart.png" alt="icon" className="w-10 h-10" />
          </button>
        </div>
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Salmon</h1>
          <h1 className="text-xl font-semibold text-gray-500">$ 9.99</h1>
        </div>
        <p className="text-md font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus
          quo exercitationem nisi distinctio architecto quasi voluptas officia,
          odit iusto accusantium, eos laborum.
        </p>
        <div className="flex justify-center w-1/4">
          <Button>Buy</Button>
        </div>
      </div>
    </div>
  );
}
