import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductService() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);
  return product;
}
