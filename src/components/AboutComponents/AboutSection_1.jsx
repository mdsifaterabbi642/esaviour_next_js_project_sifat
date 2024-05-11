"use client";
import Image from "next/image";
import { About_Data } from "@/Data/About";
import { useEffect, useState } from "react";

const AboutSection_1 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="xl:w-[70vw] xl:mx-auto">
        <div className="flex flex-col xl:flex-row py-[50px]">
          <div className="basis-1/1 xl:basis-2/5 order-0">
            <div className="mx-auto w-[70%] sm:w-[40%] md:w-[45%] lg:w-[50%] xl:w-[70%]">
              {isClient ? (
                <Image
                  src={About_Data[0]?.section1[0]?.imageSource}
                  alt="Mainul_Islam.png"
                  width="367"
                  height="375"
                  layout="responsive"
                ></Image>
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
          <div className="basis-1/1 xl:basis-3/5 order-1">
            <h1 className="font-bold text-[20px] px-[10px] xl:font-bold xl:text-[34px] xl:px-[50px]">
              {/* How It All Started? */}
              {isClient ? (
                About_Data[0]?.section1[0]?.title1
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <h1 className="font-bold text-[20px] px-[10px] xl:font-bold xl:text-[34px] text-[#40b0fd] xl:px-[50px]">
              {/* Let’s Hear It From The Boss */}
              {isClient ? (
                About_Data[0]?.section1[0]?.title2
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </h1>
            <div className="spacegrotesk500 text-[13px] leading-[17px] px-[10px] pt-[20px] md:text-[15px] md:leading-[21px] xl:text-[17px] xl:leading-[22px] xl:px-[50px]  xl:pt-[20px] text-justify">
              {isClient ? (
                About_Data[0]?.section1[0]?.description
              ) : (
                <div>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                </div>
              )}
            </div>
            <div className="text-center xl:text-left pt-[20px]">
              <h3 className="text-[16px] ] font-bold px-[5px] mt-[10px] xl:font-extrabold xl:text-[17px] bg-[#def1fe] inline-block xl:px-[5px] xl:ml-[50px] xl:mt-[30px]">
                {isClient ? (
                  About_Data[0]?.section1[0]?.name
                ) : (
                  <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                  </div>
                )}
              </h3>
              <h3 className="text-[14px]  px-[5px] xl:text-[18px] xl:font-semibold xl:ml-[50px]">
                {isClient ? (
                  About_Data[0]?.section1[0]?.designation
                ) : (
                  <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                  </div>
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_1;
