import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="text-gray-600 bg-gray-100">
      <div className="container mx-auto md:flex px-5 py-24 ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-10 md:mb-0">
          <Image
            width={700}
            height={700}
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero.avif"
          />
        </div>
        <div className=" md:w-1/2 lg:pl-24 md:pl-16 md:text-start text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            শিখান শুরু হোক আত্মবিশ্বাসে
          </h1>
          <p className="mb-8 leading-relaxed">
            অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে শিখান ইনস্টিটিউট প্রস্তুত
            আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের কোর্স থেকে আজই বেছে নিন
            আপনার পছন্দের কোর্স।
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-indigo-400 text-white inline-flex py-3 px-3 rounded-lg items-center lg:ml-4 md:ml-0 ml-1 md:mt-4 mt-0 lg:mt-0 hover:bg-indigo-500 focus:outline-none">
              <span className="flex items-start flex-col leading-none">
                <span className="title-font font-medium whitespace-nowrap">
                  ফ্রি রেজিস্ট্রেশন
                </span>
              </span>
            </button>
            <button className="bg-indigo-400 text-white inline-flex py-3 px-3 rounded-lg items-center lg:ml-4 md:ml-2 ml-1 md:mt-4 mt-0 lg:mt-0 hover:bg-indigo-500 focus:outline-none">
              <span className="flex items-start flex-col leading-none">
                <span className="title-font font-medium whitespace-nowrap">
                  জয়েন ফ্রি ক্লাস
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
