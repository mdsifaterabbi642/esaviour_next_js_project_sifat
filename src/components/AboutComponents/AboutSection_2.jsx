"use client";
import "./AboutShadow.css";

import Image from "next/image";
import { About_Data } from "@/Data/About";
import { useEffect, useState } from "react";

const AboutSection_2 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="xl:w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-[24px] xl:text-[40px] text-[#57bafd]">
            {isClient ? (
              About_Data[1]?.section2[0]?.title
            ) : (
              <div>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </h1>
          <div className="text-[14px] pb-[30px] xl:text-[22px] text-[#000000]">
            {isClient ? (
              About_Data[1]?.section2[0]?.subtitle
            ) : (
              <div>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 xl:py-[50px]">
          {isClient ? (
            About_Data[1]?.section2[1]?.serviceItems.map((item, index) => (
              <div
                key={index}
                className="basis-1/3 lg:basis-1/4 sm:py-[30px] lg:py-[50px] py-[10px] xl:basis-1/5 xl:h-[250px]  xl:rounded-3xl myShadowDiv"
              >
                <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
                  <Image
                    src={item?.imgSource}
                    alt={item?.imgAlt}
                    width="55"
                    height="59"
                    layout="responsive"
                  ></Image>
                </div>
                <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[30px] font-semibold">
                  {item?.heading}
                </h5>
              </div>
            ))
          ) : (
            <div>
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutSection_2;
