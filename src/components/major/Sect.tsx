import React from "react";
import { Sect_Img } from "../../assets";

const Sect = () => {
  //*** Sect Component ***
  return (
    <div className="flex w-full md:h-screen  bg-anti-flash_white-900 z-1 flex flex-row justify-center items-center md:overflow-hidden flex-wrap-reverse md:flex-nowrap pt-20 gap-10 md:gap-0 overflow-x-hidden">
      {/* image */}
      <img
        className="w-full md:w-5/12 flex justify-center items-center pb-5 md:pb-0"
        src={Sect_Img}
        alt="hero"
      />
      {/* text part  */}
      <div className="text-[#02380E] flex justify-center items-center flex-col gap-10 md:w-1/2 md:gap-14">
        <p className="md:text-5xl text-3xl font-bold md:w-11/12 w-full px-7 md:p-0">
          Dogs Aren't Our Whole Life But They Makes Our Lives Better
        </p>

        <p className="md:text-2xl w-full md:w-11/12 px-5 md:p-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut
          cumque soluta! Odio dolor ducimus quas eligendi voluptas corrupti iure
          rem! Architecto adipisci doloribus quisquam similique quam atque!
          Veniam, ducimus.
        </p>
      </div>
    </div>
  );
};

export default Sect;
