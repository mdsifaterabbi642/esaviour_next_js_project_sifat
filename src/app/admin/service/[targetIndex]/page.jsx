"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ServiceDetailsAdminPage = ({ params }) => {
  const router = useRouter();
  const { targetIndex } = params;
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [bulletPoint, setBulletPoint] = useState([]);
  const [bulletDescription, setBulletDescription] = useState([]);
  const [bulletIndex, setBulletIndex] = useState();
  const [action, setAction] = useState("");

  useEffect(() => {
    const getServicePageDetailsData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/servicepage/${targetIndex}`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Error in fetching ServiceDetails Bullet data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setBulletPoint(myJsonData?.map((item, index) => item.bulletPoint));
      setBulletDescription(
        myJsonData?.map((item, index) => item.bulletDescription)
      );
    };

    getServicePageDetailsData();

    setIsClient(true);
  }, [targetIndex]);

  //console.log("targetIndex: ", targetIndex);
  //console.log("data: ", data);
  //console.log(bulletPoint);
  //console.log(bulletPoint[0]);
  //console.log(bulletDescription);
  //console.log(bulletDescription[0]);

  const updateDeleteBullet = async (e) => {
    e.preventDefault();
    //console.log(bulletPoint);
    //console.log(bulletDescription);

    if (action === "update") {
      const decision = window.prompt(
        "Type `update bullet array` to update or type `cancel` to cancel the operation"
      );
      if (decision === "update bullet array") {
        console.log("You choose to update bullet array");
        console.log("Target Index: ", targetIndex);
        console.log("Bullet Index: ", bulletIndex);

        console.log("bulletPoint: ", bulletPoint[bulletIndex]);
        console.log("bulletDescription: ", bulletDescription[bulletIndex]);

        const res = await fetch(
          `http://localhost:3000/api/servicepage/${targetIndex}/${bulletIndex}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              bulletPoint: bulletPoint[bulletIndex],
              bulletDescription: bulletDescription[bulletIndex],
            }),
          }
        );

        if (!res.ok) {
          throw new Error(
            "Error occurred in updating bullet array in ServicePage model"
          );
        }

        if (res.ok) {
          router.push(`/admin/service/${targetIndex}`);
          router.refresh();
          window.alert("bullet array updated successfully");
        }
      } else if (decision === "cancel") {
        console.log("You cancelled the operation");
      } else {
        console.log("Invalid request");
      }
    }
    if (action === "delete") {
      console.log("You choose to delete");
    }
  };

  return (
    <div className="h-screen overflow-y-auto py-[50px]">
      <h1>ServiceDetailsAdminPage</h1>
      <div className="fixed">
        <Link href={`http://localhost:3000/admin/service`}>
          <button className="btn btn-sm bg-black text-white">Back</button>
        </Link>
      </div>
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {data?.map((item, index) => (
            <div key={index}>
              <div className="w-[90%] mx-auto">
                <form
                  onSubmit={updateDeleteBullet}
                  className="w-[90%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[80%] mx-auto">
                      <label
                        for="bulletPoint"
                        className="text-gray-600  font-bold text-xl"
                      >
                        bulletPoint:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="bulletPoint"
                          name="bulletPoint"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={bulletPoint[index]}
                          onChange={(e) => {
                            const updatedBulletPoint = bulletPoint.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setBulletPoint(updatedBulletPoint);
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
                    <div className="w-[80%] mx-auto">
                      <label
                        for="bulletDescription"
                        className="text-gray-600  font-bold text-xl"
                      >
                        bulletDescription:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="bulletDescription"
                          name="bulletDescription"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={bulletDescription[index]}
                          onChange={(e) => {
                            const updatedBulletDescription =
                              bulletDescription.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                            setBulletDescription(updatedBulletDescription);
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

                    <div className="flex justify-between py-[20px] px-[20px]">
                      <div>
                        <button
                          onClick={() => {
                            setBulletIndex(index);
                            setAction("update");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setBulletIndex(index);
                            setAction("delete");
                          }}
                          className="btn btn-sm bg-red-500 text-white hover:bg-orange-500 hover: cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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

export default ServiceDetailsAdminPage;
