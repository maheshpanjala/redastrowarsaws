"use client";
import Image from 'next/image'

const Games = () => {
  const games = [
    "Axie Infinity",
    "Splinterlands",
    "League of Kingdoms",
    "Sky Weaver",
    "REVV Racing",
    "The Harvest",
    "GodsUnchained",
    "Aavegotchi",
    "Katana Inu",
    "Phantom Galaxies",
    "FaraLand",
    "Formacar"
  ];

  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center">
    
      <h1 className="text-6xl text-white font-black ">
      Popular {" "} Genres
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
        Genres
        </span> {" "}
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-16">
        {games.map((game, index) => (
          <a key={index + 1} href="#" className="relative rounded-lg overflow-hidden">
            <Image
              src={`/game-img1.png`}
              alt={`Capa do jogo ${game}`}
              width={400}
              height={400}
            />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-1.5 left-0 right-0 rounded-md">
              <strong className="font-bold text-white block">{game}</strong>
            </div>
          </a>
        ))}
      </div>

    
    </main>
  )
}

export default Games

