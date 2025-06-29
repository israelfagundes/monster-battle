import MonsterCard from "@/components/MonsterCard";
import useMonsters from "@/hooks/useMonsters";
import { AlertCircle, PlusCircle, Swords } from "lucide-react";
import { Link } from "react-router";

function Home() {
  const {
    monsters,
    isLoading,
    selectedMonsters,
    handleSelectMonster,
    handleDeleteMonster,
    handleStartBattle,
  } = useMonsters();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading monsters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100dvh-65px)] bg-gray-900 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
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

          <Link
            to="/create-monster"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Create New Monster</span>
          </Link>
        </div>

        {/* Selection Status */}
        {selectedMonsters.length > 0 && (
          <div className="mb-6 p-4 rounded-lg bg-gray-800 border border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Swords className="h-5 w-5 text-amber-400" />
                  <span className="text-white font-medium">
                    Selected for Battle: {selectedMonsters.length}/2
                  </span>
                </div>

                {selectedMonsters.length > 0 && (
                  <div className="flex items-center">
                    {selectedMonsters.map((monster, index) => (
                      <span
                        key={monster.id}
                        className="text-amber-400 font-medium"
                      >
                        {monster.name}
                        {index < selectedMonsters.length - 1 && (
                          <span className="text-gray-400 mx-2">vs</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {selectedMonsters.length === 2 && (
                <button
                  onClick={handleStartBattle}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
                >
                  <Swords className="h-4 w-4" />
                  <span>Start Battle!</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Monsters */}
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
              <MonsterCard
                key={monster.id}
                monster={monster}
                isSelected={selectedMonsters.some((m) => m.id === monster.id)}
                onSelect={handleSelectMonster}
                onDelete={handleDeleteMonster}
              />
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
