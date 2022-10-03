import React, { useState } from "react";
const address = require("@bangladeshi/bangladesh-address");

const interestItems = [
  { name: "quran", value: "কুরআন শিক্ষা", label: "কুরআন শিক্ষা" },
  { name: "dance", value: "নাচ শিক্ষা", label: "নাচ শিক্ষা" },
  { name: "song", value: "গান শিক্ষা", label: "গান শিক্ষা" },
  { name: "cook", value: "রান্না শিক্ষা", label: "রান্না শিক্ষা" },
  { name: "computer", value: "কম্পিউটার শিক্ষা", label: "" },
  { name: "programming", value: "প্রোগ্রামিং শিক্ষা", label: "প্রোগ্রামিং শিক্ষা"},
  { name: "art", value: "আর্ট শিক্ষা", label: "আর্ট শিক্ষা" },
  { name: "job", value: "চাকুরী কোর্স", label: "চাকুরী কোর্স" },
  { name: "ilts", value: "আইইএলটিএস কোর্স", label: "আইইএলটিএস কোর্স" },
  { name: "web", value: "ওয়েব ডেভেলপমেন্ট", label: "ওয়েব ডেভেলপমেন্ট" },
];

type InputDataType = {
  name: String;
  mobile: String;
  district: String;
  interest: {
    quran: Boolean;
    dance: Boolean;
    song: Boolean;
    cook: Boolean;
    computer: Boolean;
    programming: Boolean;
    art: Boolean;
    job: Boolean;
    ilts: Boolean;
    web: Boolean;
  };
  about: String;
  profileImg: String;
};

const LernerProfileCreate = () => {
  const disticts = address.allDistict();
  const [profileInfo, setProfileInfo] = useState<InputDataType>({
    name: "",
    mobile: "",
    district: "",
    interest: {
      quran: false,
      dance: false,
      song: false,
      cook: false,
      computer: false,
      programming: false,
      art: false,
      job: false,
      ilts: false,
      web: false,
    },
    about: "",
    profileImg: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    if (e.target.type === "checkbox") {
      setProfileInfo({
        ...profileInfo,
        interest: {
          ...profileInfo.interest,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setProfileInfo({
        ...profileInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };


  return (
    <div>
      <form className="w-full">
        {/* Basic Information */}
        <div className="mx-3">
          <h1 className="text-xl font-bold text-green-600 my-3">
            Basic Information
          </h1>
          <div className="flex md:flex-row flex-col w-full border rounded py-10">
            <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <div className="relative">
                <input
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value="Learner Name"
                  disabled
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                mobile
              </label>
              <div className="relative">
                <input
                  className="block w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={"+8801795443674"}
                  disabled
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                District
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="district"
                  onChange={handleChangeInput}
                >
                  <option>Select District</option>
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
          </div>
        </div>
        {/* interest */}
        <div className="mx-3">
          <h1 className="text-xl font-bold text-green-600 my-3">Interest</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 border rounded py-6">
            {interestItems.map((item) => (
              <div key={item.label} className="flex items-center pl-5">
                <input
                  type="checkbox"
                  name={item.name}
                  onChange={handleChangeInput}
                />
                <label className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                  {item.value}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* About me */}
        <div className="mx-3">
          <h1 className="px-3 text-xl font-bold text-green-600 my-3">
            About me
          </h1>
          <textarea
            rows={4}
            className="block p-2.5 w-[100%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="write somthing about you..."
            name="about"
            onChange={handleChangeInput}
          ></textarea>
        </div>
        {/* Profile Picture */}
        <div className="mx-3 text-center mb-5">
          <h1 className="px-3 text-sm font-bold text-green-600 mb-3 mt-10">
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

export default LernerProfileCreate;
