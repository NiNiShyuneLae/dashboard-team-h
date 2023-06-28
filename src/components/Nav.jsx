import React, { useState } from "react";
import person from "../assets/images/person.jpg";
import "./Nav.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate()
  const [show, setShow] = useState(false);
  const [btnShow, setBtnShow] = useState(false);
  const focusHandler = () => {
    setShow(true);
  };
  const blurHandler = () => {
    setShow(false);
    setBtnShow(false);
  };
  const clickHandler = () => {
    setBtnShow(true);
  };
  return (
    <div className=" py-[10px] h-[60px] bg-white w-full">
      <nav className=" border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pe-10">
          <div className="flex md:order-2">
            <button
              type="button"
              aria-expanded="false"
              className="lg:hidden relative  text-gray-500  hover:bg-gray-100  focus:outline-none   rounded-lg text-sm p-2.5 mr-1"
              onClick={() => clickHandler()}
              onBlur={() => blurHandler()}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div
              className={`${
                btnShow ? "" : "hidden"
              } z-10 absolute top-[50px] w-[350px] left-0 right-0 mx-auto p-[23px]  bg-white  divide-gray-100 rounded-lg shadow`}
            >
              <div className="flex items-center  justify-between mb-3 text-textColor sticky top-0 bg-white">
                <p className="font-medium text-[14px]">Recently Searched :</p>
                <div className="flex items-center gap-2">
                  <svg
                    className="hover:text-primary transition-all duration-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    className="hover:text-primary transition-all duration-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 h-[350px] overflow-y-scroll"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M15 17H9V20H15V17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        BoomApp by Keenthemes
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #45789
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        "Kept API Project Meeting
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #84050
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        "KPI Monitoring App Launch
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #84250
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 8L12.5 5L5 14V19H20V8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        Project Reference FAQ
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #67945
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        "FitPro App Development
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #84250
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        Shopix Mobile App
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #45690
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 flex items-center  gap-4">
                    <svg
                      className="text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 8L12.5 5L5 14V19H20V8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="cursor-pointer">
                      <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                        "Landing UI Design" Launch
                      </p>
                      <p className="text-[12px] font-medium text-textColor">
                        #24005
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative hidden md:block">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  className="block  py-[10px] ps-[42px] pe-[13px] text-sm text-gray-900  rounded-lg bg-gray-50 focus:outline-none"
                  placeholder="Search..."
                  onFocus={() => focusHandler()}
                  onBlur={() => blurHandler()}
                />
                <div
                  className={`${
                    show ? "" : "hidden"
                  } z-10 absolute w-[350px] p-[23px]  bg-white  divide-gray-100 rounded-lg shadow`}
                >
                  <div className="flex items-center justify-between mb-3 text-textColor sticky top-0 bg-white">
                    <p className="font-medium text-[14px]">
                      Recently Searched :
                    </p>
                    <div className="flex items-center gap-2">
                      <svg
                        className="hover:text-primary transition-all duration-200"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        className="hover:text-primary transition-all duration-200"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200 h-[350px] overflow-y-scroll"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M15 17H9V20H15V17Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            BoomApp by Keenthemes
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #45789
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            "Kept API Project Meeting
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #84050
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            "KPI Monitoring App Launch
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #84250
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M20 8L12.5 5L5 14V19H20V8Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            Project Reference FAQ
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #67945
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            "FitPro App Development
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #84250
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            Shopix Mobile App
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #45690
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-2 flex items-center  gap-4">
                        <svg
                          className="text-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M20 8L12.5 5L5 14V19H20V8Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="cursor-pointer">
                          <p className="font-medium text-[14px] hover:text-primary transition-all duration-200">
                            "Landing UI Design" Launch
                          </p>
                          <p className="text-[12px] font-medium text-textColor">
                            #24005
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  md:order-2 md:gap-10 sm:gap-0">
            <div>
              <button
                type="button"
                className="flex mr-3 relative text-sm  md:mr-0 text-textColor hover:text-primary transition-all duration-200"
                id="dropdownHoverButton"
                aria-expanded="false"
                data-dropdown-toggle="btnhover"
                data-dropdown-trigger="hover"
              >
                <span className="sr-only">Open user menu</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="currentColor"
                  ></rect>
                  <rect
                    opacity="0.3"
                    x="13"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="currentColor"
                  ></rect>
                  <rect
                    opacity="0.3"
                    x="13"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="currentColor"
                  ></rect>
                  <rect
                    opacity="0.3"
                    x="2"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="currentColor"
                  ></rect>
                </svg>
              </button>
              <div
                className="z-50 hidden absolute top-0 left-0 right-0 mx-auto lg:right-[68%] py-3 my-4 text-base shadow-lg  list-none bg-white divide-y divide-gray-100 rounded-lg"
                id="btnhover"
              >
                <div className="noti-bg w-[360px] h-[110px] rounded-t relative">
                  <div className="px-9">
                    <p className=" pt-9 pb-5 text-white">
                      <span>Notifications</span>
                      <span className="text-xs ms-2">24 reports</span>
                    </p>
                    <p className="text-white text-[14px] border-b-[3px]  pb-2 py-3 absolute bottom-[-3px] border-primary">
                      Logs
                    </p>
                  </div>
                </div>
                <hr />
                <ul
                  className="py-6 font-medium text-base cursor-pointer"
                  aria-labelledby="user-menu-button"
                >
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                        200 OK
                      </span>
                      <p className="text-[13px] font-medium hover:text-primary transition-all duration-200">
                        New Order
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      Just Now
                    </span>
                  </li>
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                        500 ERR
                      </span>
                      <p className="text-[13px] font-medium hover:text-primary transition-all duration-200">
                        New Customer
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      2 hrs
                    </span>
                  </li>
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                        200 OK
                      </span>
                      <p className="text-[13px] font-medium hover:text-primary transition-all duration-200">
                        Payment Process
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      5 hrs
                    </span>
                  </li>
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                        300 WRN
                      </span>
                      <p className="text-[13px]  font-medium hover:text-primary transition-all duration-200">
                        Search Query
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      2 days
                    </span>
                  </li>
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center  gap-2">
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                        200 OK
                      </span>
                      <p className="text-[13px] font-medium hover:text-primary transition-all duration-200">
                        API Connection
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      1 week
                    </span>
                  </li>
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 text-xs  font-medium mr-2 px-2.5 py-0.5 rounded">
                        200 OK
                      </span>
                      <p className="text-[13px] font-medium hover:text-primary transition-all duration-200">
                        Database restore
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      Mar 5
                    </span>
                  </li>
                  <li className="px-9 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                        300 WRN
                      </span>

                      <p className="text-[13px] font-medium hover:text-primary transition-all duration-200">
                        System Update
                      </p>
                    </div>
                    <span className="bg-gray-100   text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      May 15
                    </span>
                  </li>
                </ul>
                <hr />
                <p className="cursor-pointer hover:text-primary transition-all duration-200 px-5 py-3 flex items-center gap-2 justify-center">
                  View All{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="flex mr-3 text-sm  md:mr-0 relative"
                id="dropdownHoverButton"
                aria-expanded="false"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-9 h-9 rounded-md"
                  src={person}
                  alt="user photo"
                />
              </button>
              <div
                className="z-50  hidden absolute top-0 left-0 lg:right-[82%] py-3 my-4 text-base shadow-lg  list-none bg-white divide-y divide-gray-100 rounded-lg"
                id="dropdownHover"
              >
                <div className="px-4 py-5 cursor-pointer flex items-center gap-4 ">
                  <img src={person} className="w-12 h-12 rounded-md" alt="" />
                  <div>
                    <span className="flex items-center gap-3 text-gray-900  text-lg font-semibold">
                      Max Smith
                      <span className="bg-green-100 rounded-sm text-green-600 text-xs  mr-2 px-2.5 py-0.5 round font-semibold">
                        Pro
                      </span>
                    </span>
                    <span className="block text-sm  text-textColor font-medium truncate ">
                      max@kt.com
                    </span>
                  </div>
                </div>
                <hr />
                <ul
                  className="py-2 font-medium text-base cursor-pointer"
                  aria-labelledby="user-menu-button"
                >
                  <li onClick={() => nav('/profile')}>
                    <a
                      
                      className="block px-4 py-2  text-gray-800 hover:text-primary transition-all duration-200"
                    >
                      My Profile
                    </a>
                  </li>
                  <li onClick={() => nav('/')}>
                    <a
                      
                      className="block px-4 py-2  text-gray-800 hover:text-primary transition-all duration-200"
                    >
                      My Project
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2  text-gray-800 hover:text-primary transition-all duration-200"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
