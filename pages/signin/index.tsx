import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  type InputDataType = {
    email: string;
    password: string;
  };
  const [signInfo, setSignInfo] = useState<InputDataType>({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignInfo({
      ...signInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="md:w-full md:max-w-xl md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mx-2">
      <h1 className="text-center font-bold text-xl  md:text-2xl p-2 uppercase text-gray-400">
        Login Form
      </h1>
      <div className="w-full border-2 p-3 md:p-8 rounded mb-10 md:mb-0">
        <form onSubmit={handleSubmit}>
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
          <div className="mb-4 md:flex justify-between">
            <h5 className="text-green-600 mx-2 md:mx-0">
              Are you new?{" "}
              <Link href="/signup">
                <a className="text-blue-500 ">Sign Up</a>
              </Link>
            </h5>
            <Link href="/forgotPassword">
              <a className="text-blue-600 mx-2 md:mx-0">Forgot Password?</a>
            </Link>
          </div>

          <div className="flex justify-end mx-2 md:mx-0">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
