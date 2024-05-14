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
      const res = await fetch("http://localhost:3000/api/home", {
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

    const res = await fetch(`http://localhost:3000/api/home/${id}`, {
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
      <div className="">
        <form onSubmit={mySubmit}>
          <div className="flex flex-col flex-wrap">
            <div className="w-[60%] mx-auto">
              <label for="username">title:</label>
              {isClient ? (
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="text-black w-[98%] py-[20px] border text-center"
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
              <label for="username">subtitle:</label>
              {isClient ? (
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  className="text-black w-[98%] py-[20px] border text-center"
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
              <label for="username">Description:</label>
              {isClient ? (
                <textarea
                  type="text"
                  id="description"
                  name="descripton"
                  className="text-black w-[98%] py-[20px] border text-center"
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
              <label for="username">Button Text:</label>
              {isClient ? (
                <input
                  type="text"
                  id="buttonText"
                  name="buttonText"
                  className="text-black w-[98%] py-[20px] border text-center"
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
              <label for="username">Image Source:</label>
              {isClient ? (
                <input
                  type="text"
                  id="imgSource"
                  name="imgSource"
                  className="text-black w-[98%] py-[20px] border text-center"
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
              <label for="username">Image Alt:</label>
              {isClient ? (
                <input
                  type="text"
                  id="imgAlt"
                  name="imgAlt"
                  className="text-black w-[98%] py-[20px] border text-center"
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

            <div className="w-[200px] mx-auto my-[50px] bg-green-500 text-center hover:cursor-pointer">
              <input
                type="submit"
                value="Submit"
                className="hover: cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeHeroAdmin;
