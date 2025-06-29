import { Link } from "react-router";
import BattleArena from "@/components/BattleArena";
import { AlertCircle, ArrowLeft } from "lucide-react";
import useBattle from "@/hooks/useBattle";
import Loading from "@/components/Loading";

function Battle() {
  const { battleMonsters, isLoading } = useBattle();

  if (isLoading) {
    return <Loading>Loading battle...</Loading>;
  }

  if (!battleMonsters || battleMonsters.length !== 2) {
    return (
      <div className="container mx-auto max-w-2xl px-4">
        <div className="text-center py-16">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl text-white mb-2">No Battle Available</h3>
          <p className="text-gray-400 mb-6">
            You need to select 2 monsters to start a battle.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Monsters</span>
          </Link>
        </div>
      </div>
    );
  }

  return <BattleArena battleMonsters={battleMonsters} />;
}

export default Battle;
