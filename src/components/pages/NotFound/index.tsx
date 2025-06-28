import { NavLink } from "react-router";

function NotFound() {
  return (
    <div className="container flex justify-center items-center min-h-screen flex-col">
      <span className="text-8xl font-bold text-amber-400">404</span>
      <span className="text-8xl font-bold text-gray-300 m-[-56px]">404</span>
      <span className="text-8xl font-bold text-amber-400">404</span>
      <p className="text-2xl font-semibold mt-8">Looks like you're lost</p>
      <p className="text-sm">
        the page that you are looking for is not available!
      </p>
      <NavLink
        to="/"
        className={
          "inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors mt-8"
        }
      >
        Go to Home
      </NavLink>
    </div>
  );
}

export default NotFound;
