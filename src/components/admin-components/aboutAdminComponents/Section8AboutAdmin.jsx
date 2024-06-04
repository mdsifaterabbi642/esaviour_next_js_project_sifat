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
  const [additionStatus, setAdditionStatus] = useState("false");
  const [deletionStatus, setDeletionStatus] = useState("falce");
  const [modelID, setModelID] = useState("");
  const [action, setAction] = useState("");
  // =====adding employee state variables
  const [employeeName, setEmployeeName] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [employeeImgSrc, setEmployeeImgSrc] = useState("");
  const [employeeImgAlt, setEmployeeImgAlt] = useState("");

  useEffect(() => {
    const getSection8AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      setModelID(myJsonData[0]?._id);

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

  useEffect(() => {
    const getSection8AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      setModelID(myJsonData[0]?._id);

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
  }, [additionStatus, deletionStatus]);

  const submitSection8 = async (e) => {
    e.preventDefault();
    // console.log("Clicked submitSection8");
    // console.log("section8_Name: ", section8_Name[targetIndex]);
    // console.log("section8_Designation: ", section8_Designation[targetIndex]);
    // console.log("section8_ImgSource: ", section8_ImgSource[targetIndex]);
    // console.log("section8_ImgAlt: ", section8_ImgAlt[targetIndex]);
    if (action === "update") {
      const decision = window.prompt(
        "Type `update 100 on 100` to update or type `cancel` to cancel the operation"
      );

      if (decision === "update 100 on 100") {
        console.log("You choosed to update");
        const id = data[0]?._id;

        const apiUrl = process.env.NEXT_PUBLIC_ABOUT_UPDATE + id;

        const res = await fetch(apiUrl, {
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
    }

    if (action === "delete") {
      const decision = window.prompt(
        "Type `delete 100 on 100` to update or type `cancel` to cancel the operation"
      );

      if (decision === "delete 100 on 100") {
        console.log("You choosed to delete");
        const id = data[0]?._id;

        const apiUrl = process.env.NEXT_PUBLIC_ABOUT_EMPLOYEE + id;

        const res = await fetch(apiUrl, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            targetIndex: targetIndex,
            targetSection: targetSection,
          }),
        });

        if (!res.ok) {
          throw new Error("About data of About page couldn't be deleted");
        }
        if (res.ok) {
          router.push("/admin/about");
          router.refresh();
          window.alert("Employee of about data deleted successfully");
        }
        setDeletionStatus(true);
      } else if (decision === "cancel") {
        console.log("You choosed to cancel the operation");
      } else {
        console.log("Invalid request");
      }
    }
  };

  const addEmployee = async (e) => {
    try {
      e.preventDefault();
      console.log("Clicked addEmployee");
      console.log("employeeName: ", employeeName);
      console.log("employeeDesignation: ", employeeDesignation);
      console.log("employeeImgSrc: ", employeeImgSrc);
      console.log("employeeImgAlt: ", employeeImgAlt);

      const id = modelID;

      const apiUrl = process.env.NEXT_PUBLIC_ABOUT_EMPLOYEE + id;

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          employeeName: employeeName,
          employeeDesignation: employeeDesignation,
          employeeImgSrc: employeeImgSrc,
          employeeImgAlt: employeeImgAlt,
        }),
      });

      if (!res.ok) {
        throw new Error("Couldn't add Employee to About model");
      }
      if (res.ok) {
        router.push("/admin/about");
        router.refresh();
        window.alert("Employee added to About Model");
        document.getElementById("addItemsSection8").close();
      }
      setAdditionStatus(true);
    } catch (error) {
      console.log(
        "Error occurred in addEmployee function in section 8 of about page admin panel"
      );
    }
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
        Section: Section8 ⚙👇👇👇
      </h1>

      {/* add items in section8 form */}
      <dialog
        id="addItemsSection8"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add employee: Section8</h3>
          <div>
            <form onSubmit={addEmployee}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label
                    for="section8_Name"
                    className="text-gray-600  font-bold"
                  >
                    Name:
                  </label>
                  <textarea
                    type="text"
                    id="section8_Name"
                    name="section8_Name"
                    placeholder="section8_Name"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="section8_Designation"
                    className="text-gray-600  font-bold"
                  >
                    Designation:
                  </label>
                  <textarea
                    type="text"
                    id="section8_Designation"
                    name="section8_Designation"
                    placeholder="section8_Designation"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={employeeDesignation}
                    onChange={(e) => setEmployeeDesignation(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="section8_ImgSource"
                    className="text-gray-600  font-bold"
                  >
                    Image Source:
                  </label>
                  <textarea
                    type="text"
                    id="section8_ImgSource"
                    name="section8_ImgSource"
                    placeholder="section8_ImgSource"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={employeeImgSrc}
                    onChange={(e) => setEmployeeImgSrc(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="
                    section8_ImgAlt"
                    className="text-gray-600  font-bold"
                  >
                    Image Alter Tag:
                  </label>
                  <textarea
                    type="text"
                    id="section8_ImgAlt"
                    name="section8_ImgAlt"
                    placeholder="section8_ImgAlt"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={employeeImgAlt}
                    onChange={(e) => setEmployeeImgAlt(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add Item
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
          onClick={() =>
            document.getElementById("addItemsSection8").showModal()
          }
          className="btn btn-sm my-[20px] bg-green-500 text-white relative left-[85%]"
        >
          Add Employee
        </button>
      </div>

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2">
          {data[0]?.section8?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
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

                    <div className="flex justify-between px-[15px] py-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setTargetSection("section8");
                            setAction("update");
                          }}
                          className="btn bg-[#000080] btn-sm text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setTargetSection("section8");
                            setAction("delete");
                          }}
                          className="btn bg-red-500 btn-sm text-white hover:bg-red-700 hover:cursor-pointer"
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
  );
};

export default Section8AboutAdmin;
