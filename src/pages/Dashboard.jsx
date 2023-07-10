import React from "react";
import Side from "../components/Side";
import DashCard from "../components/DashCard";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import ScrollBtn from "../components/ScrollBtn";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sm:ml-64 lg:p-4 lg:pt-0 lg:pe-[40px]">
      <div className="flex md:block sticky top-0 z-50 ">
        <Side />
        <Nav />
      </div>
      <ScrollBtn />
      <div className=" pb-8  lg:pb-0  p-0  ">
        <DashCard />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
