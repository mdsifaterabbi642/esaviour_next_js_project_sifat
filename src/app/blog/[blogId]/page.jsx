"use client";
import BlogData from "@/Data/BlogData";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoReply } from "react-icons/go";

const SingleBlogPage = ({ params }) => {
  const { blogId } = params;

  const [isClient, setIsClient] = useState(false);
  const [singleBlog, setSingleBlog] = useState({});
  const [myImageSource, setMyImageSource] = useState("");
  const [myImageAlt, setMyImageAlt] = useState("");

  useEffect(() => {
    const getSingleBlog = async () => {
      const res = await fetch(`http://localhost:3000/api/blog/${blogId}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error in fetching Single Blog");
      }
      if (res.ok) {
        const data = await res.json();
        setSingleBlog(data?.singleBlog);
        setMyImageSource(data?.singleBlog?.imageSource);
        setMyImageAlt(data?.singleBlog?.alt);
      }
    };

    getSingleBlog();

    setIsClient(true);
  }, [blogId]);

  //console.log("++++++++", singleBlog);
  console.log("=======imageSource: ", singleBlog.imageSource);
  console.log("=======type of imageSource: ", typeof singleBlog.imageSource);
  console.log("====== alt: ", singleBlog.alt);

  // Find the blog object with the matching blogId
  const blog = BlogData.find(
    (blogItem) => blogItem.blogId === parseFloat(blogId)
  );

  return (
    <>
      <div className="w-[98vw] md:w-[70vw] min-h-screen mx-auto overflow-hidden pb-[10px]">
        <Navbar />
        <div className="py-[50px]">
          {/* ====== Image div starts from here =========*/}
          <div className="w-[90vw] md:w-[70vw] mx-auto">
            <div className="w-[100%] xl:w-[70%] mx-auto">
              {isClient ? (
                <Image
                  src={myImageSource}
                  alt={myImageAlt}
                  width={300}
                  height={300}
                  layout="responsive"
                />
              ) : (
                <div>
                  {" "}
                  <span className="loading loading-spinner loading-xs"></span>
                  <span className="loading loading-spinner loading-sm"></span>
                  <span className="loading loading-spinner loading-md"></span>
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
            </div>
          </div>
          {/* ====== Image div ended here =========*/}
          <div className="w-[90vw] md:w-[70vw] mx-auto py-[30px] text-left">
            {isClient ? (
              <h2 className="bg-slate-700 text-white px-[5px] py-[2px] rounded-sm">
                {" "}
                {singleBlog?.blogDate}
              </h2>
            ) : (
              <div>
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            )}

            <h2 className="font-extrabold text-[26px]">
              {isClient ? (
                singleBlog?.bodyTitle
              ) : (
                <div>
                  <span className="loading loading-spinner loading-xs"></span>
                  <span className="loading loading-spinner loading-sm"></span>
                  <span className="loading loading-spinner loading-md"></span>
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
            </h2>
            <div className="badge badge-info gap-2">
              {isClient ? (
                singleBlog?.category
              ) : (
                <div>
                  <span className="loading loading-spinner loading-xs"></span>
                  <span className="loading loading-spinner loading-sm"></span>
                  <span className="loading loading-spinner loading-md"></span>
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
            </div>
          </div>
          <div className="w-[90vw] md:w-[70vw] mx-auto text-left py-[20px]">
            <div className="font-normal text-[16px] italic">
              {isClient ? (
                singleBlog?.bodyDescription
              ) : (
                <div>
                  <span className="loading loading-spinner loading-xs"></span>
                  <span className="loading loading-spinner loading-sm"></span>
                  <span className="loading loading-spinner loading-md"></span>
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
            </div>
          </div>
          <div className="w-[90vw] md:w-[70vw] mx-auto text-left py-[10px]">
            <Link href="/blog">
              <GoReply
                size="26px"
                className="font-extrabold hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[98vw] mx-auto">
        <FooterPortfolio />
      </div>
    </>
  );
};

export default SingleBlogPage;
