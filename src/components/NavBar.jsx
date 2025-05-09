import React from "react";
import profilePhoto from "../assets/images/upscalemedia-transformed.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3E2723] border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
         className="flex items-center space-x-3 rtl:space-x-reverse r"
        >
          <img 
            src={profilePhoto} 
            className="h-10 w-10 rounded-full object-cover border-1 "
            alt="Profile"
          />
            
          <span className="self-center text-2xl font-dancing-script  text-amber-200">
           YT
          </span>
        
         </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
            <a
  href="#home"
  className="block py-2 px-3 text-amber-300 rounded hover:text-yellow-200 md:p-0 cursor-pointer"
>
  Home
            </a>
            </li>
            <li>
              <a href="#about"
               className="block py-2 px-3 text-amber-300  rounded  md:border-0 md:hover:text-yellow-200 md:p-0   cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a href="#contact"
              className="block py-2 px-3 text-amber-300  rounded   md:hover:text-yellow-200 md:p-0   cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;