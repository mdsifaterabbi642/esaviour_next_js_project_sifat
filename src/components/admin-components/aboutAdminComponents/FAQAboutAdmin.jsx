"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FAQAboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getFAQAboutAdminData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getFAQAboutAdminData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>FAQ of About page in Admin panel</h1>

      {isClient ? (
        <div className="border px-[5px] py-[5px] flex flex-row gap-3 bg-base-100 shadow-xl">
          <div className=" py-[10px] px-[10px]">
            <h2 className="">
              FAQ_SubTitle:
              <span className="text-green-500 rounded-md text-[16px] text-center">
                {data[0]?.AboutFAQSection[0]?.FAQ_SubTitle}
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
          {data[0]?.FAQLoop?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                <div className=" py-[10px] px-[10px]">
                  <h2 className="">
                    question :
                    <span className=" rounded-lg text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.question}
                    </span>
                  </h2>
                  <h2 className="">
                    answer:
                    <span className="text-purple-500 text-[14px] px-[10px] text-center inline">
                      {item?.answer}
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

export default FAQAboutAdmin;
