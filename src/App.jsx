import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";

const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/create" element={<CreateProject/>}/>
    </Routes>
  </div>;
};

export default App;
