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
  const [blogId, setBlogId] = useState();
  const [targetIndex, setTargetIndex] = useState();
  const [action, setAction] = useState("");

  //state variables for adding blog
  const [addBlogId, setAddBlogId] = useState();
  const [addBannerTitle, setAddBannerTitle] = useState("");
  const [addCategory, setAddCategory] = useState("");
  const [addImageSource, setAddImageSource] = useState("");
  const [addAlt, setAddAlt] = useState("");
  const [addWidth, setAddWidth] = useState("");
  const [addHeight, setAddHeight] = useState("");
  const [addBodyTitle, setAddBodyTitle] = useState("");
  const [addBodyDescription, setAddBodyDescription] = useState("");
  const [addBlogDate, setAddBlogDate] = useState("");
  //===================================
  const [blogAddStatus, setBlogAddStatus] = useState(false);
  const [blogDeleteStatus, setBlogDeleteStatus] = useState(false);

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
  }, [blogAddStatus, blogDeleteStatus]);

  //console.log("All categories: ", categoryData[0]?.category);
  // console.log("Single category: ", categoryData[0]?.category[0]?.categoryName);
  // console.log("All blogs: === ", myBlogData?.blogData[0]?.article);
  // console.log("single Blog: === ", myBlogData?.blogData[0]?.article[0]);
  // console.log("Accessing single blog bannerTitle: === ", myBlogData?.blogData[0]?.article[0]?.bannerTitle);

  const blogUpdateDelete = async (e) => {
    e.preventDefault();

    if (action === "update") {
      const decision = window.prompt(
        "Type `Update eSaviour blog` to update or type `Cancel` to cancel the operation"
      );

      if (decision === "Update eSaviour blog") {
        console.log("You choosed to update");

        const newBannerTitle = bannerTitle[targetIndex];
        const newCategory = category[targetIndex];
        const newImageSource = imageSource[targetIndex];
        const newAlt = alt[targetIndex];
        const newWidth = width[targetIndex];
        const newHeight = height[targetIndex];
        const newBodyTitle = bodyTitle[targetIndex];
        const newBodyDescription = bodyDescription[targetIndex];
        const newBlogDate = blogDate[targetIndex];
        const newBlogId = blogId[targetIndex];

        const res = await fetch(`http://localhost:3000/api/blog/myblog`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            targetIndex: targetIndex,
            bannerTitle: newBannerTitle,
            category: newCategory,
            imageSource: newImageSource,
            alt: newAlt,
            width: newWidth,
            height: newHeight,
            bodyTitle: newBodyTitle,
            bodyDescription: newBodyDescription,
            blogDate: newBlogDate,
            blogId: newBlogId,
          }),
        });

        if (!res.ok) {
          throw new Error("Problem in Updating the Blog data");
        }
        if (res.ok) {
          router.push("/admin/blog");
          router.refresh();
          window.alert("Blog data updated successfully");
        }
      } else if (decision === "Cancel") {
        console.log("You Cancelled the operation");
      } else {
        console.log("Invalid Request");
      }
    }
    if (action === "delete") {
      const decision = window.prompt(
        "Type `Delete eSaviour blog` to delete or type `Cancel` to cancel the operation"
      );

      if (decision === "Delete eSaviour blog") {
        console.log("You choosed to delete the blog");
        const res = await fetch(`http://localhost:3000/api/blog/myblog`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            targetIndex: targetIndex,
          }),
        });

        if (!res.ok) {
          throw new Error("Not Deleted");
        }
        if (res.ok) {
          router.push("/admin/blog");
          router.refresh();
          window.alert("Blog data deleted successfully");
          setBlogDeleteStatus((prev) => !prev);
        }
      } else if (decision === "Cancel") {
        console.log("You Cancelled the operation");
      } else {
        console.log("Invalid request");
      }
    }
  };

  const addBlog = async (e) => {
    e.preventDefault();

    if (addCategory === "") {
      alert("PLease add category");
      document.getElementById("addBlog").close();
    }
    if (addCategory !== "") {
      console.log("Clicked addBlog function");
      // console.log("addBannerTitle: ", addBannerTitle);
      // console.log("addCategory: ", addCategory);
      // console.log("addImageSource: ", addImageSource);
      // console.log("addAlt: ", addAlt);
      // console.log("addWidth: ", addWidth);
      // console.log("addHeight: ", addHeight);
      // console.log("addBodyTitle: ", addBodyTitle);
      // console.log("addBodyDescription: ", addBodyDescription);
      // console.log("addBlogDate: ", addBlogDate);
      //console.log("addBlogId: ", addBlogId);

      const res = await fetch(`http://localhost:3000/api/blog/myblog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          blogId: addBlogId,
          bannerTitle: addBannerTitle,
          category: addCategory,
          imageSource: addImageSource,
          alt: addAlt,
          width: addWidth,
          height: addHeight,
          bodyTitle: addBodyTitle,
          bodyDescription: addBodyDescription,
          blogDate: addBlogDate,
        }),
      });

      if (!res.ok) {
        throw new Error("Blog not created");
      }
      if (res.ok) {
        router.push("/admin/blog");
        router.refresh();
        window.alert("Blog created successfully");

        setBlogAddStatus((prev) => !prev);

        document.getElementById("addBlog").close();
      }
    }
  };

  return (
    <div>
      <div className="w-[98%] mx-auto h-screen overflow-y-auto">
        <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
          Customize All Blogs ⚙👇👇👇
        </h1>
        <div>
          <button
            onClick={() => document.getElementById("addBlog").showModal()}
            className="btn btn-sm bg-green-500 text-white fixed"
          >
            Add Blog
          </button>
        </div>
        {isClient ? (
          <div className="border px-[5px] py-[5px] flex flex-row flex-wrap gap-3 justify-center">
            {myBlogData?.blogData[0]?.article.map((item, index) => (
              <div key={index} className="shadow-xl w-[350px] bg-sky-100">
                <div className=" py-[10px] px-[10px]">
                  <form
                    onSubmit={blogUpdateDelete}
                    className="w-[100%] mx-auto border-2 border-slate-400"
                  >
                    <div className="flex flex-col flex-wrap">
                      <div className="w-[98%] mx-auto">
                        <label
                          for="blogId"
                          className="text-gray-600  font-bold text-xl"
                        >
                          blogId
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="blogId"
                            name="blogId"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={blogId[index]}
                            onChange={(e) => {
                              const updatedBlogId = blogId.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setBlogId(updatedBlogId);
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

                      <div className="flex justify-between py-[10px] px-[10px]">
                        <div>
                          <button
                            onClick={() => {
                              setTargetIndex(index);
                              setAction("update");
                            }}
                            type="btn btn-sm"
                            className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                          >
                            Update
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setTargetIndex(index);
                              setAction("delete");
                            }}
                            type="btn btn-sm"
                            className="btn btn-sm bg-red-500 text-white hover:bg-orange-500 hover: cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
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
      {/* add blog form */}
      <dialog id="addBlog" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Blog</h3>
          <div>
            <form onSubmit={addBlog}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="addBlogId"
                    className="text-gray-600  font-bold"
                  >
                    blogId:
                  </label>
                  <textarea
                    type="text"
                    id="addBlogId"
                    name="addBlogId"
                    placeholder="add Blog Id"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBlogId}
                    onChange={(e) => setAddBlogId(e.target.value)}
                    required={true}
                  />
                </div>

                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="bannerTitle"
                    className="text-gray-600  font-bold"
                  >
                    bannerTitle:
                  </label>
                  <textarea
                    type="text"
                    id="bannerTitle"
                    name="bannerTitle"
                    placeholder="add banner Title"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBannerTitle}
                    onChange={(e) => setAddBannerTitle(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="category"
                    className="text-gray-600  font-bold"
                  >
                    category:
                  </label>

                  <select
                    type="text"
                    id="category"
                    name="category"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[80px] max-h-[100px] border-none text-left bg-slate-600 text-white rounded-md"
                    //value={addCategory}
                    onChange={(e) => setAddCategory(e.target.value)}
                    required={true}
                    defaultValue="ABCDE"
                  >
                    <option value="ABCDE" disabled>
                      Select a category
                    </option>
                    {categoryData[0]?.category.map((item, index) => (
                      <option key={index} value={item.categoryName}>
                        {item.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="imageSource"
                    className="text-gray-600  font-bold"
                  >
                    imageSource:
                  </label>
                  <textarea
                    type="text"
                    id="imageSource"
                    name="imageSource"
                    placeholder="add imageSource"
                    className="w-[98%] h-[50px] min-h-[50px] max-h-[70px] px-[5px] pt-[5px] border-none text-left bg-slate-600 text-white"
                    value={addImageSource}
                    onChange={(e) => setAddImageSource(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label htmlFor="alt" className="text-gray-600  font-bold">
                    alt:
                  </label>
                  <textarea
                    type="text"
                    id="alt"
                    name="alt"
                    placeholder="Add image alt tag"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addAlt}
                    onChange={(e) => setAddAlt(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label htmlFor="width" className="text-gray-600  font-bold">
                    width:
                  </label>
                  <textarea
                    type="text"
                    id="width"
                    name="width"
                    placeholder="Add image width in pixel"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addWidth}
                    onChange={(e) => setAddWidth(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label htmlFor="width" className="text-gray-600  font-bold">
                    height:
                  </label>
                  <textarea
                    type="text"
                    id="height"
                    name="height"
                    placeholder="Add image height in pixel"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addHeight}
                    onChange={(e) => setAddHeight(e.target.value)}
                  />
                </div>

                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="bodyTitle"
                    className="text-gray-600  font-bold"
                  >
                    bodyTitle:
                  </label>
                  <textarea
                    type="text"
                    id="bodyTitle"
                    name="bodyTitle"
                    placeholder="Add body title for blog"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBodyTitle}
                    onChange={(e) => setAddBodyTitle(e.target.value)}
                    required={true}
                  />
                </div>

                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="bodyDescription"
                    className="text-gray-600  font-bold"
                  >
                    bodyDescription:
                  </label>
                  <textarea
                    type="text"
                    id="bodyDescription"
                    name="bodyDescription"
                    placeholder="Add body description for blog"
                    className="w-[98%] px-[5px] pt-[5px] h-[150px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white"
                    value={addBodyDescription}
                    onChange={(e) => setAddBodyDescription(e.target.value)}
                    required={true}
                  />
                </div>

                <div className="w-[98%] mx-auto">
                  <label
                    htmlFor="blogDate"
                    className="text-gray-600  font-bold"
                  >
                    blogDate:
                  </label>
                  <textarea
                    type="text"
                    id="blogDate"
                    name="blogDate"
                    placeholder="Add blog date for blog"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBlogDate}
                    onChange={(e) => setAddBlogDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add Blog
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BlogAdminPage;
