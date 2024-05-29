"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogAdminPage = () => {
  const router = useRouter();

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

  //console.log("All categories: ", categoryData[0]?.category);
  // console.log("Single category: ", categoryData[0]?.category[0]?.categoryName);
  // console.log("All blogs: === ", myBlogData?.blogData[0]?.article);
  // console.log("single Blog: === ", myBlogData?.blogData[0]?.article[0]);
  // console.log("Accessing single blog bannerTitle: === ", myBlogData?.blogData[0]?.article[0]?.bannerTitle);

  const blogSubmit = async (e) => {
    e.preventDefault();
    console.log("New Title : ", bannerTitle);
    console.log("New Category : ", category);
    console.log("New Body Title: ", bodyTitle);
    console.log("New Body Description: ", bodyDescription);
    console.log("New Blog Date: ", blogDate);
    console.log("New Image Source: ", imageSource);
    console.log("New Image Alt: ", alt);
    console.log("New Width: ", width);
    console.log("New Height: ", height);
  };

  return (
    <div>
      <div className="w-[98%] mx-auto h-screen overflow-y-auto">
        <h1>Blog Admin page</h1>
        <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
          Customize All Blogs ⚙👇👇👇
        </h1>
        {isClient ? (
          <div className="border px-[5px] py-[5px] flex flex-row flex-wrap gap-3 justify-center">
            {myBlogData?.blogData[0]?.article.map((item, index) => (
              <div key={index} className="shadow-xl w-[350px] bg-sky-100">
                <div className=" py-[10px] px-[10px]">
                  <form
                    onSubmit={blogSubmit}
                    className="w-[100%] mx-auto border-2 border-slate-400"
                  >
                    <div className="flex flex-col flex-wrap">
                      <div className="w-[98%] mx-auto">
                        <label
                          for="bannerTitle"
                          className="text-gray-600  font-bold text-xl"
                        >
                          bannerTitle
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="bannerTitle"
                            name="bannerTitle"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={bannerTitle[index]}
                            onChange={(e) => {
                              const updatedBannerTitle = bannerTitle.map(
                                (item, i) =>
                                  i === index ? e.target.value : item
                              );
                              setBannerTitle(updatedBannerTitle);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          htmlFor="category"
                          for="category"
                          className="text-gray-600  font-bold text-xl"
                        >
                          category
                        </label>
                        {isClient ? (
                          <select
                            type="text"
                            id="category"
                            name="category"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[80px] max-h-[100px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={category[index]}
                            onChange={(e) => {
                              const updatedCategory = category.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setCategory(updatedCategory);
                            }}
                          >
                            {categoryData[0]?.category.map((item, index) => (
                              <option key={index} value={item.categoryName}>
                                {item.categoryName}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="bodyTitle"
                          className="text-gray-600  font-bold text-xl"
                        >
                          bodyTitle
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="bodyTitle"
                            name="bodyTitle"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={bodyTitle[index]}
                            onChange={(e) => {
                              const updatedBodyTitle = bodyTitle.map(
                                (item, i) =>
                                  i === index ? e.target.value : item
                              );
                              setBodyTitle(updatedBodyTitle);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="bodyDescription"
                          className="text-gray-600  font-bold text-xl"
                        >
                          bodyDescription
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="bodyDescription"
                            name="bodyDescription"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={bodyDescription[index]}
                            onChange={(e) => {
                              const updatedBodyDescription =
                                bodyDescription.map((item, i) =>
                                  i === index ? e.target.value : item
                                );
                              setBodyDescription(updatedBodyDescription);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="blogDate"
                          className="text-gray-600  font-bold text-xl"
                        >
                          blogDate
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="blogDate"
                            name="blogDate"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[50px] max-h-[80px] h-[50px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={blogDate[index]}
                            onChange={(e) => {
                              const updatedBlogDate = blogDate.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setBlogDate(updatedBlogDate);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="imageSource"
                          className="text-gray-600  font-bold text-xl"
                        >
                          imageSource
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="imageSource"
                            name="imageSource"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={imageSource[index]}
                            onChange={(e) => {
                              const updatedImgSrc = imageSource.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setImageSource(updatedImgSrc);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="alt"
                          className="text-gray-600  font-bold text-xl"
                        >
                          alt
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="alt"
                            name="alt"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[50px] max-h-[80px] h-[50px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={alt[index]}
                            onChange={(e) => {
                              const updatedAlt = alt.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setAlt(updatedAlt);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="width"
                          className="text-gray-600  font-bold text-xl"
                        >
                          width
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="width"
                            name="width"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[50px] max-h-[80px] h-[50px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={width[index]}
                            onChange={(e) => {
                              const updatedWidth = width.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setWidth(updatedWidth);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="w-[98%] mx-auto">
                        <label
                          for="height"
                          className="text-gray-600  font-bold text-xl"
                        >
                          height
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="height"
                            name="height"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[50px] max-h-[80px] h-[50px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={height[index]}
                            onChange={(e) => {
                              const updatedHeight = height.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setHeight(updatedHeight);
                            }}
                          />
                        ) : (
                          <div>
                            <span className="loading loading-bars loading-xs"></span>
                            <span className="loading loading-bars loading-sm"></span>
                            <span className="loading loading-bars loading-md"></span>
                            <span className="loading loading-bars loading-lg"></span>
                          </div>
                        )}
                      </div>

                      <div className="mx-auto my-[20px] text-center hover:cursor-pointer">
                        <button
                          type="btn btn-sm"
                          className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default BlogAdminPage;
