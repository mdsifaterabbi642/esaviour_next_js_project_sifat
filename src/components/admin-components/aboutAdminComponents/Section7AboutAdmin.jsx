"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section7AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section7_Title, setTitle] = useState("");
  const [section7_SubTitle, setSubtitle] = useState("");
  const [section7_Name, setName] = useState([]);
  const [section7_Designation, setDesignation] = useState([]);
  const [section7_Description, setDescription] = useState([]);
  const [section7_ImgSource, setImgSource] = useState([]);
  const [section7_ImgAlt, setImgAlt] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");

  useEffect(() => {
    const getSection7AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setTitle(myJsonData[0]?.section7[0]?.section7_Title);
      setSubtitle(myJsonData[0]?.section7[0]?.section7_SubTitle);
      setName(myJsonData[0]?.section7_7.map((item) => item.section7_Name));
      setDesignation(
        myJsonData[0]?.section7_7.map((item) => item.section7_Designation)
      );
      setDescription(
        myJsonData[0]?.section7_7.map((item) => item.section7_Description)
      );
      setImgSource(
        myJsonData[0]?.section7_7.map((item) => item.section7_ImgSource)
      );
      setImgAlt(myJsonData[0]?.section7_7.map((item) => item.section7_ImgAlt));
    };
    getSection7AboutData();
    setIsClient(true);
  }, []);

  const section7Submit1 = async (e) => {
    e.preventDefault();

    // console.log("Clicked section7Submit1 function");
    // console.log("section7_Title: ", section7_Title);
    // console.log("section7_SubTitle: ", section7_SubTitle);

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
          section7_Title,
          section7_SubTitle,
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

  const section7Submit2 = async (e) => {
    e.preventDefault();
    // console.log("You clicked section7Submit2 function.");
    // console.log("section7_Name: ", section7_Name);
    // console.log("section7_Designation: ", section7_Designation);
    // console.log("section7_Description: ", section7_Description);
    // console.log("section7_ImgSource: ", section7_ImgSource);
    // console.log("section7_ImgAlt: ", section7_ImgAlt);
    // console.log("targetIndex: ", targetIndex);
    //console.log("targetSection: ", targetSection);

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
          section7_Name,
          section7_Designation,
          section7_Description,
          section7_ImgSource,
          section7_ImgAlt,
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
      <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
        Section: Section7 ⚙👇👇👇
      </h1>
      {isClient ? (
        <div className="w-[98%] mx-auto py-[10px] px-[10px]">
          <form
            onSubmit={section7Submit1}
            className="w-[90%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <div className="w-[80%] mx-auto">
                <label
                  for="section6_Heading"
                  className="text-gray-600  font-bold text-xl"
                >
                  Title:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="section6_Heading"
                    name="section6_Heading"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[80px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section7_Title}
                    onChange={(e) => setTitle(e.target.value)}
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
                  SubTitle:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="section6_SubHeading"
                    name="section6_SubHeading"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[80px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section7_SubTitle}
                    onChange={(e) => setSubtitle(e.target.value)}
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
        <div className="flex flex-wrap flex-row gap-2">
          {data[0]?.section7_7?.map((item, index) => (
            <div
              key={index}
              className="mx-auto w-[40%] border-2 border-slate-400"
            >
              {/* <div className="w-[300px] bg-base-100 shadow-xl">
                <div className="py-[10px] px-[10px] w-[50%] h-[50%]">
                  <Image
                    src={item?.section7_ImgSource}
                    alt={item?.section7_ImgAlt}
                    width={300}
                    height={200}
                  />
                </div>
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section7_Name:
                    <span className="bg-sky-500 rounded-lg text-white text-[14px] px-[10px] text-center inline">
                      {item?.section7_Name}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_Designation:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_Designation}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_Description:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_Description}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_ImgSource:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_ImgSource}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_ImgAlt:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_ImgAlt}
                    </span>
                  </h2>

                  <div className="justify-end">
                    <button className="btn btn-sm bg-green-500">Actions</button>
                  </div>
                </div>
              </div> */}
              <form onSubmit={section7Submit2}>
                <div className="flex flex-row flex-wrap">
                  <div className="w-[90%] mx-auto">
                    <label
                      for="section7_Name"
                      className="text-gray-600  font-bold text-xl"
                    >
                      Name
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="section7_Name"
                        name="section7_Name"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section7_Name[index]}
                        onChange={(e) => {
                          const updatedName = section7_Name.map((item, i) =>
                            index === i ? e.target.value : item
                          );

                          setName(updatedName);
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
                      for="section7_Designation"
                      className="text-gray-600  font-bold text-xl"
                    >
                      Designation
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="section7_Designation"
                        name="section7_Designation"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section7_Designation[index]}
                        onChange={(e) => {
                          const updatedDesignation = section7_Designation.map(
                            (item, i) => (index === i ? e.target.value : item)
                          );

                          setDesignation(updatedDesignation);
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
                      for="section7_Description"
                      className="text-gray-600  font-bold text-xl"
                    >
                      Description
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="section7_Description"
                        name="section7_Description"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section7_Description[index]}
                        onChange={(e) => {
                          const updatedDescription = section7_Description.map(
                            (item, i) => (index === i ? e.target.value : item)
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
                      for="section7_ImgSource"
                      className="text-gray-600  font-bold text-xl"
                    >
                      ImgSource
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="section7_ImgSource"
                        name="section7_ImgSource"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section7_ImgSource[index]}
                        onChange={(e) => {
                          const updatedImgSource = section7_ImgSource.map(
                            (item, i) => (index === i ? e.target.value : item)
                          );

                          setImgSource(updatedImgSource);
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
                      for="section7_ImgAlt"
                      className="text-gray-600  font-bold text-xl"
                    >
                      ImgAlt
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="section7_ImgAlt"
                        name="section7_ImgAlt"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={section7_ImgAlt[index]}
                        onChange={(e) => {
                          const updatedImgAlt = section7_ImgAlt.map((item, i) =>
                            index === i ? e.target.value : item
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
                        setTargetSection("section7_7");
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

export default Section7AboutAdmin;
