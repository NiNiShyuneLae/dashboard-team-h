// import React from "react";
import { useState } from "react";

const TimetableCard = () => {
  const [activeTab, setActiveTab] = useState("tab2");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const renderActiveTab = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div
            className="tab-pane active"
            id="tab1"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  16:30 - 17:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Dashboard UI/UX Design Review
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Terry Robins
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  12:00 - 13:00{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  9 Degree Project Estimation Meeting
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Mark Randall
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  12:00 - 13:00{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Committee Review Approvals
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary ">
                    Caleb Donaldson
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div
            className="tab-pane active"
            id="tab2"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  9:00 - 10:00{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Sales Pitch Proposal
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary ">
                    Walter White
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  14:30 - 15:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Committee Review Approvals
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary ">
                    Mark Randall
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  11:00 - 11:45{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Creative Content Initiative
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Sean Bean
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      case "tab3":
        return (
          <div
            className="tab-pane active"
            id="tab3"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  11:00 - 11:45{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Dashboard UI/UX Design Review
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    David Stevenson
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  9:00 - 10:00{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Weekly Team Stand-Up
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Walter White
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  11:00 - 11:45{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Project Review & Testing
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Michael Walters
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      case "tab4":
        return (
          <div
            className="tab-pane active"
            id="tab4"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  11:30 - 15:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Development Team Capacity Review
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Peter Marcus
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  11:00 - 11:45{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Marketing Campaign Discussion
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Terry Robins
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  14:300 - 15:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Weekly Team Stand-Up
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Yannis Gloverson
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      case "tab5":
        return (
          <div
            className="tab-pane active"
            id="tab5"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  10:00 - 11:00{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Dashboard UI/UX Design Review
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Bob Harris
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  16:30 - 17:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Sales Pitch Proposal
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Sean Bean
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  14:30 - 15:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Marketing Campaign Discussion
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Terry Robins
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      case "tab6":
        return (
          <div
            className="tab-pane active"
            id="tab6"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  9:00 - 10:00{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Marketing Campaign Discussion
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Sean Bean
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  9:00 - 10:00{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Project Review & Testing
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Karina Clarke
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  13:00 - 14:00{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Creative Content Initiative
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Michael Walters
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      case "tab7":
        return (
          <div
            className="tab-pane active"
            id="tab7"
          >
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  10:00 - 11:00{" "}
                  <span className=" text-xs text-textColor">AM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Sales Pitch Proposal
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Naomi Hayabusa
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  14:30 - 15:30{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Sales Pitch Proposal
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Naomi Hayabusa
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-5 border-s-4">
              <div className=" ps-3">
                <p className=" text-textColor">
                  12:00 - 13:00{" "}
                  <span className=" text-xs text-textColor">PM</span>
                </p>
                <a
                  href="#"
                  className=" hover:text-primary font-semibold text-white"
                >
                  Team Backlog Grooming Session
                </a>
                <p className=" text-sm text-textColor">
                  Lead by{" "}
                  <a href="#" className=" text-primary hover:text-blue-500">
                    Michael Walters
                  </a>
                </p>
              </div>
              <div className="">
                <button className=" bg-primary rounded-lg w-full px-4 py-2.5 text-sm text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className=" mb-5">
          <h4 className=" text-base font-semibold text-white">What&apos;s on the road?</h4>
          <p className=" text-primary text-sm">Total 482 participants</p>
        </div>
        <div className="">
          <select
          defaultValue='default'
            id="options"
            className="bg-primary text-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
          >
            <option value='default'>Options</option>
            <option value="O1">Option 1</option>
            <option value="O2">Option 2</option>
            <option value="O3">Option 3</option>
            <option value="O4">Option 3</option>
          </select>
        </div>
      </div>
      <div className=" w-full">
        <ul className="flex overflow-x-auto justify-between">
          <li
            className={`tab-item ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">Su</span>
              <span className=" text-textColor font-medium date">22</span>
            </div>
          </li>
          <li
            className={`tab-item ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">Mo</span>
              <span className=" text-textColor font-medium date">23</span>
            </div>
          </li>
          <li
            className={`tab-item ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">Tu</span>
              <span className=" text-textColor font-medium date">24</span>
            </div>
          </li>
          <li
            className={`tab-item ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => handleTabClick("tab4")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">We</span>
              <span className=" text-textColor font-medium date">25</span>
            </div>
          </li>
          <li
            className={`tab-item ${activeTab === "tab5" ? "active" : ""}`}
            onClick={() => handleTabClick("tab5")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">Th</span>
              <span className=" text-textColor font-medium date">26</span>
            </div>
          </li>
          <li
            className={`tab-item ${activeTab === "tab6" ? "active" : ""}`}
            onClick={() => handleTabClick("tab6")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">Fr</span>
              <span className=" text-textColor font-medium date">27</span>
            </div>
          </li>
          <li
            className={`tab-item ${activeTab === "tab7" ? "active" : ""}`}
            onClick={() => handleTabClick("tab7")}
          >
            <div className=" flex flex-col hover:bg-primary py-3 px-3 rounded-3xl cal cursor-pointer">
              <span className=" text-sm font-medium text-white">Sa</span>
              <span className=" text-textColor font-medium date">28</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default TimetableCard;
