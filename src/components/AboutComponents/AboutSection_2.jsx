import "./AboutShadow.css";

import Image from "next/image";

const AboutSection_2 = () => {
  return (
    <>
      <div className="xl:w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-[24px] xl:text-[40px] text-[#57bafd]">
            Industry Expertise{" "}
          </h1>
          <p
            className="text-[14px] pb-[30px] xl:text-[22px] text-[#000000]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            Take a quick look at what our experts take pride in.{" "}
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 xl:py-[50px]">
          <div className="basis-1/3 lg:basis-1/4 sm:py-[30px] lg:py-[50px] py-[10px] xl:basis-1/5 xl:h-[250px]  xl:rounded-3xl myShadowDiv">
            <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
              <Image
                src="/AboutPageLogos/Amazon.png"
                alt="Amazon"
                // className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]"
                width="55"
                height="59"
                layout="responsive"
              ></Image>
            </div>
            <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[30px] font-semibold">
              Amazon FBA
            </h5>
          </div>
          <div className="basis-1/3 lg:basis-1/4 sm:py-[30px] lg:py-[50px] py-[10px] xl:basis-1/5 xl:h-[250px]  xl:rounded-3xl myShadowDiv">
            <div className="mx-auto w-[50px] xl:w-[60px]  xl:pt-[30px]">
              <Image
                src="/AboutPageLogos/Graphics_Design.png"
                alt="Graphics_Design"
                // className="mx-auto w-[50px] xl:w-[60px]  xl:pt-[30px]"
                width="59"
                height="59"
                layout="responsive"
              ></Image>
            </div>
            <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[15px] xl:pb-[30px] font-semibold">
              Graphics Design
            </h5>
          </div>
          <div className="basis-1/3 lg:basis-1/4 lg:py-[50px] py-[10px] sm:py-[30px] xl:basis-1/5 xl:h-[250px] xl:rounded-3xl myShadowDiv">
            <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
              <Image
                src="/AboutPageLogos/Video_Animation.png"
                alt="Video_Animation"
                // className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]"
                width="80"
                height="58"
                layout="responsive"
              ></Image>
            </div>
            <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[15px] xl:pb-[30px] font-semibold">
              Video & Animation
            </h5>
          </div>

          <div className="basis-1/3 lg:basis-1/5 py-[10px] sm:py-[30px] lg:py-[50px] xl:basis-1/5 xl:h-[250px] xl:rounded-3xl myShadowDiv">
            <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
              <Image
                src="/AboutPageLogos/Ui_Ux_design.png"
                alt="Ui_Ux_design"
                // className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]"
                width="60"
                height="59"
                layout="responsive"
              ></Image>
            </div>
            <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[15px] xl:pb-[30px] font-semibold">
              UI/UX Design
            </h5>
          </div>
          <div className="basis-1/3 lg:basis-1/5 py-[10px] sm:py-[30px] lg:py-[50px] xl:basis-1/5 xl:h-[250px] xl:rounded-3xl myShadowDiv">
            <div className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]">
              <Image
                src="/AboutPageLogos/Web_development.png"
                alt="Web_development"
                // className="mx-auto w-[50px] xl:w-[60px] xl:pt-[30px]"
                width="74"
                height="58"
                layout="responsive"
              ></Image>
            </div>
            <h5 className="text-center text-[12px] xl:text-[16px] xl:pt-[15px] xl:py-[30px] font-semibold">
              Web Development
            </h5>
          </div>
          <div className="basis-1/3 py-[10px] lg:basis-1/5 sm:py-[30px] lg:py-[50px] xl:h-[250px]  xl:basis-1/5 xl:rounded-3xl myShadowDiv">
            <div className="mx-auto w-[30px] xl:w-[60px] sm:w-[40px] xl:pt-[30px]">
              <Image
                src="/AboutPageLogos/SEO.png"
                alt="SEO"
                // className="mx-auto w-[30px] xl:w-[60px] sm:w-[40px] xl:pt-[30px]"
                width="58"
                height="58"
                layout="responsive"
              ></Image>
            </div>
            <h5 className="text-center text-[12px] xl:text-[16px] xl:py-[30px] font-semibold">
              Search Engine optimization
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_2;
