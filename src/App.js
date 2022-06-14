import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Provider from "./context/Provider";

import PathRoutes from "./config_/routes/PathRoutes";

function App() {
  return (
    <Provider>
      <PathRoutes />
    </Provider>
  );
}

export default App;
