import React from "react";
import { Nav, Footer } from "../components";
import { Hero_Img } from "../assets";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col gap-20 h-full items-center overflow-x-hidden">
      <Nav />

      <div className="flex w-screen md:min-h-screen overflow-x-hidden bg-anti-flash_white-900 z-1  flex-row justify-center items-center md:overflow-hidden flex-wrap  md:flex-nowrap pt-20 gap-10 md:gap-28">

        {/* Dummy Form */}
        <form className="border border-1 rounded-2xl flex flex-col w-11/12 md:w-2/6 p-7 text-café_noir-800 justify-center items-center gap-7 h-[60vh] bg-cadet_gray-800 mt-9 md:mt-0">
            
          <h1 className="text-3xl font-bold  text-café_noir ">Contact Us</h1>

          <TextField
            id="outlined-basic"
            className="w-full "
            label="Name"
            variant="outlined"
          />

          <TextField
            className="w-full "
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <TextField
            className="w-full "
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />

          <Link
            to={"/"}
            onClickCapture={() => alert("Submitted")}
            className="text-anti-flash_white-900 w-full flex justify-center items-center rounded drop-shadow-2xl text-4xl md:h-16 -z-1  bg-café_noir w-3/4 h-14"
          >
            Submit
          </Link>
        </form>

        <img
          className="w-full md:w-5/12 hidden md:flex"
          src={Hero_Img}
          alt="hero"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
