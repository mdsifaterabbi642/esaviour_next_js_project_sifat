"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section6AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getSection6AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getSection6AboutData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Section6 of About page in Admin panel</h1>
      {isClient ? (
        <div className="border px-[5px] py-[5px] flex flex-row gap-3 bg-base-100 shadow-xl">
          <div className=" py-[10px] px-[10px]">
            <h2 className="">
              section6_Heading:
              <span className="text-green-500 rounded-md text-[16px] text-center">
                {data[0]?.section6[0]?.section6_Heading}
              </span>
            </h2>
            <h2 className="">
              section6_SubHeading:
              <span className="text-green-500 rounded-md text-[16px] text-center">
                {data[0]?.section6[0]?.section6_SubHeading}
              </span>
            </h2>

            <div className="justify-end">
              <button className="btn btn-sm bg-green-500">Actions</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2">
          {data[0]?.section6_6?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section6_Title:
                    <span className="bg-sky-500 rounded-lg text-white text-[14px] px-[10px] text-center inline">
                      {item?.section6_Title}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section6_Description:
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section6_Description}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section6_Image:
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section6_Image}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section6_ImgAlt:
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section6_ImgAlt}
                    </span>
                  </h2>

                  <div className="justify-end">
                    <button className="btn btn-sm bg-green-500">Actions</button>
                  </div>
                </div>
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

export default Section6AboutAdmin;
