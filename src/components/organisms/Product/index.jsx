import React from "react";

export default function Product(props) {
  const { children } = props;
  return (
    <>
      <div className="flex flex-col items-center w-full mb-20">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col flex-1 justify-center items-center w-full gap-y-20 px-16">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

function DetailProduct(props) {
  const { image, desc, row } = props;
  return (
    <div className={`flex ${row} justify-center items-center w-full h-full`}>
      <div className="flex flex-1 justify-center items-center">
        <div
          className={`${image} w-96 h-96 bg-cover bg-bottom drop-shadow-2xl rounded-2xl`}
        ></div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <p className="text-lg font-semibold px-4">{desc}</p>
      </div>
    </div>
  );
}

Product.DetailProduct = DetailProduct;
