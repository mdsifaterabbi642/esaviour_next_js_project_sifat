"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section7AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getSection7AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getSection7AboutData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Section7 of About page in Admin panel</h1>
      {isClient ? (
        <div className="border px-[5px] py-[5px] flex flex-row gap-3 bg-base-100 shadow-xl">
          <div className=" py-[10px] px-[10px]">
            <h2 className="">
              section7_Title:
              <span className="text-green-500 rounded-md text-[16px] text-center">
                {data[0]?.section7[0]?.section7_Title}
              </span>
            </h2>
            <h2 className="">
              section7_SubTitle:
              <span className="text-green-500 rounded-md text-[16px] text-center">
                {data[0]?.section7[0]?.section7_SubTitle}
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
          {data[0]?.section7_7?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                <div className="py-[10px] px-[10px] w-[50%] h-[50%]">
                    <Image src={item?.section7_ImgSource} alt={item?.section7_ImgAlt} width={300} height={200} />
                </div>
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    section7_Name:
                    <span className="bg-sky-500 rounded-lg text-white text-[14px] px-[10px] text-center inline">
                      {item?.section7_Name}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_Designation:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_Designation}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_Description:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_Description}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_ImgSource:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_ImgSource}
                    </span>
                  </h2>
                  <h2 className="">
                    section7_ImgAlt:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.section7_ImgAlt}
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

export default Section7AboutAdmin;
