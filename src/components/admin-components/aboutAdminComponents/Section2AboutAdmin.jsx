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

  useEffect(() => {
    const getSection2AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

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

  const section2Submit1 = async (e) => {
    e.preventDefault();
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

  const section2Submit2 = async (e) => {
    e.preventDefault();
    //console.log("targetIndex: ", targetIndex);
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
      console.log("You choosed to cancel the operation");
    } else {
      console.log("Invalid request");
    }
  };

  return (
    <div>
      <h1 className="text-center text-gray-700 text-[20px]">
        Section: Section2
      </h1>
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
          {data[0]?.section2_2?.map((item, index) => (
            <div key={index}>
              <div className="w-[90%] mx-auto">
                <form
                  onSubmit={section2Submit2}
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

                    <div className="mx-auto my-[20px] text-center hover:cursor-pointer">
                      <button
                        onClick={() => {
                          setTargetIndex(index);
                          setTargetSection("section2_2");
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

export default Section2AboutAdmin;
