import Image from "next/image";

const AboutSection_7 = () => {
  return (
    <>
      {/* ============== Only For Large and Extra large devices ================== */}
      <div className="lg:w-[90vw] xl:w-[80vw] mx-auto hidden lg:block xl:block">
        <div className="flex lg:flex-col xl:flex-col flex-wrap w-[80vw] mx-auto">
          <div className="lg:basis-1/1 xl:basis-1/1 mx-auto">
            <h1 className="text-center lg:text-[32px] xl:text-[36px] font-bold text-[#40b0fd]">
              LEADERSHIP TEAM
            </h1>
            <p
              className="text-center lg:text-[22px] xl:text-[24px] font-semibold lg:pb-[35px] xl:pb-[50px]"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              Get a glimpse into the names carrying us into the future.
            </p>
          </div>
          <div className="lg:basis-1/1 xl:basis-1/1">
            <div className="flex lg:flex-row xl:flex-row">
              <div className="lg:basis-1/2 xl:basis-1/2">
                <div className="inline-block w-[38%]">
                  <div className="w-[241px] lg:w-[150px] xl:w-[241px] h-auto mx-auto">
                    <Image
                      src="/AboutPageLogos/Mainul_Islam_2.png"
                      alt="Mainul_Islam_2"
                      className="lg:h-auto"
                      width="241"
                      height="275"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
                <div className="inline-block w-[58%] relative top-0 left-0">
                  <div className="absolute top-[0px] lg:top-[-170px] xl:top-[-250px]">
                    <h1
                      className="lg:text-[20px] lg:font-bold lg:pl-[10px] xl:text-[22px] xl:font-bold xl:pl-[10px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      {" "}
                      Mainul Islam
                    </h1>

                    <p
                      className="lg:text-[20px] lg:pl-[10px] xl:text-[22px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Managing Director
                    </p>
                    <p
                      className="lg:text-[14px] lg:leading-[17px] lg:pl-[10px] lg:pr-[5px] lg:pt-[10px] xl:text-[18px] xl:pl-[10px] xl:pr-[35px] text-justify xl:pt-[20px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      With a comprehensive background in Law LL. B from the
                      University of London, LL. M in International Business Law
                      from BPP University, UK and over a decade of experience as
                      an Amazon FBA Consultant and Digital Marketing Expert, he
                      brings a unique blend of legal expertise and e-commerce
                      savvy to propel your brand forward.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 xl:basis-1/2">
                <div className="inline-block w-[38%]">
                  <div className="w-[241px] lg:w-[150px] xl:w-[241px] h-auto mx-auto">
                    <Image
                      src="/AboutPageLogos/Bhanni.png"
                      alt="Bhanni.png"
                      width="241"
                      height="275"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
                <div className="inline-block w-[58%] relative top-0 left-0">
                  <div className="absolute lg:top-[-170px] xl:top-[-250px]">
                    <h1
                      className="lg:text-[20px] lg:font-bold lg:pl-[10px] xl:text-[22px] xl:font-bold xl:pl-[10px"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      {" "}
                      Bhanni Shikha
                    </h1>

                    <p
                      className="lg:text-[20px] lg:pl-[10px] xl:text-[22px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Chairman
                    </p>
                    <p
                      className="lg:text-[14px] lg:leading-[17px] lg:pl-[10px] lg:pr-[5px] lg:pt-[10px] xl:text-[18px] xl:pl-[10px] xl:pr-[35px] text-justify xl:pt-[20px]"
                      style={{
                        fontFamily: "Futura PT, sans-serif",
                      }}
                    >
                      Our honorable Chairman had completed Bachelor of Business
                      Administration (BBA) & Master of Business Administration
                      (MBA) from Independent University, Bangladesh. She is
                      highly motivated into business Branding and Marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================== Only for extra small, small and medium devices =========================*/}
      <div className="block lg:hidden">
        <div className="flex flex-col flex-wrap w-[95vw] mx-auto">
          <div className="basis-1/1">
            <h1 className="text-center text-[24px] font-bold text-[#40b0fd]">
              LEADERSHIP TEAM
            </h1>
            <p
              className="text-center text-[17px] font-semibold"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              Get a glimpse into the names carrying us into the future.
            </p>
          </div>
          <div className="basis-1/1">
            <div className="mt-[20px]">
              <div className="w-[241px] h-auto mx-auto">
                <Image
                  src="/AboutPageLogos/Mainul_Islam_2.png"
                  alt="Mainul_Islam_2"
                  className="mx-auto"
                  width="241"
                  height="275"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div>
              <h1
                className="text-[18px] mt-[10px] mb-[5px] text-center font-bold"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                }}
              >
                {" "}
                Mainul Islam
              </h1>

              <div className="text-center mb-[15px]">
                <p
                  className="text-[18px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  Managing Director
                </p>
              </div>
              <p
                className="text-[14px] xl:pl-[10px] xl:pr-[35px] text-justify xl:pt-[20px]"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                }}
              >
                With a comprehensive background in Law LL. B from the University
                of London, LL. M in International Business Law from BPP
                University, UK and over a decade of experience as an Amazon FBA
                Consultant and Digital Marketing Expert, he brings a unique
                blend of legal expertise and e-commerce savvy to propel your
                brand forward.
              </p>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="mt-[20px]">
              <div className="w-[241px] h-auto mx-auto">
                <Image
                  src="/AboutPageLogos/Bhanni.png"
                  alt="Bhanni"
                  className="mx-auto"
                  width="241"
                  height="275"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div>
              <h1
                className="text-[18px] mt-[10px] mb-[5px] text-center font-bold"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                }}
              >
                {" "}
                Bhanni Shikha
              </h1>

              <div className="text-center mb-[15px]">
                <p
                  className="text-[18px] font-thin bg-[#cee9ff] inline px-[10px] py-[5px]"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  Chairman
                </p>
              </div>
              <p
                className="text-[14px] xl:pl-[10px] xl:pr-[35px] text-justify xl:pt-[20px]"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                }}
              >
                Our honorable Chairman had completed Bachelor of Business
                Administration (BBA) & Master of Business Administration (MBA)
                from Independent University, Bangladesh. She is highly motivated
                into business Branding and Marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_7;
