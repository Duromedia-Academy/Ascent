import React, { useEffect, useRef, useState, useMemo } from "react";

import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import useMediaQuery from "./useMediaQuery";
import { images } from "../constants";

import sublinks from "./data";

const Header = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1117px)");
  const container = useRef(null);

  const {
    openSidebar,
    isSidebarOpen,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    page,
    location,
  } = useGlobalContext();

  // Memoize pageLinks to prevent unnecessary re-renders
  const pageLinks = useMemo(() => (page ? page.links : []), [page]);

  useEffect(() => {
    // Your useEffect code here
  }, [page, location, pageLinks]);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    openSubmenu(page);
  };

  return (
    <nav className="  border-b border-black py-5 px-6 lg:px-10 relative  ">
      <div className=" max-w-9xl mx-auto ">
        <div
          className={`flex ${
            !isAboveSmallScreens
              ? "  justify-between items-center"
              : "items-center gap-16 lg:gap-20 "
          }`}
        >
          <div className="">
            <a href="/" className="font-bold">
              <h1 className="text-3xl lg:text-3xl xl:text-5xl">
                <img
                  className="w-[150px] lg:w-[200px] "
                  src={images.ascentLogo}
                  alt=""
                />
              </h1>
            </a>
          </div>

          {/* Mobile Screen & Desktop Screen  */}
          {!isAboveSmallScreens ? (
            <div>
              <div className="ml-5">
                <div className="flex justify-between space-x-2 items-center">
                  <Link to={"/"}>
                    <button className="pb-1 border-b-2 border-black  text-sm lg:text-base font-bold capitalize  ">
                      Start free
                    </button>
                  </Link>

                  <button className="" onClick={openSidebar}>
                    <FaBars className=" text-2xl " />
                  </button>
                </div>
              </div>
              {/* Mobile Fixed Menus */}
              <div
                className={`${
                  isSidebarOpen
                    ? "fixed top-0 w-full h-full right-0 z-10 transform scale-100 transition-transform duration-700"
                    : "hidden transform scale-0 transition-transform duration-700"
                }`}
              >
                <div className="relative h-full  w-full right-0 ">
                  <div
                    className={`${
                      isSidebarOpen
                        ? "transform scale-100 transition-transform duration-500"
                        : "transform scale-0 transition-transform duration-500"
                    } bg-black overflow-y-scroll bg-blend-overlay opacity-[0.96] absolute w-full h-full z-30 p-10`}
                  >
                    <div className="relative ">
                      <ul className="absolute h-max min-h-max p-5  top-0 z-50 flex flex-col items-start space-y-6  w-full bg-white py-10 ">
                        <div className="absolute top-5 right-5">
                          <button className="p-3" onClick={closeSidebar}>
                            <IoCloseSharp className=" text-4xl " />
                          </button>
                        </div>

                        {sublinks.map((item, index) => {
                          const { links, page } = item;
                          return (
                            <li
                              key={index}
                              className="text-base lg:text-lg w-full font-semibold pb-1 border-b border-b-transparent transition duration-500 lg:hover:border-b lg:hover:border-green-700  "
                            >
                              <button className=" capitalize ">
                                <div className="flex justify-center items-center">
                                  <h4>{page}</h4>
                                  <span>
                                    <BiChevronDown />
                                  </span>
                                </div>
                              </button>

                              {/* Submenu */}
                              <ul className=" ">
                                {links.map((link, index) => {
                                  const { sublink, title } = link;

                                  // Check if the title contains the word "partials"
                                  const isPartial = title
                                    .toLowerCase()
                                    .includes("partials");

                                  return (
                                    <li className="py-4" key={index}>
                                      {isPartial ? (
                                        // Render if the title contains "partials"
                                        <div className="flex flex-col space-y-4 mt-3 capitalize pl-5">
                                          {sublink.map((subLink, index) => {
                                            const { url, icon, label } =
                                              subLink;

                                            return (
                                              <li
                                                className=" border-b-2 pb-1 text-green-900"
                                                key={index}
                                              >
                                                <Link
                                                  className="flex font-bold gap-2 items-center"
                                                  to={`${url}`}
                                                >
                                                  {label}
                                                  {icon}
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </div>
                                      ) : (
                                        // Render if the title does not contain "partials"
                                        <div className="flex flex-col space-y-5 mt-3 capitalize pl-5">
                                          <div className="pb-2 pl-2 border-b-4 uppercase text-xs text-gray-400">
                                            {title}
                                          </div>
                                          {sublink.map((subLink, index) => {
                                            const { url, icon, label } =
                                              subLink;

                                            return (
                                              <li className="" key={index}>
                                                <Link
                                                  className="flex gap-2 items-center"
                                                  to={`${url}`}
                                                >
                                                  {icon}
                                                  {label}
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center  w-full ">
              <div className="">
                <ul className="flex items-center space-x-6 lg:space-x-14 ">
                  <li className="relative text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button
                      className=" capitalize  "
                      onMouseOver={displaySubmenu}
                    >
                      <div className="flex justify-center items-center ">
                        products
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>

                    {/* Submenu */}
                    <ul
                      ref={container}
                      className={`${
                        isSubmenuOpen
                          ? "absolute top-10 left-0 z-50 w-max max-w-max  p-5  bg-white"
                          : "hidden"
                      }`}
                    >
                      <li className="py-4 grid grid-cols-2 gap-8 ">
                        {/* Sub menu menu */}
                        {pageLinks.map((link, index) => {
                          const { title, sublink } = link;

                          const isPartialSub = title
                            .toLowerCase()
                            .includes("partials");

                          return (
                            <div key={index}>
                              {isPartialSub ? (
                                <div className="mt-3 capitalize pl-5 grid grid-cols-2 gap-4">
                                  {sublink.map((subLink, index) => {
                                    const { url, icon, label } = subLink;

                                    return (
                                      <li
                                        to={"/"}
                                        key={index}
                                        className="pl-5  font-bold border-b-2 pb-1 text-green-900"
                                      >
                                        <Link
                                          className="flex space-x-2  items-center"
                                          to={`${url}`}
                                        >
                                          {label}

                                          {icon}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div>
                                  {/* Sub menu menu titile */}
                                  <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                                    {title}
                                  </div>
                                  {/* Sub menu menu list */}
                                  <div className="">
                                    <div className="mt-5 capitalize pl-5 grid grid-cols-2 gap-4">
                                      {sublink.map((subLink, index) => {
                                        const { url, icon, label } = subLink;

                                        return (
                                          <li
                                            to={"/"}
                                            key={index}
                                            className="p-2 rounded-md hover:bg-green-200"
                                          >
                                            <Link
                                              className="flex gap-4  items-center"
                                              to={`${url}`}
                                            >
                                              {icon}

                                              {label}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </li>
                    </ul>
                  </li>
                  <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button
                      className=" capitalize "
                      onMouseOver={displaySubmenu}
                    >
                      <div className="flex justify-center items-center">
                        solutions
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button
                      className=" capitalize "
                      onMouseOver={displaySubmenu}
                    >
                      <div className="flex justify-center items-center">
                        resources
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>
                  </li>

                  <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button
                      className=" capitalize "
                      onMouseOver={displaySubmenu}
                    >
                      <div className="flex justify-center items-center">
                        pricing
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="flex  justify-center items-center space-x-4 ">
                <Link to={"/"}>
                  <button className="text-base font-bold self-start  block  relative after:content-[''] after:absolute before:absolute  before:w-full before:h-0.5 before:bg-primary-color  before:-bottom-0.5 after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5">
                    Creator login
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base  transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
                    start for free
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
