import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetailProduct } from "../../service/product.service";
import Button from "../atoms/Button";

export default function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="flex justify-center items-center w-full h-screen p-20">
      <div className="flex flex-1 justify-center items-center">
        <img src={product.image} alt="image" className="w-56 h-auto" />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center gap-y-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <h1 className="text-gray-500 font-semibold text-3xl">
            {product.price}
          </h1>
        </div>
        <div className="flex justify-start items-center w-full">
          <p className="text-2xl font-medium">{product.description}</p>
        </div>
        <div className="flex justify-start items-center w-full">
          <div className="w-1/4">
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
