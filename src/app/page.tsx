import PokemonList from "@/components/PockemonList";
import React from "react";

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <PokemonList />
    </div>
  );
}
