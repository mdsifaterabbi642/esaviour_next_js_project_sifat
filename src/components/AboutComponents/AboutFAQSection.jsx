"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { About_Data } from "@/Data/About";

const AboutFAQSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="mt-[40px] mb-[40px]">
        <h1 className="text-center text-[24px] leading-[28px] sm:text-[26px] sm:leading-[30px] xl:text-[36px] xl:leading-[46px] spacegrotesk700 font-bold xl:pt-[20px]">
          Frequently Asked Questions{" "}
          <span className="text-[#40b0fd]">(FAQs)</span>
        </h1>
        <p className="text-center text-[14px] leading-[16px] sm:text-[16px] sm:leading-[20px] sm:px-[10%] xl:text-[24px] xl:leading-[30px] spacegrotesk700 xl:px-[30%] pt-[30px]">
          We believe in two-ways communication with our clients to ensure the
          most successful campaign between us.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row flwx-wrap w-[80vw] mx-auto">
        <div className="basis-1/1 xl:basis-2/5">
          <div className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto lg:my-[60px]">
            {isClient ? (
              <Image
                src={About_Data[7]?.AboutFAQSection[0]?.imgSource}
                alt={About_Data[7]?.AboutFAQSection[0]?.imgAlt}
                width="429"
                height="383"
              ></Image>
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </div>
        </div>
        <div className="basis-1/1 xl:basis-3/5">
          <div className="w-[90%] mx-auto mt-[20px]">
            {isClient ? (
              About_Data[7]?.AboutFAQSection[1]?.faqs.map((item, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow bg-[#ffffff] mt-[-10px]"
                >
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-[13px] font-medium bg-[#40b0fd] text-[#ffffff]">
                    <span className="font-bold xl:text-2xl">Q.</span>
                    {item?.question}
                  </div>
                  <div className="collapse-content bg-[#edf7fe] rounded-lg my-[10px]">
                    <div className=" text-[13px] xl:text-[16px] xl:font-medium">
                      {item?.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                {" "}
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFAQSection;
