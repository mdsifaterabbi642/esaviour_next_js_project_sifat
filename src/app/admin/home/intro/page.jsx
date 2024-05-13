"use client";
import { useEffect, useState } from "react";

const HomeIntroAdmin = () => {
  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);

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
    };

    getHeroData();
    setIsClient(true);
  }, []);

  console.log("==============", data[0]?.subtitle);

  return (
    <>
      <div className="w-[90%] mx-auto border-2 border-red-400">
        <p>Home Intro Admin xxx</p>
        <div className="">
          <form>
            <div className="flex flex-col flex-wrap">
              <div className="w-[60%] mx-auto">
                <label for="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="bg-purple-500 w-[98%]"
                />
              </div>

              <div className="w-[60%] mx-auto">
                <label for="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-purple-500 w-[98%]"
                />
              </div>
              <div className="w-[200px] mx-auto bg-green-500 text-center hover:cursor-pointer">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeIntroAdmin;
