import { createElement } from "react";
import { privateRoutes } from "./privateRoutes";
import RootLayout from "../../layouts/RootLayout";

export const getRoutes = () => {
  return {
    path: "/",
    element: createElement(RootLayout),
    children: privateRoutes,
  };
};
