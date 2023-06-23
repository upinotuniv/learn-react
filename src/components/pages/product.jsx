// WITH API
import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Card from "../organisms/Card";
import Button from "../atoms/Button";
import Product from "../../service/product.service";
import Footer from "../organisms/Footer";

export default function ProductPage() {
  const [show, setShow] = useState(false);
  // const [cart, setCart] = useState([]);
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const data = Product();
  const username = useLogin();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = "/";
  //   }
  // }, []);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    if (data.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = data.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, data]);

  return (
    <div className="flex justify-center items-center flex-col w-full bg-gray-200">
      {show && (
        <div className="flex justify-center items-center fixed inset-0 bg-black/80 z-20 ">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg">
            <div className="flex justify-start items-center w-full border-b border-gray-500 p-4">
              <h1 className="text-xl font-bold">Notification</h1>
            </div>
            <div className="flex justify-center items-center w-full pt-4 px-8">
              <p className="text-2xl font-medium text-gray-500 w-72">
                Apakah anda yakin ingin keluar?
              </p>
            </div>
            <div className="flex justify-between items-center w-full px-16 py-4 gap-x-12">
              <Button color="bg-red-500" onClick={() => setShow(false)}>
                No
              </Button>
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                }}
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center w-full px-8 py-4 bg-slate-900 shadow-xl">
        <div className="flex justify-start items-center w-[85%]">
          <h1 className="text-4xl font-bold text-white">Hi! {username}</h1>
        </div>
        <div className="w-[15%] px-10">
          <Button
            color="bg-white"
            textColor="text-black"
            onClick={() => {
              setShow(true);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="flex w-full px-6 py-16 mb-32 gap-x-4 bg-gray-200">
        <div className="flex flex-1 flex-wrap justify-center items-start gap-6">
          {data.map((items) => (
            <Card key={items.id}>
              <Card.Header
                src={items.image}
                onClick={() =>
                  (window.location.href = `/detail-product/${items.id}`)
                }
              />
              <Card.Body
                title={items.title}
                price={items.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              >
                {items.description}
              </Card.Body>
              <Card.Footer>
                <Button
                  onClick={() => dispatch(addToCart({ id: items.id, qty: 1 }))}
                >
                  Buy Now
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
        <div className="flex flex-1 justify-center items-start">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  QTY
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                cart.map((item) => {
                  const datas = data.find((data) => data.id === item.id);
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">
                        {datas.title.substring(0, 20)}
                      </td>
                      <td className="px-6 py-4">
                        {datas.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="px-6 py-4">{item.qty}</td>
                      <td className="px-6 py-4">
                        {(item.qty * datas.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr className="border-b bg-gray-300 dark:bg-gray-800 dark:border-gray-700 ">
                <td className="px-6 py-4 text-black font-bold">Total Price</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-black font-bold">
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// WITHOUT API
// import React, { useState } from "react";
// import Card from "../organisms/Card";
// import Button from "../atoms/Button";

// export default function ProductPage() {
//   const data = [
//     {
//       id: 1,
//       image: "/images/c-d-x-PDX_a_82obo-unsplash.jpg",
//       title: "Headphone",
//       price: 99.9,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
//     },
//     {
//       id: 2,
//       image: "/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
//       title: "Camera",
//       price: 99.9,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
//     },
//     {
//       id: 3,
//       image: "/images/domino-164_6wVEHfI-unsplash.jpg",
//       title: "Nika Shoes",
//       price: 99.9,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
//     },
//   ];

//   // state adalah penampungan yang digunakan untuk menghandle component atau data
//   // dalam state ada yang namanya method, yang dimana methodnya ini digunakan untuk mengubah nilai statenya.
//   const [show, setShow] = useState(false);
//   const [wishlist, setWishlist] = useState([
//     {
//       id: 1,
//       qty: 1,
//     },
//   ]);

//   const handleAddToChart = (id) => {
//     if (wishlist.find((item) => item.id === id)) {
//       setWishlist(
//         wishlist.map((item) =>
//           item.id === id ? { ...item, qty: item.qty + 1 } : item
//         )
//       );
//     } else {
//       setWishlist([...wishlist, { id, qty: 1 }]);
//     }
//   };

//   return (
//     <>
//       {show && (
//         <div className="flex justify-center items-center w-full h-screen absolute bg-black/50">
//           <Card>
//             <Card.Body>
//               <div className="flex justify-start items-center border-b border-gray-500 py-2">
//                 <h1 className="text-xl font-bold text-black">Alert</h1>
//               </div>
//               <div className="flex flex-col justify-between items-center px-5 py-8 gap-x-8 gap-y-8">
//                 <div className="flex justify-center items-center w-full">
//                   <h1 className="text-gray-500 font-semibold text-lg">
//                     Are you sure want to logout?
//                   </h1>
//                 </div>
//                 <div className="flex justify-center items-center w-full gap-x-4">
//                   <Button
//                     color="bg-red-500"
//                     onClick={() => {
//                       setShow(false);
//                     }}
//                   >
//                     No
//                   </Button>
//                   <Button
//                     onClick={() => {
//                       window.location.href = "/";
//                     }}
//                   >
//                     Yes
//                   </Button>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       )}
//       <div className="flex justify-between items-center w-full px-8 py-4 bg-slate-200 shadow-xl">
//         <div className="flex justify-start items-center w-[85%]">
//           <h1 className="text-4xl font-bold text-slate-500">The Store</h1>
//         </div>
//         <div className="w-[15%] px-10">
//           <Button
//             color="bg-gray-500"
//             onClick={() => {
//               setShow(true);
//             }}
//           >
//             Logout
//           </Button>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-full px-10 py-16">
//         <div className="flex flex-1 justify-center items-center gap-x-10">
//           {data.map((product) => (
//             <Card key={product.id}>
//               <Card.Header src={product.image} />
//               <Card.Body title={product.title} price={product.price}>
//                 {product.desc}
//               </Card.Body>
//               <Card.Footer>
// <Button onClick={() => handleAddToChart(product.id)}>
//   Buy Now
// </Button>
//               </Card.Footer>
//             </Card>
//           ))}
//         </div>
//         <div className="flex flex-1 justify-center items-center">
//           <table className="border px-2 py-4 rounded-xl table-auto border-separate border-spacing-x-5">
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Price</th>
//                 <th>Qty</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {wishlist.map((item) => {
//                 const product = data.find((data) => data.id === item.id);
//                 return (
//                   <tr key={item.id}>
//                     <td>{product.title}</td>
//                     <td>{product.price}</td>
//                     <td>{item.qty}</td>
//                     <td>{item.qty * product.price}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
