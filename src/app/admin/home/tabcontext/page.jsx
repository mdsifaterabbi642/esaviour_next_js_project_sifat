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
  const [graphicsData, setGraphicsData] = useState([]);
  const [modelID, setModelID] = useState("");
  const [targetKey, setTargetkey] = useState("");
  const [targetIndex, setTargetIndex] = useState();
  const [selectedOperation, setSelectedOperation] = useState("");
  const [additionStatus, setAdditionStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  // =========== Temporary state variables starts here for updating data=======================
  const [amaHeading, setAmaHeading] = useState([]);
  const [amaDescription, setAmaDescription] = useState([]);
  const [amaImgSrc, setAmaImgSrc] = useState([]);
  const [amaImgAlt, setAmaImgAlt] = useState([]);

  const [webHeading, setWebHeading] = useState([]);
  const [webDescription, setWebDescription] = useState([]);
  const [webImgSrc, setWebImgSrc] = useState([]);
  const [webImgAlt, setWebImgAlt] = useState([]);

  const [marketingHeading, setMarketingHeading] = useState([]);
  const [marketingDescription, setMarketingDescription] = useState([]);
  const [marketingImgSrc, setMarketingImgSrc] = useState([]);
  const [marketingImgAlt, setMarketingImgAlt] = useState([]);

  const [graphicsHeading, setGraphicsHeading] = useState([]);
  const [graphicsDescription, setGraphicsDescription] = useState([]);
  const [graphicsImgSrc, setGraphicsImgSrc] = useState([]);
  const [graphicsImgAlt, setGraphicsImgAlt] = useState([]);
  // =========== Temporary state variables ended here for updating data========================
  // =========== State variables to add data=======================
  const [addHeading, setAddHeading] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addImgSrc, setAddImgSrc] = useState("");
  const [addImgAlt, setAddImgAlt] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

        //now setting default values in the state variables for form population
        setWebHeading(myWebData.map((item) => item.heading));
        setWebDescription(myWebData.map((item) => item.description));
        setWebImgSrc(myWebData.map((item) => item.imgSrc));
        setWebImgAlt(myWebData.map((item) => item.imgAlt));

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

        //now setting default values in the state variables for form population
        setMarketingHeading(myDigitalMarketingData.map((item) => item.heading));
        setMarketingDescription(
          myDigitalMarketingData.map((item) => item.description)
        );
        setMarketingImgSrc(myDigitalMarketingData.map((item) => item.imgSrc));
        setMarketingImgAlt(myDigitalMarketingData.map((item) => item.imgAlt));

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

        //now setting default values in the state variables for form population
        setGraphicsHeading(myGraphicsData.map((item) => item.heading));
        setGraphicsDescription(myGraphicsData.map((item) => item.description));
        setGraphicsImgSrc(myGraphicsData.map((item) => item.imgSrc));
        setGraphicsImgAlt(myGraphicsData.map((item) => item.imgAlt));
      }
      setIsClient(true);
    };

    fetchData();
  }, [modelID, deleteStatus, additionStatus]);

  //console.log(modelID);
  // console.log(amazonData);
  // console.log(webData);
  // console.log(digitalMarketingData);
  // console.log(graphicsData);
  //console.log(amaHeading[2]);

  const myAmaSubmit = async (e) => {
    e.preventDefault();

    const id = modelID;

    if (selectedOperation === "update") {
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
    }

    if (selectedOperation === "delete") {
      console.log("You prefered delete method");

      const confirm = window.prompt(
        "Type `delete service data` to delete or type `cancel` to cancel the operation"
      );

      if (confirm === "delete service data") {
        const category = targetKey;
        const res = await fetch(
          `http://localhost:3000/api/service/${id}/${category}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              index: targetIndex,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Couldn't delete Service");
        }
        if (res.ok) {
          router.push("/admin/home/tabcontext");
          router.refresh();
          window.alert("Service data deleted");
        }
        setDeleteStatus(true);
      } else if (confirm === "cancel") {
        console.log("Cancelled deletion operation");
      } else {
        console.log("Invalid operation request");
      }
    }
  };

  const myWebSubmit = async (e) => {
    e.preventDefault();

    const id = modelID;

    if (selectedOperation === "update") {
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newHeading: webHeading[targetIndex],
          newDescription: webDescription[targetIndex],
          newImgSrc: webImgSrc[targetIndex],
          newImgAlt: webImgAlt[targetIndex],
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
    }

    if (selectedOperation === "delete") {
      console.log("You prefered delete method");

      const confirm = window.prompt(
        "Type `delete service data` to delete or type `cancel` to cancel the operation"
      );

      if (confirm === "delete service data") {
        const category = targetKey;
        const res = await fetch(
          `http://localhost:3000/api/service/${id}/${category}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              index: targetIndex,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Couldn't delete Service");
        }
        if (res.ok) {
          router.push("/admin/home/tabcontext");
          router.refresh();
          window.alert("Service data deleted");
        }
        setDeleteStatus(true);
      } else if (confirm === "cancel") {
        console.log("Cancelled deletion operation");
      } else {
        console.log("Invalid operation request");
      }
    }
  };

  const myMarketingSubmit = async (e) => {
    e.preventDefault();

    const id = modelID;

    if (selectedOperation === "update") {
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newHeading: marketingHeading[targetIndex],
          newDescription: marketingDescription[targetIndex],
          newImgSrc: marketingImgSrc[targetIndex],
          newImgAlt: marketingImgAlt[targetIndex],
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
    }

    if (selectedOperation === "delete") {
      console.log("You prefered delete method");

      const confirm = window.prompt(
        "Type `delete service data` to delete or type `cancel` to cancel the operation"
      );

      if (confirm === "delete service data") {
        const category = targetKey;
        const res = await fetch(
          `http://localhost:3000/api/service/${id}/${category}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              index: targetIndex,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Couldn't delete Service");
        }
        if (res.ok) {
          router.push("/admin/home/tabcontext");
          router.refresh();
          window.alert("Service data deleted");
        }
        setDeleteStatus(true);
      } else if (confirm === "cancel") {
        console.log("Cancelled deletion operation");
      } else {
        console.log("Invalid operation request");
      }
    }
  };

  const myGraphicsSubmit = async (e) => {
    e.preventDefault();

    const id = modelID;

    if (selectedOperation === "update") {
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newHeading: graphicsHeading[targetIndex],
          newDescription: graphicsDescription[targetIndex],
          newImgSrc: graphicsImgSrc[targetIndex],
          newImgAlt: graphicsImgAlt[targetIndex],
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
    }
    if (selectedOperation === "delete") {
      console.log("You prefered delete method");

      const confirm = window.prompt(
        "Type `delete service data` to delete or type `cancel` to cancel the operation"
      );

      if (confirm === "delete service data") {
        const category = targetKey;
        const res = await fetch(
          `http://localhost:3000/api/service/${id}/${category}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              index: targetIndex,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Couldn't delete Service");
        }
        if (res.ok) {
          router.push("/admin/home/tabcontext");
          router.refresh();
          window.alert("Service data deleted");
        }
        setDeleteStatus(true);
      } else if (confirm === "cancel") {
        console.log("Cancelled deletion operation");
      } else {
        console.log("Invalid operation request");
      }
    }
  };

  const addTabContentService = async (e) => {
    e.preventDefault();

    const id = modelID;
    // console.log("Clicked addTabContentService");
    // console.log("Model Id: ", id);
    // console.log("===Selected Key or category: ", selectedCategory);
    // console.log("addHeading: ", addHeading);
    // console.log("addDescription: ", addDescription);
    // console.log("addImgSrc: ", addImgSrc);
    // console.log("addImgAlt: ", addImgAlt);

    const category = selectedCategory;

    const res = await fetch(
      `http://localhost:3000/api/service/${id}/${category}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          addHeading: addHeading,
          addDescription: addDescription,
          addImgSrc: addImgSrc,
          addImgAlt: addImgAlt,
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Couldn't add service to Service model");
    }
    if (res.ok) {
      router.push("/admin/home/tabcontext");
      router.refresh();
      window.alert("Data added to Service Model");
      document.getElementById("addServiceTabContent").close();
    }
    setAdditionStatus(true);
  };

  return (
    <div className="py-[100px] h-screen overflow-y-auto">
      {/* add tabcontent service form */}
      <dialog
        id="addServiceTabContent"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Service Tab contents</h3>
          <div>
            <form onSubmit={addTabContentService}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="category" className="text-gray-600  font-bold">
                    Select Category:
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="pl-[50px] ml-[10px] bg-[#475569] text-white"
                    value={
                      selectedCategory
                        ? selectedCategory
                        : setSelectedCategory("amazonFBA")
                    }
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="amazonFBA">Amazon FBA</option>
                    <option value="digitalMarketing">digital Marketing</option>
                    <option value="graphicsDesign">Graphics Design</option>
                    <option value="webDevelopment">Web Development</option>
                  </select>
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="heading" className="text-gray-600  font-bold">
                    Heading:
                  </label>
                  <textarea
                    type="text"
                    id="heading"
                    name="heading"
                    placeholder="Service heading"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addHeading}
                    onChange={(e) => setAddHeading(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="paragraph" className="text-gray-600  font-bold">
                    Description:
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Service details"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addDescription}
                    onChange={(e) => setAddDescription(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="image" className="text-gray-600  font-bold">
                    Image Source:
                  </label>
                  <textarea
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Add image link"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addImgSrc}
                    onChange={(e) => setAddImgSrc(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="image" className="text-gray-600  font-bold">
                    Image Alt:
                  </label>
                  <textarea
                    type="text"
                    id="imageAlt"
                    name="imageAlt"
                    placeholder="Add image alter tag"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addImgAlt}
                    onChange={(e) => setAddImgAlt(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add Service
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
      <div>
        <button
          onClick={() => {
            document.getElementById("addServiceTabContent").showModal();
          }}
          className="btn btn-sm bg-green-500 fixed right-[5%] top-[5%]"
        >
          Add Service
        </button>
      </div>

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {amazonData?.map((amaItem, index) => (
            <div key={index}>
              <form
                onSubmit={myAmaSubmit}
                className="border-2 border-slate-400"
              >
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
                        className="w-[98%] px-[5px] pt-[5px] text-left min-h-[200px] max-h-[300px] text-[12px] border-none bg-slate-600 text-white"
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

                  <div className="w-[98%] mx-auto my-[20px] hover:cursor-pointer flex justify-between px-[10px]">
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(amaItem?.category);
                        setSelectedOperation("update");
                      }}
                      className="btn bg-[#000080] btn-sm text-white hover:bg-green-500 hover:cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(amaItem?.category);
                        setSelectedOperation("delete");
                      }}
                      className="btn bg-red-500 btn-sm text-white hover:bg-red-700 hover:cursor-pointer"
                    >
                      Delete
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
              <form
                onSubmit={myWebSubmit}
                className="border-2 border-slate-400"
              >
                <div className="flex flex-col flex-wrap">
                  <div className="badge badge-accent rounded-none h-[30px] ml-[5px] mt-[5px]">
                    {webItem?.category}
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
                        value={webHeading[index]}
                        onChange={(e) => {
                          const updatedHeading = webHeading.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setWebHeading(updatedHeading);
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
                        className="w-[98%] px-[5px] pt-[5px] text-left min-h-[200px] max-h-[300px] text-[12px] border-none bg-slate-600 text-white"
                        value={webDescription[index]}
                        onChange={(e) => {
                          const updatedDescription = webDescription.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setWebDescription(updatedDescription);
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
                        value={webImgSrc[index]}
                        onChange={(e) => {
                          const updatedImgSrc = webImgSrc.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setWebImgSrc(updatedImgSrc);
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
                        value={webImgAlt[index]}
                        onChange={(e) => {
                          const updatedImgAlt = webImgAlt.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setWebImgAlt(updatedImgAlt);
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

                  <div className="w-[98%] mx-auto my-[20px] hover:cursor-pointer flex justify-between px-[10px]">
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(webItem?.category);
                        setSelectedOperation("update");
                      }}
                      className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(webItem?.category);
                        setSelectedOperation("delete");
                      }}
                      className="btn bg-red-500 btn-sm text-white hover:bg-red-700 hover:cursor-pointer"
                    >
                      Delete
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
          {digitalMarketingData?.map((marketingItem, index) => (
            <div key={index}>
              <form
                onSubmit={myMarketingSubmit}
                className="border-2 border-slate-400"
              >
                <div className="flex flex-col flex-wrap">
                  <div className="badge badge-accent rounded-none h-[30px] ml-[5px] mt-[5px]">
                    {marketingItem?.category}
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
                        value={marketingHeading[index]}
                        onChange={(e) => {
                          const updatedHeading = marketingHeading.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setMarketingHeading(updatedHeading);
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
                        className="w-[98%] px-[5px] pt-[5px] text-left min-h-[200px] max-h-[300px] text-[12px] border-none bg-slate-600 text-white"
                        value={marketingDescription[index]}
                        onChange={(e) => {
                          const updatedDescription = marketingDescription.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setMarketingDescription(updatedDescription);
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
                        value={marketingImgSrc[index]}
                        onChange={(e) => {
                          const updatedImgSrc = marketingImgSrc.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setMarketingImgSrc(updatedImgSrc);
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
                        value={marketingImgAlt[index]}
                        onChange={(e) => {
                          const updatedImgAlt = marketingImgAlt.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setMarketingImgAlt(updatedImgAlt);
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

                  <div className="w-[98%] mx-auto my-[20px] text-center hover:cursor-pointer flex justify-between px-[10px]">
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(marketingItem?.category);
                        setSelectedOperation("update");
                      }}
                      className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(marketingItem?.category);
                        setSelectedOperation("delete");
                      }}
                      className="btn bg-red-500 btn-sm text-white hover:bg-red-700 hover:cursor-pointer"
                    >
                      Delete
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
          {graphicsData?.map((graphicsItem, index) => (
            <div key={index}>
              <form
                onSubmit={myGraphicsSubmit}
                className="border-2 border-slate-400"
              >
                <div className="flex flex-col flex-wrap">
                  <div className="badge badge-accent rounded-none h-[30px] ml-[5px] mt-[5px]">
                    {graphicsItem?.category}
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
                        value={graphicsHeading[index]}
                        onChange={(e) => {
                          const updatedHeading = graphicsHeading.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setGraphicsHeading(updatedHeading);
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
                        className="w-[98%] px-[5px] pt-[5px] text-left min-h-[200px] max-h-[300px] text-[12px] border-none bg-slate-600 text-white"
                        value={graphicsDescription[index]}
                        onChange={(e) => {
                          const updatedDescription = graphicsDescription.map(
                            (item, i) => (i === index ? e.target.value : item)
                          );
                          setGraphicsDescription(updatedDescription);
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
                        value={graphicsImgSrc[index]}
                        onChange={(e) => {
                          const updatedImgSrc = graphicsImgSrc.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setGraphicsImgSrc(updatedImgSrc);
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
                        value={graphicsImgAlt[index]}
                        onChange={(e) => {
                          const updatedImgAlt = graphicsImgAlt.map((item, i) =>
                            i === index ? e.target.value : item
                          );
                          setGraphicsImgAlt(updatedImgAlt);
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

                  <div className="w-[98%] mx-auto my-[20px] text-center hover:cursor-pointer flex justify-between px-[10px]">
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(graphicsItem?.category);
                        setSelectedOperation("update");
                      }}
                      className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setTargetIndex(index);
                        setTargetkey(graphicsItem?.category);
                        setSelectedOperation("delete");
                      }}
                      className="btn bg-red-500 btn-sm text-white hover:bg-red-700 hover:cursor-pointer"
                    >
                      Delete
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
    </div>
  );
};

export default HomeTabContentAdmin;
