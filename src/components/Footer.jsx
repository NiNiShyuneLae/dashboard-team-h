import React from "react";

const Footer = () => {
  return (
    <div className="py-4 lg:px-[32px] px-[20px] flex items-center justify-between flex-col md:flex-row">
      <div className="text-[15px]">
        <span className="text-[#A1A5B7] font-normal ">2023©</span>
        <span className="text-[#3F4254] cursor-pointer hover:text-primary transition-all duration-150">
          Keenthemes
        </span>
      </div>
      <div className="text-[15px] text-[#7E8299] flex items-center gap-2 py-3 cursor-pointer">
        <p className="hover:text-primary duration-200 transition-all">About</p>
        <p className="hover:text-primary duration-200 transition-all">Support</p>
        <p className="hover:text-primary duration-200 transition-all">Purchase</p>
      </div>
    </div>
  );
};

export default Footer;
