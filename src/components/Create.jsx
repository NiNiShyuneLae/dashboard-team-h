import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import DatePicker from "./DatePicker";

const Create = () => {
  const navLink = useNavigate();
  const [personal, setPersonal] = useState(true);
  const [project, setProject] = useState(false);
  const [comment, setComment] = useState(
    `Experience share market at your fingertips with TICK PRO stock investment mobile trading app`
  );

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
      <div>
        <nav
          className="justify-between  pb-3 text-gray-500  sm:flex  bg-gray-5"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center mb-3 space-x-1 sm:mb-0">
            <Link to={"/"}>
              <li className=" text-[14px] font-medium text-textColor hover:text-blue-600">
                Home
              </li>
            </Link>
            <li aria-current="page">
              <a className=" text-[14px] font-medium text-textColor">
                / Dashboards
              </a>
            </li>
            <li aria-current="page">
              <a className=" text-[14px] font-medium">
                <span className="text-textColor">/</span>{" "}
                <span className="text-black">Create Projects</span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="py-8">
        <div>
          <div className="pb-9">
            <h2 className="text-[1.75rem] font-semibold">Project Type</h2>
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
                personal ? "border-primary bg-[#F1FAFF]" : "border-gray-100"
              } flex items-center gap-3 border-dotted border-2  p-5 rounded`}
            >
              <svg
                color={`${personal ? "#00A3FF" : "#A1A5B7"}`}
                width="45"
                height="45"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                  fill="currentColor"
                ></path>
                <rect
                  x="7"
                  y="6"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                ></rect>
              </svg>
              <div className="">
                <p className="font-semibold text-[1.35rem] mb-1">
                  Personal Project
                </p>
                <p className="font-medium text-[#A1A5B7] text-[  1.15rem]">
                  If you need more info, please check it out
                </p>
              </div>
            </div>
            <div
              onClick={() => projectHandler()}
              className={`${
                project ? "border-primary bg-[#F1FAFF]" : "border-gray-100"
              } flex items-center gap-3 border-dotted border-2  p-5 rounded`}
            >
              <svg
                color={`${project ? "#00A3FF" : "#A1A5B7"}`}
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="">
                <p className="font-semibold text-[1.35rem] mb-1">
                  Personal Project
                </p>
                <p className="font-medium text-[#A1A5B7] text-[  1.15rem]">
                  If you need more info, please check it out
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-11">
          <div className="pb-9">
            <h2 className="text-[1.75rem] font-semibold">Project Settings</h2>
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
            className="border-primary
            flex items-center gap-3 border-dotted border-2 mb-6  px-6 py-5 md:w-[90%] w-full lg:w-1/2 rounded"
            onClick={() => fileSelect()}
          >
            <svg
              color="#00A3FF"
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
              <p className="font-semibold text-[1.35rem] mb-1">
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
            <p className="font-medium text-[1.075rem]">
              Customer <span className="text-red-600">*</span>
            </p>
            <select
              name="Select"
              defaultValue="default"
              className=" md:w-[90%] w-full lg:w-1/2 py-3 px-5 text-gray-500 font-medium bg-gray-200 rounded-lg custom-select focus:ring-0  focus:outline-none"
            >
              <option value="default" disabled hidden>
                Select...
              </option>
              <option value="">Keenthemes</option>
              <option value="">CRM App</option>
            </select>
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem]">
              Project Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="py-3 text-gray-500 font-medium px-5 md:w-[90%] w-full lg:w-1/2 bg-gray-200 rounded-lg focus:outline-none"
              placeholder="Enter Project Name"
              value="StockPro Mobile App"
              ref={inputRef}
              onChange={() => changeHandler()}
            />
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem]">
              Project Description <span className="text-red-600">*</span>
            </p>
            <textarea
              className="py-3 text-gray-500 font-medium px-5 md:w-[90%] w-full lg:w-1/2 bg-gray-200 rounded-lg focus:outline-none"
              rows="3"
              defaultValue={comment}
              onChange={() => changeHandler()}
              placeholder="Enter Project Description"
              name="settings_description"
              ref={inputRef}
            ></textarea>
          </div>
          <div className="mb-6">
            <p className="font-medium text-[1.075rem]">
              Release Date <span className="text-red-600">*</span>
            </p>
            <div className="lg:w-1/2 md:w-[90%] w-full">
              <DatePicker />
            </div>
          </div>
          <div className="mb-6 flex items-center justify-between lg:w-1/2 md:w-[90%] w-full">
            <div>
              <p className="font-medium text-[1.075rem]">
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
              onClick={() => navLink("/")}
              type="submit"
              className="py-3 px-6 bg-primary rounded-lg text-white inline-block"
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
