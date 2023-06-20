import { useState } from "react";

function App() {
  return <h1>Hello World</h1>;
}

export default App;

// const name = localStorage.getItem("name");
//   const hobby = localStorage.getItem("hobby");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("name", e.target.name.value);
//     localStorage.setItem("hobby", e.target.hobby.value);
//     window.location.reload();
//   };
{
  /* <div className="flex flex-col justify-center items-center w-full h-screen space-y-8">
      {name ? (
        <h1 className="text-7xl font-extrabold animate-bounce">Hai! {name}</h1>
      ) : (
        <h1 className="text-7xl font-extrabold">Hai!</h1>
      )}
      {hobby ? (
        <p className="text-4xl font-medium animate-bounce">
          Your hobby is {hobby}
        </p>
      ) : (
        <p className="text-4xl font-medium">{""}</p>
      )}
      <div className="flex justify-center items-center w-1/4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col  justify-center items-center"
        >
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="transition duration-300 w-full focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-400 border-gray-300 shadow-sm rounded-lg my-4 py-2 px-4"
          />
          <input
            name="hobby"
            type="text"
            placeholder="Enter your hobby"
            className="transition duration-300 w-full focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-400 border-gray-300 shadow-sm rounded-lg my-4 py-2 px-4"
          />
          <div className="flex flex-col justify-center items-center w-full space-y-4">
            <button className="bg-[#93DAF0] px-4 py-2 rounded-lg text-lg font-bold text-white focus:outline-none w-full">
              Click Me!
            </button>
            <button
              className="bg-red-500 px-4 py-2 rounded-lg text-lg font-bold text-white focus:outline-none w-full"
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("name");
                localStorage.removeItem("hobby");
                window.location.reload();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
</div> */
}
