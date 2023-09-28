import React, { useState, useRef, useEffect, useMemo } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import sublinks from "./data";

const Submenu = () => {
  const { isSubmenuOpen, page, location } = useGlobalContext();
  const container = useRef(null);

  // Memoize pageLinks to prevent unnecessary re-renders
  const pageLinks = useMemo(() => (page ? page.links : []), [page]);

  useEffect(() => {
    // Your useEffect code here
  }, [page, location, pageLinks]);

  return (
    <div ref={container}  className=" px-2 ">
      {/* Submenu */}
      <ul className={``}>
        <li className="py-4 flex gap-2 ">
          {/* Sub menu menu */}
          {pageLinks.map((link, index) => {
            const { title, sublink } = link;

            const isPartialSub = title.toLowerCase().includes("partials");

            return (
              <div key={index}>
                {isPartialSub ? (
                  <div className="mt-3 capitalize pl-5 flex  ">
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

                    {title ? (
                      <div className="pb-2 pl-2 border-b-4  uppercase text-xs text-gray-400 ">
                        {title}
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Sub menu menu list */}
                    <div className="text-[16px]">
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
    </div>
  );
};

export default Submenu;
