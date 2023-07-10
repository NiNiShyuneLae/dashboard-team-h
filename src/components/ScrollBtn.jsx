// import React, { useState, useEffect } from "react";
// import {AiOutlineArrowUp} from 'react-icons/ai'

// const ScrollBtn = () => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);
//   const [showProgressBar, setShowProgressBar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const windowHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrolled = window.scrollY;
//       const percentage = (scrolled / windowHeight) * 100;
//       setScrollPercentage(percentage);
//       if (!showProgressBar && percentage > 0) {
//         setShowProgressBar(true);
//       } else if (showProgressBar && percentage === 0) {
//         setShowProgressBar(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [showProgressBar]);
//   const handleOnClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     // <div
//     //   onClick={handleOnClick}
//     //   className={`first-letter:scroll-progress  ${
//     //     showProgressBar
//     //       ? " animate__animated animate__fadeInUp"
//     //       : "transition-all duration-1000 transform -translate-y-5"
//     //   }  cursor-pointer fixed w-12 h-12  bottom-6 right-4`}
//     // >
//     //   {showProgressBar && (
//     //     <>
//     //       <CircularProgressbar
//     //         value={scrollPercentage}
//     //         styles={{
//     //           path: {
//     //             stroke: "#b19777",
//     //             transition: "stroke-dashoffset 0.5s linear 0s",
//     //             strokeWidth: 1,
//     //           },
//     //           trail: {
//     //             stroke: `rgba(221, 221, 221, 0.26)`,
//     //             strokeWidth: 1,
//     //           },
//     //         }}
//     //       />
//     //       <span className="children absolute bottom-[30%] left-[37%]">
//     //         <i className=" ti-angle-up text-[11px] font-light text-secondary" />
//     //       </span>
//     //     </>
//     //   )}
//     // </div>
//     <div>
//       <button onClick={() => handleOnClick()} className="bg-blue-300 hover:bg-primary transition-all duration-200 fixed bottom-10 right-3 p-2 rounded-lg text-white">
//         <AiOutlineArrowUp className="w-[24px] h-[24px]"/>
//       </button>
//     </div>
//   );
// };

// export default ScrollBtn;

import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / windowHeight) * 100;
      setShowButton(percentage > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={handleOnClick}
          className="bg-primary bg-opacity-75 hover:bg-primary transition-all duration-200 fixed bottom-10 right-3 p-2 rounded-lg text-white"
        >
          <AiOutlineArrowUp className="w-[24px] h-[24px]" />
        </button>
      )}
    </div>
  );
};

export default ScrollBtn;
