"use client";
import Image from "next/image";
import { About_Data } from "@/Data/About";
import { useEffect, useState } from "react";

const AboutSection_6 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {/* ============ For large and extra large device only =================*/}
      <div className="w-[100vw] my-[50px] bg-[#40b0fd] relative top-0 left-0 hidden lg:block xl:block">
        <div className="absolute bottom-[25px] left-0 xl:w-[350px] xl:h-[300px]">
          <Image
            src="/AboutPageLogos/About_Mask_4.png"
            alt="About_Mask_4.png"
            width="410"
            height="383"
            layout="responsive"
          ></Image>
        </div>
        <div className="flex lg:flex-row xl:flex-row flex-wrap gap-3 w-[90vw] mx-auto">
          <div className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto">
            <div className=" bg-white"></div>
            <div>
              <p className=""></p>
            </div>
            <div className=" bg-[#40b0fd] xl:mt-[50px]">
              <h1 className="text-white lg:text-[28px] lg:font-bold xl:text-[36px] xl:font-semibold xl:px-[20px]">
                {isClient ? (
                  About_Data[4]?.section6[0]?.heading
                ) : (
                  <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                  </div>
                )}
              </h1>
              <div className="text-white lg:text-[18px] xl:text-[22px] xl:px-[20px]">
                {isClient ? (
                  About_Data[4]?.section6[0]?.subHeading
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
          </div>
          {isClient ? (
            About_Data[4]?.section6[1]?.items.map((item, index) => (
              <div
                key={index}
                className="lg:basis-1/6 xl:basis-1/6 py-[30px] mx-auto"
              >
                <div className=" bg-white text-white">1</div>
                <div>
                  <div className="text-white xl:text-[22px] xl:font-bold text-center">
                    {item?.title}
                  </div>
                </div>
                <div className=" bg-white lg:h-[300px] xl:h-[300px] relative top-0 left-0">
                  <div className="spacegrotesk500 lg:text-[13px] lg:px-[10px] xl:text-[16px] xl:px-[40px] xl:py-[30px] xl:leading-[20px] text-justify">
                    {item?.description}
                  </div>
                  <div className="absolute bottom-[-25px] right-[-10px] xl:w-[150px] xl:h-[150px]">
                    <Image
                      src={item?.image}
                      alt={item?.imgAlt}
                      width="146"
                      height="138"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
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
      {/* ================ For Extra Small, small and medium Devices only ======================= */}
      <div className="w-[100vw] my-[50px] py-[10px] bg-[#40b0fd] lg:hidden">
        <div className="flex flex-col w-[95vw] mx-auto">
          <div className="basis-1/1">
            <div className="py-[5px] mx-auto">
              <div className=" bg-white"></div>
              <div>
                <p className=""></p>
              </div>
              <div className=" bg-[#40b0fd]">
                <h1 className="text-white text-[22px] font-semibold px-[20px] text-center">
                  {isClient ? (
                    About_Data[4]?.section6[0]?.heading
                  ) : (
                    <div>
                      <span className="loading loading-ball loading-xs"></span>
                      <span className="loading loading-ball loading-sm"></span>
                      <span className="loading loading-ball loading-md"></span>
                      <span className="loading loading-ball loading-lg"></span>
                    </div>
                  )}
                </h1>
                <div className="dmsans700 text-white text-[14px] sm:text-[16px] px-[20px] font-extralight opacity-70 text-center pb-[10px]">
                  {isClient ? (
                    About_Data[4]?.section6[0]?.subHeading
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
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row flex-wrap">
              {isClient ? (
                About_Data[4]?.section6[1]?.items.map((item, index) => (
                  <div key={index} className="basis-[47%] mx-auto">
                    <div className=" bg-white text-white">1</div>
                    <div>
                      <div className="text-white text-[16px] font-bold text-center">
                        {item?.title}
                      </div>
                    </div>
                    <div className=" bg-white h-[250px] relative top-0 left-0">
                      <div className="dmsans700 text-[11px] sm:text-[16px] px-[10px] py-[10px] text-justify">
                        {item?.description}
                      </div>
                      <div className="absolute bottom-[-15px] right-[-10px] w-[100px] h-[100px]">
                        <Image
                          src={item?.image}
                          alt={item?.imgAlt}
                          width="146"
                          height="138"
                          layout="responsive"
                        ></Image>
                      </div>
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default AboutSection_6;
