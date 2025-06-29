import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

function BackToMonsters() {
  return (
    <Link
      to="/"
      className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors mb-4"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back to Monsters</span>
    </Link>
  );
}

export default BackToMonsters;
