"use client";
import { useEffect, useState } from "react";

const HomeTabcontextAdmin = () => {
  const [isClient, setIsClient] = useState(false);
  const [myData, setMydata] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const [heading, setHeading] = useState([]);
  let [hIndex, setHindex] = useState(0);
  let [targetKey, setTargetKey] = useState("");
  let [targetIndex, setTargetIndex] = useState();

  useEffect(() => {
    const getServiceData = async () => {
      const res = await fetch("http://localhost:3000/api/service", {
        cache: "no-store",
      });

      const temp = await res.json();
      setMydata(temp);

      // Log all field names
      if (temp.length > 0) {
        const fields = Object.keys(temp[0]).filter(
          (fieldName) => fieldName !== "_id" && fieldName !== "updatedAt"
        );
        //console.log("Field Names:", fields);
        setFieldNames(fields);

        // Accumulate headings from different fields
        const allHeadings = fields.reduce((acc, field) => {
          const headings = temp[0]?.[field]?.map((item) => item.heading) || [];
          return [...acc, ...headings];
        }, []);

        //setHeading(allHeadings.join(", "));
        setHeading(allHeadings);
      }
    };

    getServiceData();
    setIsClient(true);
  }, []);

  //console.log("========", heading[0]);

  const mySubmit = async (e) => {
    e.preventDefault();
    console.log("Clicked: ", heading);
    console.log("Target Key: ", targetKey);
    console.log("target Index: ", targetIndex);
  };

  return (
    <>
      {fieldNames.map((field, i) => (
        <div key={field}>
          <div className="flex flex-row flex-wrap gap-3 justify-center">
            {myData[0]?.[field].map((item, targetIndex) => (
              <div
                key={targetIndex}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 border py-[20px]"
              >
                <form onSubmit={mySubmit}>
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[98%] mx-auto">
                      <h1 className="badge badge-primary">{item?.category}</h1>
                      <label for="username" className="text-white font-bold">
                        Heading:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="heading"
                          name="heading"
                          className="text-black w-[98%] py-[20px] border text-center"
                          value={heading[hIndex++]}
                          //onChange={(e) => setHeading(e.target.value)}
                          onChange={(e) => {
                            const updatedHeading = heading.map((item, i) =>
                              i === abc ? e.target.value : heading[hIndex]
                            );
                            setHeading(updatedHeading);
                          }}
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
                      <button
                        onClick={() => {
                          setTargetKey(item?.category);
                          setTargetIndex(targetIndex);
                        }}
                        className="btn hover: cursor-pointer"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>

                {/* <div className="badge badge-primary">{item?.category}</div>
                <h1>
                  <span className="font-bold">heading:</span> {item?.heading}{" "}
                </h1>
                <h2>
                  <span className="font-bold">description: </span>{" "}
                  {item?.description}
                </h2>
                <h3>
                  <span className="font-bold block">Image Source: </span>{" "}
                  {item?.imgSrc}
                </h3>
                <h3>
                  <span className="font-bold block">Image Alt: </span>{" "}
                  {item?.imgAlt}
                </h3> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeTabcontextAdmin;
