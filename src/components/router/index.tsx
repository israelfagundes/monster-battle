import { Route, Routes } from "react-router";

import Home from "@/components/pages/Home";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CreateMonster from "@/components/pages/CreateMonster";
import Battle from "@/components/pages/Battle";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/create-monster" element={<CreateMonster />} />
        <Route path="/battle" element={<Battle />} />
      </Route>
    </Routes>
  );
}

export default Router;
