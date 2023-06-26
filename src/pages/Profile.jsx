import React from 'react'
import p1 from "../assets/Images/p1.jpg"
import { GrFormCheckmark } from "react-icons/gr"
import { BsPersonCircle } from "react-icons/bs"
import { MdOutlineLocationOn } from "react-icons/md" 
import {CiMail} from "react-icons/ci"
import { BsArrowUpShort } from "react-icons/bs"
import { BsArrowDownShort } from "react-icons/bs"
import {TbAlertSmall} from "react-icons/tb"
import ProductTable from '../components/ProductTable'

const Profile = () => {
    const items = [
        {
            "id": "#XGY-356",
            "name": "Macbook Air M1",
            "date": "02 Apr, 2023",
            "price": 1230	,
            "status": "In stock",
            "qty":58
        },
        {
            "id": "#YHD-047	",
            "name": "Surface Laptop 4",
            "date": "01 Apr, 2023	",
            "price": 1060	,
            "status":" Out of Stock",
            "qty":0
        },
        {
            "id": "#XGY-356	",
            "name": "Dell 32 UltraSharp",
            "date": "22 Dec, 2023	",
            "price": 1060	,
            "status":"Low Stock",
            "qty":8
        },
         {
            "id": "#XGY-356",
            "name": "Macbook Air M1",
            "date": "02 Apr, 2023",
            "price": 1230	,
            "status": "In stock",
            "qty":58
        },
        {
            "id": "#YHD-047	",
            "name": "Surface Laptop 4",
            "date": "01 Apr, 2023	",
            "price": 1060	,
            "status":" Out of Stock",
            "qty":0
        },
        {
            "id": "#XGY-356	",
            "name": "Dell 32 UltraSharp",
            "date": "22 Dec, 2023	",
            "price": 1060	,
            "status":"Low Stock",
            "qty":8
        },
        {
            "id": "#XGY-356	",
            "name": "Dell 32 UltraSharp",
            "date": "22 Dec, 2023	",
            "price": 1060	,
            "status":"Low Stock",
            "qty":8
        },
    ]
  return (
      <section className='profile mt-16 mx-4'>
          <div className='bg-white mb-5 p-6 rounded-lg grid grid-cols-1 md:grid-cols-7 lg:grid-cols-6  '>
              
              <div className='col-span-1 md:col-span-2 lg:col-span-1 '>
                  <div className='relative w-36 h-36  '>
                      <img src={p1} className='w-36 h-36 rounded-xl ' alt="" />
                        <div className='w-4 h-4 absolute top-24 -right-2    bg-green-500 rounded-full'></div>
                      
                </div>
              </div>
              <div className='col-span-1 md:col-span-5 lg:col-span-5 '>
                  <div className='md:flex md:items-center md:justify-between'>
                       <div className='my-5 md:my-2'>
                      <div className='flex items-center gap-3 mb-3'>
                      <span className='font-semibold text-xl text-gray-800 hover:text-blue-500 cursor-pointer'>
                          Max Smith
                          
                      </span>
                      <button className='p-1 bg-blue-400 rounded-full   border-dotted'>
                              <GrFormCheckmark className='text-white'/>
                      </button>
                      <span className='text-green-500 bg-green-100 text-xs px-4 py-1 rounded-md font-semibold'>
                          Upgrade to Pro
                      </span>
                      </div>
                      <div className='flex items-center flex-wrap gap-5'>
                          <div className='flex items-center gap-1'>
                              <BsPersonCircle className='text-gray-400'text-medium  />
                              <h1 className='md:text-sm text-textColor font-medium'>Developer</h1>
                          </div>
                          <div className='flex items-center gap-1'>
                              <MdOutlineLocationOn className='text-textColor' />
                              <h1 className='md:text-sm text-textColor font-medium'>SF, Bay Area</h1>
                          </div>
                          <div className='flex items-center gap-1'>
                              <CiMail className='text-textColor' />
                              <h1 className='md:text-sm text-textColor font-medium'>max@kt.com</h1>
                          </div>
                         
                      </div>
                         </div>
                  
                  <div>
                      <button className='bg-gray-100 px-4 py-2 text-xs font-textColor font-medium hover:bg-gray-200 text-textColor rounded-lg mr-3'>Follow</button>

                       <button className='bg-blue-400 px-4 py-2 text-xs font-textColor font-medium hover:bg-blue-600 text-white rounded-lg'>Hire Me</button>
                 </div>
                </div>
                  <div className='md:flex md:items-center md:gap-3'>
                       <div className='border px-3 mb-3 py-2 border-dotted w-36'>
                      <div className='flex items-center  mb-2'>
                          <BsArrowUpShort className='text-green-500 text-2xl ' />
                          <span className='font-semibold text-lg  '>$4,000</span>
                      </div>
                      <h1 className='text-textColor text-sm font-semibold'>Earnings</h1>
                      </div>
                      <div className='border px-3 py-2 mb-3 border-dotted w-36'>
                      <div className='flex items-center  mb-2'>
                          <BsArrowDownShort className='text-red-500 text-2xl ' />
                          <span className='font-semibold text-lg  '>75</span>
                      </div>
                      <h1 className='text-textColor text-sm font-semibold'>Projects</h1>
                      </div>
                      <div className='border px-3 py-2 mb-3 border-dotted w-36'>
                      <div className='flex items-center  mb-2'>
                          <BsArrowUpShort className='text-green-500 text-2xl ' />
                          <span className='font-semibold text-lg  '>%60</span>
                      </div>
                      <h1 className='text-textColor text-sm font-semibold'>Success Rate</h1>
                        </div>
                 </div>
                  <div className='w-72'>
                      <div className='flex items-center justify-between text-sm text-textColor mb-2'>
                          <h1>Profile Compleation</h1>
                          <h1 className='font-semibold text-black'>50%</h1>
                      </div>
                      <div className='bg-gray-200 w-72 h-1 rounded-lg'>
                          <div className='h-1 bg-green-500 w-1/2 rounded-lg'></div>
                      </div>
                 </div>
              </div>
         </div>
          <div className='bg-white mb-5  rounded-lg'>
              <div className='flex p-6 items-center justify-between '>
                  <h1 className='text-lg font-semibold '>Profile Details</h1>
                    <button className='bg-blue-400 px-4 py-2 text-xs font-textColor font-medium hover:bg-blue-600 text-white rounded-lg'>Edit Profile</button>
              </div>
              <hr/>
              <div className='p-6 w-3/4'>
                  <div className='lg:grid mb-6 lg:grid-cols-2  text-sm '>
                      <h1 className='text-gray-400 font-medium '>Full Name</h1>
                      <h1 className='text-gray-800 font-semibold text-left '>Max Smith</h1>
                  </div>
                   <div className='lg:grid mb-6 lg:grid-cols-2 text-sm '>
                      <h1 className='text-gray-400 font-medium '>Company</h1>
                      <h1 className='text-gray-800 font-semibold text-left '>Keenthemes</h1>
                  </div>
                   <div className='lg:grid mb-6 lg:grid-cols-2 text-sm '>
                      <h1 className='text-gray-400 font-medium '>Contact Phone</h1>
                      <h1 className='text-gray-800 font-semibold '>044 3276 454 935</h1>
                  </div>
                   <div className='lg:grid mb-6 lg:grid-cols-2 text-sm '>
                      <h1 className='text-gray-400 font-medium '>Company Site</h1>
                      <h1 className='text-gray-800 font-semibold '>keenthemes.com</h1>
                  </div>
                   <div className='lg:grid mb-6 lg:grid-cols-2 text-sm '>
                      <h1 className='text-gray-400 font-medium '>Country</h1>
                      <h1 className='text-gray-800 font-semibold '>Germany</h1>
                  </div>
                   <div className='lg:grid mb-6 lg:grid-cols-2 text-sm '>
                      <h1 className='text-gray-400 font-medium '>Communication</h1>
                      <h1 className='text-gray-800 font-semibold '>Email, Phone</h1>
                  </div>
                   <div className='lg:grid mb-6 lg:grid-cols-2 text-sm '>
                      <h1 className='text-gray-400 font-medium '>Allow Changes</h1>
                      <h1 className='text-gray-800 font-semibold '>Yes</h1>
                  </div>
              </div>
              <div className='px-6 pb-6'>
                  <div className='flex items-center gap-3 p-6 outline-1 rounded-lg outline-dashed outline-orange-400 bg-orange-50'>
                      <div>
                          <button className=' w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center '>
                              <TbAlertSmall className='text-4xl text-orange-400'/>
                          </button>
                      </div>
                      <div>
                          <h1 >
                              We need your attention!
                          </h1>
                          <h1>
                              Your payment was declined. To start using tools, please Add Payment Method.
                          </h1>
                      </div>
                  </div>
              </div>


         </div>
          <div className='grid grid-cols-1 mb-5 xl:grid-cols-3'>
              <div className='col-span-1 xl:col-span-2'>1</div>
              <div className='col-span-1 xl:col-span-1 rounded-lg bg-white p-6 text-center'>
                  <div>
                      <h1 className='mb-2 font-semibold text-2xl' >Kickstart</h1>
                      <h1 className='mb-4 font-bold text-2xl' >Mobile Application</h1>
                      <p className='mb-4  text-gray-700  font-medium'>Outlines keep you honest. They stoping you from amazing poorly about drive</p>
                      <button className='bg-blue-500 px-5 py-3  font-textColor font-medium hover:bg-blue-600 text-white rounded-lg'>Create App</button>
                      <div >
                          <img src="https://preview.keenthemes.com/craft/assets/media/illustrations/sigma-1/7.png" className='w-[175px] h-[175px] mx-auto' alt="" />
                      </div>
                  </div>
                  
              </div>
          </div>
           <div className='grid grid-cols-1 xl:grid-cols-3 gap-5'>
              <div className='col-span-1 xl:col-span-1 mb-5 xl:mb-0 rounded-lg bg-white p-6'>
                  <h1 className='text-xl font-bold'>Projects Contributions</h1>
                  <h1 className='text-textColor mb-4 text-sm font-semibold'>84 New Tasks & 29 Guides</h1>
                  <div className='flex items-center justify-between p-3 rounded-lg hover:outline hover:outline-1 outline-gray-300 mb-2'>
                      <div className='flex items-center gap-5'>
                          <div>
                               <img src="https://preview.keenthemes.com/craft/assets/media/svg/brand-logos/fox-hub.svg" className='w-[35px] cursor-pointer' alt="" />
                        </div>
                         
                          <div>
                              <h1 className='font-bold text-gray-800 cursor-pointer hover:text-blue-600'>Piper Aerostar</h1>
                              <h1 className='text-textColor text-sm font-semibold cursor-pointer'>piper-aircraft-class.jsp</h1>
                          </div>
                      </div>
                       <div>
                          <button className='px-3 py-1 rounded-lg bg-gray-200 text-textColor font-semibold hover:bg-blue-500 hover:text-white'>0</button>
                      </div>
                  </div>
                  <div className='flex items-center justify-between p-3 rounded-lg hover:outline hover:outline-1 outline-gray-300 mb-2'>
                      <div className='flex items-center gap-5'>
                          <div>
                               <img src="https://preview.keenthemes.com/craft/assets/media/svg/brand-logos/leaf.svg" className='w-[35px] cursor-pointer' alt="" />
                        </div>
                         
                          <div>
                              <h1 className='font-bold text-gray-800 cursor-pointer hover:text-blue-600'>Cirrus SR22</h1>
                              <h1 className='text-textColor text-sm font-semibold cursor-pointer'>cirrus-aircraft.jsp</h1>
                          </div>
                      </div>
                       <div>
                          <button className='px-3 py-1 rounded-lg bg-gray-200 text-textColor font-semibold hover:bg-blue-500 hover:text-white'>0</button>
                      </div>
                  </div>
                  <div className='flex items-center justify-between p-3 rounded-lg hover:outline hover:outline-1 outline-gray-300 mb-2'>
                      <div className='flex items-center gap-5'>
                          <div>
                               <img src="https://preview.keenthemes.com/craft/assets/media/svg/brand-logos/atica.svg" className='w-[35px] cursor-pointer' alt="" />
                        </div>
                         
                          <div>
                              <h1 className='font-bold text-gray-800 cursor-pointer hover:text-blue-600'>Beachcraft Baron</h1>
                              <h1 className='text-textColor text-sm font-semibold cursor-pointer'>baron-class.pyt</h1>
                          </div>
                      </div>
                       <div>
                          <button className='px-3 py-1 rounded-lg bg-gray-200 text-textColor font-semibold hover:bg-blue-500 hover:text-white'>0</button>
                      </div>
                  </div>
                  <div className='flex items-center justify-between p-3 rounded-lg hover:outline hover:outline-1 outline-gray-300 mb-2'>
                      <div className='flex items-center gap-5'>
                          <div>
                               <img src="https://preview.keenthemes.com/craft/assets/media/svg/brand-logos/tower.svg" className='w-[35px] cursor-pointer' alt="" />
                        </div>
                         
                          <div>
                              <h1 className='font-bold text-gray-800 cursor-pointer hover:text-blue-600'>Cessna SF150</h1>
                              <h1 className='text-textColor text-sm font-semibold cursor-pointer'>cessna-aircraft-class.jsp</h1>
                          </div>
                      </div>
                       <div>
                          <button className='px-3 py-1 rounded-lg bg-gray-200 text-textColor font-semibold hover:bg-blue-500 hover:text-white'>0</button>
                      </div>
                  </div>
                  <div className='p-6 outline-1 outline-blue-300 outline-dashed bg-blue-50 rounded-lg font-semibold text-gray-500'>
                     <span className='text-blue-400'> Intive New .NET Collaborators</span> to creating great outstanding business to business .jsp modular class outstanding scripts
                  </div>
              </div>
              <div className='col-span-1 xl:col-span-2 rounded-lg bg-white p-6 '>
                  <div className='sm:flex sm:items-center sm:justify-between mb-5'>
                      <div>
                          <h1 className='text-gray-800 font-semibold'>Stock Report</h1>
                          <h1 className='text-sm font-semibold text-textColor '>Total 2,356 Items in the Stock</h1>
                      </div>
                      <div className='md:flex md:items-center md:gap-4'>
                          <h1 className='text-xs font-bold text-gray-500'>Category</h1>
                          <select className='text-xs font-bold outline-none text-gray-500' >
                              <option value="" className='py-2'>Show All</option>
                              <option value="">Category A</option>
                              <option value="">Category B</option>
                          </select>
                           <h1 className='text-xs font-bold text-gray-500'>Status</h1>
                          <select className='text-xs font-bold text-gray-500 outline-none' >
                              <option value="" >Show All</option>
                              <option value="">In Stock</option>
                              <option value="">Out of Stock</option>
                              <option value="">Low Stock</option>
                          </select>
                          <button className='text-xs font-bold text-gray-500 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg'>View Stock</button>
                      </div>
                  </div>
                    <div className=" rounded-2xl overflow-x-auto  shadow-lg ">
                <table className="w-full  text-sm text-left  dark:text-gray-400">
                    <thead className="text-xs text-textColor uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Items
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                               PRODUCT ID
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                DATE UPDATED
                            </th>
                            <th scope="col" className="px-6 py-3">
                                PRICE
                            </th>
                            <th scope="col" className="px-6 py-3">
                                STATUS
                            </th>
                            <th scope="col" className="px-6 py-3">
                                QTY
                            </th>
                        </tr>
                      </thead>
                          {
                              items.map(item =>
                             
                                 <>
                                       <ProductTable key={item.id} item={item} />
                                  </>
                                      
                                    
                              
                            )
                      }
                   
                </table>
            </div>
              </div>
         </div>
          

    </section>
  )
}

export default Profile