import { Outlet } from "react-router";

import Header from "@/components/layout/Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <section className="min-h-[calc(100dvh-65px)] bg-gray-900 py-8">
        <Outlet />
      </section>
    </>
  );
}

export default DefaultLayout;
