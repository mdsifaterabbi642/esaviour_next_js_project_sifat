"use client";
import BlogData from "@/Data/BlogData";
import BlogHero from "@/components/BlogComponents/BlogHero";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import blogModuleCSS from "@/components/BlogComponents/BlogBody.module.css";
import { useEffect, useState } from "react";

const CategoryPage = ({ params }) => {
  const { category } = params;

  const decodedCategory = decodeURIComponent(category);

  const filteredData = BlogData.filter(
    (item) => item.category === decodedCategory
  );
  // console.log(filteredData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="w-[98vw] mx-auto">
        <Navbar />
        <BlogHero />
        {/* Main component for showing filtered blog posts based on category */}
        <div className="w-[90vw] xl:w-[80vw] mx-auto my-[30px] xl:my-[70px]">
          <div className="flex flex-col md:flex-row xl:flex-row flex-wrap">
            <div className="basis-1/1 md:basis-4/6 xl:basis-3/5">
              <div className="flex flex-col flex-wrap">
                <div className="basis-1/1 md:w-[98%] border bg-[#cee9ff]">
                  <div className="xl:text-[24px] breadcrumbs font-bold xl:font-semibold pl-[10px]">
                    <ul>
                      <li>
                        <a>Home</a>
                      </li>
                      <li>
                        <a>Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="basis-1/1 mt-[10px] xl:mt-[30px]">
                  <div className="flex flex-wrap">
                    {/* =========== Only for extra small and extra large device ============ */}
                    <div className="my-[10px] md:mx-[5px] block sm:hidden md:hidden lg:hidden xl:block">
                      <Link href="#">
                        <div className="flex flex-wrap gap-[5px]">
                          {isClient ? (
                            filteredData.map((item, index) => (
                              <div
                                className="card xl:w-[266px] bg-[#e8f5ff] shadow-xl"
                                key={index}
                              >
                                <div className="absolute top-[5px] left-[10px] bg-[#40b0fd] text-white text-sm py-[5px] px-[10px] rounded-md">
                                  {item.bannerTitle}
                                </div>

                                <div className="max-h-[300px] w-[100%] md:h-[150px] xl:h-[150px] xl:w-[100%] rounded-t-md mb-[20px]">
                                  <Image
                                    src={item.imageSource}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    layout="responsive"
                                  />
                                </div>

                                <div className="card-body pt-[15px] pl-[10px]">
                                  <div className="border-b-[1px] border-b-[#40b0fd]">
                                    <h2 className="font-extrabold p-0 m-0 md:text-[12px] lg:[12px] xl:text-[18px]">
                                      {item.bodyTitle.length > 20
                                        ? item.bodyTitle.slice(0, 20) + "..."
                                        : item.bodyTitle}
                                    </h2>
                                  </div>

                                  <p
                                    className="font-semibold md:text-[14px] xl:text-[14px] xl:pt-[15px]"
                                    style={{
                                      fontFamily: "Futura PT, sans-serif",
                                    }}
                                  >
                                    {item.bodyDescription.length > 50
                                      ? item.bodyDescription.slice(0, 50) +
                                        "..."
                                      : item.bodyDescription}
                                  </p>
                                  <div className="card-actions justify-start border-b-[1px] border-b-[#40b0fd]">
                                    <Link href={`/blog/${item.blogId}`}>
                                      <button className="btn btn-sm bg-slate-700 text-white">
                                        Read More
                                      </button>
                                    </Link>
                                  </div>
                                  <div>
                                    <h1
                                      className="md:text-[12px] xl:text-[13px] font-bold tracking-widest"
                                      style={{
                                        fontFamily: "Futura PT, sans-serif",
                                      }}
                                    >
                                      {item.blogDate}
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div>
                              <span className="loading loading-spinner loading-xs"></span>
                              <span className="loading loading-spinner loading-sm"></span>
                              <span className="loading loading-spinner loading-md"></span>
                              <span className="loading loading-spinner loading-lg"></span>
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>
                    {/* =========== For small, medium and large device ===================== */}
                    <div className="my-[10px] md:mx-[5px] hidden sm:block md:block lg:block xl:hidden">
                      <Link href="#">
                        <div className="flex flex-wrap gap-[5px]">
                          {isClient ? (
                            filteredData.map((item, index) => (
                              <div key={index}>
                                <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-200">
                                  <figure className="sm:w-[50%] md:w-[70%] lg:w-[50%] sm:mx-auto md:mx-auto sm:pt-[5px] md:pt-[5px]">
                                    <Image
                                      src={item.imageSource}
                                      alt={item.alt}
                                      width="150"
                                      height="150"
                                      layout="responsive"
                                    />
                                  </figure>
                                  <div className="card-body">
                                    <div className="badge badge-info gap-2">
                                      {item.bannerTitle}
                                    </div>
                                    <h2 className="card-title">
                                      {item.bodyTitle}
                                    </h2>
                                    <p>{item.bodyDescription}</p>
                                    <div className="card-actions justify-end">
                                      <Link href={`/blog/${item.blogId}`}>
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
                            <div>
                              <span className="loading loading-spinner loading-xs"></span>
                              <span className="loading loading-spinner loading-sm"></span>
                              <span className="loading loading-spinner loading-md"></span>
                              <span className="loading loading-spinner loading-lg"></span>
                            </div>
                          )}
                        </div>
                      </Link>
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
                    <p className="text-[#40c0fe] xl:text-[20px] xl:font-extrabold text-center mt-[20px]">
                      Categories
                    </p>
                    <div className="font-semibold text-center mt-[15px] border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                      <p className="pt-[5px] pb-[5px] tracking-[1px]">
                        <Link href="/blog/category/Amazon FBA">Amazon FBA</Link>
                      </p>
                    </div>
                    <div className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                      <p className="py-[5px] tracking-[1px]">
                        <Link href="/blog/category/Digital Marketing">
                          Digital Marketing
                        </Link>
                      </p>
                    </div>
                    <div className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                      <p className="py-[5px] tracking-[1px]">
                        <Link href="/blog/category/Graphics Design">
                          Graphics Design
                        </Link>
                      </p>
                    </div>
                    <div className="font-semibold text-center border-b-[1px] border-[rgba(64,176,253,0.5)] w-[90%] mx-auto cursor-pointer hover:bg-[#000000] hover:text-[#ffffff] duration-300 ease-in-out">
                      <p className="py-[5px] tracking-[1px]">
                        <Link href="/blog/category/Web Development">
                          Web Development
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/1 bg-[#e8f5ff] mt-[20px] mb-[50px] pb-[20px] w-[100%] xl:w-[75%] mx-auto">
                  <div className="bg-[#ffffff] w-[95%] mx-auto mt-[20px] pb-[20px] rounded-md">
                    <div>
                      <p className="font-extrabold text-[#000000] text-[20px] pl-[20px]">
                        Recent Post
                      </p>
                    </div>
                    <div className="flex flex-row flex-wrap bg-[#e8f5ff] w-[95%] mx-auto py-[10px]">
                      <div className="basis-1/4 pt-[10px] pb-[20px]">
                        <div className="max-h-[100px] w-[100%] xl:w-[100px] xl:h-[60px]">
                          <Image
                            src="/BlogPageIcons/best-digital-marketer-in-bangladesh.jpg"
                            alt="best-digital-marketer-in-bangladesh"
                            width="1200"
                            height="600"
                            layout="responsive"
                          ></Image>
                        </div>
                      </div>
                      <div className="basis-3/4 px-[10px]">
                        <p className="font-bold md:font-extrabold text-[12px] xl:text-[16px] text-[#000000] pt-[0px] border-b-[2px] border-[#40b0fd] border-opacity-50">
                          Best Digital Marketer in Bangladesh{" "}
                        </p>
                        <p
                          className="text-[14px] pt-[10px] md:font-semibold"
                        >
                          Meet eSavior Limited, the Best Multinational B2B
                          Digital
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap bg-[#e8f5ff] w-[95%] mx-auto mt-[20px] py-[10px]">
                      <div className="basis-1/4 pt-[10px] pb-[20px]">
                        <div className="max-h-[100px] w-[100%] xl:w-[100px] xl:h-[60px]">
                          <Image
                            src="/BlogPageIcons/amazon-FBA-3.jpg"
                            alt="amazon-FBA2"
                            width="2048"
                            height="1366"
                            layout="responsive"
                          ></Image>
                        </div>
                      </div>
                      <div className="basis-3/4 px-[10px]">
                        <p className="font-bold md:font-extrabold text-[#000000] text-[12px] xl:text-[16px] pt-[0px] border-b-[2px] border-[#40b0fd] border-opacity-50">
                          Unleashing the Power of Amazon FBA: A Comprehensive
                          Guide
                        </p>
                        <p
                          className="text-[14px] pt-[10px] md:font-semibold
                        "
                          style={{
                            fontFamily: "Futura PT, sans-serif",
                          }}
                        >
                          In the dynamic landscape of e-commerce, Amazon stands
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <FooterPortfolio />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
