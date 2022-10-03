import React, { useState, useEffect } from "react";
const address = require("@bangladeshi/bangladesh-address");
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import parse from "html-react-parser";

type InputDataType = {
  name: string;
  mobile: string;
  district: string;
  gender: string;
  dateOfBirth: string;
  experience: string;
  youTubeLink: string;
  about: string;
};

const InstructorProfileCreate = () => {
  const disticts = address.allDistict();
  const { quill, quillRef } = useQuill();
  const [boxValue, setBoxValue] = useState("");
  const [imageUpload, setImageUpload] = useState("")
  const [profileInfo, setProfileInfo] = useState<InputDataType>({
    name: "",
    mobile: "",
    district: "",
    gender: "",
    dateOfBirth: "",
    experience: "",
    youTubeLink: "",
    about: "",
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setBoxValue(quillRef.current.firstChild.innerHTML);
      });
    }
    // eslint-disable-next-line
  }, [quill]);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    profileInfo.about = boxValue;
  };

  console.log(profileInfo);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="mx-3">
          <h1 className="text-xl font-bold text-green-600 my-3">
            Basic Information
          </h1>
          <div className="flex md:flex-row flex-wrap flex-col w-full border rounded py-5">
            <div className="w-full md:w-1/3 px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                Name
              </label>
              <div className="relative">
                <input
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value="Instructor Name"
                  name="name"
                  disabled
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                mobile
              </label>
              <div className="relative">
                <input
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={"+8801795443674"}
                  name="mobile"
                  disabled
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                District
              </label>
              <div className="relative">
                <select
                  required
                  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="district"
                  onChange={handleChangeInput}
                >
                  <option value="">Select District</option>
                  {disticts.map((district: any) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                Gender
              </label>
              <div className="relative">
                <select
                  required
                  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="gender"
                  onChange={handleChangeInput}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                Date of birth
              </label>
              <div className="relative">
                <input
                  required
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="dateOfBirth"
                  type="date"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                Experience
              </label>
              <div className="relative">
                <select
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="experience"
                  onChange={handleChangeInput}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Link */}
        <div className="mx-3">
          <h1 className="text-xl font-bold text-green-600 my-3">Link</h1>
          <div className="border rounded py-6">
            <div className="w-full px-3 md:my-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2">
                YouTube Video URL
              </label>
              <div className="relative">
                <input
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                  type="text"
                  name="youTubeLink"
                  onChange={handleChangeInput}
                  placeholder="Ex- https://www.youtube.com/watch?v=hhNas00-t60"
                />
              </div>
            </div>
          </div>
        </div>
        {/* About me */}
        <div className="mx-3 mb-10">
          <h1 className="px-3 text-xl font-bold text-green-600 my-3">
            About me
          </h1>
          <div className="rounded h-52">
            <div ref={quillRef} />
          </div>
        </div>
        {/* <div>{parse(value)}</div> */}

        {/* Profile Picture */}
        <div className="mx-3 text-center my-5">
          <h1 className="px-3 text-sm font-bold text-green-600 mb-3 md:mt-16 mt-28">
            Profile Picture
          </h1>
          <input
            type="file"
            name="profileImg"
            className="block m-auto py-5 md:py-10 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            onChange={handleChangeInput}
          />
        </div>

        <div className="flex justify-center mx-2 my-8 md:mx-0">
          <button
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstructorProfileCreate;
