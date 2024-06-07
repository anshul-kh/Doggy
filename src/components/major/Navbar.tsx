import React from "react";
import { Link,useLocation } from "react-router-dom";
import { Menu, Close } from "../../assets";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  //for current location
  const location = useLocation();

  //handle onclick for mobile-devices
  const handleClick = (route:string) =>{
    if(location.pathname === route){
        setOpen((open) => !open)
    }
  }

  return (
    <nav className="flex flex-row flex-wrap w-full h-16 justify-between px-5 md:px-10 py-4 items-center absolute z-90">
      <div className="flex flex-row gap-5">
        {/* logo */}
        <Link to={'/'} className="text-café_noir text-3xl font-bold">DOGGY</Link>

        {/* links */}
        <div className=" hidden md:flex flex-row gap-5 items-center text-café_noir-300">
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>

      {/* input bar */}
      <Link to={'/shop'} className="hidden md:flex items-center border border-2 w-24 h-9 rounded-full justify-center items-center font-semibold">
        Search
      </Link>

      {/* hamburger for mobile-devices */}
      <div
        onClick={() => {
          setOpen((open) => !open);
        }}
        className="flex md:hidden justify-center items-center"
      >
        {/* when drawer is open  */}
        <img
          src={Menu}
          alt="more"
          className={`w-10 h-10 ${open ? "hidden" : "flex"}`}
        />

        {/* when drawer is closed  */}
        <img
          src={Close}
          alt="more"
          className={`w-8 h-8 ${!open ? "hidden" : "flex"}`}
        />
      </div>

      {/* drawer for mobile devices */}

      {open && (
        <div className="w-screen h-[80vh] flex flex-col justify-start py-20 items-center z-10 gap-10 rounded-xl bg-buff mt-7">
          <h1 className="text-4xl font-semibold text-café_noir border-b border-5 w-full flex justify-center items-center">
            Explore Routes
          </h1>

          <div className="text-café_noir-300 text-3xl z-96 flex flex-col justify-center items-center w-full mt-5">
            <Link
              className="border-b border-t border-3 w-full p-2 flex justify-center items=center"
              to={"/"}
              onClick={()=>handleClick('/')}
            >
              Home
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/shop"}
              onClick={()=>handleClick('/shop')}
            >
              Shop
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/services"}
              onClick={()=>handleClick('/services')}
            >
              Services
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/about"}
              onClick={()=>handleClick('/about')}
            >
              About
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/contact"}
              onClick={()=>handleClick('/contact')}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
