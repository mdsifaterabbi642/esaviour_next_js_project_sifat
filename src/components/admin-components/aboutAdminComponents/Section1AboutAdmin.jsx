"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section1AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [section1_Title1, setSection1Title1] = useState("");
  const [section1_Title2, setSection1Title2] = useState("");
  const [section1_Description, setSection1Description] = useState("");
  const [section1_Name, setSection1Name] = useState("");
  const [section1_Designation, setSection1Designation] = useState("");
  const [section1_ImageSource, setSection1ImageSource] = useState("");
  const [Section1_ImageAlt, setSection1ImageAlt] = useState("");

  useEffect(() => {
    const getSection1AboutData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setSection1Title1(myJsonData[0]?.section1[0]?.section1_Title1);
      setSection1Title2(myJsonData[0]?.section1[0]?.section1_Title2);
      setSection1Description(myJsonData[0]?.section1[0]?.section1_Description);
      setSection1Name(myJsonData[0]?.section1[0]?.section1_Name);
      setSection1Designation(myJsonData[0]?.section1[0]?.section1_Designation);
      setSection1ImageSource(myJsonData[0]?.section1[0]?.section1_ImageSource);
      setSection1ImageAlt(myJsonData[0]?.section1[0]?.Section1_ImageAlt);
    };
    getSection1AboutData();
    setIsClient(true);
  }, []);

  const mySubmit = async (e) => {
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
          section1_Title1,
          section1_Title2,
          section1_Description,
          section1_Name,
          section1_Designation,
          section1_ImageSource,
          Section1_ImageAlt,
        }),
      });

      if (!res.ok) {
        throw new Error("Hero data of About page couldn't be updated");
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
        Section: Section1 ⚙👇👇👇
      </h1>

      {isClient ? (
        <div className="w-[90%] mx-auto">
          <form
            onSubmit={mySubmit}
            className="w-[90%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <div className="w-[80%] mx-auto">
                <label
                  for="username"
                  className="text-gray-600  font-bold text-xl"
                >
                  Title1:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="title"
                    name="title"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section1_Title1}
                    onChange={(e) => setSection1Title1(e.target.value)}
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
                  Title2:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section1_Title2}
                    onChange={(e) => setSection1Title2(e.target.value)}
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
                  Description
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="buttonText"
                    name="buttonText"
                    className="w-[98%] text-[12px] min-h-[100px] max-h-[150px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section1_Description}
                    onChange={(e) => setSection1Description(e.target.value)}
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
                  Name:
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="imgSource"
                    name="imgSource"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section1_Name}
                    onChange={(e) => setSection1Name(e.target.value)}
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
                  Designation:
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="imgAlt"
                    name="imgAlt"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section1_Designation}
                    onChange={(e) => setSection1Designation(e.target.value)}
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
                  Image Source:
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="imgAlt"
                    name="imgAlt"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={section1_ImageSource}
                    onChange={(e) => setSection1ImageSource(e.target.value)}
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
                  Image Alt:
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="imgAlt"
                    name="imgAlt"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={Section1_ImageAlt}
                    onChange={(e) => setSection1ImageAlt(e.target.value)}
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

export default Section1AboutAdmin;
