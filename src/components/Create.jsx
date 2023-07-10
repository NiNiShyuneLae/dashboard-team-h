import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import DatePicker from "./DatePicker";
import interior from '../assets/images/icon-2.png';
import archi from '../assets/images/icon-1.png';

const Create = () => {
  const nav = useNavigate();
  const [personal, setPersonal] = useState(true);
  const [project, setProject] = useState(false);
  const [comment, setComment] = useState('');



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inputRef = useRef(null);
  const changeHandler = () => {
    setComment();
  };

  const personalHandler = () => {
    setPersonal(!personal);
    setProject(false);
  };
  const projectHandler = () => {
    setProject(!project);
    setPersonal(false);
  };
  const fileSelect = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="lg:px-[32px] px-[20px] py-8  select-none">
            <div className="">
        <p className=" text-[1.25rem] font-semibold text-white">Projects</p>
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
                  <span className="text-primary ">Create</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="py-8">
        <div>
          <div className="pb-9">
            <h2 className="text-[1.75rem] font-semibold text-white">Project Type</h2>
            <p className="font-medium text-[  1.15rem]">
              <span className="text-[#A1A5B7] ">
                If you need more info, please check out
              </span>
              &nbsp;&nbsp;
              <span className="text-primary cursor-pointer">FAQ Page</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div
              onClick={() => personalHandler()}
              className={`${
                personal ? "border-primary " : "border-gray-100"
              } flex items-center gap-3 bg-cardColor border-dotted border-2  p-5 rounded`}
            >
              <img src={interior} className=" h-[45px] " alt="" />
              <div className="">
                <p className="font-semibold text-[1.35rem] mb-1 text-white">
                  Interior
                </p>
                <p className="font-medium text-textColor text-[  1.15rem]">
                  If you need more info, please check it out
                </p>
              </div>
            </div>
            <div
              onClick={() => projectHandler()}
              className={`${
                project ? "border-primary " : "border-gray-100"
              } flex items-center gap-3 bg-cardColor border-dotted border-2  p-5 rounded`}
            >
         
              <img src={archi} className=" h-[45px]" alt="" />
              <div className="">
                <p className="font-semibold text-[1.35rem] mb-1 text-white">
                  Architecture
                </p>
                <p className="font-medium text-textColor text-[  1.15rem]">
                  If you need more info, please check it out
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-11">
          <div className="pb-9">
            <h2 className="text-[1.75rem] font-semibold text-white">Project Settings</h2>
            <p className="font-medium text-[  1.15rem]">
              <span className="text-[#A1A5B7] ">
                If you need more info, please check out
              </span>
              &nbsp;&nbsp;
              <span className="text-primary cursor-pointer">
                Project Guidelines
              </span>
            </p>
          </div>
          <div
            className="border-primary bg-cardColor
            flex items-center gap-3 border-dotted border-2 mb-6  px-6 py-5 md:w-[90%] w-full lg:w-1/2 rounded"
            onClick={() => fileSelect()}
          >
            <svg
              color="#b19777"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                fill="currentColor"
              ></path>
              <path
                d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                fill="currentColor"
              ></path>
              <path
                d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="">
              <p className="font-semibold text-[1.35rem] mb-1 text-white">
                Drop files here or click to upload.
              </p>
              <p className="font-medium text-[#A1A5B7] text-[  1.15rem]">
                Upload up to 10 files
              </p>
            </div>
            <input
              type="file"
              id="fileInput"
              name="files"
              multiple
              style={{ display: "none" }}
            />
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem] text-white">
              Customer <span className="text-red-600">*</span>
            </p>
            <select
              name="Select"
              defaultValue="default"
              className=" md:w-[90%] w-full lg:w-1/2 py-3 px-5 text-textColor font-medium bg-cardColor rounded-lg custom-select focus:ring-0  focus:outline-none"
            >
              <option value="default" disabled hidden>
                Select...
              </option>
              <option value="">Keenthemes</option>
              <option value="">CRM App</option>
            </select>
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem] text-white">
              Project Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="py-3 text-textColor font-medium px-5 md:w-[90%] w-full lg:w-1/2 bg-cardColor rounded-lg focus:outline-none"
              placeholder="Enter Project Name"
              
              ref={inputRef}
              onChange={() => changeHandler()}
            />
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem] text-white">
              Project Description <span className="text-red-600">*</span>
            </p>
            <textarea
              className="py-3 text-textColor font-medium px-5 md:w-[90%] w-full lg:w-1/2 bg-cardColor rounded-lg focus:outline-none"
              rows="3"
              defaultValue={comment}
              onChange={() => changeHandler()}
              placeholder="Enter Project Description"
              name="settings_description"
              ref={inputRef}
            ></textarea>
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem] text-white">
              Due Date <span className="text-red-600">*</span>
            </p>
            <div className="lg:w-1/2 md:w-[90%] w-full ">
              <DatePicker />
            </div>
          </div>
          <div className="mb-6 flex items-center justify-between lg:w-1/2 md:w-[90%] w-full">
            <div>
              <p className="font-medium text-[1.075rem] text-white">
                Notifications <span className="text-red-600">*</span>
              </p>
              <p className="text-[#A1A5B7] text-[13px] font-medium">
                Allow Notifications by Phone or Email
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-[#A1A5B7] "
                >
                  Email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  defaultChecked="true"
                  className="w-4 h-4 text-blue-600 bg-gray-100  rounded "
                />
                <label
                  htmlFor="checked-checkbox"
                  className="ml-2 text-sm font-medium text-[#A1A5B7] "
                >
                  Phone
                </label>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => nav("/")}
              type="submit"
              className="py-3 px-6 btn-animation"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
