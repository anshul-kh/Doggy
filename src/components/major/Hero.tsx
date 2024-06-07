import React from "react";
import { Hero_Img } from "../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  // ***hero component***
  return (
    <div className="flex w-full md:min-h-screen overflow-x-hidden bg-anti-flash_white-900 z-1 flex flex-row justify-center items-center md:overflow-hidden flex-wrap md:flex-nowrap pt-20 gap-1yarn ls @mui/lab0 md:gap-0">

      <div className="text-café_noir flex justify-center items-center flex-col gap-10 md:w-1/2 md:gap-14">

        <p className="md:text-5xl text-3xl font-bold md:w-11/12 w-full px-7 md:p-0">
          Taking Care Of Dogs As If They Were Our Own
        </p>

        <p className="md:text-2xl w-full md:w-11/12 px-5 md:p-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut
          cumque soluta! Odio dolor ducimus quas eligendi voluptas corrupti iure
          rem! Architecto adipisci doloribus quisquam similique quam atque!
          Veniam, ducimus.
        </p>

        {/* Explore Button */}
        <Link to={'/shop'} className="text-anti-flash_white-900 md:w-5/6 flex justify-center items-center rounded drop-shadow-2xl text-4xl md:h-20 -z-1  bg-café_noir w-3/4 h-14">
          Explore
        </Link>
      </div>

      <img className="w-full md:w-7/12 " src={Hero_Img} alt="hero" />
    </div>
  );
};

export default Hero;
