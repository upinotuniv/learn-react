import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-10">
        <div className="flex justify-center items-center w-full px-20">
          <h1 className="text-5xl font-bold">POKEMON LIST</h1>
        </div>
        <div className="flex flex-wrap justify-center items-centerp-20 gap-8">
          {data.map((pokemon, i) => (
            <div
              className="flex flex-col justify-center items-center w-1/5 border-x-2"
              key={i}
            >
              <h1 className="text-2xl font-semibold uppercase">
                {pokemon.name}
              </h1>
              <button
                className="px-4 py-2 font-semibold text-red-500 hover:underline transition duration-300"
                onClick={() => (window.location.href = `/abilities/${i + 1}`)}
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
