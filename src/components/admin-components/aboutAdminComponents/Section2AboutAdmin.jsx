"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section2AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [section2_Title, setSection2Title] = useState("");
  const [section2_Subtitle, setSection2Subtitle] = useState("");
  const [section2_Heading, setSection2Heading] = useState([]);
  const [section2_ImgSource, setSection2ImgSource] = useState([]);
  const [section2_ImgAlt, setSection2ImgAlt] = useState([]);
  const [modelID, setModelID] = useState("");
  const [additionStatus, setAdditionStatus] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  // ========== state variables for adding data in section2 through modal dialogue form
  const [addHeading, setHeading] = useState("");
  const [addImgSource, setImgSource] = useState("");
  const [addImgAlt, setImgAlt] = useState("");

  useEffect(() => {
    const getSection2AboutData = async () => {
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
      setSection2Title(myJsonData[0]?.section2[0]?.section2_Title);
      setSection2Subtitle(myJsonData[0]?.section2[0]?.section2_Subtitle);
      setSection2Heading(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_Heading)
      );
      setSection2ImgSource(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgSource)
      );
      setSection2ImgAlt(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgAlt)
      );
    };
    getSection2AboutData();
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getSection2AboutData = async () => {
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
      setSection2Title(myJsonData[0]?.section2[0]?.section2_Title);
      setSection2Subtitle(myJsonData[0]?.section2[0]?.section2_Subtitle);
      setSection2Heading(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_Heading)
      );
      setSection2ImgSource(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgSource)
      );
      setSection2ImgAlt(
        myJsonData[0]?.section2_2.map((item, index) => item.section2_ImgAlt)
      );
    };
    getSection2AboutData();
    setIsClient(true);
  }, [additionStatus, deletionStatus]);

  const section2Submit1 = async (e) => {
    e.preventDefault();
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
          section2_Title,
          section2_Subtitle,
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

  const section2UpdateDelete = async (e) => {
    e.preventDefault();
    //console.log("targetIndex: ", targetIndex);
    //console.log("targetSection: ", targetSection);

    if (selectedAction === "update") {
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
            targetIndex,
            targetSection,
            section2_Heading,
            section2_ImgSource,
            section2_ImgAlt,
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
        console.log("You chose to cancel the operation");
      } else {
        console.log("Invalid request");
      }
    }

    if (selectedAction === "delete") {
      const decision = window.prompt(
        "Type `delete 100 on 100` to delete or type `cancel` to cancel the operation"
      );
      if (decision === "delete 100 on 100") {
        console.log("You prefer delete");
        const id = data[0]?._id;

        const apiUrl = process.env.NEXT_PUBLIC_ABOUT_UPDATE + id;

        const res = await fetch(apiUrl, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            targetIndex,
          }),
        });

        if (!res.ok) {
          throw new Error("About data of section2_2 couldn't be Deleted");
        }
        if (res.ok) {
          router.push("/admin/about");
          router.refresh();
          window.alert("About data deleted successfully");
        }
        setDeletionStatus(true);
      } else if (decision === "cancel") {
        console.log("You chose to cancel the operation");
      } else {
        console.log("Invalid request");
      }
    }
  };

  const addItemsSection2 = async (e) => {
    e.preventDefault();
    const id = modelID;
    // console.log("Clicked addItemsSection2");
    // console.log("modelID: ", id);
    // console.log("addHeading: ", addHeading);
    // console.log("addImgSource: ", addImgSource);
    // console.log("addImgAlt: ", addImgAlt);

    const apiUrl = process.env.NEXT_PUBLIC_ABOUT_UPDATE + id;

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        addHeading: addHeading,
        addImgSource: addImgSource,
        addImgAlt: addImgAlt,
      }),
    });

    if (!res.ok) {
      throw new Error("Couldn't add Item to About model");
    }
    if (res.ok) {
      router.push("/admin/about");
      router.refresh();
      window.alert("Data added to About Model");
      document.getElementById("addItemsSection2").close();
    }
    setAdditionStatus(true);
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
        Section: Section2 ⚙👇👇👇
      </h1>

      {/* add items in section2 service form */}
      <dialog
        id="addItemsSection2"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Items: Section2</h3>
          <div>
            <form onSubmit={addItemsSection2}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="heading" className="text-gray-600  font-bold">
                    Heading:
                  </label>
                  <textarea
                    type="text"
                    id="section2_Heading"
                    name="section2_Heading"
                    placeholder="ection2_Heading"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addHeading}
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="paragraph" className="text-gray-600  font-bold">
                    ImgSource:
                  </label>
                  <textarea
                    type="text"
                    id="section2_ImgSource"
                    name="section2_ImgSource"
                    placeholder="section2_ImgSource"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addImgSource}
                    onChange={(e) => setImgSource(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="section2_ImgAlt"
                    className="text-gray-600  font-bold"
                  >
                    ImgAlt:
                  </label>
                  <textarea
                    type="text"
                    id="section2_ImgAlt"
                    name="section2_ImgAlt"
                    placeholder="section2_ImgAlt"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addImgAlt}
                    onChange={(e) => setImgAlt(e.target.value)}
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

      {isClient ? (
        <div className="w-[90%] mx-auto">
          <form
            onSubmit={section2Submit1}
            className="w-[90%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <div className="w-[80%] mx-auto">
                <label
                  for="username"
                  className="text-gray-600  font-bold text-xl"
                >
                  Title:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="title"
                    name="title"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section2_Title}
                    onChange={(e) => setSection2Title(e.target.value)}
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
                  for="username"
                  className="text-gray-600  font-bold text-xl"
                >
                  Subtitle:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section2_Subtitle}
                    onChange={(e) => setSection2Subtitle(e.target.value)}
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
                <div>
                  <button className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover:cursor-pointer">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading</div>
      )}

      <div className="relative left-[90%] top-0">
        <button
          onClick={() => {
            document.getElementById("addItemsSection2").showModal();
          }}
          className="btn btn-sm bg-green-400 text-black"
        >
          Add
        </button>
      </div>

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {data[0]?.section2_2?.map((item, index) => (
            <div key={index}>
              <div className="w-[90%] mx-auto">
                <form
                  onSubmit={section2UpdateDelete}
                  className="w-[90%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[80%] mx-auto">
                      <label
                        for="Heading"
                        className="text-gray-600  font-bold text-xl"
                      >
                        Heading:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="Heading"
                          name="Heading"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section2_Heading[index]}
                          onChange={(e) => {
                            const updatedHeading = section2_Heading.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setSection2Heading(updatedHeading);
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
                        ImgSource:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="ImgSource"
                          name="ImgSource"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section2_ImgSource[index]}
                          onChange={(e) => {
                            const updatedImgSource = section2_ImgSource.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setSection2ImgSource(updatedImgSource);
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
                        ImgAlt:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="ImgSource"
                          name="ImgSource"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section2_ImgAlt[index]}
                          onChange={(e) => {
                            const updatedImgAlt = section2_ImgAlt.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setSection2ImgAlt(updatedImgAlt);
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setTargetSection("section2_2");
                            setSelectedAction("update");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setTargetSection("section2_2");
                            setSelectedAction("delete");
                          }}
                          className="btn btn-sm bg-red-500 text-white hover:bg-red-800 hover:cursor-pointer"
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

export default Section2AboutAdmin;
