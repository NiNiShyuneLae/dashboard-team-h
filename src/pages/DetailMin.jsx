import React from 'react'
import Side from '../components/Side'
import Nav from '../components/Nav'
import ScrollBtn from '../components/ScrollBtn'
import Detail from './Detail'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const DetailMin = () => {
  const {data} = useParams()
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="sm:ml-64 p-0 lg:p-4 lg:pe-[40px]">
    <div className="flex md:block sticky top-0 z-50 bg-white">
      <Side num={data}/>
      <Nav />
    </div>
    <ScrollBtn />
    <div className="bg-[#F9F9F9] rounded-[1.5rem] pb-8 lg:p-4 lg:pb-0  p-0">
      <Detail/>
    </div>
    <Footer />
  </div>
  )
}

export default DetailMin