import BattleInstructions from "@/components/BattleInstructions";
import EmptyList from "@/components/EmptyList";
import Loading from "@/components/Loading";
import MonsterCard from "@/components/MonsterCard";
import SelectionStatus from "@/components/SelectionStatus";
import useMonsters from "@/hooks/useMonsters";
import { PlusCircle, Swords } from "lucide-react";
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
    return <Loading>Loading monsters...</Loading>;
  }

  return (
    <>
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

          <Link
            to="/create-monster"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Create New Monster</span>
          </Link>
        </div>

        {selectedMonsters.length > 0 && (
          <SelectionStatus
            selectedMonsters={selectedMonsters}
            onStartBattle={handleStartBattle}
          />
        )}

        {monsters.length === 0 ? (
          <EmptyList />
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
        {monsters.length > 0 && <BattleInstructions />}
      </div>
    </>
  );
}

export default Home;
