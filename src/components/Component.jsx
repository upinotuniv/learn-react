import React from "react";

function Button1() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white">
      Button
    </button>
  );
}

// Menggunakan cara anonymous function
// *props (properti) adalah argumen yang bisa dikirimkan ke komponen lain
const Button2 = (props) => {
  // di bawah ini adalah cara menggunakan children untuk costumisasi komponen di antara komponen pembuka dan penutupnya (parent)
  const { text = "Button", children } = props; //text di sini diberi value "Button" agar memberi nilai default ketika component digunakan
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${props.color} text-white`}
    >
      {children || text}
    </button>
  );
};

export default function Component(props) {
  const { text, textColor } = props;
  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <h1 className={`text-5xl font-bold ${textColor}`}>{text}</h1>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
          Button
        </button>
        <button className="h-10 px-6 font-semibold rounded-md bg-gray-500 text-white">
          Button
        </button>
        <Button1 />
        <Button2 color="bg-pink-500" text="Click Me" />
        <Button2 color="bg-violet-500">Logout</Button2>
      </div>
    </>
  );
}
