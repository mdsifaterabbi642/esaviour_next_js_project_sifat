"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section8AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getSection8AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getSection8AboutData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Section8 of About page in Admin panel</h1>

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2">
          {data[0]?.section8?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                <div className="py-[10px] px-[10px] w-[50%] h-[50%]">
                  <Image
                    src={item?.section8_ImgSource}
                    alt={item?.section8_ImgAlt}
                    width={300}
                    height={200}
                  />
                </div>
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section8_Name:
                    <span className="bg-sky-500 rounded-lg text-white text-[14px] px-[10px] text-center inline">
                      {item?.section8_Name}
                    </span>
                  </h2>
                  <h2 className="">
                    section8_Designation:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section8_Designation}
                    </span>
                  </h2>
                  <h2 className="">
                    section8_ImgSource:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section8_ImgSource}
                    </span>
                  </h2>
                  <h2 className="">
                    section8_ImgAlt:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section8_ImgAlt}
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

export default Section8AboutAdmin;
