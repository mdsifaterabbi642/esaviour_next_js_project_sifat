"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section4AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getSection4AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getSection4AboutData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Section4 of About page in Admin panel</h1>
      {isClient ? (
        <div className="border px-[5px] py-[5px] flex flex-row gap-3">
          {data[0]?.section4.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section4_Title:
                    <span className="text-green-500 rounded-md text-[16px] text-center">
                      {item?.section4_Title}
                    </span>
                  </h2>
                  <h2 className="text-[16px]">
                    section4_Description:
                    <span className="text-purple-500 pl-[5px] text-[14px]">
                      {item?.section4_Description}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section4_Image
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section4_Image}
                    </span>
                  </h2>
                  <h2 className="text-[14px]">
                    section4_ImgAlt
                    <span className="text-purple-500 pl-[5px]">
                      {item?.section4_ImgAlt}
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

export default Section4AboutAdmin;
