import React from "react";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes";

const App = () => {
  return <RouterProvider router={Route} />;
};

export default App;
