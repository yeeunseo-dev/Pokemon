import { fetchPokemonData } from "@/apis/pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonData(params.id);

  return (
    <div className="pokemon-details max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <div className="bg gray-100 text-gray-800 text-center p-4">
        <h2 className="text-2xl font-bold">{pokemon.korean_name}</h2>
        <p>No. {pokemon.id.toString().padStart(4, "0")}</p>
      </div>
      <div className="p-4 text-black felx flex-col justify-start items-center">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          width={70}
          height={70}
          className="mx-auto"
        />
        <p className="text-center my-2">이름 : {pokemon.korean_name}</p>
        <div className="flex justify-center gap-2 mb-10">
          <p className="text-center">키 : {pokemon.height / 10} m</p>
          <p className="text-center">무게 : {pokemon.weight / 10} kg</p>
        </div>

        <div className="text-center my-2">
          <p className="font-bold mb-5">기술</p>
          <div className="flex flex-wrap gap-2 items-center text-center justify-center">
            {pokemon.moves.map((move: any) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="bg-[#131313] text-white px-4 py-2 rounded flex justify-center items-center mt-10 "
          >
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
