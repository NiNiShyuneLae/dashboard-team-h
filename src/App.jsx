import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import ProfileMin from "./pages/ProfileMin";
import UserMin from "./pages/UserMin";
import DetailMin from "./pages/DetailMin";
import ProfileChart from "./components/ProfileChart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create/:data" element={<CreateProject />} />
        <Route path="/profile/:data" element={<ProfileMin />} />
        <Route path="/user/:data" element={<UserMin />} />
        <Route path="/detail/:data" element={<DetailMin/>}/>
      </Routes>
    </div>
  );
};

export default App;
