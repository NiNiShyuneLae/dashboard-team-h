import React from "react";
import {LuPencil} from 'react-icons/lu';
import {GoTrash} from 'react-icons/go'
import { useNavigate } from "react-router-dom";

const BlogTable = () => {
  const nav = useNavigate()
  const blogs = [
    {
      id: 1,
      title: "Modern Architectural Structures",
      date: "30-11-2021",
      category: "Architecture",
      views: 0,
      status: "Draft",
    },
    {
      id: 2,
      title: "Modernism in Architecture",
      date: "26-11-2021",
      category: "Interior",
      views: 0,
      status: "Scheduled",
    },
    {
      id: 3,
      title: "Postmodern Architecture",
      date: "19-11-2021",
      category: "Urban",
      views: 240,
      status: "Published",
    },
    {
      id: 4,
      title: "Modern Architecture Buildings",
      date: "12-11-2021",
      category: "Planning",
      views: 0,
      status: "Draft",
    },
    {
      id: 5,
      title: "Interior Design Ideas for Every Room",
      date: "30-10-2021",
      category: "Interior",
      views: 550,
      status: "Published",
    },
    {
      id: 6,
      title: "Inspiring Exterior Design Tips",
      date: "29-11-2021",
      category: "Exterior",
      views: 300,
      status: "Published",
    },
    {
      id: 7,
      title: "Modern Architectural Structures",
      date: "30-11-2021",
      category: "Architecture",
      views: 0,
      status: "Draft",
    },
    {
      id: 8,
      title: "Modernism in Architecture",
      date: "26-11-2021",
      category: "Interior",
      views: 0,
      status: "Scheduled",
    },
    {
      id: 9,
      title: "Postmodern Architecture",
      date: "19-11-2021",
      category: "Urban",
      views: 240,
      status: "Published",
    },
    {
      id: 10,
      title: "Modern Architecture Buildings",
      date: "12-11-2021",
      category: "Planning",
      views: 0,
      status: "Scheduled",
    },
  ];
  return (
    <div className=" ">
      <div className="py-8 lg:px-[32px] px-[20px]">
        <div>
          <p className=" text-[1.25rem] font-semibold text-white">Blogs</p>
          <div>
            <nav
              className="justify-between   text-gray-700  sm:flex  bg-gray-5"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center mb-3 space-x-1 sm:mb-0">
                <li onClick={() => nav("/")}>
                  <a className=" text-[14px] font-medium text-textColor hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li aria-current="page">
                  <a
                    href="#"
                    className=" text-[14px] font-medium text-textColor"
                  >
                    / Dashboards
                  </a>
                </li>
                <li aria-current="page">
                  <a href="#" className=" text-[14px] font-medium">
                    <span className="text-textColor">/</span>{" "}
                    <span className="text-primary">Blogs</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="my-8 flex flex-wrap gap-4 lg:gap-0 items-center justify-between">
          <input
            type="text"
            className="pe-3 ps-5 py-[10px] bg-cardColor text-textColor focus-visible:outline-none text-sm rounded-lg"
            placeholder="Search...."
          />
          <div className="flex gap-3 items-center cursor-pointer" >
            <p className="px-3 py-2 bg-primary text-white rounded-lg" onClick={() => nav('/addblog/6')}>
              Add New
            </p>
            <select className="px-3 py-2 bg-primary focus:outline-none text-white rounded-lg">
              <option>Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </div>
        <div className=" rounded-2xl overflow-x-auto  shadow-lg">
          <table className="w-full  text-sm text-left  bg-cardColor  py-8">
            <thead className="text-xs text-textColor uppercase  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Date
                </th>

                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Views
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
            {blogs.map((blog) => (
              <tr className="text-white font-semibold" key={blog.id}>
                <td className="px-6 py-4" scope="col">
                  {blog.title}
                </td>
                <td className="px-6 py-4" scope="col">
                  {blog.date}
                </td>
                <td className="px-6 py-4" scope="col">
                  {blog.category}
                </td>
                <td className="px-6 py-4" scope="col">
                  <span
                    className={
                      blog.views > 1 ? "text-primary" : "text-textColor"
                    }
                  >
                    {blog.views}
                  </span>
                </td>
                <td className="px-6 py-4 " scope="col">
                  <span
                    className={`px-3 py-1 rounded-lg ${
                      blog.status === "Draft" && "bg-red-100 text-red-700"
                    } ${blog.status === "Published" && "bg-green-100 text-green-700"} ${
                      blog.status === "Scheduled" && "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <button className="text-orange-700 outline-none rounded-lg p-2 bg-orange-100 text-lg"><LuPencil/></button>
                    <button className="text-red-700 outline-none text-lg bg-red-100 p-2 rounded-lg"><GoTrash/></button>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
