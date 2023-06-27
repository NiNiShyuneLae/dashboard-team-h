import React from "react";
import DoughnutChart from "./DoughnutChart";
import Michael from "../assets/images/Michael.jpg";
import Michelle from "../assets/images/Michelle.jpg";
import Francis from "../assets/images/Francis.jpg";
import Melody from "../assets/images/Melody.jpg";
import Barry from "../assets/images/Barry.jpg";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material";

const DashCard = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 15,
    },
  }));
  return (
    <div className="py-8 ">
      <div className="lg:px-[32px] px-[20px]">
        <p className=" text-[1.25rem] font-semibold">Projects</p>
        <div>
          <nav
            className="justify-between  pb-3 text-gray-700  sm:flex  bg-gray-5"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center mb-3 space-x-1 sm:mb-0">
              <li>
                <a
                  href="#"
                  className=" text-[14px] font-medium text-textColor hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li aria-current="page">
                <a href="#" className=" text-[14px] font-medium text-textColor">
                  / Dashboards
                </a>
              </li>
              <li aria-current="page">
                <a href="#" className=" text-[14px] font-medium">
                  <span className="text-textColor">/</span>{" "}
                  <span className="text-black">Projects</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 px-[20px] lg:px-4 xl:px-8 gap-10 lg:gap-4 xl:gap-10">
        <div className="col-span-1 p-8 bg-white shadow-sm rounded-lg">
          <p className="text-[2.5rem] font-semibold">237</p>
          <p className="text-gray-400 text-lg font-medium mb-6">
            Current Projects
          </p>
          <div className="flex items-center gap-7">
            <DoughnutChart />
            <div className="flex  flex-col  gap-3">
              <div className="flex justify-between items-center gap-5">
                <div className="flex items-center gap-4">
                  <p className="px-[5px] py-[2.3px] rounded-md bg-primary"></p>
                  <p className="text-gray-400 font-medium text-[16px]">
                    Active
                  </p>
                </div>
                <p className="text-gray-700 font-medium text-[16px]">30</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <div className="flex items-center gap-4">
                  <p className="px-[5px] py-[2.3px] rounded-md bg-[#17EA76]"></p>
                  <p className="text-gray-400 font-medium text-[16px]">
                    Completed
                  </p>
                </div>
                <p className="text-gray-700 font-medium text-[16px]">45</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <div className="flex items-center gap-4">
                  <p className="px-[5px] py-[2.3px] rounded-md bg-[#E4E6EF]"></p>
                  <p className="text-gray-400 font-medium text-[16px]">
                    Yet to start
                  </p>
                </div>
                <p className="text-gray-700 font-medium text-[16px]">25</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-8 bg-white shadow-sm rounded-lg">
          <p className="text-[2.5rem] font-semibold">$3,290.00</p>
          <p className="text-gray-400 text-lg font-medium mb-6">
            Project Finance
          </p>
          <div className="flex  flex-col  gap-2">
            <div className="flex font-medium justify-between  items-center pb-[13px] border-b-2 border-gray-200 border-dotted">
              <p>Avg. Project Budget</p>
              <div className="flex items-center">
                <span className="svg-icon svg-icon-3 me-1 svg-icon-success">
                  <svg
                    className="text-[#17EA76]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                $6,570
              </div>
            </div>
            <div className="flex  font-medium  justify-between  items-center pb-[13px] border-b-2 border-gray-200 border-dotted">
              <p>Lowest Project Check</p>
              <div className="flex items-center">
                <span className="svg-icon svg-icon-3 me-1 svg-icon-danger">
                  <svg
                    className="text-[#F1416C]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4 14.8L5.3 6.69999C4.9 6.29999 4.9 5.7 5.3 5.3C5.7 4.9 6.29999 4.9 6.69999 5.3L14.8 13.4L13.4 14.8Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M19.8 8.5L8.5 19.8H18.8C19.4 19.8 19.8 19.4 19.8 18.8V8.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                $408
              </div>
            </div>
            <div className="flex  font-medium  justify-between  items-center pb-[13px]">
              <p>Ambassador Page</p>
              <div className="flex items-center">
                <span className="svg-icon svg-icon-3 me-1 svg-icon-success">
                  <svg
                    className="text-[#17EA76]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.3"
                      d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                $920
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-8 bg-white shadow-sm rounded-lg">
          <div className="mb-[22px]">
            <p className="text-[2.5rem] font-semibold">49</p>
            <p className="text-gray-400 text-lg font-medium mb-6">
              Our Clients
            </p>
          </div>

          <div className="flex mb-[30px] cursor-pointer">
            <LightTooltip title="Alan Warden" placement="top">
              <div className="w-[35px] h-[35px] rounded-full bg-[#FFC700] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                A
              </div>
            </LightTooltip>
            <LightTooltip title="Michael Eberon" placement="top">
              <img
                src={Michael}
                className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
              />
            </LightTooltip>
            <LightTooltip title="Michelle Swanston" placement="top">
              <img
                src={Michelle}
                className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
              />
            </LightTooltip>

            <LightTooltip title="Francis Mitcham" placement="top">
              <img
                src={Francis}
                className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
              />
            </LightTooltip>
            <LightTooltip title="Susan Redwood" placement="top">
              <div className="w-[35px] h-[35px] rounded-full bg-primary text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                S
              </div>
            </LightTooltip>
            <LightTooltip title="Melody Macy" placement="top">
              <img
                src={Melody}
                className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
              />
            </LightTooltip>
            <LightTooltip title="Perry Matthew" placement="top">
              <div className="w-[35px] h-[35px] rounded-full bg-[#7239EA] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                P
              </div>
            </LightTooltip>
            <LightTooltip title="Barry Walter" placement="top">
              <img
                src={Barry}
                className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
              />
            </LightTooltip>
            <div className="w-[35px] h-[35px] rounded-full bg-[#181C32] text-[12px] font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
              +42
            </div>
          </div>
          <div>
            <button className="bg-[#00a3ff] text-[16px] hover:bg-[#26b1ff]  transition-all duration-200 py-2 px-4 text-white rounded me-3">
              All Clients
            </button>
            <button className=" py-2 px-4 rounded text-[#7e8299] bg-[#f9f9f9]">
              Invite New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
