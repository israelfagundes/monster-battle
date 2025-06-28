import type { Monster } from "@/common/types";
import MonsterCard from "@/components/MonsterCard";
import { AlertCircle, PlusCircle, Swords } from "lucide-react";
import { NavLink } from "react-router";

function Home() {
  const monsters: Monster[] = [
    {
      id: "mcf4m5bkzbqz4jwinco",
      name: "Joe Jonas",
      attack: 1200,
      defense: 1400,
      speed: 1600,
      hp: 1400,
      maxHp: 1400,
      imageUrl:
        "https://midias.correiobraziliense.com.br/_midias/jpg/2025/06/06/675x450/1_o_que_joe_jonas_disse_sobre_um_possivel_camp_rock_3-53557647.jpg?20250606151146?20250606151146",
    },
    {
      id: "mcf4ncmxii6lvstmg8",
      name: "Nick Jonas",
      attack: 1500,
      defense: 1700,
      speed: 1200,
      hp: 1800,
      maxHp: 1800,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BY2NkOGFiZGUtOWJhNS00ZjQxLWIyM2UtZGQ5YTA3NTNlMDA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return (
    <div className="min-h-[calc(100dvh-65px)] bg-gray-900 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Swords className="h-12 w-12" />
            <h1 className="text-4xl text-white font-bold">
              Monster Battle Arena
            </h1>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Create powerful monsters and battle them in epic 1v1 combat
          </p>

          <NavLink
            to="/create-monster"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Create New Monster</span>
          </NavLink>
        </div>

        {monsters.length === 0 ? (
          <div className="text-center py-16">
            <AlertCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No monsters yet</h3>
            <p className="text-gray-500 mb-6">
              Create your first monster to start battling!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {monsters.map((monster) => (
              <MonsterCard key={monster.id} monster={monster} />
            ))}
          </div>
        )}

        {/* Instructions */}
        {monsters.length > 0 && (
          <div className="mt-8 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-gray-400 text-center">
              Click on monsters to select them for battle. You need 2 monsters
              to start a fight!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
