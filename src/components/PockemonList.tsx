"use client";

import { Pokemon } from "@/app/types/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <ul className="container mx-auto flex align-center justify-center">
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="spinner border-t-4 border-whiteSS-500 border-solid rounded-full w-12 h-12 mb-4 animate-spin"></div>
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id} className="pokemon p-4 border rounded-lg">
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  width={60}
                  height={60}
                  alt={pokemon.name}
                  className="center"
                />
                <p>
                  {pokemon.id}.{pokemon.korean_name}
                </p>
                <p>{pokemon.types[0].type.korean_name}</p>
              </Link>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
};

export default PokemonList;
