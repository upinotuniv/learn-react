import React from "react";
import Button from "../../atoms/Button";

export default function Head() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-y-8 w-full h-[853px] absolute bg-black/50 backdrop-blur-sm">
        <div className="flex justify-center items-center text-white px-4">
          <p className="text-4xl text-center font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            voluptatibus enim? Mollitia quasi molestias soluta sit, expedita
            vero provident sunt ut dolore aut quas voluptas, incidunt ducimus,
            repellat ipsa officia?
          </p>
        </div>
        <div className="w-[12%] flex justify-center items-center">
          <Button color="bg-white">
            <h1 className="text-lg font-bold text-black">Find More Food</h1>
          </Button>
        </div>
      </div>
      <img src="/images/syed-ahmad-kgjQ1AGDwE0-unsplash.jpg" alt="image" />
    </div>
  );
}
