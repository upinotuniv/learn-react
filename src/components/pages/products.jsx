import React, { useState } from "react";
import Card from "../organisms/Card";
import Button from "../atoms/Button";

export default function ProductPage() {
  const data = [
    {
      id: 1,
      image: "/images/c-d-x-PDX_a_82obo-unsplash.jpg",
      title: "Headphone",
      price: 99.9,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
    },
    {
      id: 2,
      image: "/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
      title: "Camera",
      price: 99.9,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
    },
    {
      id: 3,
      image: "/images/domino-164_6wVEHfI-unsplash.jpg",
      title: "Nika Shoes",
      price: 99.9,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
    },
  ];

  // state adalah penampungan yang digunakan untuk menghandle component atau data
  // dalam state ada yang namanya method, yang dimana methodnya ini digunakan untuk mengubah nilai statenya.
  const [show, setShow] = useState(false);
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToChart = (id) => {
    if (wishlist.find((item) => item.id === id)) {
      setWishlist(
        wishlist.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setWishlist([...wishlist, { id, qty: 1 }]);
    }
  };

  return (
    <>
      {show && (
        <div className="flex justify-center items-center w-full h-screen absolute bg-black/50">
          <Card>
            <Card.Body>
              <div className="flex justify-start items-center border-b border-gray-500 py-2">
                <h1 className="text-xl font-bold text-black">Alert</h1>
              </div>
              <div className="flex flex-col justify-between items-center px-5 py-8 gap-x-8 gap-y-8">
                <div className="flex justify-center items-center w-full">
                  <h1 className="text-gray-500 font-semibold text-lg">
                    Are you sure want to logout?
                  </h1>
                </div>
                <div className="flex justify-center items-center w-full gap-x-4">
                  <Button
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    No
                  </Button>
                  <Button
                    color="bg-red-500"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    Yes
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
      <div className="flex justify-between items-center w-full px-8 py-4 bg-slate-200 shadow-xl">
        <div className="flex justify-start items-center w-[85%]">
          <h1 className="text-4xl font-bold text-slate-500">The Store</h1>
        </div>
        <div className="w-[15%] px-10">
          <Button
            color="bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full px-10 py-16">
        <div className="flex flex-1 justify-center items-center gap-x-10">
          {data.map((product) => (
            <Card key={product.id}>
              <Card.Header src={product.image} />
              <Card.Body title={product.title} price={product.price}>
                {product.desc}
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => handleAddToChart(product.id)}>
                  Buy Now
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
        <div className="flex flex-1 justify-center items-center">
          <table className="border px-2 py-4 rounded-xl table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => {
                const product = data.find((data) => data.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
