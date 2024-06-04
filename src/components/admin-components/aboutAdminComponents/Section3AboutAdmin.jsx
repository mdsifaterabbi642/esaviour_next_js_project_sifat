"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section3AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section3_Heading, setHeading] = useState("");
  const [section3_Subtitle, setSubtitle] = useState("");
  const [section3_Description1, setDescription1] = useState("");
  const [section3_Description2, setDescription2] = useState("");

  useEffect(() => {
    const getSection3AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setHeading(myJsonData[0]?.section3[0]?.section3_Heading);
      setSubtitle(myJsonData[0]?.section3[0]?.section3_Subtitle);
      setDescription1(myJsonData[0]?.section3[0]?.section3_Description1);
      setDescription2(myJsonData[0]?.section3[0]?.section3_Description2);
    };
    getSection3AboutData();
    setIsClient(true);
  }, []);

  const aboutSubmitSection3 = async (e) => {
    e.preventDefault();
    // console.log("Clicked aboutSubmitSection3 function");
    // console.log("section3_Heading: ", section3_Heading);
    // console.log("section3_Subtitle: ", section3_Subtitle);
    // console.log("setDescription1: ", section3_Description1);
    // console.log("setDescription2: ", section3_Description2);

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
          section3_Heading,
          section3_Subtitle,
          section3_Description1,
          section3_Description2,
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
        Section: Section3 ⚙👇👇👇
      </h1>
      {isClient ? (
        <div className="w-[90%] mx-auto">
          <form
            onSubmit={aboutSubmitSection3}
            className="w-[90%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <div className="w-[80%] mx-auto">
                <label
                  for="heading"
                  className="text-gray-600  font-bold text-xl"
                >
                  Heading
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="heading"
                    name="heading"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section3_Heading}
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
                  for="subtitle"
                  className="text-gray-600  font-bold text-xl"
                >
                  Subtitle
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section3_Subtitle}
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

              <div className="w-[80%] mx-auto">
                <label
                  for="description1"
                  className="text-gray-600  font-bold text-xl"
                >
                  Description1
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="description1"
                    name="description1"
                    className="w-[98%] text-[12px] min-h-[100px] max-h-[150px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section3_Description1}
                    onChange={(e) => setDescription1(e.target.value)}
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
                  for="description2"
                  className="text-gray-600  font-bold text-xl"
                >
                  Description2
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="description2"
                    name="description2"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section3_Description2}
                    onChange={(e) => setDescription2(e.target.value)}
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
    </div>
  );
};

export default Section3AboutAdmin;
