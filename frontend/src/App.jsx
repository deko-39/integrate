import React, { useState } from "react";
import "./index.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [login, setLogin] = useState(false);
  return <div>{!login ? <Login setLogin={setLogin} /> : <Dashboard />}</div>;
};

export default App;
