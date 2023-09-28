import React, { useEffect, useRef, useState, useMemo } from "react";

import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
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
import Submenu from "./SubMenu";

const Header = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1117px)");
  const container = useRef(null);

  const [openSubmenuName, setOpenSubmenuName] = useState(null);

  const {
    openSidebar,
    isSidebarOpen,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    page,
  } = useGlobalContext();

  useEffect(() => {
    // Add 'overflow-hidden' class to the body when the sidebar is open
    if (isSidebarOpen && !isAboveSmallScreens) {
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove the 'overflow-hidden' class when the sidebar is closed or on larger screens
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen, isAboveSmallScreens]);

  const displaySubmenu = (e, page) => {
    e.preventDefault();

    // Add this line to prevent the click event from propagating
    e.stopPropagation();
    // Open or close the submenu based on the current state
    if (openSubmenuName === page) {
      closeSubmenu();
      setOpenSubmenuName(null);
    } else {
      openSubmenu(page);
      setOpenSubmenuName(page);
    }
  };

  return (
    <nav className="z-[80]  border-b-2 border-black py-5 px-6 lg:px-10 relative  ">
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
              <div className="ml-5 ">
                <div className="flex justify-between space-x-2 items-center">
                  <Link to={"/"}>
                    <button className="pb-1 border-b-2 border-black  text-sm lg:text-base font-bold capitalize  ">
                      Start free
                    </button>
                  </Link>

                  {isSidebarOpen ? (
                    <button className="" onClick={closeSidebar}>
                      <IoCloseSharp className=" text-2xl " />
                    </button>
                  ) : (
                    <button className="" onClick={openSidebar}>
                      <IoIosMenu className=" text-2xl " />
                    </button>
                  )}
                </div>
              </div>
              {/* Mobile Fixed Menus */}
              <div
                className={`fixed  -z-[60] w-full h-full right-0 overflow-y-auto   transform  transition duration-[0.8s] bg-white ${
                  isSidebarOpen
                    ? " translate-y-[2%]  backface"
                    : "translate-y-[-1000%]  backface"
                }`}
              >
                <div className="relative w-full h-full  ">
                  <ul className="   w-full  pt-10 pb-14 ">
                    <div className=" p-5  flex flex-col items-start space-y-6  ">
                      {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                          <li
                            key={index}
                            className="w-full font-bold pb-1 border-b border-b-transparent transition duration-500 lg:hover:border-b lg:hover:border-green-700  "
                          >
                            <button
                              className=" capitalize text-lg font-GothamBold  "
                              onClick={(e) => displaySubmenu(e, page)}
                            >
                              <div className="flex justify-center items-center">
                                <h4>{page}</h4>

                                <span
                                  className={`${
                                    openSubmenuName === page
                                      ? isSubmenuOpen
                                        ? "rotate-180"
                                        : "rotate-0"
                                      : "rotate-0"
                                  } transition-transform duration-500 ml-2`}
                                >
                                  <BiChevronDown />
                                </span>
                              </div>
                            </button>
                            {openSubmenuName === page && (
                              <ul className=" transition-all duration-700 text-base ">
                                {links.map((link, index) => {
                                  const { sublink, title } = link;

                                  // Check if the title contains the word "partials"
                                  const isPartial = title
                                    .toLowerCase()
                                    .includes("partials");

                                  return (
                                    <li
                                      className="py-4 text-base font-GothamLight"
                                      key={index}
                                    >
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
                                          {title ? (
                                            <div className="pb-2 pl-2 border-b-4 uppercase text-xs text-gray-400">
                                              {title}
                                            </div>
                                          ) : (
                                            ""
                                          )}

                                          {sublink.map((subLink, index) => {
                                            const { url, icon, label } =
                                              subLink;

                                            return (
                                              <li className="" key={index}>
                                                <Link
                                                  className="flex gap-2 items-center"
                                                  to={`${url}`}
                                                >
                                                  {icon ? icon : ""}
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
                            )}
                            {/* Submenu */}
                          </li>
                        );
                      })}

                      <li className=" text-lg font-GothamBold  w-full font-bold pb-1 border-b border-b-transparent transition duration-500 lg:hover:border-b lg:hover:border-green-700 ">
                        <Link to={""}>Courses</Link>
                      </li>
                      <li className="text-lg font-GothamBold  w-full font-bold pb-1 border-b border-b-transparent transition duration-500 lg:hover:border-b lg:hover:border-green-700 ">
                        <Link to={""}>Online</Link>
                      </li>
                    </div>

                    <div className={`py-7 w-full   bg-black `}>
                      {/* <div
                      className={`py-7 w-full   bg-black ${
                        openSubmenuName !== page
                          ? "absolute bottom-"
                          : " static"
                      } `}
                    > */}
                      <div className="flex flex-col  marker:justify-center items-center space-y-3  space-x-4 mx-3 ">
                        <Link to={"/"} className="w-full block">
                          <button className=" bg-secondary-color w-full text-white hover:bg-secondary-color/60 capitalize text-base  transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
                            start for free
                          </button>
                        </Link>
                        <Link to={"/"}>
                          <button className="text-base font-bold self-start  block  relative after:content-[''] after:absolute before:absolute  before:w-full before:h-0.5 before:bg-primary-color  before:-bottom-0.5 after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5 text-white">
                            Creator login
                          </button>
                        </Link>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center  w-full ">
              <div className="">
                <ul className="flex items-center space-x-6 lg:space-x-14 ">
                  {sublinks.map((linkPage) => {
                    return (
                      <li
                        className="text-base pb-1 border-b-2 border-b-transparent transition duration-500 hover:border-b-2 hover:border-green-700  "
                        onClick={(e) => displaySubmenu(e, linkPage.page)}
                        key={linkPage.page}
                      >
                        <button className=" capitalize relative font-bold  ">
                          <div className="flex justify-center items-center">
                            {linkPage.page}
                            <span
                              className={`${
                                openSubmenuName === linkPage.page
                                  ? isSubmenuOpen
                                    ? "rotate-180"
                                    : "rotate-0"
                                  : "rotate-0"
                              } transition-transform duration-500 ml-2`}
                            >
                              <BiChevronDown />
                            </span>
                          </div>
                        </button>
                        {openSubmenuName === linkPage.page && page && (
                          <div
                            className={`${
                              isSubmenuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-20"
                            } transition-all  duration-500 absolute top-16 left-[30%] translate-x-[-30%] shadow  z-50 w-max max-w-max p-5 bg-white`}
                          >
                            <Submenu />
                          </div>
                        )}
                      </li>
                    );
                  })}

                  <li className="text-base  pb-1 border-b-2 border-b-transparent transition duration-500 hover:border-b-2 hover:border-green-700  ">
                    <Link
                      to={""}
                      className=" capitalize relative  text-lg font-bold  "
                    >
                      <div className="flex justify-center items-center">
                        Courses
                      </div>
                    </Link>
                  </li>
                  <li className="text-base  pb-1 border-b-2 border-b-transparent transition duration-500 hover:border-b-2 hover:border-green-700  ">
                    <Link
                      to={""}
                      className=" capitalize relative  text-lg  font-bold  "
                    >
                      <div className="flex justify-center items-center">
                        Online
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex  justify-center items-center space-x-4 ">
                <Link to={"/"}>
                  <button className="text-base font-bold self-start  block  relative after:content-[''] after:absolute before:absolute  before:w-full before:h-0.5 before:bg-primary-color  before:-bottom-0.5 after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5 text-black">
                    Creator login
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base  transition-colors duration-700   py-4 px-3 xl:px-5 font-semibold  rounded-md">
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
