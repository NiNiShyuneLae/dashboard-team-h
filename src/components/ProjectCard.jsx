import React from "react";
import "./ProjectCard.css";
import plurk from "../assets/images/plurk.svg";
import disqus from "../assets/images/disqus.svg";
import figma from "../assets/images/figma-1.svg";
import sentry from "../assets/images/sentry-3.svg";
import xing from "../assets/images/xing-icon.svg";
import tvit from "../assets/images/tvit.svg";
import aven from '../assets/images/aven.svg';
import treva from '../assets/images/treva.svg';
import kanba from '../assets/images/kanba.svg';
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material";
import person from "../assets/images/person.jpg";
import Emma from "../assets/images/Emma.jpg";
import Brian from "../assets/images/Brian.jpg";
import Melody from "../assets/images/Melody.jpg";
import Cris from "../assets/images/Cris.jpg";
import Michelle from "../assets/images/MIchelle.jpg";
import Francis from "../assets/images/Francis.jpg";
import John from '../assets/images/John.jpg';
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
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
    <div className="lg:px-[32px] md:px-[10px] px-[20px]">
      <div className="flex items-center justify-between my-[16px] ">
        <div className="flex gap-2 items-center ">
          <span className="text-[1.25rem] font-medium">Projects</span>
          <span className="text-textColor text-[1.075rem]">by Status</span>
        </div>
        <select className="bg-white  text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-0 outline-none p-2.5">
          <option value="active">Active</option>
          <option value="progress">In Progress</option>
          <option value="to do">To Do</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-5 lg:gap-10">
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={plurk} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#F1FAFF] text-primary  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              In Progress
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">Fitnes App </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Mar 10, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$284,900.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  50% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-primary h-[4px] rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Emma Smith" placement="top">
                <img
                  src={Emma}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>

              <LightTooltip title="Rudy Stone" placement="top">
                <img
                  src={person}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Susan Redwood" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-primary text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  S
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={disqus} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#F9F9F9] text-[#7E8299] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Pending
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">Leaf CRM </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Mar 10, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$36,400.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  30% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#7239EA] h-[4px] rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Alan Warden" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#FFC700] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  A
                </div>
              </LightTooltip>
              <LightTooltip title="Brian Cox" placement="top">
                <img
                  src={Brian}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={figma} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#E8FFF3] text-[#50CD89] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Completed
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">Atica Banking </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Mar 14, 2021 </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$605,100.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  100% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#50CD89] h-[4px] rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Brian Cox" placement="top">
                <img
                  src={Melody}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Brian Cox" placement="top">
                <img
                  src={Cris}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Alan Warden" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#7239EA] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  M
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={sentry} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#F9F9F9] text-[#7E8299] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Pending
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">Finance Dispatch </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Aug 19, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$284,900.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  60% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#7239EA] h-[4px] rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Alan Warden" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#FFC700] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  N
                </div>
              </LightTooltip>
              <LightTooltip title="Alan Warden" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#50CD89] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  R
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={xing} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#F1FAFF] text-primary  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              In Progress
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">9 Degree </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Jun 20, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$284,900.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  40% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-primary h-[4px] rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Emma Smith" placement="top">
                <img
                  src={Francis}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>

              <LightTooltip title="Rudy Stone" placement="top">
                <img
                  src={Michelle}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Susan Redwood" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-primary text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  S
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={tvit} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#F1FAFF] text-primary  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              In Progress
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">GoPro App </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Sep 22, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$284,900.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  70% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-primary h-[4px] rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">

              <LightTooltip title="Rudy Stone" placement="top">
                <img
                  src={Melody}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Susan Redwood" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#50CD89] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  R
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={aven} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#F1FAFF] text-primary  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              In Progress
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">
            Buldozer CRM        </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Oct 25, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$284,900.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  70% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-primary h-[4px] rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Emma Smith" placement="top">
                <img
                  src={Melody}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>

              <LightTooltip title="Rudy Stone" placement="top">
                <img
                  src={John}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Susan Redwood" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-primary text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  S
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={treva} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#FFF5F8] text-[#F1416C] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Overdue
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">
            Aviasales App         </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Sep 22, 2023</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$36,400.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  10% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#F1416C] h-[4px] rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Alan Warden" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#FFC700] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  A
                </div>
              </LightTooltip>
              <LightTooltip title="Brian Cox" placement="top">
                <img
                  src={Brian}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
            </div>
          </div>
        </div>
        <div onClick={() => nav('/detail')} className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={kanba} className="p-[10px]" alt="" />
            </div>
            <span className="bg-[#E8FFF3] text-[#50CD89] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Completed
            </span>
          </div>
          <div className="pt-[30px]">
            <div>
              <p className="text-[1.35rem] font-semibold">
            Oppo CRM         </p>
              <p className="text-[1.15rem] font-normal text-[#B5B5C3] mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">Jun 20, 2023 </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] ">$605,100.00</p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  100% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#50CD89] h-[4px] rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </LightTooltip>
            <div className="flex  cursor-pointer">
              <LightTooltip title="Brian Cox" placement="top">
                <img
                  src={Melody}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Brian Cox" placement="top">
                <img
                  src={Cris}
                  className="w-[35px] h-[35px] rounded-full  relative hover:z-10 transition-all duration-200 ml-[-10px]"
                />
              </LightTooltip>
              <LightTooltip title="Alan Warden" placement="top">
                <div className="w-[35px] h-[35px] rounded-full bg-[#7239EA] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  M
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default ProjectCard;
