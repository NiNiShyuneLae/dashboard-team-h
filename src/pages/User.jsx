import React from 'react'
import Dashboard9 from '../components/Dashboard9'

import { BsSearch } from "react-icons/bs"
import { BiSolidGridAlt } from "react-icons/bi"
import {FiMenu} from "react-icons/fi"
import UserCard from '../components/UserCard'
import UserTable from '../components/UserTable'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const nav = useNavigate()
    const users = [
        {
            "id": 1,
            "name": "Karina Clark",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media//avatars/300-2.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "in progress"
        },
        {
            "id": 2,
            "name": "Alan Johnson",
            "gamil": "mama@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media//avatars/300-1.jpg",
            "positon": "frontend Developer",
            "earning": "$20,000",
            "tasks": 20,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 3,
            "name": "Robert Doe",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media//avatars/300-14.jpg",
            "positon": "Java Developer",
            "earning": "$20,000",
            "tasks": 27,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "rejected"
        },
        {
            "id": 4,
            "name": "Olivia Wild",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media//avatars/300-6.jpg",
            "positon": "flutter Developer",
            "earning": "$20,000",
            "tasks": 47,
            "sale": "$200,000",
            "date": "22-3-2022",
            "amount": "$543.00",
            "status": "pending"
        },
        {
            "id": 5,
            "name": "Benjamin Jacob",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media//avatars/300-12.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 6,
            "name": "Sean Bean",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-5.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "in progress"
        },
        {
            "id": 7,
            "name": "Francis Mitcham",
            "gamil": "mama@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-9.jpg",
            "positon": "frontend Developer",
            "earning": "$20,000",
            "tasks": 20,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 8,
            "name": "Dylan",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-23.jpg",
            "positon": "Java Developer",
            "earning": "$20,000",
            "tasks": 27,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "rejected"
        },
        {
            "id": 9,
            "name": "Michelle",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-7.jpg",
            "positon": "flutter Developer",
            "earning": "$20,000",
            "tasks": 47,
            "sale": "$200,000",
            "date": "22-3-2022",
            "amount": "$543.00",
            "status": "pending"
        },
        {
            "id": 10,
            "name": "Michael",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-11.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 11,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "in progress"
        },
        {
            "id": 12,
            "name": "Ma ma",
            "gamil": "mama@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg",
            "positon": "frontend Developer",
            "earning": "$20,000",
            "tasks": 20,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 13,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "Java Developer",
            "earning": "$20,000",
            "tasks": 27,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "rejected"
        },
        {
            "id": 14,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-5.jpg",
            "positon": "flutter Developer",
            "earning": "$20,000",
            "tasks": 47,
            "sale": "$200,000",
            "date": "22-3-2022",
            "amount": "$543.00",
            "status": "pending"
        },
        {
            "id": 15,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 16,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "in progress"
        },
        {
            "id": 17,
            "name": "Ma ma",
            "gamil": "mama@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg",
            "positon": "frontend Developer",
            "earning": "$20,000",
            "tasks": 20,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 18,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "Java Developer",
            "earning": "$20,000",
            "tasks": 27,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "rejected"
        },
        {
            "id": 19,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-5.jpg",
            "positon": "flutter Developer",
            "earning": "$20,000",
            "tasks": 47,
            "sale": "$200,000",
            "date": "22-3-2022",
            "amount": "$543.00",
            "status": "pending"
        },
        {
            "id": 20,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 21,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "in progress"
        },
        {
            "id": 22,
            "name": "Ma ma",
            "gamil": "mama@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg",
            "positon": "frontend Developer",
            "earning": "$20,000",
            "tasks": 20,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 23,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "Java Developer",
            "earning": "$20,000",
            "tasks": 27,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "rejected"
        },
        {
            "id": 24,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-5.jpg",
            "positon": "flutter Developer",
            "earning": "$20,000",
            "tasks": 47,
            "sale": "$200,000",
            "date": "22-3-2022",
            "amount": "$543.00",
            "status": "pending"
        },
        {
            "id": 25,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 26,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "in progress"
        },
        {
            "id": 27,
            "name": "Ma ma",
            "gamil": "mama@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg",
            "positon": "frontend Developer",
            "earning": "$20,000",
            "tasks": 20,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        },
        {
            "id": 28,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "Java Developer",
            "earning": "$20,000",
            "tasks": 27,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "rejected"
        },
        {
            "id": 29,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-5.jpg",
            "positon": "flutter Developer",
            "earning": "$20,000",
            "tasks": 47,
            "sale": "$200,000",
            "date": "22-3-2022",
            "amount": "$543.00",
            "status": "pending"
        },
        {
            "id": 30,
            "name": "Mg Mg",
            "gamil": "mgmg@gmail.com",
            "image": "https://preview.keenthemes.com/craft/assets/media/avatars/300-6.jpg",
            "positon": "backend Developer",
            "earning": "$20,000",
            "tasks": 30,
            "sale": "$200,000",
            "date": "22-2-2022",
            "amount": "$541.00",
            "status": "approved"
        }
      
    ];

    const [tab, setTab] = useState("menu");
  return (
      <div className=' lg:px-[32px] px-[20px]  '>
              <div className="">
        <p className=" text-[1.25rem] font-semibold">Projects</p>
        <div>
          <nav
            className="justify-between  pb-3 text-gray-700  sm:flex  bg-gray-5"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center mb-3 space-x-1 sm:mb-0">
              <li onClick={() => nav('/')}>
                <a
                  href="#"
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
                  <span className="text-black">Users</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
          <Dashboard9 />
          
          <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-3'>
              <div className='col-span-1 flex items-center  gap-1'>
                 <h1 className='text-lg font-semibold'>Users (38)</h1>
               <div className='flex  items-center  px-3 py-2 bg-white w-56 rounded-md'>
                  <BsSearch className='text-textColor' />
                  <input type="search" placeholder='search' className='outline-none bg-transparent text-sm' />
              </div> 
              </div>
              <div className='col-span-1 ml-0 md:ml-auto'>
                  <button className={`mr-2  p-2 rounded-lg ${tab==="grid"?"bg-blue-500":"first-line:"}`} onClick={()=>setTab("grid")}>
                      
                  <BiSolidGridAlt className='text-gray-200 text-lg'/>
                  </button>
                  <button className={`mr-2  p-2 rounded-lg ${tab==="menu"?"bg-blue-500":"first-line:"}`} onClick={()=>setTab("menu")}>
                      
                  <FiMenu className='text-gray-200 text-lg'/>
                  </button>
              </div>
              <div className='col-span-1 md:ml-auto ml-0'>
                  <select className='bg-white rounded-lg outline-none px-3 py-2'>
                      <option value="" className=''>Recently Updated</option>
                      <option value="" className=''>Last Month</option>
                      <option value="" className=''>Last Quarter</option>
                      <option value="" className=''>Last Year</option>
                  </select>
                  <select className='bg-white ml-5 rounded-lg outline-none px-3 py-2'>
                      <option value="">Excel</option>
                      <option value="">Pdf</option>
                      <option value="">Print</option>
                  </select>
              </div>
              
          </div>
          {
              tab === "grid" ?
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6'>
              {
                  users.slice(0, 9).map(user =>
                      <UserCard key={user.id} user={user} />
                    )
              }
              
                  </div> :
                   <div className='grid grid-cols-1 '>
              <div className=" rounded-2xl overflow-x-auto  shadow-lg ">
                <table className="w-full  text-sm text-left  dark:text-gray-400">
                    <thead className="text-xs text-textColor uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Managar
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Detail
                            </th>
                        </tr>
                      </thead>
                      {
                          users.slice(0, 10).map(user =>
                              <UserTable key={user.id} user={user} />
                            )
                      }
                   
                </table>
            </div>
             
          </div>
          }
         
         
    </div>
  )
}

export default User