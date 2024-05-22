"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HeroAboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [hero_Title, setHeroTitle] = useState("");
  const [hero_Subtitle, setHeroSubtitle] = useState("");
  const [hero_ButtonText, setHeroButtonText] = useState("");
  const [hero_ImageSource, setHeroImageSource] = useState("");
  const [hero_ImageAlt, setHeroImageAlt] = useState("");

  useEffect(() => {
    const getAboutHeroData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //adding default values to the form through state variable
      setHeroTitle(myJsonData[0]?.hero[0]?.hero_Title);
      setHeroSubtitle(myJsonData[0]?.hero[0]?.hero_Subtitle);
      setHeroButtonText(myJsonData[0]?.hero[0]?.hero_ButtonText);
      setHeroImageSource(myJsonData[0]?.hero[0]?.hero_ImageSource);
      setHeroImageAlt(myJsonData[0]?.hero[0]?.hero_ImageAlt);
    };
    getAboutHeroData();
    setIsClient(true);
  }, []);

  const aboutSubmit = async (e) => {
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
          hero_Title,
          hero_Subtitle,
          hero_ButtonText,
          hero_ImageSource,
          hero_ImageAlt,
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

    // console.log("Click aboutSubmit");
    // console.log("New Title: ", hero_Title);
    // console.log("New Subtitle: ", hero_Subtitle);
    // console.log("New Button Text: ", hero_ButtonText);
    // console.log("New Image Source: ", hero_ImageSource);
    // console.log("New Image Alter tag: ", hero_ImageAlt);
  };

  return (
    <div>
      <h1 className="text-center text-gray-700 text-[20px]">Section: Hero</h1>
      {isClient ? (
        <div className="w-[90%] mx-auto">
          <form
            onSubmit={aboutSubmit}
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
                    value={hero_Title}
                    onChange={(e) => setHeroTitle(e.target.value)}
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
                    value={hero_Subtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
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
                  Button Text:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="buttonText"
                    name="buttonText"
                    className="w-[98%] text-[12px] min-h-[100px] max-h-[150px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={hero_ButtonText}
                    onChange={(e) => setHeroButtonText(e.target.value)}
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
                    id="imgSource"
                    name="imgSource"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={hero_ImageSource}
                    onChange={(e) => setHeroImageSource(e.target.value)}
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
                    value={hero_ImageAlt}
                    onChange={(e) => setHeroImageAlt(e.target.value)}
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

export default HeroAboutAdmin;
