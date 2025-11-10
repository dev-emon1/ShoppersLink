import { createElement, lazy } from "react";
const Home = lazy(() => import("../../views/Home"));

export const vendorRoutes = [
  {
    path: "/",
    element: createElement(Home),
    ability: ["admin", "vendor"],
  },
];
