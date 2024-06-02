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
  const [isServiceAdded, setIsServiceAdded] = useState(false);
  const [isServiceDeleted, setIsServiceDeleted] = useState(false);
  //state variables to add services
  const [addServiceName, setAddServiceName] = useState("");
  const [addServiceHeading, setAddServiceHeading] = useState("");
  const [addServiceImageSource, setAddServiceImageSource] = useState("");
  const [addServiceImageAlt, setAddServiceImageAlt] = useState("");
  const [addConclusion, setAddConclusion] = useState("");
  const [addBulletPoint1, setAddBulletPoint1] = useState("");
  const [addBulletDescription1, setAddBulletDescription1] = useState("");
  const [addBulletPoint2, setAddBulletPoint2] = useState("");
  const [addBulletDescription2, setAddBulletDescription2] = useState("");

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
  }, [isServiceAdded, isServiceDeleted]);

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
    if (action === "delete") {
      const decision = window.prompt(
        "Type `Yes delete this` to delete or type `Cancel` to cancel the operation"
      );
      if (decision === "Yes delete this") {
        console.log("You choose delete");

        const res = await fetch(
          `http://localhost:3000/api/servicepage/${targetIndex}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Error in deleting ServicePage model");
        }

        if (res.ok) {
          router.push("/admin/service");
          router.refresh();
          window.alert("ServicePage model data deleted");
          setIsServiceDeleted((prev) => !prev);
        }
      } else if (decision === "Cancel") {
        console.log("You choose to cancel the operation");
      } else {
        console.log("Invalid request");
      }
    }
  };

  const addServiceFunction = async (e) => {
    e.preventDefault();
    const decision = window.prompt(
      "Type `add service` to add or `cancel` to cancel"
    );
    if (decision === "add service") {
      console.log("You choose to add service");
      // console.log("addServiceName: ", addServiceName);
      // console.log("addServiceHeading: ", addServiceHeading);
      // console.log("addServiceImageSource: ", addServiceImageSource);
      // console.log("addServiceImageAlt: ", addServiceImageAlt);
      // console.log("addConclusion lusion", addConclusion);
      // console.log("addBulletPoint: ", addBulletPoint);
      // console.log("addBulletDescription: ", addBulletDescription);

      // const bullet = {
      //   bulletPoint: addBulletPoint,
      //   bulletDescription: addBulletDescription,
      // };

      // console.log(bullet);

      // Create an array to hold bullet objects
      const bullet = [];

      // Create bullet objects and add them to the array
      const bulletObject1 = {
        bulletPoint: addBulletPoint1,
        bulletDescription: addBulletDescription1,
      };
      const bulletObject2 = {
        bulletPoint: addBulletPoint2,
        bulletDescription: addBulletDescription2,
      };

      bullet.push(bulletObject1);
      bullet.push(bulletObject2);

      // Now your bulletArray contains multiple bullet objects
      //console.log(bullet);

      const res = await fetch(`http://localhost:3000/api/servicepage`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          serviceName: addServiceName,
          serviceHeading: addServiceHeading,
          serviceImageSource: addServiceImageSource,
          serviceImageAlt: addServiceImageAlt,
          bullet: bullet,
          conclusion: addConclusion,
        }),
      });

      if (!res.ok) {
        throw new Error("Error in adding data in ServicePage model");
      }
      if (res.ok) {
        router.push("/admin/service");
        router.refresh();
        window.alert("Data added successfully in ServicePage model");
        setIsServiceAdded((prev) => !prev);
        //resetting the form
        setAddServiceName("");
        setAddServiceHeading("");
        setAddServiceImageSource("");
        setAddServiceImageAlt("");
        setAddConclusion("");
        setAddBulletPoint1("");
        setAddBulletDescription1("");
        setAddBulletPoint2("");
        setAddBulletDescription2("");
        document.getElementById("addService").close();
      }
    } else if (decision === "cancel") {
      console.log("You cancelled the operation");
    } else {
      console.log("Invalid request");
    }
  };

  return (
    <div className="h-screen overflow-y-auto py-[100px]">
      <h1>Service Admin Page</h1>
      <div className="fixed">
        <button
          onClick={() => document.getElementById("addService").showModal()}
          className="btn btn-sm bg-green-500 text-white"
        >
          Add Service
        </button>
      </div>
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

      {/* add service form */}
      <dialog id="addService" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Service</h3>
          <div>
            <form onSubmit={addServiceFunction}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="serviceName" className="text-gray-600  font-bold">
                    serviceName:
                  </label>
                  <textarea
                    type="text"
                    id="serviceName"
                    name="serviceName"
                    placeholder="add serviceName"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addServiceName}
                    onChange={(e) => setAddServiceName(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="serviceHeading"
                    className="text-gray-600  font-bold"
                  >
                    serviceHeading:
                  </label>
                  <textarea
                    type="text"
                    id="serviceHeading"
                    name="serviceHeading"
                    placeholder="Add serviceHeading"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    value={addServiceHeading}
                    onChange={(e) => setAddServiceHeading(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="serviceImageSource"
                    className="text-gray-600  font-bold"
                  >
                    serviceImageSource:
                  </label>
                  <textarea
                    type="text"
                    id="serviceImageSource"
                    name="serviceImageSource"
                    placeholder="ad serviceImageSource"
                    className="w-[98%] h-[50px] min-h-[50px] max-h-[70px] px-[5px] pt-[5px] border-none text-left bg-slate-600 text-white"
                    value={addServiceImageSource}
                    onChange={(e) => setAddServiceImageSource(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="serviceImageAlt"
                    className="text-gray-600  font-bold"
                  >
                    serviceImageAlt:
                  </label>
                  <textarea
                    type="text"
                    id="serviceImageAlt"
                    name="serviceImageAlt"
                    placeholder="Add serviceImageAlt"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addServiceImageAlt}
                    onChange={(e) => setAddServiceImageAlt(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="conclusion" className="text-gray-600  font-bold">
                    conclusion:
                  </label>
                  <textarea
                    type="text"
                    id="conclusion"
                    name="conclusion"
                    placeholder="Add conclusion"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addConclusion}
                    onChange={(e) => setAddConclusion(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="addBulletPoint1"
                    className="text-gray-600  font-bold"
                  >
                    addBulletPoint 1:
                  </label>
                  <textarea
                    type="text"
                    id="addBulletPoint1"
                    name="addBulletPoint1"
                    placeholder="Add addBulletPoint1"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBulletPoint1}
                    onChange={(e) => setAddBulletPoint1(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="addBulletDescription1"
                    className="text-gray-600  font-bold"
                  >
                    addBulletDescription 1:
                  </label>
                  <textarea
                    type="text"
                    id="addBulletDescription1"
                    name="addBulletDescription1"
                    placeholder="Add addBulletDescription1"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBulletDescription1}
                    onChange={(e) => setAddBulletDescription1(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="addBulletPoint2"
                    className="text-gray-600  font-bold"
                  >
                    addBulletPoint 2:
                  </label>
                  <textarea
                    type="text"
                    id="addBulletPoint2"
                    name="addBulletPoint2"
                    placeholder="Add addBulletPoint2"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBulletPoint2}
                    onChange={(e) => setAddBulletPoint2(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label
                    for="addBulletDescription2"
                    className="text-gray-600  font-bold"
                  >
                    addBulletDescription 2:
                  </label>
                  <textarea
                    type="text"
                    id="addBulletDescription2"
                    name="addBulletDescription2"
                    placeholder="Add addBulletDescription2"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addBulletDescription2}
                    onChange={(e) => setAddBulletDescription2(e.target.value)}
                    required={true}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add Service
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceAdminPage;
