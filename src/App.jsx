import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Side from "./components/Side";
import { BiArrowToRight } from "react-icons/bi"
import { BiArrowFromRight } from "react-icons/bi"
import { useState } from "react";
import User from "./pages/User";
import Profile from "./pages/Profile";


import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import ProfileMin from "./pages/ProfileMin";
import UserMin from "./pages/UserMin";


const App = () => {
  // const [icon, setIcon] = useState(<BiArrowToRight />);
  // const [toggle, setToggle] = useState(false);

  //    const handleClick = () => {
  //      setIcon(prevIcon => prevIcon.type === BiArrowToRight ? <BiArrowFromRight /> : <BiArrowToRight />);
  //      setToggle(!toggle);
  //    };
  return <div  >
    {/* <Nav icon={icon} handleClick={handleClick} toggle={toggle}  /> */}
    {/* <Side toggle={toggle} /> */}
    <Routes>


     <Route path="/" element={<Dashboard/>}/>
      <Route path="/create" element={<CreateProject/>}/>
      <Route  path="/profile" element={<ProfileMin/>}/> 
      <Route path="/user" element={<UserMin/>} />

      <Route/>
    </Routes>
  </div>;
};

export default App;
