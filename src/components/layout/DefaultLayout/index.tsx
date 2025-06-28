import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <>
      <h1>Layout goes here</h1>
      <Outlet />
    </>
  );
}

export default DefaultLayout;
