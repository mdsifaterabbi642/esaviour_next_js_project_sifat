"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeHeroAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [imgSource, setImgSource] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_HOME_GET, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // return console.log(res.json());
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setTitle(myJsonData[0].title);
      setSubtitle(myJsonData[0].subtitle);
      setDescription(myJsonData[0].description);
      setButtonText(myJsonData[0].buttonText);
      setImgSource(myJsonData[0].imgSource);
      setImgAlt(myJsonData[0].imgAlt);
    };

    getHeroData();
    setIsClient(true);
  }, []);

  const mySubmit = async (e) => {
    e.preventDefault();

    //console.log("Object ID is: ", data[0]?._id);
    const id = data[0]?._id;

    const apiUrl = process.env.NEXT_PUBLIC_HOME_GET + "/" + id;

    const res = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        subtitle,
        description,
        buttonText,
        imgSource,
        imgAlt,
      }),
    });

    if (!res.ok) {
      throw new Error("Home model could not be updated");
    }
    if (res.ok) {
      router.push("/admin/home/hero");
      router.refresh();
      window.alert("Hero Data updated successfully");
    }
  };
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <form
          onSubmit={mySubmit}
          className="w-[50%] mx-auto border-2 border-slate-400"
        >
          <div className="flex flex-col flex-wrap">
            <div className="w-[60%] mx-auto">
              <label
                for="username"
                className="text-gray-600  font-bold text-xl"
              >
                Title:
              </label>
              {isClient ? (
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                  value={title}
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

            <div className="w-[60%] mx-auto">
              <label
                for="username"
                className="text-gray-600  font-bold text-xl"
              >
                Subtitle:
              </label>
              {isClient ? (
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                  value={subtitle}
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

            <div className="w-[60%] mx-auto">
              <label
                for="username"
                className="text-gray-600  font-bold text-xl"
              >
                Description:
              </label>
              {isClient ? (
                <textarea
                  type="text"
                  id="description"
                  name="descripton"
                  className="w-[98%] text-[12px] min-h-[200px] max-h-[300px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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

            <div className="w-[60%] mx-auto">
              <label
                for="username"
                className="text-gray-600  font-bold text-xl"
              >
                Button Text:
              </label>
              {isClient ? (
                <input
                  type="text"
                  id="buttonText"
                  name="buttonText"
                  className="w-[98%] px-[5px] py-[20px] text-[12px] border-none text-left bg-slate-600 text-white rounded-md"
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
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

            <div className="w-[60%] mx-auto">
              <label
                for="username"
                className="text-gray-600  font-bold text-xl"
              >
                Image Source:
              </label>
              {isClient ? (
                <input
                  type="text"
                  id="imgSource"
                  name="imgSource"
                  className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                  value={imgSource}
                  onChange={(e) => setImgSource(e.target.value)}
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

            <div className="w-[60%] mx-auto">
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
                  value={imgAlt}
                  onChange={(e) => setImgAlt(e.target.value)}
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
    </div>
  );
};

export default HomeHeroAdmin;
