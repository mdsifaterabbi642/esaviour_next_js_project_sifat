"use client";

import { model } from "mongoose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeTabContentAdmin = () => {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [amazonData, setAmazonData] = useState([]);
  const [webData, setWebData] = useState([]);
  const [digitalMarketingData, setDigitalmarketingData] = useState([]);
  const [graphicsData, setGraphicsData] = useState();
  const [modelID, setModelID] = useState("");
  const [targetKey, setTargetkey] = useState("");
  const [targetIndex, setTargetIndex] = useState();
  // =========== Temporary state variables starts here for holding data=======================
  const [amaHeading, setAmaHeading] = useState([]);
  const [amaDescription, setAmaDescription] = useState([]);
  const [amaImgSrc, setAmaImgSrc] = useState([]);
  const [amaImgAlt, setAmaImgAlt] = useState([]);
  // =========== Temporary state variables ended here for holding data========================

  useEffect(() => {
    const fetchID = async () => {
      // fetch _id from database

      const resID = await fetch("http://localhost:3000/api/service", {
        cache: "no-store",
      });

      if (!resID.ok) {
        throw new Error("Failed to fetch data");
      }

      const myModelID = await resID.json();
      setModelID(myModelID[0]?._id);
    };
    fetchID();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch amazonFBA data
      if (modelID) {
        const amazonResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/amazonFBA`,
          {
            cache: "no-store",
          }
        );
        if (!amazonResponse.ok) {
          throw new Error("Failed to fetch amazon data data");
        }

        const myAmazonData = await amazonResponse.json();
        setAmazonData(myAmazonData);

        //now setting default values in the state variables for form population
        setAmaHeading(myAmazonData.map((item) => item.heading));
        setAmaDescription(myAmazonData.map((item) => item.description));
        setAmaImgSrc(myAmazonData.map((item) => item.imgSrc));
        setAmaImgAlt(myAmazonData.map((item) => item.imgAlt));

        //fetching webDevelopment data
        const webResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/webDevelopment`,
          {
            cache: "no-store",
          }
        );
        if (!webResponse.ok) {
          throw new Error("Failed to fetch web data");
        }

        const myWebData = await webResponse.json();
        setWebData(myWebData);

        //fetching digitalmarketing data
        const marketingResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/digitalMarketing`,
          {
            cache: "no-store",
          }
        );
        if (!marketingResponse.ok) {
          throw new Error("Failed to fetch marketing data");
        }

        const myDigitalMarketingData = await marketingResponse.json();
        setDigitalmarketingData(myDigitalMarketingData);

        //fetching graphicsDesign data
        const graphicsResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/graphicsDesign`,
          {
            cache: "no-store",
          }
        );
        if (!graphicsResponse.ok) {
          throw new Error("Failed to fetch graphics data");
        }

        const myGraphicsData = await graphicsResponse.json();
        setGraphicsData(myGraphicsData);
      }
      setIsClient(true);
    };

    fetchData();
  }, [modelID]);

  //console.log(modelID);
  // console.log(amazonData);
  // console.log(webData);
  // console.log(digitalMarketingData);
  // console.log(graphicsData);
  //console.log(amaHeading[2]);

  const mySubmit = async (e) => {
    e.preventDefault();
    // console.log("Selected Key: ", targetKey, "Data Type: ", typeof targetKey);
    // console.log(
    //   "Selected Index: ",
    //   targetIndex,
    //   "Data Type: ",
    //   typeof targetIndex
    // );
    // console.log("Updated Heading: ", amaHeading[targetIndex]);
    // console.log("Model id: ", modelID);

    const id = modelID;

    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newHeading: amaHeading[targetIndex],
        newDescription: amaDescription[targetIndex],
        newImgSrc: amaImgSrc[targetIndex],
        newImgAlt: amaImgAlt[targetIndex],
        category: targetKey,
        index: targetIndex,
      }),
    });

    if (!res.ok) {
      throw new Error("Service model could not be updated");
    }
    if (res.ok) {
      router.push("/admin/home/tabcontext");
      router.refresh();
      window.alert("Service model updated successfully");
    }
  };

  return (
    <div className="py-[100px] h-screen overflow-y-auto">
      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {amazonData?.map((amaItem, index) => (
            <div key={index}>
              <form onSubmit={mySubmit} className="border-2 border-slate-400">
                <div className="flex flex-col flex-wrap">
                  <div className="badge badge-accent rounded-none h-[30px] ml-[5px] mt-[5px]">
                    {amaItem?.category}
                  </div>
                  <div className="w-[98%] mx-auto">
                    <label for="username" className="text-gray-600  font-bold">
                      Heading:
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="heading"
                        name="heading"
                        className="w-[98%] px-[5px] pt-[5px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                        value={amaHeading[index]}
                        onChange={(e) => {
                          const updatedHeading = amaHeading.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setAmaHeading(updatedHeading);
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
                    <label for="username" className="text-gray-600  font-bold">
                      Description:
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="w-[98%] px-[5px] pt-[5px] text-left max-h-[300px] text-[12px] border-none bg-slate-600 text-white"
                        value={amaDescription[index]}
                        onChange={(e) => {
                          const updatedDescription = amaDescription.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setAmaDescription(updatedDescription);
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
                    <label for="username" className="text-gray-600 font-bold">
                      Image Source:
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="imgSrc"
                        name="imgSrc"
                        className="w-[98%] px-[5px] pt-[5px] text-left max-h-[100px] text-[12px] border-none bg-slate-600 text-white"
                        value={amaImgSrc[index]}
                        onChange={(e) => {
                          const updatedImgSrc = amaImgSrc.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setAmaImgSrc(updatedImgSrc);
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
                    <label for="username" className="text-gray-600 font-bold">
                      Image Alt:
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="imgAlt"
                        name="imgAlt"
                        className="w-[98%] px-[5px] pt-[5px] text-left max-h-[100px] text-[12px] border-none bg-slate-600 text-white"
                        value={amaImgAlt[index]}
                        onChange={(e) => {
                          const updatedImgAlt = amaImgAlt.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setAmaImgAlt(updatedImgAlt);
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
                        setTargetkey(amaItem?.category);
                      }}
                      className="btn bg-purple-500 text-white hover: cursor-pointer"
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {webData?.map((webItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-accent">{webItem?.category}</div>
                <div className="card-body">
                  <h2 className="card-title">{webItem?.heading}</h2>
                  <h3>{webItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn bg-sky-500">Update</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {digitalMarketingData?.map((marketingItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-info">
                  {marketingItem?.category}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{marketingItem?.heading}</h2>
                  <h3>{marketingItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn bg-sky-500">Update</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {graphicsData?.map((graphicsItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-warning">
                  {graphicsItem?.category}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{graphicsItem?.heading}</h2>
                  <h3>{graphicsItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn bg-sky-500">Update</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default HomeTabContentAdmin;
