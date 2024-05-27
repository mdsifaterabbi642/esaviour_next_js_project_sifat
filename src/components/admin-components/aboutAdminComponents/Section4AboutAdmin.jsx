"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section4AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [targetIndex4Section4, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [section4_Title, setTitle] = useState([]);
  const [section4_Description, setDescription] = useState([]);
  const [section4_Image, setImage] = useState([]);
  const [section4_ImgAlt, setImgAlt] = useState([]);

  useEffect(() => { 
    const getSection4AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setTitle(
        myJsonData[0]?.section4?.map((item, index) => item.section4_Title)
      );
      setDescription(
        myJsonData[0]?.section4?.map((item, index) => item.section4_Description)
      );
      setImage(
        myJsonData[0]?.section4?.map((item, index) => item.section4_Image)
      );
      setImgAlt(
        myJsonData[0]?.section4?.map((item, index) => item.section4_ImgAlt)
      );
    };
    getSection4AboutData();
    setIsClient(true);
  }, []);

  const section4submit = async (e) => {
    e.preventDefault();
    // console.log("Clicked section4Submit function");
    // console.log("section4_Title: ", section4_Title);
    // console.log("section4_Description: ", section4_Description);
    // console.log("section4_Image: ", section4_Image);
    // console.log("section4_ImgAlt: ", section4_ImgAlt);
    // console.log("targetIndex: ", targetIndex4Section4);

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
          targetIndex4Section4,
          section4_Title,
          section4_Description,
          section4_Image,
          section4_ImgAlt,
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
        Section: Section4 ⚙👇👇👇
      </h1>
      {isClient ? (
        <div className="border px-[5px] py-[5px] flex flex-row gap-3 justify-center">
          {data[0]?.section4.map((item, index) => (
            <div key={index} className="shadow-xl w-[350px]">
              <div className=" py-[10px] px-[10px]">
                <form
                  onSubmit={section4submit}
                  className="w-[100%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[98%] mx-auto">
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
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section4_Title[index]}
                          onChange={(e) => {
                            const updatedTitle = section4_Title.map((item, i) =>
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

                    <div className="w-[98%] mx-auto">
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
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[200px] max-h-[350px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section4_Description[index]}
                          onChange={(e) => {
                            const updatedDescription = section4_Description.map(
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

                    <div className="w-[98%] mx-auto">
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
                          className="w-[98%] text-[12px] min-h-[100px] max-h-[150px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section4_Image[index]}
                          onChange={(e) => {
                            const updatedImage = section4_Image.map((item, i) =>
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

                    <div className="w-[98%] mx-auto">
                      <label
                        for="imgAlt"
                        className="text-gray-600  font-bold text-xl"
                      >
                        ImgAlt
                      </label>
                      {isClient ? (
                        <input
                          type="text"
                          id="imgAlt"
                          name="imgAlt"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={section4_ImgAlt[index]}
                          onChange={(e) => {
                            const updatedImgAlt = section4_ImgAlt.map(
                              (item, i) => (i === index ? e.target.value : item)
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
                        type="btn btn-sm"
                        className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                        onClick={() => {
                          setTargetIndex(index);
                          setTargetSection("section4");
                        }}
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

export default Section4AboutAdmin;
