"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./BlogShadow.css";

// import blogModuleCSS from "./BlogBody.module.css";

const BlogHero = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const [blogHeroTitle, setBlogHeroTitle] = useState("");
  const [blogHeroSubTitle, setBlogHeroSubTitle] = useState("");
  const [blogHeroImgSrc, setBlogHeroImgSrc] = useState("");
  const [blogHeroImgAlt, setBlogHeroImgAlt] = useState("");

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(`http://localhost:3000/api/hero`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching Heros data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //setting up state variables for default values for form
      setBlogHeroTitle(myJsonData[0]?.blogHero[0]?.title);
      setBlogHeroSubTitle(myJsonData[0]?.blogHero[0]?.subTitle);
      setBlogHeroImgSrc(myJsonData[0]?.blogHero[0]?.imgSrc);
      setBlogHeroImgAlt(myJsonData[0]?.blogHero[0]?.imgAlt);
    };

    getHeroData();

    setIsClient(true);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#cee9ff] pb-[100px] md:pb-[150px] md:pt-[50px] lg:pb-[100px]">
        {
          <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 lg:mt-[0px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
            {isClient ? (
              <div>
                <h1 className="text-left font-extrabold pt-[20px] text-[20px] sm:text-[26px] md:text-xl lg:text-2xl  md:pt-[50px] lg:pt-[0px] md:pl-[5%] md:font-extrabold sm:pl-[5%] xl:pt-[50px] xl:font-bold xl:pl-[20%] xl:text-[38px] xl:leading-[40px]">
                  {blogHeroTitle}
                </h1>
                <h1
                  className="text-[16px] text-justify sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[16px] md:pl-[5%] mt-[20px] mb-[0px] xl:pl-[20%] xl:pr-[200px] xl:text-[18px] xl:leading-[25px] font-bold xl:font-bold"
                  style={{
                    fontFamily: "Futura PT, sans-serif",
                  }}
                >
                  {blogHeroSubTitle}
                </h1>
              </div>
            ) : (
              <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
              </div>
            )}
          </div>
        }
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center order-0 md:order-1 mt-[40px] pt-[0px] lg:mt-[0px] xl:text-center xl:pt-[0px]">
          <div className="w-[180px] sm:w-[250px] xl:w-[25%]">
            {isClient ? (
              <Image
                src={blogHeroImgSrc}
                alt={blogHeroImgAlt}
                width="222"
                height="208"
                layout="responsive"
              ></Image>
            ) : (
              <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[90vw] sm:w-[50vw] md:w-[60vw] lg:w-[50vw] xl:w-[565px] mx-auto py-[10px] rounded-md mt-[-70px] xl:mt-[-75px]">
        <h1 className="font-bold text-[16px] pb-[10px] xl:text-[20px] xl:pb-[10px] text-center">
          Please Subscribe For New Blog Post
        </h1>
        <div
          className={`bg-[#ffffff] py-[10px] rounded-md myShadowDiv myBlogPlaceHolder relative top-0 left-0`}
        >
          <input
            type="text"
            placeholder="Email"
            className={`py-[5px] w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] xl:w-[400px] pl-[5px] xl:pl-[10px] xl:mr-[65px]`}
          ></input>
          <button className="btn btn-sm btn-info rounded-md text-white text-opacity-80 uppercase absolute right-[10px] top-[50%] -translate-y-1/2">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
