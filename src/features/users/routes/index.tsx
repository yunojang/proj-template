import { Route, Routes } from "react-router-dom";

import UserHome from "./userHome";

export const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
    </Routes>
  );
};
