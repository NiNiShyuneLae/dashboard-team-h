import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import logo from "../assets/images/logo.png";

const SignIn = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("teamh@gmail.com");
  const [ps, setPs] = useState("teamh");
  const emailRef = useRef();
  const psRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "teamh@gmail.com" && ps === "teamh") {
      nav("/");
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className="lg:w-1/3 p-10 rounded-lg animate__animated animate__fadeInUp delay  text-[16px] font-Didact bg-cardColor">
  
      <p className="font-normal mb-2 text-white text-4xl tracking-[5px] font-Oswald">
          Welcome Back
        </p>
        <p className="text-primary text-lg mb-4 fonos">Login account</p>
        <form className="text-[16px] " onSubmit={submitHandler}>
          <input
            type="text"
            defaultValue={email}
            ref={emailRef}
            onChange={() => setEmail(emailRef.current.value)}
            className="w-full text-textColor  py-[10px] mt-[20px]  focus-visible:outline-none border-primary  border-b-[1px]  bg-transparent"
            placeholder="Your Email"
          />
          <input
            type="password"
            defaultValue={ps}
            ref={psRef}
            onChange={() => setPs(psRef.current.value)}
            className="w-full text-textColor  py-[10px] mt-[20px] mb-9   focus-visible:outline-none border-primary  border-b-[1px]  bg-transparent"
            placeholder="Your Password"
          />

          <button className="mt-6  ">
            <span className=" font-Oswald  font-medium tracking-[5px] uppercase  btn-animation ">
              Submit
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
