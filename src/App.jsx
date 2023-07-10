import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import ProfileMin from "./pages/ProfileMin";
import UserMin from "./pages/UserMin";
import DetailMin from "./pages/DetailMin";
import SignIn from "./pages/SignIn";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create/:data" element={<CreateProject />} />
        <Route path="/profile/:data" element={<ProfileMin />} />
        <Route path="/user/:data" element={<UserMin />} />
        <Route path="/detail/:data" element={<DetailMin/>}/>
        <Route path="/blogs/:data" element={<Blogs/>}/>
        <Route path="/addblog/:data" element={<AddBlog/>}/>
      </Routes>
    </div>
  );
};

export default App;
