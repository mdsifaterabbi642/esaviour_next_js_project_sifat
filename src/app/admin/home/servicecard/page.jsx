"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeServiceCardAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [chooseAction, setChooseAction] = useState("");
  const [image, setImage] = useState([]);
  const [heading, setHeading] = useState([]);
  const [paragraph, setParagraph] = useState([]);
  const [imageAlt, setImageAlt] = useState([]);
  const [targetCard, setTargetCard] = useState();
  const [serviceAddStatus, setServiceAddStatus] = useState(false);
  const [serviceDeleteStatus, setServiceDeleteStatus] = useState(false);

  //state variables for adding service starts here
  const [addHeading, setAddHeading] = useState("");
  const [addParagraph, setAddParagraph] = useState("");
  const [addImage, setAddImage] = useState("");
  const [addImageAlt, setAddImageAlt] = useState("");
  //state variables for adding service ends here

  useEffect(() => {
    const getHomeServiceCardData = async () => {
      const res = await fetch("http://localhost:3000/api/home_service_card", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable

      setHeading(myJsonData[0].cardContents.map((item) => item.heading));
      setParagraph(myJsonData[0].cardContents.map((item) => item.paragraph));
      setImage(myJsonData[0].cardContents.map((item) => item.image));
      setImageAlt(myJsonData[0].cardContents.map((item) => item.imageAlt));
    };
    getHomeServiceCardData();
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getHomeServiceCardData = async () => {
      const res = await fetch("http://localhost:3000/api/home_service_card", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable

      setHeading(myJsonData[0].cardContents.map((item) => item.heading));
      setParagraph(myJsonData[0].cardContents.map((item) => item.paragraph));
      setImage(myJsonData[0].cardContents.map((item) => item.image));
      setImageAlt(myJsonData[0].cardContents.map((item) => item.imageAlt));
    };
    getHomeServiceCardData();
    setIsClient(true);
  }, [serviceAddStatus, serviceDeleteStatus]);

  //console.log("===", data);
  //console.log("===", data[0]?.cardContents);
  //console.log("===", data[0]?.cardContents[0]);
  //console.log(heading);

  const mySubmit = async (e) => {
    e.preventDefault();

    const id = data[0]?._id;

    //console.log("Clicked: ", targetCard, " data type: ", typeof targetCard);
    //console.log(id);
    //console.log(heading[targetCard]);
    //console.log(paragraph[targetCard]);

    if (chooseAction === "update") {
      const res = await fetch(
        `http://localhost:3000/api/home_service_card/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            heading: heading[targetCard],
            paragraph: paragraph[targetCard],
            image: image[targetCard],
            imageAlt: imageAlt[targetCard],
            targetCard,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("HomeServiceCard model could not be updated");
      }
      if (res.ok) {
        router.push("/admin/home/servicecard");
        router.refresh();
        window.alert("Service Card Data updated successfully");
      }
    }
    if (chooseAction === "delete") {
      const confirmation = window.prompt(
        "Type 'delete this service' to delete or type 'cancel' to cancel the deletion:  "
      );
      if (confirmation === "delete this service") {
        console.log("You confirmed deletion");

        const res = await fetch(
          `http://localhost:3000/api/home_service_card/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              targetCard: targetCard,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Couldn't delete the data");
        }

        if (res.ok) {
          router.push("/admin/home/servicecard");
          router.refresh();
          window.alert("Service Card Data deleted successfully");
        }
        setServiceDeleteStatus(true);
      } else if (confirmation === "cancel") {
        console.log("You cancelled the deletion");
      } else {
        console.log("Operation Aborted");
      }
    }
  };

  const addService = async (e) => {
    e.preventDefault();

    const id = data[0]?._id;
    console.log("You are in addService: ");
    console.log("addHeading: ", addHeading);
    console.log("addParagraph: ", addParagraph);
    console.log("addImage: ", addImage);
    console.log("addImageAlt: ", addImageAlt);

    const res = await fetch(
      `http://localhost:3000/api/home_service_card/${id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          addHeading: addHeading,
          addParagraph: addParagraph,
          addImage: addImage,
          addImageAlt: addImageAlt,
        }),
      }
    );

    if (!res.ok) {
      throw new Error("homeservicecards model could not be added");
    }
    if (res.ok) {
      router.push("/admin/home/servicecard");
      router.refresh();
      window.alert("Service card added successfully");
    }

    setServiceAddStatus(true);
    document.getElementById("addService").close();
  };

  return (
    <>
      {/* add service form */}
      <dialog id="addService" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Service</h3>
          <div>
            <form onSubmit={addService}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="heading" className="text-gray-600  font-bold">
                    Heading:
                  </label>
                  <textarea
                    type="text"
                    id="heading"
                    name="heading"
                    placeholder="Service heading"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addHeading}
                    onChange={(e) => setAddHeading(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="paragraph" className="text-gray-600  font-bold">
                    Paragraph:
                  </label>
                  <textarea
                    type="text"
                    id="paragraph"
                    name="paragraph"
                    placeholder="Service details"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addParagraph}
                    onChange={(e) => setAddParagraph(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="image" className="text-gray-600  font-bold">
                    Image:
                  </label>
                  <textarea
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Add image link"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addImage}
                    onChange={(e) => setAddImage(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="image" className="text-gray-600  font-bold">
                    Image Alt:
                  </label>
                  <textarea
                    type="text"
                    id="imageAlt"
                    name="imageAlt"
                    placeholder="Add image alter tag"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addImageAlt}
                    onChange={(e) => setAddImageAlt(e.target.value)}
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

      <div>
        <button
          className="btn bg-green-500 text-white fixed right-[5%] top-[5%]"
          onClick={() => document.getElementById("addService").showModal()}
        >
          Add Service
        </button>
      </div>
      <div className="sm:w-[98%] mx-auto h-screen overflow-y-auto py-[80px]">
        {isClient ? (
          <div className="flex flex-wrap gap-3 justify-center w-[70%] py-[20px] mx-auto">
            {data[0]?.cardContents.map((item, index) => (
              <div key={index} className="">
                <div className="">
                  <form
                    onSubmit={mySubmit}
                    className="border-2 border-slate-400"
                  >
                    <div className="flex flex-col flex-wrap">
                      <div className="w-[98%] mx-auto">
                        <label
                          for="username"
                          className="text-gray-600  font-bold text-xl"
                        >
                          Heading:
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="heading"
                            name="heading"
                            className="w-[98%] max-h-[200px] min-h-[100px] text-[12px] px-[5px] py-[20px] text-left text-white bg-slate-600 rounded-md"
                            value={heading[index]}
                            onChange={(e) => {
                              const updatedHeading = heading.map((item, i) =>
                                i === index ? e.target.value : item
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
                      <div className="w-[98%] mx-auto">
                        <label
                          for="username"
                          className="text-gray-600  font-bold text-xl"
                        >
                          Paragraph:
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="paragraph"
                            name="paragraph"
                            className="w-[98%] text-[12px] min-h-[200px] max-h-[300px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={paragraph[index]}
                            onChange={(e) => {
                              const updatedParagraph = paragraph.map(
                                (item, i) =>
                                  i === index ? e.target.value : item
                              );
                              setParagraph(updatedParagraph);
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

                      <div className="w-[98%] mx-auto">
                        <label
                          for="image"
                          className="text-gray-600  font-bold text-xl"
                        >
                          Image Link:
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="image"
                            name="image"
                            className="w-[98%] text-[12px] min-h-[100px] max-h-[150px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={image[index]}
                            onChange={(e) => {
                              const updatedImage = image.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setImage(updatedImage);
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

                      <div className="w-[98%] mx-auto">
                        <label
                          for="imageAlt"
                          className="text-gray-600  font-bold text-xl"
                        >
                          Image Alter Tag:
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="imageAlt"
                            name="imageAlt"
                            className="w-[98%] text-[12px] min-h-[80px] max-h-[100px] px-[5px] py-[20px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={imageAlt[index]}
                            onChange={(e) => {
                              const updatedImageAlt = imageAlt.map((item, i) =>
                                i === index ? e.target.value : item
                              );
                              setImageAlt(updatedImageAlt);
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

                      <div className="w-[98%] mx-auto my-[10px] text-center hover:cursor-pointer flex justify-between px-[10px]">
                        <button
                          onClick={() => {
                            setTargetCard(index);
                            setChooseAction("update");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => {
                            setTargetCard(index);
                            setChooseAction("delete");
                          }}
                          className="btn btn-sm bg-red-500 text-white hover:bg-orange-500 hover: cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-[300px] mx-auto text-center">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeServiceCardAdmin;
