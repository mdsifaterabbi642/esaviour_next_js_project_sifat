"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section3AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getSection3AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
    };
    getSection3AboutData();
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Section3 of About page in Admin panel</h1>
      {isClient ? (
        <div className="border px-[5px] py-[5px]">
          <h1 className="text-green-500">
            <span className="text-red-500">section3_Heading:</span>{" "}
            {data[0]?.section3[0]?.section3_Heading}{" "}
          </h1>
          <h1 className="text-green-500">
            <span className="text-red-500">section3_Subtitle:</span>{" "}
            {data[0]?.section3[0]?.section3_Subtitle}{" "}
          </h1>
          <h1 className="text-green-500">
            <span className="text-red-500">section3_Description1 :</span>{" "}
            {data[0]?.section3[0]?.section3_Description1}{" "}
          </h1>
          <h1 className="text-green-500">
            <span className="text-red-500">section3_Description2 :</span>{" "}
            {data[0]?.section3[0]?.section3_Description2}{" "}
          </h1>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Section3AboutAdmin;
