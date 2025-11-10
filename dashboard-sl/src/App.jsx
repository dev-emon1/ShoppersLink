import React, { useEffect } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

const App = () => {
  const [allRoutes, setAllRoutes] = React.useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);
  return <Router allRoutes={allRoutes} />;
};

export default App;
