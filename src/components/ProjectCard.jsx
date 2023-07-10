import React from "react";
import "./ProjectCard.css";
import plurk from "../assets/images/plurk.svg";
import disqus from "../assets/images/disqus.svg";
import figma from "../assets/images/figma-1.svg";
import sentry from "../assets/images/sentry-3.svg";
import xing from "../assets/images/xing-icon.svg";
import tvit from "../assets/images/tvit.svg";
import aven from "../assets/images/aven.svg";
import treva from "../assets/images/treva.svg";
import kanba from "../assets/images/kanba.svg";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material";
import person from "../assets/images/person.jpg";
import Emma from "../assets/images/Emma.jpg";
import Brian from "../assets/images/Brian.jpg";
import Melody from "../assets/images/Melody.jpg";
import Cris from "../assets/images/Cris.jpg";
import Michelle from "../assets/images/MIchelle.jpg";
import Francis from "../assets/images/Francis.jpg";
import John from "../assets/images/John.jpg";
import Pagination from "./Pagination";
import cotton from "../assets/images/bg-1.jpg";
import armada from '../assets/images/bg-2.jpg';
import stonya from '../assets/images/stonyaVilla.jpg';
import prime from '../assets/images/primeHotel.jpg';
import urban from '../assets/images/urbanHouse.jpg';
import lake from '../assets/images/lakeHouse.jpg';
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const nav = useNavigate();
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
          <span className="text-[1.25rem] font-medium text-white">
            Projects
          </span>
          <span className=" text-[1.075rem] text-primary">by Status</span>
        </div>
        <select className="bg-primary text-white   text-sm rounded-lg focus:ring-0 focus:border-0 outline-none p-2.5">
          <option value="active">Active</option>
          <option value="progress">In Progress</option>
          <option value="to do">To Do</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-5 lg:gap-10">
        <div
          onClick={() => nav("/detail/1")}
          className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-cardColor rounded-lg"
        >
          <img src={cotton} className="h-[250px] object-cover" alt="" />
          <div className="">
            <div className="flex items-start justify-between py-[20px]">
              {/* <div className="w-[50px] h-[50px] bg-[#f9f9f9] rounded-[0.5rem]">
              <img src={plurk} className="p-[10px]" alt="" />
            </div> */}
              <div>
                <p className="text-[1.35rem] font-medium text-white uppercase tracking-[5px] font-Oswald">
                  Cotton House{" "}
                </p>
                {/* <p className="text-[1.15rem] font-normal text-primary mt-[4px] mb-[22px]">
                CRM App application to HR efficiency
              </p> */}
              </div>
              <span className="bg-[#F1FAFF] text-[#00a3ff]  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
                In Progress
              </span>
            </div>
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  Mar 10, 2023
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  $284,900.00
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  50% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#00a3ff] h-full rounded-full"
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
                <div className="w-[35px] h-[35px] rounded-full bg-[#00a3ff] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  S
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div
          onClick={() => nav("/detail/1")}
          className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-cardColor rounded-lg"
        >
          <img src={armada} className="h-[250px] object-cover " alt="" />
          <div className="flex items-center justify-between py-[20px]">
            <div>
              <p className="text-[1.35rem] font-medium text-white uppercase tracking-[5px] font-Oswald">
                armada center
              </p>
            </div>
            <span className="bg-[#F9F9F9] text-[#7E8299] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Pending
            </span>
          </div>
          <div className="">
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  Mar 10, 2023
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  $36,400.00
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  30% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#7239EA] h-full rounded-full"
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
        <div
          onClick={() => nav("/detail/1")}
          className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-cardColor rounded-lg"
        >
          <img src={stonya} className="h-[250px] object-cover" alt="" />
          <div className="flex items-center justify-between py-[20px]">
          <div>
              <p className="text-[1.35rem] font-medium text-white uppercase tracking-[5px] font-Oswald">
              stonya villa
              </p>
        
            </div>
            <span className="bg-[#E8FFF3] text-[#50CD89] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Completed
            </span>
          </div>
          <div className="">
            
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  Mar 14, 2021{" "}
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  $605,100.00
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  100% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#50CD89] h-full rounded-full"
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
        <div
          onClick={() => nav("/detail/1")}
          className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-cardColor rounded-lg"
        >
          <img src={prime} className="h-[250px] object-cover" alt="" />
          <div className="flex items-center justify-between py-[20px]">
          <div>
              <p className="text-[1.35rem] font-medium text-white uppercase tracking-[5px] font-Oswald">
                Prime Hotel
              </p>
         
            </div>
            <span className="bg-[#F9F9F9] text-[#7E8299] text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              Pending
            </span>
          </div>
          <div className="">
          
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  Aug 19, 2023
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  $284,900.00
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  60% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#7239EA] h-full rounded-full"
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
        <div
          onClick={() => nav("/detail/1")}
          className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-cardColor rounded-lg"
        >
          <img src={lake} className="h-[250px] object-cover" alt="" />
          <div className="flex items-center justify-between py-[20px]">
          <div>
              <p className="text-[1.35rem] font-medium text-white uppercase tracking-[5px] font-Oswald">
                Lake House
              </p>
        
            </div>
            <span className="bg-[#F1FAFF] text-[#00a3ff]  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              In Progress
            </span>
          </div>
          <div className="">
       
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  Jun 20, 2023
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  $284,900.00
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  40% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#00a3ff] h-full rounded-full"
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
                <div className="w-[35px] h-[35px] rounded-full bg-[#00a3ff] text-md font-semibold text-white text-center my-auto relative hover:z-10 transition-all duration-200 ml-[-10px] flex items-center justify-center">
                  S
                </div>
              </LightTooltip>
            </div>
          </div>
        </div>
        <div
          onClick={() => nav("/detail/1")}
          className="col-span-1 p-[30px] md:p-[15px] lg:p-[30px] bg-cardColor rounded-lg"
        >
          <img src={urban} className="h-[250px] object-cover" alt="" />
          <div className="flex items-center justify-between py-[20px]">
          <div>
              <p className="text-[1.35rem] font-medium font-Oswald text-white uppercase tracking-[5px]">
                urban house
              </p>
        
            </div>
            <span className="bg-[#F1FAFF] text-[#00a3ff]  text-sm font-semibold mr-2 px-[13px] py-[8px] rounded">
              In Progress
            </span>
          </div>
          <div className="">
         
            <div className="flex items-center sm:items-center md:items-start gap-6 md:flex-col 2xl:flex-row">
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  Sep 22, 2023
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">
                  Due Date
                </p>
              </div>
              <div className="border-dotted border-primary   rounded-lg border py-[9px] px-[13px]">
                <p className="font-semibold text-[1rem] text-white">
                  $284,900.00
                </p>
                <p className="font-medium text-[#B5B5C3] text-[1rem]">Budget</p>
              </div>
            </div>
            <LightTooltip title="This project  70% completed" placement="top">
              <div className="w-full bg-[#F9F9F9] rounded-full h-1.5 my-[18px]">
                <div
                  className="bg-[#00a3ff] h-full rounded-full"
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
     
      </div>
     
    </div>
  );
};

export default ProjectCard;
