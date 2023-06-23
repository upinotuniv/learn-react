import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Abilities() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getAbility = async (id) => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAbility(id);
  }, []);

  console.log("Ability: ", data);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen space-y-4">
      <h1 className="text-5xl font-bold uppercase">{data.name}</h1>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-2xl font-bold uppercase">Height: {data.height}</h1>
        <h1 className="text-2xl font-bold uppercase">Weight: {data.weight}</h1>
        <h1 className="text-2xl font-bold uppercase">
          Base Experience: {data.base_experience}
        </h1>
        <div className="flex justify-center items-center gap-x-4">
          <h1 className="text-2xl font-bold uppercase"> Ability: </h1>
          {data.abilities &&
            data.abilities.map((pokemon) => (
              <h1 className="text-2xl font-bold uppercase">
                {pokemon.ability.name}
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
}
