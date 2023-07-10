import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Side = ({ num }) => {
  const [active, setActive] = useState(num);
  const nav = useNavigate();

  return (
    <div className="flex flex-row md:flex-col justify-between z-20 cursor-pointer ">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-900 "
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
        <div className="h-full px-6 py-4 overflow-y-auto bg-[#323232]">
          <a onClick={() => nav('/')} className="flex items-center pl-2.5 mb-5">
            <img src={logo} className="max-h-12 mr-3" />
            <div className="flex flex-col font-Oswald">
              <p className="text-primary tracking-[8px] text-2xl">BAUEN</p>
              <p className="text-textColor tracking-[2px] text-xs">
                INNOVATE DESIGN
              </p>
            </div>
          </a>
          <ul className="space-y-2 font-medium">
            <li
              onClick={() => nav("/")}
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-900 "
            >
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
                  fill="#b19777"
                ></rect>
                <rect
                  opacity="0.3"
                  x="13"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#b19777"
                ></rect>
                <rect
                  opacity="0.3"
                  x="13"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#b19777"
                ></rect>
                <rect
                  opacity="0.3"
                  x="2"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#b19777"
                ></rect>
              </svg>
              <span className="ml-3 text-primary text-base">Dashboards</span>
            </li>
            <li>
              <div className="rounded-none ">
                <h2
                  className={`${
                    active === "1" || active === "2"
                      ? "text-primary"
                      : "text-textColor"
                  } flex hover:text-primary transition-all duration-200 items-center justify-between w-full  p-2 text-base hover:bg-gray-900`}
                >
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
                  <li
                    onClick={() => {
                      nav(`/detail/${1}`);
                      // click(num)
                    }}
                    className={`flex  items-center p-2 ${
                      active === "1" ? "text-primary" : "text-textColor"
                    } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
                  >
                    &bull;
                    <span className="ml-3  text-base">View Project</span>
                  </li>

                  <li
                    onClick={() => {
                      nav(`/create/${2}`);
                      // click(num)
                    }}
                    className={`flex  items-center p-2 ${
                      active === "2" ? "text-primary" : "text-textColor"
                    } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
                  >
                    &bull;
                    <span className="ml-3  text-base">Create Project</span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="rounded-none ">
                <h2
                  className={`${
                    active === "5" || active === "6"
                      ? "text-primary"
                      : "text-textColor"
                  } flex hover:text-primary transition-all duration-200 items-center justify-between w-full  p-2 text-base hover:bg-gray-900`}
                >
                  <a className="flex items-center">
                    <svg
                      fill={
                        active === "5" || active === "6" ? "#b19777" : "#B8B5C3"
                      }
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M93.238,220.968h172.463c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084H93.238
				c-4.466,0-8.084,3.619-8.084,8.084S88.772,220.968,93.238,220.968z"
                            />
                            <path
                              d="M93.238,177.853h97.01c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084h-97.01
				c-4.466,0-8.084,3.619-8.084,8.084S88.772,177.853,93.238,177.853z"
                            />
                            <path
                              d="M114.796,398.282h280.253c16.344,0,29.642-13.298,29.642-29.642v-91.082c0-5.206-1.371-10.333-3.968-14.822
				c-2.233-3.865-7.179-5.189-11.044-2.953c-3.866,2.233-5.188,7.179-2.953,11.044c1.176,2.034,1.797,4.362,1.797,6.732v91.082
				c0,7.43-6.044,13.474-13.474,13.474H114.796c-7.43,0-13.474-6.044-13.474-13.474v-91.082c0-7.43,6.044-13.474,13.474-13.474
				h150.905c4.466,0,8.084-3.619,8.084-8.084c0-4.466-3.618-8.084-8.084-8.084H114.796c-16.344,0-29.642,13.298-29.642,29.642
				v91.082C85.154,384.984,98.452,398.282,114.796,398.282z"
                            />
                            <path
                              d="M477.068,412.237c1.684-5.067,2.596-10.484,2.596-16.11V158.989c0-28.231-22.969-51.2-51.2-51.2h-45.81V29.642
				C382.653,13.298,369.355,0,353.01,0h-21.558c-16.344,0-29.642,13.298-29.642,29.642v78.147H83.537
				c-28.231,0-51.2,22.969-51.2,51.2v237.137c0,5.627,0.912,11.043,2.596,16.11C14.43,419.065,0,438.368,0,460.8
				C0,489.031,22.969,512,51.2,512h409.6c28.231,0,51.2-22.969,51.2-51.2C512,438.368,497.57,419.065,477.068,412.237z
				 M317.979,29.642c0-7.43,6.044-13.474,13.474-13.474h21.558c7.43,0,13.474,6.044,13.474,13.474v13.474h-48.505V29.642z
				 M366.484,59.284v188.632h-16.168V59.284H366.484z M317.979,59.284h16.168v188.632h-16.168V59.284z M317.979,264.084h48.505
				v20.66c0,0.579-0.192,1.153-0.539,1.617l-21.558,28.743c-0.704,0.938-1.652,1.078-2.156,1.078c-0.503,0-1.452-0.14-2.156-1.078
				l-21.557-28.741c-0.348-0.466-0.54-1.04-0.54-1.619V264.084z M48.505,158.989c0-19.317,15.715-35.032,35.032-35.032h218.274
				v37.726h-57.667c-4.466,0-8.084,3.619-8.084,8.084s3.618,8.084,8.084,8.084h57.667v106.892c0,4.053,1.339,8.071,3.773,11.318
				l21.558,28.743c3.596,4.796,9.096,7.545,15.091,7.545c5.994,0,11.495-2.75,15.091-7.545l21.559-28.745
				c2.433-3.244,3.772-7.263,3.772-11.316v-63.776h33.954c4.466,0,8.084-3.619,8.084-8.084s-3.619-8.084-8.084-8.084h-33.954
				v-26.947h33.954c4.466,0,8.084-3.619,8.084-8.084s-3.619-8.084-8.084-8.084h-33.954v-37.726h45.81
				c19.317,0,35.032,15.715,35.032,35.032v237.137c0,19.317-15.715,35.032-35.032,35.032H83.537
				c-19.317,0-35.032-15.715-35.032-35.032V158.989z M460.8,495.832H51.2c-19.317,0-35.032-15.715-35.032-35.032
				c0-16.257,11.071-30.113,26.426-33.963c9.349,12.434,24.222,20.49,40.943,20.49h344.926c16.72,0,31.594-8.056,40.943-20.49
				c15.355,3.85,26.426,17.707,26.426,33.963C495.832,480.117,480.117,495.832,460.8,495.832z"
                            />
                            <path
                              d="M235.52,463.495h-1.078c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h1.078
				c4.466,0,8.084-3.618,8.084-8.084C243.604,467.113,239.986,463.495,235.52,463.495z"
                            />
                            <path
                              d="M433.853,463.495H272.168c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h161.684
				c4.466,0,8.084-3.618,8.084-8.084C441.937,467.113,438.318,463.495,433.853,463.495z"
                            />
                            <path
                              d="M202.105,463.495h-1.078c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h1.078
				c4.466,0,8.084-3.618,8.084-8.084C210.189,467.113,206.571,463.495,202.105,463.495z"
                            />
                            <path
                              d="M164.379,463.495H78.147c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h86.232
				c4.466,0,8.084-3.618,8.084-8.084C172.463,467.113,168.845,463.495,164.379,463.495z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="ml-3  text-base">Blogs</span>
                  </a>
                </h2>
                <ul className="px-3 py-2">
                  <li
                    onClick={() => {
                      nav(`/blogs/${5}`);
                      // click(num)
                    }}
                    className={`flex  items-center p-2 ${
                      active === "5" ? "text-primary" : "text-textColor"
                    } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
                  >
                    &bull;
                    <span className="ml-3  text-base">Blogs</span>
                  </li>

                  <li
                    onClick={() => {
                      nav(`/addblog/${6}`);
                      // click(num)
                    }}
                    className={`flex  items-center p-2 ${
                      active === "6" ? "text-primary" : "text-textColor"
                    } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
                  >
                    &bull;
                    <span className="ml-3  text-base">Add Blogs</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() => {
                nav(`/user/${3}`);
                // click(num)
              }}
              className={`flex  items-center p-2 ${
                active === "3" ? "text-primary" : "text-textColor"
              } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
            >
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
            </li>

            <li
              onClick={() => {
                nav(`/profile/${4}`);
                // click(num)
              }}
            >
              <p
                className={`flex  items-center p-2 ${
                  active === "4" ? "text-primary" : "text-textColor"
                } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
              >
                <CgProfile className="w-[24px] h-[24px]" />
                <span className="ml-3  text-base">Profile</span>
              </p>
            </li>
            <li
              onClick={() => nav("/signin")}
              className={`flex  items-center p-2 ${
                active === "5" ? "text-primary" : "text-textColor"
              } hover:text-primary transition-all duration-200 rounded-lg  hover:bg-gray-900`}
            >
              <TbLogout className="w-[24px] h-[24px]" />
              <span className="ml-3  text-base">Log Out</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Side;
