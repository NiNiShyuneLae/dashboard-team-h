// import React from 'react'

import CountUp from "react-countup";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { BiSolidRectangle } from "react-icons/bi";
import { MdUploadFile } from "react-icons/md";
import OverTimeChart from "../components/OverTimeChart";
import "./Detail.css";
import TimetableCard from "../components/TimetableCard";

const Detail = () => {
  return (
    <div className=" bg-[#F9F9F9]">
      <div className="container">
        <div className="header">
          <h3 className=" text-xl font-bold">View Project</h3>

          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-black"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-400">
                    Projects
                  </span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
                    View Project
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="detail container mt-7  ">
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
              <div className=" flex flex-wrap gap-5 mt-5">
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
                    <CountUp end={15000} prefix="$" separator="," decimal="." />
                  </h4>
                  <p className=" text-textColor text-sm">Budget Spent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-0">
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
              <div className="">For donut chart</div>
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
                    id="years"
                    className="bg-[#F9F9F9] text-[#5E6282] text-sm rounded-lg block w-full p-2.5 cursor-pointer"
                  >
                    <option selected>2020 ...</option>
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
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-0">
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
                  <div className="flex items-center ms-5 gap-3">
                    <MdUploadFile className=" text-4xl text-[#00A3FF]" />
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
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-0">
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
