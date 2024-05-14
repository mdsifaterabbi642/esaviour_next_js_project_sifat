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
      <div className="">
        <form onSubmit={mySubmit}>
          <div className="flex flex-col flex-wrap">
            <div className="w-[60%] mx-auto">
              <label for="username">bannerText:</label>
              {isClient ? (
                <textarea
                  type="text"
                  id="bannerText"
                  name="bannerText"
                  className="text-black w-[98%] py-[20px] border text-center"
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

export default HomeBannerAdmin;
