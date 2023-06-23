import { useState, useEffect } from "react";
import AuthLayout from "./components/templates/AuthLayout";
import Login from "./components/organisms/Login";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
    if (count === 0) {
      setCount(0);
    }
  };

  useEffect(() => {
    console.log("Hi I'm count, i'm first rendered", count);
  }, []);

  useEffect(() => {
    console.log("There are changes", count);
  }, [count]);

  return (
    <>
      {/* useEffect */}
      {/* <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
        <h1 className="text-5xl font-extrabold">COUNTER</h1>
        <div className="flex justify-between items-center gap-x-8">
          <button
            className="px-4 py-2 bg-blue-500 rounded-lg text-white font-bold text-2xl"
            onClick={handleDecrement}
          >
            -
          </button>
          <h1 className="text-black font-bold text-2xl">{count}</h1>
          <button
            className="px-4 py-2 bg-blue-500 rounded-lg text-white font-bold text-2xl"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div> */}

      {/* useRef */}
      <AuthLayout title="Sign-In" desc="Please Login" type="login">
        <Login />
      </AuthLayout>
    </>
  );
}

export default App;
