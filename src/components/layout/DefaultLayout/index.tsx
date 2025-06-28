import { Outlet } from "react-router";

import Header from "@/components/layout/Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
