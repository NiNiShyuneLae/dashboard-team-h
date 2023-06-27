import React, { useEffect, useRef } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import {LuCalendarDays} from 'react-icons/lu'

const DatePicker = () => {
  const flatpickrRef = useRef(null);

  const clickHandler = () => {
    const flatpickrInstance = Flatpickr(flatpickrRef.current, {
      enableTime: true,
      dateFormat: "d, M Y, H:i",
    });

    return () => {
      flatpickrInstance.destroy();
    };
  };

  return (
    <div className="relative">

      <input
      
        type="text"
        className="py-3 text-gray-500 font-medium px-12 w-full bg-gray-200 rounded-lg focus:outline-none"
        placeholder='Pick date range'
        ref={flatpickrRef}
        onFocus={() => clickHandler()}
      />
      <LuCalendarDays className="absolute top-4 left-5 text-gray-500"/>
    </div>
  );
};

export default DatePicker;
