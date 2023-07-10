import React from 'react'
import volicity from "../assets/Images/volicity-9.svg"
import { BsArrowDownShort } from "react-icons/bs"
import { BsArrowUpShort } from "react-icons/bs"
import photo1 from "../assets/Images/300-2.jpg"
import p1 from "../assets/Images/p1.jpg"
import p2 from "../assets/Images/p2.jpg"
import p3 from "../assets/Images/p3.jpg"
import Michael from "../assets/images/Michael.jpg";
import Michelle from "../assets/images/Michelle.jpg";
import Francis from "../assets/images/Francis.jpg";
import Melody from "../assets/images/Melody.jpg";
import Barry from "../assets/images/Barry.jpg";
import CountUp from "react-countup";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material";

const Dashboard9 = () => {
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
    //   <div className='grid grid-cols-1  md:grid-cols-4  bg-white  gap-7 py-7 px-5 md:px-0'>
    //       <div className='col-span-1 md:col-span-1 my-auto mx-auto'>
    //           <div className='bg-gray-100  w-48 p-10 rounded-lg'>
                  
    //           <img src={volicity} className='' alt="" />
    //         </div>
    //       </div>
    //       <div className='col-span-1 md:col-span-3'>
    //           <h1 className='font-inter mb-3 font-semibold text-lg '>CRM Dashboard <span className="bg-green-100 text-green-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">In Process</span></h1>
    //           <h1 className='text-textColor mb-3 font-semibold text-medium'>
    //               #1 Tool to get started with Web Apps any Kind & size 
    //           </h1 >
    //           <div className='flex flex-wrap mb-3 gap-5'>
    //               <div className='border p-3 border-dotted w-32'>
    //                   <h1 className='font-medium'>29 Jan, 2023</h1>
    //                   <h1 className='text-textColor text-sm'>Due Date</h1>
    //               </div>
    //               <div className='border p-3  border-dotted w-32'>
    //                   <h1 className='flex items-center gap-2'>
    //                       <BsArrowDownShort className='text-red-400 text-lg' />
    //                       <span className='font-medium '>75</span>
    //                   </h1>
                      
    //                   <h1 className='text-textColor text-sm'>Open Tasks</h1>
    //               </div>
    //                <div className='border p-3 border-dotted w-32'>
    //                   <h1 className='flex items-center gap-2'>
    //                       <BsArrowUpShort className='text-red-400 text-lg' />
    //                       <span className='font-medium '>$15,000</span>
    //                   </h1>
    //                   <h1 className='text-textColor'>Due Date</h1>
    //               </div>
    //           </div>
    //           <div className='flex '>
    //               <img src={photo1} className='w-10 hover:z-[999]  h-10 rounded-full' alt="" />
    //               <img src={p1} className='w-10 -ml-2 hover:z-[999] h-10 rounded-full' alt="" />
    //               <div className='w-10 h-10 hover:z-[999] flex items-center justify-center font-semibold bg-yellow-700 text-white -ml-2 rounded-full text-sm'>M</div>
    //               <img src={p2} className='w-10 h-10 hover:z-[999] -ml-2 rounded-full' alt="" />
    //               <img src={p3} className='w-10 h-10 hover:z-[999] -ml-2 rounded-full' alt="" />
    //               <div className='w-10 h-10 hover:z-[999] flex items-center justify-center font-semibold bg-purple-700 text-white -ml-2 rounded-full text-sm'>S</div>
    //               <img src={p1} className='w-10 hover:z-[999] -ml-2 h-10 rounded-full' alt="" />
    //                <div className='w-10 h-10 hover:z-[999] flex items-center justify-center font-semibold bg-green-700 text-white -ml-2 rounded-full text-sm'>+42</div>
    //           </div>
              
    //       </div>
    // </div>
    <div className="container flex flex-wrap bg-cardColor rounded-lg py-7">
    <div className="bg-[#F9F9F9] w-[100px] h-[100px] md:w-[150px]  md:h-[150px] flex justify-center rounded-lg">
      <img
        src="https://preview.keenthemes.com/craft/assets/media/svg/brand-logos/volicity-9.svg"
        alt="project image"
        className=" w-[50px] md:w-[75px]"
      />
    </div>
    <div className=" ms-5 mt-1">
      <div className="">
        <h3 className=" text-xl font-bold inline-block text-white">
          CRM Dashboard
        </h3>
        <span className="bg-[#E8FFF3] text-[#50CE93] text-xs font-medium px-2.5 py-0.5 ms-2 rounded-md">
          In Progress
        </span>

        <p className=" text-primary">
          #1 Tool to get started with Web Apps any Kind & size
        </p>
      </div>
      <div className="flex lg:items-center flex-col lg:flex-row mt-5 mb-[30px] cursor-pointer justify-between gap-10">
        <div className=" flex flex-wrap gap-5 ">
          <div className=" border border-dashed border-primary rounded-md p-2">
            <h4 className=" text-base font-semibold text-white">29 Jan, 2023</h4>
            <p className=" text-textColor text-sm">Due Date</p>
          </div>
          <div className="border border-dashed border-primary rounded-md p-2">
            <h4 className=" text-base font-semibold text-white">
              <BsArrowDown className=" inline-block text-red-500 text-base" />
              <CountUp end={75} />
            </h4>
            <p className=" text-textColor text-sm">Open Tasks</p>
          </div>
          <div className="border border-dashed border-primary rounded-md p-2">
            <h4 className=" text-base font-semibold text-white">
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
  )
}

export default Dashboard9