import React from 'react'
import volicity from "../assets/Images/volicity-9.svg"
import { BsArrowDownShort } from "react-icons/bs"
import { BsArrowUpShort } from "react-icons/bs"
import photo1 from "../assets/Images/300-2.jpg"
import p1 from "../assets/Images/p1.jpg"
import p2 from "../assets/Images/p2.jpg"
import p3 from "../assets/Images/p3.jpg"

const Dashboard9 = () => {
  return (
      <div className='grid grid-cols-1  md:grid-cols-4  bg-white  gap-7 py-7 px-5 md:px-0'>
          <div className='col-span-1 md:col-span-1 my-auto mx-auto'>
              <div className='bg-gray-100  w-48 p-10 rounded-lg'>
                  
              <img src={volicity} className='' alt="" />
            </div>
          </div>
          <div className='col-span-1 md:col-span-3'>
              <h1 className='font-inter mb-3 font-semibold text-lg '>CRM Dashboard <span className="bg-green-100 text-green-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">In Process</span></h1>
              <h1 className='text-textColor mb-3 font-semibold text-medium'>
                  #1 Tool to get started with Web Apps any Kind & size 
              </h1 >
              <div className='flex flex-wrap mb-3 gap-5'>
                  <div className='border p-3 border-dotted w-32'>
                      <h1 className='font-medium'>29 Jan, 2023</h1>
                      <h1 className='text-textColor text-sm'>Due Date</h1>
                  </div>
                  <div className='border p-3  border-dotted w-32'>
                      <h1 className='flex items-center gap-2'>
                          <BsArrowDownShort className='text-red-400 text-lg' />
                          <span className='font-medium '>75</span>
                      </h1>
                      
                      <h1 className='text-textColor text-sm'>Open Tasks</h1>
                  </div>
                   <div className='border p-3 border-dotted w-32'>
                      <h1 className='flex items-center gap-2'>
                          <BsArrowUpShort className='text-red-400 text-lg' />
                          <span className='font-medium '>$15,000</span>
                      </h1>
                      <h1 className='text-textColor'>Due Date</h1>
                  </div>
              </div>
              <div className='flex '>
                  <img src={photo1} className='w-10 hover:z-[999]  h-10 rounded-full' alt="" />
                  <img src={p1} className='w-10 -ml-2 hover:z-[999] h-10 rounded-full' alt="" />
                  <div className='w-10 h-10 hover:z-[999] flex items-center justify-center font-semibold bg-yellow-700 text-white -ml-2 rounded-full text-sm'>M</div>
                  <img src={p2} className='w-10 h-10 hover:z-[999] -ml-2 rounded-full' alt="" />
                  <img src={p3} className='w-10 h-10 hover:z-[999] -ml-2 rounded-full' alt="" />
                  <div className='w-10 h-10 hover:z-[999] flex items-center justify-center font-semibold bg-purple-700 text-white -ml-2 rounded-full text-sm'>S</div>
                  <img src={p1} className='w-10 hover:z-[999] -ml-2 h-10 rounded-full' alt="" />
                   <div className='w-10 h-10 hover:z-[999] flex items-center justify-center font-semibold bg-green-700 text-white -ml-2 rounded-full text-sm'>+42</div>
              </div>
              
          </div>
    </div>
  )
}

export default Dashboard9