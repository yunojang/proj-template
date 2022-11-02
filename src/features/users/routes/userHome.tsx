import { Suspense } from "react";

import { Profile } from "../components/Profile";

const UserHome = () => {
  return (
    <Suspense fallback={"loading users profile..."}>
      <Profile />
    </Suspense>
  );
};

export default UserHome;
