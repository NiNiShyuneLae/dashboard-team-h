// import React from 'react'

import CountUp from "react-countup";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { BiSolidRectangle } from "react-icons/bi";
import { MdUploadFile } from "react-icons/md";
import OverTimeChart from "../components/OverTimeChart";
import Michael from "../assets/images/Michael.jpg";
import Michelle from "../assets/images/Michelle.jpg";
import Francis from "../assets/images/Francis.jpg";
import Melody from "../assets/images/Melody.jpg";
import Barry from "../assets/images/Barry.jpg";
import "./Detail.css";
import TimetableCard from "../components/TimetableCard";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material";
import DoughnutChart from "../components/DoughnutChart";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const nav = useNavigate()
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
    <div className=" bg-[#F9F9F9] cursor-pointer">
      <div className="py-8">
      <div className="lg:px-[32px] px-[20px]">
        <p className=" text-[1.25rem] font-semibold">View Project</p>
        <div>
          <nav
            className="justify-between  pb-3 text-gray-700  sm:flex  bg-gray-5"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center mb-3 space-x-1 sm:mb-0">
              <li onClick={() => nav('/')}>
                <a
                  
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
                  <span className="text-black">View Project</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
        <div className="detail  mt-7  ">
          <div className="container flex flex-wrap bg-white rounded-lg py-7">
            <div className="bg-[#F9F9F9] w-[100px] h-[100px] md:w-[150px]  md:h-[150px] flex justify-center rounded-lg">
              <img
                src="https://preview.keenthemes.com/craft/assets/media/svg/brand-logos/volicity-9.svg"
                alt="project image"
                className=" w-[50px] md:w-[75px]"
              />
            </div>
            <div className=" ms-5 mt-1">
              <div className="">
                <h3 className=" text-xl font-bold inline-block">
                  CRM Dashboard
                </h3>
                <span className="bg-[#E8FFF3] text-[#50CE93] text-xs font-medium px-2.5 py-0.5 ms-2 rounded-md">
                  In Progress
                </span>

                <p className=" text-textColor">
                  #1 Tool to get started with Web Apps any Kind & size
                </p>
              </div>
              <div className="flex lg:items-center flex-col lg:flex-row mt-5 mb-[30px] cursor-pointer justify-between gap-10">
                <div className=" flex flex-wrap gap-5 ">
                  <div className=" border border-dashed rounded-md p-2">
                    <h4 className=" text-base font-semibold">29 Jan, 2023</h4>
                    <p className=" text-textColor text-sm">Due Date</p>
                  </div>
                  <div className="border border-dashed rounded-md p-2">
                    <h4 className=" text-base font-semibold">
                      <BsArrowDown className=" inline-block text-red-500 text-base" />
                      <CountUp end={75} />
                    </h4>
                    <p className=" text-textColor text-sm">Open Tasks</p>
                  </div>
                  <div className="border border-dashed rounded-md p-2">
                    <h4 className=" text-base font-semibold">
                      <BsArrowUp className=" inline-block text-green-500 text-base" />
                      <CountUp
                        end={15000}
                        prefix="$"
                        separator=","
                        decimal="."
                      />
                    </h4>
                    <p className=" text-textColor text-sm">Budget Spent</p>
                  </div>
                </div>
                <div className="flex ">
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
              </div>
            </div>
          </div>
          <div className="container grid grid-cols-1 lg:grid-cols-2  gap-5 mt-5 p-0">
            <div className=" col-span-1 bg-white rounded-lg p-10">
              <div className="flex justify-between">
                <div className=" mb-5">
                  <h4 className=" text-base font-semibold">Tasks Summary</h4>
                  <p className=" text-textColor text-sm">24 Overdue Tasks</p>
                </div>
                <div className="">
                  <button className=" bg-[#F9F9F9] rounded-lg w-full px-4 py-2.5 text-sm text-[#5E6282]">
                    View Tasks
                  </button>
                </div>
              </div>
              <div className="flex lg:items-center flex-col lg:flex-row gap-10 mb-14">
              <div className="w-[170px] h-[170px] pt-4">
              <DoughnutChart/>
              </div>
            <div className="flex  flex-col  gap-3">
              <div className="flex justify-between items-center gap-5">
                <div className="flex items-center  gap-4">
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
                  <p className="px-[5px] py-[2.3px] rounded-md bg-[#F1416C]"></p>
                  <p className="text-gray-400 font-medium text-[16px]">
                    Overdue
                  </p>
                </div>
                <p className="text-gray-700 font-medium text-[16px]">0</p>
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
              <div className="h-auto border-[1px] border-[#00A3FF] border-dashed rounded-lg bg-[#F1FAFF]">
                <p className=" p-5">
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Invite New .NET Collaborators
                  </a>{" "}
                  to create great outstanding business to business .jsp modutr
                  class scripts
                </p>
              </div>
            </div>
            <div className=" col-span-1 bg-white rounded-lg pe-10 py-10">
              <div className="flex justify-between">
                <div className="ms-8 mb-5">
                  <h4 className=" text-base font-semibold">Tasks Over Time</h4>
                  <ul className="flex gap-3">
                    <li className="flex items-center gap-1">
                      <i className=" text-[10px] text-[#50CD89]">
                        <BiSolidRectangle />
                      </i>
                      <p className=" text-textColor text-sm">Complete</p>
                    </li>
                    <li className="flex items-center gap-1">
                      <i className=" text-[10px] text-[#00A3FF]">
                        <BiSolidRectangle />
                      </i>
                      <p className=" text-textColor text-sm">Incomplete</p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <select
                    defaultValue="default"
                    id="years"
                    className="bg-[#F9F9F9] text-[#5E6282] text-sm rounded-lg block w-full p-2.5 cursor-pointer"
                  >
                    <option value="default">2020 ...</option>
                    <option value="Q1">2020 Q1</option>
                    <option value="Q2">2020 Q2</option>
                    <option value="Q3">2020 Q3</option>
                    <option value="Q4">2020 Q3</option>
                  </select>
                </div>
              </div>
              <OverTimeChart />
            </div>
          </div>
          <div className="container grid grid-cols-1 lg:grid-cols-2  gap-5 mt-5 p-0">
            <div className=" col-span-1 bg-white rounded-lg p-10">
              <TimetableCard />
            </div>
            <div className=" col-span-1 bg-white rounded-lg p-10">
              <div className="flex justify-between">
                <div className=" mb-5">
                  <h4 className=" text-base font-semibold">Largest Files</h4>
                  <p className=" text-textColor text-sm">
                    Total 382 fiels, 2,6GB space usage
                  </p>
                </div>
                <div className="">
                  <button className=" bg-[#F9F9F9] rounded-lg w-full px-4 py-2.5 text-sm text-[#5E6282]">
                    View All
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className=" h-[30px]"
                  src="https://preview.keenthemes.com/craft/assets/media/svg/files/pdf.svg"
                  alt="pdf"
                />
                <div className="">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Project tech requirements
                  </a>
                  <p className=" text-sm text-textColor">
                    2 days ago{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Karina Clark
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <img
                  className=" h-[30px]"
                  src="https://preview.keenthemes.com/craft/assets/media/svg/files/doc.svg"
                  alt="doc"
                />
                <div className="">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Create FureStibe branding proposal
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 1 day{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Marcus Blake
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <img
                  className=" h-[30px]"
                  src="https://preview.keenthemes.com/craft/assets/media/svg/files/css.svg"
                  alt="css"
                />
                <div className="">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Completed Project Stylings
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 1 day{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Terry Barry
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <img
                  className=" h-[30px]"
                  src="https://preview.keenthemes.com/craft/assets/media/svg/files/ai.svg"
                  alt="ai"
                />
                <div className="">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Create Project Wireframes
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 3 days{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Roth Bloom
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex mt-5 w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex items-center w-full h-auto p-5 border-[1px] border-[#00A3FF] border-dashed rounded-lg cursor-pointer bg-[#F1FAFF] hover:bg-gray-100"
                >
                  <div className="flex items-center  gap-3">
                    {/* <MdUploadFile className=" text-4xl text-[#00A3FF]" /> */}
                    <svg width="35" height="35" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.25" d="M8.375 11.167C8.375 6.54161 12.1246 2.79199 16.75 2.79199H43.9893C46.2105 2.79199 48.3407 3.67436 49.9113 5.24497L56.172 11.5057C57.7426 13.0763 58.625 15.2065 58.625 17.4277V55.8337C58.625 60.459 54.8754 64.2087 50.25 64.2087H16.75C12.1246 64.2087 8.375 60.459 8.375 55.8337V11.167Z" fill="#00A3FF"></path>
<path d="M41.875 5.28162C41.875 3.90663 42.9896 2.79199 44.3646 2.79199V2.79199C46.3455 2.79199 48.2452 3.57889 49.6459 4.97957L56.4374 11.7711C57.8381 13.1718 58.625 15.0715 58.625 17.0524V17.0524C58.625 18.4274 57.5104 19.542 56.1354 19.542H44.6667C43.1249 19.542 41.875 18.2921 41.875 16.7503V5.28162Z" fill="#00A3FF"></path>
<path d="M32.4311 25.3368C32.1018 25.4731 31.7933 25.675 31.5257 25.9427L23.1507 34.3177C22.0605 35.4079 22.0605 37.1755 23.1507 38.2657C24.2409 39.3559 26.0085 39.3559 27.0987 38.2657L30.708 34.6563V47.4583C30.708 49.0001 31.9579 50.25 33.4997 50.25C35.0415 50.25 36.2913 49.0001 36.2913 47.4583V34.6563L39.9007 38.2657C40.9909 39.3559 42.7585 39.3559 43.8487 38.2657C44.9389 37.1755 44.9389 35.4079 43.8487 34.3177L35.4737 25.9427C34.6511 25.1201 33.443 24.9182 32.4311 25.3368Z" fill="#00A3FF"></path>
</svg>
                    <div className="">
                      <p className=" font-semibold text-gray-800">
                        Quick file uploader
                      </p>
                      <p className="text-sm text-[#5E648B]">
                        Drag & Drop or choose files from computer
                      </p>
                    </div>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="container grid grid-cols-1 lg:grid-cols-2  gap-5 mt-5 p-0">
            <div className=" col-span-1 bg-white rounded-lg p-10">
              <div className="flex justify-between">
                <div className=" mb-5">
                  <h4 className=" text-base font-semibold">New Contibutors</h4>
                  <p className=" text-textColor text-sm">
                    From total 482 Participants
                  </p>
                </div>
                <div className="">
                  <button className=" bg-[#F9F9F9] rounded-lg w-full px-4 py-2.5 text-sm text-[#5E6282]">
                    View All
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mt-5">
                  <img
                    className=" h-[40px] rounded-full"
                    src="https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg"
                    alt="doc"
                  />
                  <div className="">
                    <a
                      href="#"
                      className=" hover:text-primary font-semibold text-gray-800"
                    >
                      Emma Smith
                    </a>
                    <p className=" text-sm text-textColor">
                      8 Pending & 97 Completed Tasks
                    </p>
                  </div>
                </div>
                <span className=" text-xs bg-[#F9F9F9] px-2 py-1 text-[#8E92AC] font-semibold rounded">
                  5
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative">
                    <span className="flex items-center justify-center h-[40px] rounded-full text-[#F4696C] bg-[#FFF5F8] w-[40px]">
                      M
                    </span>
                    <div className="absolute bg-[#50CD89] rounded-full w-2 h-2 left-full top-full -translate-x-2 -translate-y-3"></div>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className=" hover:text-primary font-semibold text-gray-800"
                    >
                      Melody Macy
                    </a>
                    <p className=" text-sm text-textColor">
                      5 Pending & 84 Completed
                    </p>
                  </div>
                </div>
                <span className=" text-xs bg-[#F9F9F9] px-2 py-1 text-[#8E92AC] font-semibold rounded">
                  8
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mt-5">
                  <img
                    className=" h-[40px] rounded-full"
                    src="https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg"
                    alt="doc"
                  />
                  <div className="">
                    <a
                      href="#"
                      className=" hover:text-primary font-semibold text-gray-800"
                    >
                      Max Smith
                    </a>
                    <p className=" text-sm text-textColor">
                      9 Pending & 103 Completed
                    </p>
                  </div>
                </div>
                <span className=" text-xs bg-[#F9F9F9] px-2 py-1 text-[#8E92AC] font-semibold rounded">
                  9
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mt-5">
                  <img
                    className=" h-[40px] rounded-full"
                    src="https://preview.keenthemes.com/craft/assets/media/avatars/300-5.jpg"
                    alt="doc"
                  />
                  <div className="">
                    <a
                      href="#"
                      className=" hover:text-primary font-semibold text-gray-800"
                    >
                      Sean Bean
                    </a>
                    <p className=" text-sm text-textColor">
                      3 Pending & 55 Completed
                    </p>
                  </div>
                </div>
                <span className=" text-xs bg-[#F9F9F9] px-2 py-1 text-[#8E92AC] font-semibold rounded">
                  3
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 mt-5">
                  <img
                    className=" h-[40px] rounded-full"
                    src="https://preview.keenthemes.com/craft/assets/media/avatars/300-25.jpg"
                    alt="doc"
                  />
                  <div className="">
                    <a
                      href="#"
                      className=" hover:text-primary font-semibold text-gray-800"
                    >
                      Brian Cox
                    </a>
                    <p className=" text-sm text-textColor">
                      4 Pending & 115 Completed
                    </p>
                  </div>
                </div>
                <span className=" text-xs bg-[#F9F9F9] px-2 py-1 text-[#8E92AC] font-semibold rounded">
                  4
                </span>
              </div>
            </div>
            <div className=" col-span-1 bg-white rounded-lg p-10">
              <div className="flex justify-between">
                <div className=" mb-5">
                  <h4 className=" text-base font-semibold">My Tasks</h4>
                  <p className=" text-textColor text-sm">
                    Total 25 tasks in backlog
                  </p>
                </div>
                <div className="">
                  <button className=" bg-[#F9F9F9] rounded-lg w-full px-4 py-2.5 text-sm text-[#5E6282]">
                    View All
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-5 border-s-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ms-5 w-5 h-5 text-primary rounded"
                />
                <div className=" ps-3">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Create FureStibe branding logo
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 1 day{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Karina Clark
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5 border-s-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ms-5 w-5 h-5 text-primary rounded"
                />
                <div className=" ps-3">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Schedule a meeting with FireBear CTO John
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 3 days{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Rober Doe
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5 border-s-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ms-5 w-5 h-5 text-primary rounded"
                />
                <div className=" ps-3">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    9 Degree Porject Estimation
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 1 week{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Neil Owen
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5 border-s-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ms-5 w-5 h-5 text-primary rounded"
                />
                <div className=" ps-3">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Dashgboard UI & UX for Leafr CRM
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 1 week{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Olivia Wild
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5 border-s-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="ms-5 w-5 h-5 text-primary rounded"
                />
                <div className=" ps-3">
                  <a
                    href="#"
                    className=" hover:text-primary text-sm font-semibold text-gray-800"
                  >
                    Mivy App R&D, Meeting with clients
                  </a>
                  <p className=" text-sm text-textColor">
                    Due in 2 weeks{" "}
                    <a href="#" className=" text-primary hover:text-blue-500">
                      Sean Bean
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
