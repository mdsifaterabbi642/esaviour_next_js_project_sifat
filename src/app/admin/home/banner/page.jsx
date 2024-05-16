"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeBannerAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [bannerText, setBannerText] = useState("");

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
      setBannerText(myJsonData[0].bannerText);
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
      body: JSON.stringify({ bannerText }),
    });

    if (!res.ok) {
      throw new Error("Home model could not be updated");
    }
    if (res.ok) {
      router.push("/admin/home/banner");
      router.refresh();
      window.alert("Banner Data updated successfully");
    }
  };

  return (
    <div>
      <div className=" w-[98%] mx-auto">
        <div className="w-[70%] mx-auto border-2 border-slate-400 px-[10px] py-[20px]">
          <form onSubmit={mySubmit}>
            <div className="flex flex-col flex-wrap">
              <div className="w-[50%] mx-auto">
                <label
                  for="username"
                  className="text-gray-600  font-bold text-xl"
                >
                  Banner Text:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="bannerText"
                    name="bannerText"
                    className="w-[98%] text-[14px] py-[20px] px-[5px] min-h-[100px] max-h-[300px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={bannerText}
                    onChange={(e) => setBannerText(e.target.value)}
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

              <div className="mx-auto my-[30px] text-center hover:cursor-pointer">
                <input
                  type="submit"
                  value="Submit"
                  className="btn bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerAdmin;
