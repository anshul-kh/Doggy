import React from "react";
import { ServiceData, Nav, Footer } from "../components";

const Services = () => {
  return (
    <div className="w-screen h-full bg-anti-flash_white-900 overflow-x-hidden">
      {/* Navbar */}
      <Nav />

      <div className="flex w-full md:min-h-screen  bg-anti-flash_white px-6 z-1 flex flex-col justify-center items-center md:overflow-hidden flex-wrap md:flex-nowrap pt-20 gap-10 md:gap-0">

        {/* Component of Services */}
      <ServiceData />
      </div>
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Services;
