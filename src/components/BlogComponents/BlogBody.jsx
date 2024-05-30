"use client";
import { useState, useEffect } from "react";
import blogModuleCSS from "./BlogBody.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import BlogData from "@/Data/BlogData";
//import Category from "@/Data/Category";
//import Category from "@/models/Category";

const BlogBody = () => {
  const [myBlogData, setMyBlogData] = useState(); // all blogs are considered as a single object. Inside object, there is article array
  const [categoryData, setCategoryData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  //state variables for setting default values to form fields
  const [bannerTitle, setBannerTitle] = useState();
  const [category, setCategory] = useState();
  const [bodyTitle, setBodyTitle] = useState();
  const [bodyDescription, setBodyDescription] = useState();
  const [blogDate, setBlogDate] = useState();
  const [imageSource, setImageSource] = useState();
  const [alt, setAlt] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [blogId, setBlogId] = useState();

  useEffect(() => {
    const getCategoryData = async () => {
      const res = await fetch(`http://localhost:3000/api/blog/category`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch category data");
      }

      const myJsonData = await res.json();
      setCategoryData(myJsonData);
    };

    const getBlogData = async () => {
      const res = await fetch(`http://localhost:3000/api/blog/myblog`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch blog data");
      }
      const myJsonData = await res.json();
      setMyBlogData(myJsonData);

      //setting up default values to populate form fields
      setBlogId(
        myJsonData?.blogData[0]?.article.map((item, index) => item.blogId)
      );
      setBannerTitle(
        myJsonData?.blogData[0]?.article.map((item, index) => item.bannerTitle)
      );
      setCategory(
        myJsonData?.blogData[0]?.article.map((item, index) => item.category)
      );
      setBodyTitle(
        myJsonData?.blogData[0]?.article.map((item, index) => item.bodyTitle)
      );
      setBodyDescription(
        myJsonData?.blogData[0]?.article.map(
          (item, index) => item.bodyDescription
        )
      );
      setBlogDate(
        myJsonData?.blogData[0]?.article.map((item, index) => item.blogDate)
      );
      setImageSource(
        myJsonData?.blogData[0]?.article.map((item, index) => item.imageSource)
      );
      setAlt(myJsonData?.blogData[0]?.article.map((item, index) => item.alt));
      setWidth(
        myJsonData?.blogData[0]?.article.map((item, index) => item.width)
      );
      setHeight(
        myJsonData?.blogData[0]?.article.map((item, index) => item.height)
      );
    };

    getCategoryData();
    getBlogData();
    setIsClient(true);
  }, []);

  //finding latest blogs
  const latestBlogs = BlogData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ).slice(0, 3);

  return (
    <>
      <div className="w-[90vw] xl:w-[80vw] mx-auto my-[30px] xl:my-[70px]">
        <div className="flex flex-col md:flex-row xl:flex-row flex-wrap">
          <div className="basis-1/1 md:basis-4/6 xl:basis-3/5">
            <div className="flex flex-col flex-wrap">
              <div className="basis-1/1 md:w-[98%] border bg-[#cee9ff]">
                <div className="xl:text-[24px] breadcrumbs font-bold xl:font-semibold pl-[10px]">
                  <ul>
                    <li>Home</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
              <div className="basis-1/1 mt-[10px] xl:mt-[30px]">
                <div className="flex flex-wrap">
                  {/* =========== Only for extra small and extra large device ============ */}
                  <div className="my-[10px] md:mx-[5px] block sm:hidden md:hidden lg:hidden xl:block">
                    {/* <Link href="#"> */}
                    <div className="flex flex-wrap gap-[5px]">
                      {isClient ? (
                        myBlogData?.blogData[0]?.article.map((item, index) => (
                          <div
                            className="card xl:w-[266px] bg-[#e8f5ff] shadow-xl"
                            key={index}
                          >
                            <div className="absolute top-[5px] left-[10px] bg-[#40b0fd] text-white text-sm py-[5px] px-[10px] rounded-md">
                              {category[index]}
                            </div>

                            <div className="max-h-[300px] w-[100%] md:h-[150px] xl:h-[150px] xl:w-[100%] rounded-t-md mb-[20px]">
                              <Image
                                src={imageSource[index]}
                                alt={alt[index]}
                                width={200}
                                height={200}
                                layout="responsive"
                              />
                            </div>

                            <div className="card-body pt-[15px] pl-[10px]">
                              <div className="border-b-[1px] border-b-[#40b0fd]">
                                <h2 className="font-extrabold p-0 m-0 md:text-[12px] lg:[12px] xl:text-[18px]">
                                  {bodyTitle[index].length > 20
                                    ? bodyTitle[index].slice(0, 20) + "..."
                                    : bodyTitle[index]}
                                </h2>
                              </div>

                              <h1 className="font-semibold md:text-[14px] xl:text-[14px] xl:pt-[15px]">
                                {bodyDescription[index].length > 50
                                  ? bodyDescription[index].slice(0, 50) + "..."
                                  : bodyDescription[index]}
                              </h1>
                              <div className="card-actions justify-start border-b-[1px] border-b-[#40b0fd]">
                                <Link href={`/blog/${blogId[index]}`}>
                                  <button className="btn btn-sm bg-slate-700 text-white">
                                    Read More
                                  </button>
                                </Link>
                              </div>
                              <div>
                                <h1 className="md:text-[12px] xl:text-[13px] font-bold tracking-widest">
                                  {blogDate[index]}
                                </h1>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center">
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
                    {/* </Link> */}
                  </div>
                  {/* =========== For small, medium and large device ===================== */}
                  <div className="my-[10px] md:mx-[5px] hidden sm:block md:block lg:block xl:hidden">
                    {/* <Link href="#"> */}
                    <div className="flex flex-wrap gap-[5px]">
                      {isClient ? (
                        myBlogData?.blogData[0]?.article.map((item, index) => (
                          <div key={index}>
                            <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-200">
                              <figure className="sm:w-[50%] md:w-[70%] lg:w-[50%] sm:mx-auto md:mx-auto sm:pt-[5px] md:pt-[5px]">
                                <Image
                                  src={imageSource[index]}
                                  alt={alt[index]}
                                  width={200}
                                  height={200}
                                  layout="responsive"
                                />
                              </figure>
                              <div className="card-body">
                                <div className="badge badge-info gap-2">
                                  {bannerTitle[index]}
                                </div>
                                <h2 className="card-title">
                                  {bodyTitle[index].length > 20
                                    ? bodyTitle[index].slice(0, 20) + "..."
                                    : bodyTitle[index]}
                                </h2>
                                <h1>
                                  {bodyDescription[index].length > 50
                                    ? bodyDescription[index].slice(0, 50) +
                                      "..."
                                    : bodyDescription[index]}
                                </h1>
                                <div className="card-actions justify-end">
                                  <Link href={`/blog/${blogId[index]}`}>
                                    <button className="btn btn-sm bg-slate-700 text-white">
                                      Read More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center">
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
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/1 md:basis-2/6 xl:basis-2/5">
            <div className="flex flex-col flex-wrap">
              <div className="basis-1/1 bg-[#e8f5ff] w-[100%] xl:w-[75%] mx-auto">
                <div className="bg-[#fff] w-[95%] mx-auto mt-[20px] pb-[20px] rounded-md">
                  <div className="w-[100%] h-[50px] pt-[20px] pb-[10px] relative top-[10px] left-0">
                    <input
                      type="search"
                      placeholder="Search..."
                      className={`border w-[90%] py-[5px] pl-[5px] ${blogModuleCSS.blogPlaceholder} font-semibold absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ${blogModuleCSS.rounded_top_right} ${blogModuleCSS.rounded_bottom_right} ${blogModuleCSS.blogInputField_rounded_top_bottom_left} ${blogModuleCSS.blogInputField_border} ${blogModuleCSS.blogInputField}`}
                    ></input>
                    <div
                      className={`w-[40px] h-[35px] bg-[#40b0fd] absolute right-[5%] top-[50%] -translate-y-1/2 ${blogModuleCSS.rounded_top_right} ${blogModuleCSS.rounded_bottom_right} cursor-pointer`}
                    >
                      <FaSearch className="mx-auto my-[25%]" />
                    </div>
                  </div>
                  <h1 className="text-[#40c0fe] xl:text-[20px] xl:font-extrabold text-center my-[20px]">
                    Categories
                  </h1>

                  {isClient ? (
                    categoryData[0]?.category.map((item) => (
                      <div
                        key={item.categoryId}
                        className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out"
                      >
                        <div className="tracking-[1px]">
                          <Link href={`/blog/category/${item.categoryName}`}>
                            {item.categoryName}
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center">
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
              <div className="basis-1/1 bg-[#e8f5ff] mt-[20px] mb-[50px] pb-[20px] w-[100%] xl:w-[75%] mx-auto">
                <div className="bg-[#ffffff] w-[95%] mx-auto mt-[20px] pb-[20px] rounded-md">
                  <div>
                    <p className="font-extrabold text-[#000000] text-[20px] pl-[20px]">
                      Recent Post
                    </p>
                  </div>

                  {isClient ? (
                    latestBlogs.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row flex-wrap bg-[#e8f5ff] w-[95%] mx-auto py-[10px] my-[10px]"
                      >
                        <div className="basis-1/4 pt-[10px] pb-[20px]">
                          <div className="max-h-[100px] w-[100%] xl:w-[100px] xl:h-[60px]">
                            <Link href={`/blog/${item.blogId}`}>
                              <Image
                                src={item.imageSource}
                                alt={item.alt}
                                width={item.width}
                                height={item.height}
                                layout="responsive"
                              ></Image>
                            </Link>
                          </div>
                        </div>
                        <div className="basis-3/4 px-[10px]">
                          <h1 className="font-bold md:font-extrabold text-[12px] xl:text-[16px] text-[#000000] pt-[0px] border-b-[2px] border-[#40b0fd] border-opacity-50">
                            <Link href={`/blog/${item.blogId}`}>
                              {item.bodyTitle.length > 20
                                ? item.bodyTitle.slice(0, 20) + "..."
                                : item.bodyTitle}
                            </Link>
                          </h1>
                          <h1 className="text-[14px] pt-[10px] md:font-semibold">
                            <Link href={`/blog/${item.blogId}`}>
                              {item.bodyDescription.length > 40
                                ? item.bodyDescription.slice(0, 40) + "..."
                                : item.bodyDescription}
                            </Link>
                          </h1>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBody;
