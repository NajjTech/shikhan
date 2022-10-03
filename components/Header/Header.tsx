import Link from "next/link";
import React, { Fragment, useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState("hidden");

  const menuBar = () => {
    menu === "hidden" ? setMenu("block") : setMenu("hidden");
  };
  return (
    <Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 px-6 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-gray-600">শিখান</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={menuBar}
            className="flex items-center px-3 py-2 border rounded text-indigo-600 border-indigo-800 hover:text-black hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${menu} w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium">
                DASHBORD
              </a>
            </Link>
            <Link href="/">
              <a className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium">
                COURSES
              </a>
            </Link>
            <Link href="/">
              <a className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium">
                TRAINER
              </a>
            </Link>
            <Link href="/">
              <a className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium">
                CONTACT
              </a>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row">
            <Link href="/signin">
              <button className="inline-flex w-24 items-center bg-white border border-gray-200 shadow py-1 md:py-2 px-3 focus:outline-none hover:bg-indigo-400 hover:text-white hover:font-bold rounded text-base mt-4 md:mt-0 uppercase">
                Sign-In
              </button>
            </Link>
            <Link href="/signup">
              <button className="md:ml-2 inline-flex w-24 items-center bg-white border border-gray-200 shadow py-1 md:py-2 px-3 focus:outline-none hover:bg-indigo-400 hover:text-white hover:font-bold rounded text-base mt-4 md:mt-0 uppercase">
                Sign-Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
