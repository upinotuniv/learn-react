import { useState } from "react";
import Component from "./components/Component";

function App() {
  return (
    // simbol "<>" adalah fragment yang berfungsi sebagai parent dari child yang ada di dalamnya
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* cara menambahkan style yang tidak ada di tailwindcss menggunakan arbitrary atau kurung siku 
        seperti contoh textColor di bawah ini */}
        {/* Atau bisa juga menggunakan customisasi pada tailwind.config.js */}
        <Component textColor="text-darkBlue" text="Hello World!" />
      </div>
    </>
  );
}

export default App;
