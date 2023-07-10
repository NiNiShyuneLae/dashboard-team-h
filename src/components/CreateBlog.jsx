import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const nav = useNavigate()
  const fileUpload = () => {
    document.getElementById("blog").click();
  };
  const inputRef = useRef()
  const changeHandler = () => {

  }
  return (
    <div className="min-h-screen text-white py-8 lg:px-[32px] px-[20px]">
      <div>
        <p className=" text-[1.25rem] font-semibold text-white">Create Blog</p>
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
                <a href="#" className=" text-[14px] font-medium text-textColor">
                  / Dashboards
                </a>
              </li>
              <li aria-current="page">
                <a href="#" className=" text-[14px] font-medium">
                  <span className="text-textColor">/</span>{" "}
                  <span className="text-primary">Create Blog</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="my-8">
       <div className="bg-cardColor p-8 rounded-lg flex flex-col lg:flex-row  gap-10 justify-between">
       <div>
          <div
            onClick={fileUpload}
            className="p-16 cursor-pointer lg:w-[360px] border border-dashed border-primary h-[280px] flex flex-col justify-center items-center bg-cardColor rounded-lg"
          >
            <h1 className="text-[1.25rem] font-semibold  ">
              Click to upload file...
            </h1>
            <p className="font-medium text-textColor">Upload up to 10 files</p>
          </div>
          <input type="file" name="" id="blog" multiple className="hidden" />
        </div>
        <div className="w-full">
        <div className="mb-8">
            <p className="font-medium text-[1.075rem] text-white mb-3">
              Category <span className="text-red-600">*</span>
            </p>
            <select
            required
              name="Select"
              defaultValue="default"
              className="lg:w-[70%] w-full border border-dashed border-primary py-3 px-5 text-textColor font-medium bg-cardColor rounded-lg custom-select focus:ring-0  focus:outline-none"
            >
              <option value="">Interior</option>
              <option value="">Exterior</option>
              <option value="">Architecture</option>
              <option value="">Urban</option>
              <option value="">Planning</option>
            </select>
          </div>
          <div className="mb-8">
            <p className="font-medium text-[1.075rem] text-white mb-3">
              Blog Title <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="py-3 text-textColor font-medium border border-primary border-dashed px-5 lg:w-[70%] w-full bg-cardColor rounded-lg focus:outline-none"
              placeholder="Enter Title "
              
              ref={inputRef}
              onChange={() => changeHandler()}
            />
          </div>
          <div className="mb-8">
            <p className="font-medium text-[1.075rem] text-white mb-3">
              Blog Description <span className="text-red-600">*</span>
            </p>
            <textarea
              className="py-3 text-textColor border border-primary border-dashed font-medium px-5 lg:w-[70%] w-full bg-cardColor rounded-lg focus:outline-none"
              rows="7"
              onChange={() => changeHandler()}
              placeholder="Enter Blog Description "
              name="settings_description"
              ref={inputRef}
            ></textarea>
          </div>
          <div className="mt-3">
            <button
              onClick={() => nav("/")}
              type="submit"
              className="py-3 px-6 btn-animation"
            >
              Add
            </button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default CreateBlog;
