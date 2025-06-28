import { NavLink } from "react-router";
import { Swords, Home, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";

function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95",
        "backdrop-blur supports-[backdrop-filter]:bg-gray-900/60"
      )}
    >
      <div
        className={cn(
          "container flex h-16 max-w-6xl items-center justify-between px-4 mx-auto"
        )}
      >
        <NavLink to="/" className="flex items-center space-x-2">
          <Swords className="h-6 w-6 text-amber-400" />
          <span className="font-bold text-xl text-amber-400">
            Monster Battle
          </span>
        </NavLink>

        <nav className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-amber-400",
                isActive ? "text-amber-400" : "text-gray-300"
              )
            }
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/create-monster"
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-amber-400",
                isActive ? "text-amber-400" : "text-gray-300"
              )
            }
          >
            <PlusCircle className="h-4 w-4" />
            <span>Create Monster</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
