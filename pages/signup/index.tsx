import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
const CountryList = require("country-list-with-dial-code-and-flag");

const Signup = () => {
  type InputDataType = {
    role: string;
    fullName: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
  };

  const countryList = CountryList.getList();
  const [code, setCode] = useState("+880");
  const [signInfo, setSignInfo] = useState<InputDataType>({
    role: "",
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {}, [code]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setSignInfo({
      ...signInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInfo.mobile= code.concat(signInfo.mobile)

  };


  

  return (
    <div className="md:w-full md:max-w-xl md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mx-2">
      <h1 className="text-center font-bold text-xl  md:text-2xl p-2 uppercase text-gray-400">
        Registration Form
      </h1>
      <div className="w-full border-2 p-3 md:p-8 rounded mb-10 md:mb-0 shadow">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <p className="font-bold">I want to register as a:</p>
            <div className="flex mt-3">
              <div className="flex items-center mr-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500 "
                  name="role"
                  type="radio"
                  value="learner"
                  checked={signInfo?.role === "learner"}
                  onChange={handleChangeInput}
                  required
                />
                <label className="ml-2 font-medium text-gray-900 dark:text-gray-300">
                  Learner
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500"
                  name="role"
                  type="radio"
                  value="instructor"
                  checked={signInfo?.role === "instructor"}
                  onChange={handleChangeInput}
                  required
                />
                <label className="ml-2 font-medium text-gray-900 dark:text-gray-300">
                  Instructor
                </label>
              </div>
            </div>
          </div>
          <div className="md:flex flex-wrap md:items-center mb-3">
            <div className="mx-2 md:mx-0">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Name
              </label>
            </div>
            <div className="md:w-full mx-2 md:mx-0">
              <input
                required
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300"
                type="text"
                name="fullName"
                onChange={handleChangeInput}
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="md:flex flex-wrap md:items-center mb-3">
            <div className=" mx-2 md:mx-0">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-full mx-2 md:mx-0">
              <input
                required
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300"
                type="email"
                name="email"
                onChange={handleChangeInput}
                placeholder="youremail@gmail.com"
              />
            </div>
          </div>
          <div className="md:flex flex-wrap md:items-center mb-3">
            <div className="mx-2 md:mx-0">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Mobile
              </label>
            </div>

            <div className="md:w-full mx-2 md:mx-0 relative">
              <input
                required
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-28 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300"
                name="mobile"
                onChange={handleChangeInput}
                maxLength={10}
                placeholder="Your Number"
              />
              <div className="flex absolute top-0">
                <div className="relative flex">
                  <select
                    className=" block appearance-none w-28 bg-indigo-50 border-2 text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e) => setCode(e.target.value)}
                  >
                    <option value="+880">BD(+880)</option>
                    {countryList.map((country: any) => (
                      <option key={country.name} value={country.dial_code}>
                        {country.code}({country.dial_code})
                      </option>
                    ))}
                  </select>
                  <AiOutlineDown className="absolute right-3 top-3 text-sm text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex flex-wrap md:items-center mb-3">
            <div className="mx-2 md:mx-0">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-full mx-2 md:mx-0">
              <input
                required
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300"
                type="password"
                name="password"
                onChange={handleChangeInput}
                placeholder="**********"
              />
            </div>
          </div>
          <div className="md:flex flex-wrap md:items-center mb-2">
            <div className="mx-2 md:mx-0">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Confirm Password
              </label>
            </div>
            <div className="md:w-full mx-2 md:mx-0">
              <input
                required
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300"
                type="password"
                onChange={handleChangeInput}
                name="confirmPassword"
                placeholder="**********"
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-green-600 mx-2 md:mx-0">
              Already have an account?{" "}
              <Link href="/signin">
                <a className="text-blue-500">Sign in</a>
              </Link>
            </h5>
          </div>

          <div className="flex justify-end mx-2 md:mx-0">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
