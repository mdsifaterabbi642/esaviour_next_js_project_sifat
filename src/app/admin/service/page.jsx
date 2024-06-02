"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { set } from "mongoose";

const ServiceAdminPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [serviceName, setServiceName] = useState([]);
  const [serviceHeading, setServiceHeading] = useState([]);
  const [serviceImageSource, setServiceImageSource] = useState([]);
  const [serviceImageAlt, setServiceImageAlt] = useState([]);
  const [conclusion, setConclusion] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [action, setAction] = useState("");

  useEffect(() => {
    const getServicePageData = async () => {
      const res = await fetch(`http://localhost:3000/api/servicepage`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching ServicePage model data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setServiceName(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceName)
      );
      setServiceHeading(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceHeading)
      );
      setServiceImageSource(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceImageSource)
      );
      setServiceImageAlt(
        myJsonData[0]?.serviceInfo.map((item, index) => item.serviceImageAlt)
      );
      setConclusion(
        myJsonData[0]?.serviceInfo.map((item, index) => item.conclusion)
      );
    };

    getServicePageData();

    setIsClient(true);
  }, []);

  //console.log("=== ", data[0]?.serviceInfo);

  const servicePageUpdateDelete = async (e) => {
    e.preventDefault();
    // console.log("Clicked servicePageUpdateDelete function");
    // console.log("serviceName: ", serviceName[targetIndex]);
    // console.log("serviceHeading: ", serviceHeading[targetIndex]);
    // console.log("serviceImageSource: ", serviceImageSource[targetIndex]);
    // console.log("serviceImageAlt: ", serviceImageAlt[targetIndex]);
    // console.log("conclusion: ", conclusion[targetIndex]);
    // console.log("targetIndex: ", targetIndex);

    if (action === "update") {
      const decision = window.prompt(
        "Type `update service details` to update or type `cancel` to cancel the operation"
      );
      if (decision === "update service details") {
        console.log("You choose to update service details");
        // console.log("serviceName: ", serviceName[targetIndex]);
        // console.log("serviceHeading: ", serviceHeading[targetIndex]);
        // console.log("serviceImageSource: ", serviceImageSource[targetIndex]);
        // console.log("serviceImageAlt: ", serviceImageAlt[targetIndex]);
        // console.log("conclusion: ", conclusion[targetIndex]);
        // console.log("targetIndex: ", targetIndex);

        const res = await fetch(
          `http://localhost:3000/api/servicepage/${targetIndex}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              serviceName: serviceName[targetIndex],
              serviceHeading: serviceHeading[targetIndex],
              serviceImageSource: serviceImageSource[targetIndex],
              serviceImageAlt: serviceImageAlt[targetIndex],
              conclusion: conclusion[targetIndex],
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Error in updating ServicePage model");
        }

        if (res.ok) {
          router.push("/admin/service");
          router.refresh();
          window.alert("ServicePage model updated");
        }
      } else if (decision === "cancel") {
        console.log("You cancelled the operation");
      } else {
        console.log("Invalid operation");
      }
    }
  };

  return (
    <div className="h-screen overflow-y-auto py-[100px]">
      <h1>Service Admin Page</h1>
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {data[0]?.serviceInfo?.map((item, index) => (
            <div key={index}>
              <div className="w-[90%] mx-auto">
                <form
                  onSubmit={servicePageUpdateDelete}
                  className="w-[90%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[80%] mx-auto">
                      <label
                        for="serviceName"
                        className="text-gray-600  font-bold text-xl"
                      >
                        serviceName:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="serviceName"
                          name="serviceName"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={serviceName[index]}
                          onChange={(e) => {
                            const updatedServiceName = serviceName.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setServiceName(updatedServiceName);
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
                        for="serviceHeading"
                        className="text-gray-600  font-bold text-xl"
                      >
                        serviceHeading:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="serviceHeading"
                          name="serviceHeading"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={serviceHeading[index]}
                          onChange={(e) => {
                            const updatedServiceHeading = serviceHeading.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setServiceHeading(updatedServiceHeading);
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
                        for="serviceImageSource"
                        className="text-gray-600  font-bold text-xl"
                      >
                        serviceImageSource:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="serviceImageSource"
                          name="serviceImageSource"
                          className="w-[98%] text-[12px] min-h-[100px] max-h-[150px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={serviceImageSource[index]}
                          onChange={(e) => {
                            const updatedServiceImageSource =
                              serviceImageSource.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                            setServiceImageSource(updatedServiceImageSource);
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
                        for="serviceImageAlt"
                        className="text-gray-600  font-bold text-xl"
                      >
                        serviceImageAlt:
                      </label>
                      {isClient ? (
                        <input
                          type="text"
                          id="serviceImageAlt"
                          name="serviceImageAlt"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={serviceImageAlt[index]}
                          onChange={(e) => {
                            const updatedServiceImageAlt = serviceImageAlt.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setServiceImageAlt(updatedServiceImageAlt);
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
                        for="conclusion"
                        className="text-gray-600  font-bold text-xl"
                      >
                        conclusion:
                      </label>
                      {isClient ? (
                        <input
                          type="text"
                          id="conclusion"
                          name="conclusion"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={conclusion[index]}
                          onChange={(e) => {
                            const updatedConclusion = conclusion.map(
                              (item, i) => (i === index ? e.target.value : item)
                            );
                            setConclusion(updatedConclusion);
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

                    <div className="flex justify-center py-[10px] gap-1">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setAction("update");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <Link
                          href={`http://localhost:3000/admin/service/${index}`}
                        >
                          <button
                            onClick={() => setTargetIndex(index)}
                            className="btn btn-sm bg-pink-400 text-white hover:bg-orange-500 hover: cursor-pointer"
                          >
                            Details
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setAction("delete");
                          }}
                          className="btn btn-sm bg-red-600 text-white hover:bg-orange-500 hover: cursor-pointer"
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

export default ServiceAdminPage;
