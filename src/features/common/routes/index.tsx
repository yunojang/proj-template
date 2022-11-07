import { NotFound, Landing } from "../pages";

// common use routes
export const commonRoute = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
