import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Side from "./components/Side";
import { BiArrowToRight } from "react-icons/bi"
import { BiArrowFromRight } from "react-icons/bi"
import { useState } from "react";
import User from "./pages/User";
import Profile from "./pages/Profile";


const App = () => {
  const [icon, setIcon] = useState(<BiArrowToRight />);
  const [toggle, setToggle] = useState(false);

     const handleClick = () => {
       setIcon(prevIcon => prevIcon.type === BiArrowToRight ? <BiArrowFromRight /> : <BiArrowToRight />);
       setToggle(!toggle);
     };
  return <div  >
    <Nav icon={icon} handleClick={handleClick} toggle={toggle}  />
    {/* <Side toggle={toggle} /> */}
    <Routes>
      {/* <Route path="/" element={<User/>} /> */}
      <Route path="/" element={<Profile/>} />
    </Routes>
  </div>;
};

export default App;
