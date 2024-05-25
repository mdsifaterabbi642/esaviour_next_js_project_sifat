"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section8AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section8_Name, setName] = useState([]);
  const [section8_Designation, setDesignation] = useState([]);
  const [section8_ImgSource, setImgSource] = useState([]);
  const [section8_ImgAlt, setImgAlt] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");

  useEffect(() => {
    const getSection8AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setName(myJsonData[0]?.section8?.map((item) => item.section8_Name));
      setDesignation(
        myJsonData[0]?.section8?.map((item) => item.section8_Designation)
      );
      setImgSource(
        myJsonData[0]?.section8?.map((item) => item.section8_ImgSource)
      );
      setImgAlt(myJsonData[0]?.section8?.map((item) => item.section8_ImgAlt));
    };
    getSection8AboutData();
    setIsClient(true);
  }, []);

  const submitSection8 = async (e) => {
    e.preventDefault();
    // console.log("Clicked submitSection8");
    // console.log("section8_Name: ", section8_Name[targetIndex]);
    // console.log("section8_Designation: ", section8_Designation[targetIndex]);
    // console.log("section8_ImgSource: ", section8_ImgSource[targetIndex]);
    // console.log("section8_ImgAlt: ", section8_ImgAlt[targetIndex]);

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
          section8_Name,
          section8_Designation,
          section8_ImgSource,
          section8_ImgAlt,
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
        Section: Section8 ⚙👇👇👇
      </h1>

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2">
          {data[0]?.section8?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                {/* <div className="py-[10px] px-[10px] w-[50%] h-[50%]">
                  <Image
                    src={item?.section8_ImgSource}
                    alt={item?.section8_ImgAlt}
                    width={300}
                    height={200}
                  />
                </div>
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section8_Name:
                    <span className="bg-sky-500 rounded-lg text-white text-[14px] px-[10px] text-center inline">
                      {item?.section8_Name}
                    </span>
                  </h2>
                  <h2 className="">
                    section8_Designation:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section8_Designation}
                    </span>
                  </h2>
                  <h2 className="">
                    section8_ImgSource:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section8_ImgSource}
                    </span>
                  </h2>
                  <h2 className="">
                    section8_ImgAlt:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section8_ImgAlt}
                    </span>
                  </h2>

                  <div className="justify-end">
                    <button className="btn btn-sm bg-green-500">Actions</button>
                  </div>
                </div> */}
                <form
                  onSubmit={submitSection8}
                  className="w-[90%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[80%] mx-auto">
                      <label
                        for="name"
                        className="text-gray-600  font-bold text-xl"
                      >
                        section8_Name
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="name"
                          name="name"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section8_Name[index]}
                          onChange={(e) => {
                            const updatedName = section8_Name.map((item, i) =>
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

                    <div className="w-[80%] mx-auto">
                      <label
                        for="designation"
                        className="text-gray-600  font-bold text-xl"
                      >
                        section8_Designation:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="designation"
                          name="designation"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section8_Designation[index]}
                          onChange={(e) => {
                            const updatedDesignation = section8_Designation.map(
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

                    <div className="w-[80%] mx-auto">
                      <label
                        for="ImgSource"
                        className="text-gray-600  font-bold text-xl"
                      >
                        section8_ImgSource:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="ImgSource"
                          name="ImgSource"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section8_ImgSource[index]}
                          onChange={(e) => {
                            const updatedImgSource = section8_ImgSource.map(
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

                    <div className="w-[80%] mx-auto">
                      <label
                        for="ImgAlt"
                        className="text-gray-600  font-bold text-xl"
                      >
                        section8_ImgAlt:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="ImgAlt"
                          name="ImgAlt"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section8_ImgAlt[index]}
                          onChange={(e) => {
                            const updatedImgAlt = section8_ImgAlt.map(
                              (item, i) => (index === i ? e.target.value : item)
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
                          setTargetSection("section8");
                        }}
                        className="btn bg-[#000080] btn-sm text-white hover:bg-green-500 hover:cursor-pointer"
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
  );
};

export default Section8AboutAdmin;
