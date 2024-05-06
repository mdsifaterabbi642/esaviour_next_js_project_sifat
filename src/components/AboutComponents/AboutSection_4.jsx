import Image from "next/image";
import "./AboutShadow.css";

const AboutSection_4 = () => {
  return (
    <>
      <div className="w-[90vw] mt-[-50px] sm:w-[95vw] lg:w-[95vw] lg:mt-[-50px] xl:mt-[50px] xl:w-[70vw] mx-auto lg:my-[25px]">
        <div className="flex flex-col lg:flex-row xl:flex-row gap-5">
          <div className="basis-1/2 lg:basis-1/2 xl:basis-1/2 relative top-0 left-0 myShadowDiv  mx-auto">
            <h1 className="bg-[#40b0fd] text-[22px] w-[90%] ml-[10px] pl-[5px] mt-[10px] xl:w-[90%] xl:ml-[20px] text-white xl:text-[35px] xl:pl-[10px] xl:mt-[20px]">
              Our Mission
            </h1>
            <p
              className="text-[13px] ml-[10px] mr-[20px] py-[10px] xl:text-[18px] xl:w-[90%] xl:ml-[20px] xl:pt-[20px] xl:pb-[40px] text-justify"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              We envision a world where all the businesses irrespective of their
              size and budget can thrive with confidence on digital platforms.
              By creating novel examples of client management and transparency,
              setting new standards of business development and marketing
              practices and fostering a healthy and creative work environment,
              we aspire to become a game-changer in this industry and for you,
              the one-stop digital marketing agency. We don’t consider ourselves
              an authority in this relationship; rather, we aim to grow together
              with you till a transformative online presence is established for
              both of us.
            </p>
            <div className="absolute xl:bottom-0 xl:right-0 xl:w-[250px] xl:h-[250px]">
              <div className="absolute xl:bottom-0">
                <Image
                  src="/AboutPageLogos/About_Mask2.png"
                  alt="About_Mask2"
                  //   className="absolute xl:bottom-0"
                  width="325"
                  height="268"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
          <div className="basis-1/2 lg:basis-1/2 xl:basis-1/2 relative top-0 left-0 myShadowDiv  mx-auto">
            <h1 className="bg-[#40b0fd] text-[22px] w-[90%] ml-[10px] pl-[5px] mt-[10px] xl:w-[90%] xl:ml-[20px] text-white xl:text-[35px] xl:pl-[10px] xl:mt-[20px]">
              Our Vision
            </h1>
            <p
              className="text-[13px] ml-[10px] mr-[20px] py-[10px] xl:text-[18px] xl:w-[90%] xl:ml-[20px] xl:pt-[20px] xl:pb-[40px] text-justify"
              style={{
                fontFamily: "Futura PT, sans-serif",
              }}
            >
              We understand the worries when you have just started a business.
              The digital era is challenging and the online space is all about
              competition. At eSaviour Limited, we have made it our solitary
              mission to help you withstand the inevitable obstacles in your
              journey through research-based ethical approaches and always stay
              ready with tailor-made innovative solutions for all the possible
              scenarios in the making. With our services, we vow to keep playing
              our role as the go-to agency for your business development.
            </p>
            <div className="absolute xl:bottom-0 xl:right-0 xl:w-[250px] xl:h-[250px]">
              <div className="absolute xl:bottom-0">
                <Image
                  src="/AboutPageLogos/About_Mask2.png"
                  alt="About_Mask2"
                  //   className="absolute xl:bottom-0"
                  width="325"
                  height="268"
                  layout="responsive"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection_4;
