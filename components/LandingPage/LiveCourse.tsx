import Image from "next/image";
import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-stars";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LiveCourse = () => {
  return (
    <Fragment>
      <section className="text-gray-600 mt-10 mb-10 px-5">
        <h1 className="text-2xl">চলমান কোর্স</h1>
        <hr className="my-3" />
        <Carousel responsive={responsive}>
          <div className="flex mr-2 md:mr-0 flex-col rounded-lg border shadow-md md:flex-row md:max-w-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-violet-50 duration-200">
            <Image
              width={300}
              height={250}
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 rounded-l-lg"
              src="/cooking.avif"
              alt=""
            />
            <div className=" p-4 leading-normal">
              <div className="flex justify-between items-center ">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  রান্না ঘর
                </h5>
                <p className="font-bold text-xl text-green-800">100 &#2547;</p>
              </div>
              <span className="font-normal text-lg text-indigo-800 dark:text-gray-400">
                Nasirn Akter Bithi
              </span>

              <div className="flex items-center">
                <h2 className="mr-2">Ratings:</h2>
                <ReactStars
                  edit={false}
                  size={20}
                  color2={"#ffd700"}
                  value={4}
                />
              </div>
              <div className="flex mt-3">
                <p className="bg-slate-100 py-2 px-2 rounded whitespace-nowrap">
                  মোট সিট
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    50
                  </span>
                </p>
                <p className="ml-2 bg-slate-100 py-2 px-3 rounded whitespace-nowrap">
                  শিক্ষার্থী
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    30
                  </span>
                </p>
              </div>
              <div className="mt-2">
                {" "}
                ক্লাস-
                <span className="ml-1">শনি,</span>
                <span className="ml-1">রবি,</span>
                <span className="ml-1">সোম</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1  px-4 border border-blue-500 hover:border-transparent rounded">
                  ENROLL
                </button>
                <div>
                  <Image
                    className="rounded-full"
                    src="/course.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-2 md:mr-0 flex-col rounded-lg border shadow-md md:flex-row md:max-w-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-violet-50 duration-200">
            <Image
              width={300}
              height={250}
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 rounded-l-lg"
              src="/cooking.avif"
              alt=""
            />
            <div className=" p-4 leading-normal">
              <div className="flex justify-between items-center ">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  রান্না ঘর
                </h5>
                <p className="font-bold text-xl text-green-800">100 &#2547;</p>
              </div>
              <span className="font-normal text-lg text-indigo-800 dark:text-gray-400">
                Nasirn Akter Bithi
              </span>

              <div className="flex items-center">
                <h2 className="mr-2">Ratings:</h2>
                <ReactStars
                  edit={false}
                  size={20}
                  color2={"#ffd700"}
                  value={4}
                />
              </div>
              <div className="flex mt-3">
                <p className="bg-slate-100 py-2 px-2 rounded whitespace-nowrap">
                  মোট সিট
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    50
                  </span>
                </p>
                <p className="ml-2 bg-slate-100 py-2 px-3 rounded whitespace-nowrap">
                  শিক্ষার্থী
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    30
                  </span>
                </p>
              </div>
              <div className="mt-2">
                {" "}
                ক্লাস-
                <span className="ml-1">শনি,</span>
                <span className="ml-1">রবি,</span>
                <span className="ml-1">সোম</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1  px-4 border border-blue-500 hover:border-transparent rounded">
                  ENROLL
                </button>
                <div>
                  <Image
                    className="rounded-full"
                    src="/course.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-2 md:mr-0 flex-col rounded-lg border shadow-md md:flex-row md:max-w-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-violet-50 duration-200">
            <Image
              width={300}
              height={250}
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 rounded-l-lg"
              src="/cooking.avif"
              alt=""
            />
            <div className=" p-4 leading-normal">
              <div className="flex justify-between items-center ">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  রান্না ঘর
                </h5>
                <p className="font-bold text-xl text-green-800">100 &#2547;</p>
              </div>
              <span className="font-normal text-lg text-indigo-800 dark:text-gray-400">
                Nasirn Akter Bithi
              </span>

              <div className="flex items-center">
                <h2 className="mr-2">Ratings:</h2>
                <ReactStars
                  edit={false}
                  size={20}
                  color2={"#ffd700"}
                  value={4}
                />
              </div>
              <div className="flex mt-3">
                <p className="bg-slate-100 py-2 px-2 rounded whitespace-nowrap">
                  মোট সিট
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    50
                  </span>
                </p>
                <p className="ml-2 bg-slate-100 py-2 px-3 rounded whitespace-nowrap">
                  শিক্ষার্থী
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    30
                  </span>
                </p>
              </div>
              <div className="mt-2">
                {" "}
                ক্লাস-
                <span className="ml-1">শনি,</span>
                <span className="ml-1">রবি,</span>
                <span className="ml-1">সোম</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1  px-4 border border-blue-500 hover:border-transparent rounded">
                  ENROLL
                </button>
                <div>
                  <Image
                    className="rounded-full"
                    src="/course.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-2 md:mr-0 flex-col rounded-lg border shadow-md md:flex-row md:max-w-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-violet-50 duration-200">
            <Image
              width={300}
              height={250}
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 rounded-l-lg"
              src="/cooking.avif"
              alt=""
            />
            <div className=" p-4 leading-normal">
              <div className="flex justify-between items-center ">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  রান্না ঘর
                </h5>
                <p className="font-bold text-xl text-green-800">100 &#2547;</p>
              </div>
              <span className="font-normal text-lg text-indigo-800 dark:text-gray-400">
                Nasirn Akter Bithi
              </span>

              <div className="flex items-center">
                <h2 className="mr-2">Ratings:</h2>
                <ReactStars
                  edit={false}
                  size={20}
                  color2={"#ffd700"}
                  value={4}
                />
              </div>
              <div className="flex mt-3">
                <p className="bg-slate-100 py-2 px-2 rounded whitespace-nowrap">
                  মোট সিট
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    50
                  </span>
                </p>
                <p className="ml-2 bg-slate-100 py-2 px-3 rounded whitespace-nowrap">
                  শিক্ষার্থী
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    30
                  </span>
                </p>
              </div>
              <div className="mt-2">
                {" "}
                ক্লাস-
                <span className="ml-1">শনি,</span>
                <span className="ml-1">রবি,</span>
                <span className="ml-1">সোম</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1  px-4 border border-blue-500 hover:border-transparent rounded">
                  ENROLL
                </button>
                <div>
                  <Image
                    className="rounded-full"
                    src="/course.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-2 md:mr-0 flex-col rounded-lg border shadow-md md:flex-row md:max-w-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-violet-50 duration-200">
            <Image
              width={300}
              height={250}
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 rounded-l-lg"
              src="/cooking.avif"
              alt=""
            />
            <div className=" p-4 leading-normal">
              <div className="flex justify-between items-center ">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  রান্না ঘর
                </h5>
                <p className="font-bold text-xl text-green-800">100 &#2547;</p>
              </div>
              <span className="font-normal text-lg text-indigo-800 dark:text-gray-400">
                Nasirn Akter Bithi
              </span>

              <div className="flex items-center">
                <h2 className="mr-2">Ratings:</h2>
                <ReactStars
                  edit={false}
                  size={20}
                  color2={"#ffd700"}
                  value={4}
                />
              </div>
              <div className="flex mt-3">
                <p className="bg-slate-100 py-2 px-2 rounded whitespace-nowrap">
                  মোট সিট
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    50
                  </span>
                </p>
                <p className="ml-2 bg-slate-100 py-2 px-3 rounded whitespace-nowrap">
                  শিক্ষার্থী
                  <span className="bg-white text-black rounded-full p-1 ml-2 border">
                    30
                  </span>
                </p>
              </div>
              <div className="mt-2">
                {" "}
                ক্লাস-
                <span className="ml-1">শনি,</span>
                <span className="ml-1">রবি,</span>
                <span className="ml-1">সোম</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1  px-4 border border-blue-500 hover:border-transparent rounded">
                  ENROLL
                </button>
                <div>
                  <Image
                    className="rounded-full"
                    src="/course.png"
                    alt=""
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </Fragment>
  );
};

export default LiveCourse;
