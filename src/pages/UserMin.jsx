import React, { useEffect } from "react";
import User from "./User";
import Side from "../components/Side";
import Nav from "../components/Nav";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

const UserMin = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <div>
      <div className="sm:ml-64 p-0 lg:p-4 lg:pe-[40px]">
        <div className="flex md:block sticky top-0 z-50 bg-white">
          <Side />
          <Nav />
        </div>
        <ScrollBtn />
        <div className="bg-[#F9F9F9] rounded-[1.5rem] pb-8 lg:p-4 lg:pb-0  p-0">
          <User />
          <Pagination/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserMin;
