"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section6AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section6_Heading, setHeading] = useState("");
  const [section6_SubHeading, setSubHeading] = useState("");
  const [section6_Title, setTitle] = useState([]);
  const [section6_Description, setDescription] = useState([]);
  const [section6_Image, setImage] = useState([]);
  const [section6_ImgAlt, setImgAlt] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");

  useEffect(() => {
    const getSection6AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setHeading(myJsonData[0]?.section6[0]?.section6_Heading);
      setSubHeading(myJsonData[0]?.section6[0]?.section6_SubHeading);

      setTitle(myJsonData[0]?.section6_6.map((item) => item.section6_Title));
      setDescription(
        myJsonData[0]?.section6_6.map((item) => item.section6_Description)
      );
      setImage(myJsonData[0]?.section6_6.map((item) => item.section6_Image));
      setImgAlt(myJsonData[0]?.section6_6.map((item) => item.section6_ImgAlt));
    };
    getSection6AboutData();
    setIsClient(true);
  }, []);

  const section6Submit1 = async (e) => {
    e.preventDefault();
    // console.log("Clicked section6Submit1 function");
    // console.log("section6_Heading: ", section6_Heading);
    // console.log("section6_SubHeading: ", section6_SubHeading);

    const decision = window.prompt(
      "Type `update 100 on 100` to update or type `cancel` to cancel the operation"
    );

    if (decision === "update 100 on 100") {
      console.log("You choosed to update");
      const id = data[0]?._id;

      const res = await fetch(`http://localhost:3000/api/about/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          section6_Heading,
          section6_SubHeading,
        }),
      });

      if (!res.ok) {
        throw new Error("About data of About page couldn't be updated");
      }
      if (res.ok) {
        router.push("/admin/about");
        router.refresh();
        window.alert("About Model updated successfully");
      }
    } else if (decision === "cancel") {
      console.log("You choosed to cancel the operation");
    } else {
      console.log("Invalid request");
    }
  };

  const section6Submit2 = async (e) => {
    e.preventDefault();
    // console.log("Clicked section6Submit2 function");
    // console.log("section6_Title: ", section6_Title);
    // console.log("section6_Description: ", section6_Description);
    // console.log("section6_Image: ", section6_Image);
    // console.log("section6_ImgAlt: ", section6_ImgAlt);
    // console.log("targetIndex: ", targetIndex);

    const decision = window.prompt(
      "Type `update 100 on 100` to update or type `cancel` to cancel the operation"
    );

    if (decision === "update 100 on 100") {
      console.log("You choosed to update");
      const id = data[0]?._id;

      const res = await fetch(`http://localhost:3000/api/about/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          section6_Title,
          section6_Description,
          section6_Image,
          section6_ImgAlt,
          targetIndex,
          targetSection,
        }),
      });

      if (!res.ok) {
        throw new Error("About data of About page couldn't be updated");
      }
      if (res.ok) {
        router.push("/admin/about");
        router.refresh();
        window.alert("About Model updated successfully");
      }
    } else if (decision === "cancel") {
      console.log("You choosed to cancel the operation");
    } else {
      console.log("Invalid request");
    }
  };

  return (
    <div>
      <h1 className="text-center text-gray-700 text-[20px]">
        Section: Section6
      </h1>
      {isClient ? (
        <div className="w-[98%] mx-auto py-[10px] px-[10px]">
          <form
            onSubmit={section6Submit1}
            className="w-[90%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <div className="w-[80%] mx-auto">
                <label
                  for="section6_Heading"
                  className="text-gray-600  font-bold text-xl"
                >
                  Heading:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="section6_Heading"
                    name="section6_Heading"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[80px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section6_Heading}
                    onChange={(e) => setHeading(e.target.value)}
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

              <div className="w-[80%] mx-auto">
                <label
                  for="section6_SubHeading"
                  className="text-gray-600  font-bold text-xl"
                >
                  SubHeading:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="section6_SubHeading"
                    name="section6_SubHeading"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[80px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section6_SubHeading}
                    onChange={(e) => setSubHeading(e.target.value)}
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
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading</div>
      )}

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {data[0]?.section6_6?.map((item, index) => (
            <div key={index} className="mx-auto border-2 border-slate-400">
              {/* <div className="w-[300px] bg-base-100 shadow-xl">
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section6_Title:
                    <span className="bg-sky-500 rounded-lg text-white text-[14px] px-[10px] text-center inline">
                      {item?.section6_Title}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section6_Description:
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section6_Description}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section6_Image:
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section6_Image}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section6_ImgAlt:
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section6_ImgAlt}
                    </span>
                  </h2>

                  <div className="justify-end">
                    <button className="btn btn-sm bg-green-500">Actions</button>
                  </div>
                </div>
              </div> */}

              <form onSubmit={section6Submit2}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-[90%] mx-auto">
                    <label
                      for="title"
                      className="text-gray-600  font-bold text-xl"
                    >
                      Title
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="title"
                        name="title"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section6_Title[index]}
                        onChange={(e) => {
                          const updatedTitle = section6_Title.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setTitle(updatedTitle);
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

                  <div className="w-[90%] mx-auto">
                    <label
                      for="description"
                      className="text-gray-600  font-bold text-xl"
                    >
                      Description
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section6_Description[index]}
                        onChange={(e) => {
                          const updatedDescription = section6_Description.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setDescription(updatedDescription);
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

                  <div className="w-[90%] mx-auto">
                    <label
                      for="image"
                      className="text-gray-600  font-bold text-xl"
                    >
                      Image
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="image"
                        name="image"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section6_Image[index]}
                        onChange={(e) => {
                          const updatedImage = section6_Image.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setImage(updatedImage);
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
                  <div className="w-[90%] mx-auto">
                    <label
                      for="imgAlt"
                      className="text-gray-600  font-bold text-xl"
                    >
                      ImgAlt
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="imgAlt"
                        name="imgAlt"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section6_ImgAlt[index]}
                        onChange={(e) => {
                          const updatedImgAlt = section6_ImgAlt.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setImgAlt(updatedImgAlt);
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
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetSection("section6_6");
                      }}
                      className="btn bg-[#000080] btn-sm text-white hover:bg-green-500 hover:cursor-pointer"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Section6AboutAdmin;
