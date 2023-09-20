import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import useMediaQuery from "./useMediaQuery";

const Header = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 1117px)");

  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  // const displaySubmenu = (e) => {
  //   const page = e.target.textContent;
  //   const tempBtn = e.target.getBoundingClientRect();
  //   const center = (tempBtn.left + tempBtn.right) / 2;
  //   const bottom = tempBtn.bottom - 3;
  //   openSubmenu(page, { center, bottom });
  // };
  // const handleSubmenu = (e) => {
  //   if (!e.target.classList.contains("link-btn")) {
  //     closeSubmenu();
  //   }
  // };

  return (
    <nav className="  border-b border-black py-5 px-10 relative  ">
      <div className=" ">
        {/* <div className="flex justify-between  items-center"  > */}

        <div
          className={`${
            !isAboveSmallScreens
              ? " flex justify-between items-center"
              : "flex  items-center gap-16 lg:gap-20 "
          }`}
        >
          <div className="">
            <a href="/" className="font-bold">
              <h1 className="text-3xl lg:text-3xl xl:text-5xl">Ascent</h1>
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

                  <button className="">
                    <FaBars className=" text-2xl " />
                  </button>
                </div>
              </div>
              {/* Mobile Fixed Menus */}
              <div className="fixed  top-0 w-full h-full right-0 z-10">
                <div className="relative h-full  w-full right-0 ">
                  <div className="bg-black overflow-y-scroll bg-blend-overlay opacity-[0.96] absolute w-full h-full z-30 p-10 ">
                    <div className="relative ">
                      <ul className="absolute h-max min-h-max p-5  top-0 z-50 bg-white flex flex-col items-start space-y-6  w-full bg-white py-10 ">
                        <li className="text-base lg:text-lg w-full font-semibold pb-1 border-b border-b-transparent transition duration-500 lg:hover:border-b lg:hover:border-green-700  ">
                          <button className=" capitalize ">
                            <div className="flex justify-center items-center">
                              product
                              <span>
                                <BiChevronDown />
                              </span>
                            </div>
                          </button>

                          {/* Submenu */}
                          <ul className=" ">
                            <li className="py-4  ">
                              <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                                what you can sell
                              </div>

                              <div className="flex flex-col space-y-5 mt-5 capitalize pl-5">
                                <li to={"/"}>
                                  <Link>Online courses</Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Coaching </Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Digital Downloads</Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Entrerprenuer</Link>
                                </li>
                                <li
                                  to={"/"}
                                  className=" font-bold border-b-2 pb-1 text-green-900"
                                >
                                  <Link
                                    to={"/"}
                                    className="flex space-x-2  items-center"
                                  >
                                    {" "}
                                    <span>Product overview</span>{" "}
                                    <span>
                                      <BsArrowRight />
                                    </span>{" "}
                                  </Link>
                                </li>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                          <button className=" capitalize ">
                            <div className="flex justify-center items-center">
                              solutions
                              <span>
                                <BiChevronDown />
                              </span>
                            </div>
                          </button>

                          {/* Submenu */}
                          <ul className=" ">
                            <li className="py-4  ">
                              <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                                what you can sell
                              </div>

                              <div className="flex flex-col space-y-5 mt-5 capitalize pl-5">
                                <li to={"/"}>
                                  <Link>Online courses</Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Coaching </Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Digital Downloads</Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Entrerprenuer</Link>
                                </li>
                                <li
                                  to={"/"}
                                  className=" font-bold border-b-2 pb-1 text-green-900"
                                >
                                  <Link
                                    to={"/"}
                                    className="flex space-x-2  items-center"
                                  >
                                    {" "}
                                    <span>Product overview</span>{" "}
                                    <span>
                                      <BsArrowRight />
                                    </span>{" "}
                                  </Link>
                                </li>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                          <button className=" capitalize ">
                            <div className="flex justify-center items-center">
                              resources
                              <span>
                                <BiChevronDown />
                              </span>
                            </div>
                          </button>

                          {/* Submenu */}
                          <ul className=" ">
                            <li className="py-4  ">
                              <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                                what you can sell
                              </div>

                              <div className="flex flex-col space-y-5 mt-5 capitalize pl-5">
                                <li to={"/"}>
                                  <Link>Online courses</Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Coaching </Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Digital Downloads</Link>
                                </li>
                                <li to={"/"}>
                                  <Link>Entrerprenuer</Link>
                                </li>
                                <li
                                  to={"/"}
                                  className=" font-bold border-b-2 pb-1 text-green-900"
                                >
                                  <Link
                                    to={"/"}
                                    className="flex space-x-2  items-center"
                                  >
                                    {" "}
                                    <span>Product overview</span>{" "}
                                    <span>
                                      <BsArrowRight />
                                    </span>{" "}
                                  </Link>
                                </li>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                          <button className=" capitalize ">
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
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center  w-full ">
              <div className="">
                <ul className="flex items-center space-x-6 lg:space-x-14 ">
                  <li className="relative text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button className=" capitalize ">
                      <div className="flex justify-center items-center">
                        product
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>

                    {/* Submenu */}
                    <ul className=" absolute top-10 left-0 z-50 w-max max-w-max  p-5  bg-white">
                      <li className="py-4 grid grid-cols-2 gap-8 ">
                        {/* Sub menu menu */}
                        <div>
                          {/* Sub menu menu titile */}
                          <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                            what you can sell
                          </div>
                          {/* Sub menu menu list */}
                          <div className="">
                            <div className="mt-5 capitalize pl-5 grid grid-cols-2 gap-4">
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Online courses</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Coaching </Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Digital Downloads</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Entrerprenuer</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Training</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>kiddies</Link>
                              </li>
                            </div>

                            {/* Sub menu partials */}
                            <li
                              to={"/"}
                              className="pl-5 mt-5 font-bold border-b-2 pb-1 text-green-900"
                            >
                              <Link
                                to={"/"}
                                className="flex space-x-2  items-center"
                              >
                                {" "}
                                <span>Product overview</span>{" "}
                                <span>
                                  <BsArrowRight />
                                </span>{" "}
                              </Link>
                            </li>
                          </div>
                        </div>

                        {/* Sub menu menu */}
                        <div>
                          {/* Sub menu menu titile */}
                          <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                            what you can sell
                          </div>
                          {/* Sub menu menu list */}
                          <div className="">
                            <div className="mt-5 capitalize pl-5 grid grid-cols-2 gap-4">
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Online courses</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Coaching </Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Digital Downloads</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Entrerprenuer</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>Training</Link>
                              </li>
                              <li
                                to={"/"}
                                className="p-2 rounded-md hover:bg-green-200"
                              >
                                <Link>kiddies</Link>
                              </li>
                            </div>

                            <li
                              to={"/"}
                              className="pl-5 mt-5 font-bold border-b-2 pb-1 text-green-900"
                            >
                              <Link
                                to={"/"}
                                className="flex space-x-2  items-center"
                              >
                                {" "}
                                <span>Product overview</span>{" "}
                                <span>
                                  <BsArrowRight />
                                </span>{" "}
                              </Link>
                            </li>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button className=" capitalize ">
                      <div className="flex justify-center items-center">
                        solutions
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button className=" capitalize ">
                      <div className="flex justify-center items-center">
                        resources
                        <span>
                          <BiChevronDown />
                        </span>
                      </div>
                    </button>
                  </li>

                  <li className="text-base lg:text-lg  font-semibold pb-1 border-b border-b-transparent transition duration-500 hover:border-b hover:border-green-700  ">
                    <button className=" capitalize ">
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
                  <button className="pb-1 border-b-4  transition duration-500 hover:border-green-900 border-black  text-sm lg:text-base  font-bold capitalize  ">
                    Creator login
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="py-5 px-6 rounded-md text-white bg-gap text-sm  lg:text-base font-bold capitalize ">
                    Start for free
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
