import React, { useState } from "react";
import logo from "../assets/icons/logo-default.svg";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Side = () => {
  return (
    <div className="flex flex-row md:flex-col justify-between z-20 cursor-pointer">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen  -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-4 overflow-y-auto bg-white">
          <a className="flex items-center pl-2.5 mb-5">
            <img src={logo} className="max-h-12 mr-3" />
          </a>
          <ul className="space-y-2 font-medium">
            <NavLink to={"/"}>
              <li className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
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
                    fill="#00A3FF"
                  ></rect>
                  <rect
                    opacity="0.3"
                    x="13"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#00AFFF"
                  ></rect>
                  <rect
                    opacity="0.3"
                    x="13"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#00AFFF"
                  ></rect>
                  <rect
                    opacity="0.3"
                    x="2"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#00AFFF"
                  ></rect>
                </svg>
                <span className="ml-3 text-primary text-base">Dashboards</span>
              </li>
            </NavLink>
            <li>
              <div className="rounded-none ">
                <h2 className="text-textColor flex hover:text-primary transition-all duration-200 items-center justify-between w-full  p-2 text-base hover:bg-gray-100">
                  <a className="flex items-center">
                    <svg
                      width="24"
                      height="24"
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
                    <span className="ml-3  text-base">Projects</span>
                  </a>
                </h2>
                <ul className="px-3 py-2">
                  <li>
                    <a className="flex items-center p-2 text-textColor hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-100">
                      &bull;
                      <span className="ml-3  text-base">View Project</span>
                    </a>
                  </li>
                  <NavLink to={"/create"}>
                    <li className="flex items-center p-2 text-textColor hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-100">
                      &bull;
                      <span className="ml-3  text-base">Create Project</span>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li>
              <a className="flex items-center p-2 duration-200 transition-all text-textColor hover:text-primary rounded-lg hover:bg-gray-100">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                    fill="currentColor"
                  ></path>
                  <rect
                    opacity="0.3"
                    x="8"
                    y="3"
                    width="8"
                    height="8"
                    rx="4"
                    fill="currentColor"
                  ></rect>
                </svg>
                <span className="ml-3  text-base">Users</span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 duration-200 transition-all text-textColor hover:text-primary rounded-lg hover:bg-gray-100">
                <CgProfile className="w-[24px] h-[24px]" />
                <span className="ml-3  text-base">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Side;
