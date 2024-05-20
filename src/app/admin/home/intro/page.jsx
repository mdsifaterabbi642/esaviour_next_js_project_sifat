"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeIntroAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [IP1, setIP1] = useState("");
  const [IP2, setIP2] = useState("");
  const [IP3, setIP3] = useState("");
  const [imageLink, setImageLink] = useState("");
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
      setIP1(myJsonData[0].introPara1);
      setIP2(myJsonData[0].introPara2);
      setIP3(myJsonData[0].introPara3);
      setImageLink(myJsonData[0].introImgSource);
      setImgAlt(myJsonData[0].introImgAlt);
    };

    getHeroData();
    setIsClient(true);
  }, []);

  //console.log("==============", data[0]?.subtitle);
  // console.log(IP1);
  // console.log(IP2);
  // console.log(IP3);

  const mySubmit = async (e) => {
    e.preventDefault();
    //console.log("Clicked======= ", IP1);
    //console.log("Clicked======= ", IP2);
    //console.log("Clicked======= ", IP3);
    //console.log("Object ID is: ", data[0]?._id);
    const id = data[0]?._id;

    const res = await fetch(`http://localhost:3000/api/home/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ IP1, IP2, IP3, imageLink, imgAlt }),
    });

    if (!res.ok) {
      throw new Error("Home model could not be updated");
    }
    if (res.ok) {
      router.push("/admin/home/intro");
      router.refresh();
      window.alert("Data updated successfully");
    }
  };

  return (
    <>
      <div className="w-[98%] mx-auto overflow-y-auto">
        <div className="">
          <form onSubmit={mySubmit} className="w-[60%] mx-auto border-2 border-slate-400">
            <div className="flex flex-col flex-wrap">
              <div className="w-[60%] mx-auto">
                <label
                  for="username"
                  className="text-gray-600  font-bold text-xl"
                >
                  1st Paragraph:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="introPara1"
                    name="newIntroPara1"
                    className="w-[98%] min-h-[120px] max-h-[250px] text-[14px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={IP1}
                    onChange={(e) => setIP1(e.target.value)}
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
                  2nd Paragraph:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="introPara2"
                    name="newIntroPara2"
                    className="w-[98%] min-h-[120px] max-h-[250px] text-[14px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={IP2}
                    onChange={(e) => setIP2(e.target.value)}
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
                  3rd Paragraph:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="username"
                    name="newIntroPara3"
                    className="w-[98%] min-h-[120px] max-h-[250px] text-[14px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={IP3}
                    onChange={(e) => setIP3(e.target.value)}
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
                  Image Link:
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="imageLink"
                    name="imageLink"
                    className="w-[98%] min-h-[120px] max-h-[250px] text-[14px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
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
                  Image Alternative:
                </label>
                {isClient ? (
                  <input
                    type="text"
                    id="imgAlt"
                    name="imgAlt"
                    className="w-[98%] min-h-[120px] max-h-[250px] text-[14px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
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

              <div className="w-[200px] mx-auto my-[50px] text-center hover:cursor-pointer">
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
    </>
  );
};

export default HomeIntroAdmin;
