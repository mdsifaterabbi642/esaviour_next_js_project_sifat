"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section5AboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [quantity, setQuantity] = useState([]);
  const [heading, setHeading] = useState([]);
  const [action, setAction] = useState("");
  const [targetSection, setTargetSection] = useState("");
  const [targetIndex, setTargetIndex] = useState();
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [addStatus, setAddStatus] = useState(false);
  // state variables to add data
  const [newHeading, setNewHeading] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  useEffect(() => {
    const getSection5AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setQuantity(
        myJsonData[0]?.section5_slider1?.map((item, index) => item.quantity)
      );
      setHeading(
        myJsonData[0]?.section5_slider1?.map((item, index) => item.heading)
      );
    };
    getSection5AboutData();
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getSection5AboutData = async () => {
      const res = await fetch("http://localhost:3000/api/about", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setQuantity(
        myJsonData[0]?.section5_slider1?.map((item, index) => item.quantity)
      );
      setHeading(
        myJsonData[0]?.section5_slider1?.map((item, index) => item.heading)
      );
    };
    getSection5AboutData();
    setIsClient(true);
  }, [updateStatus, addStatus]);

  const section5_slider1_update_delete = async (e) => {
    e.preventDefault();

    if (action === "update") {
      console.log(
        "You Clicked section5_slider1_update_delete function to UPDATE"
      );

      const decision = window.prompt(
        "Type `please update me` to update or type `cancel` to cancel the operation: "
      );

      if (decision === "please update me") {
        const id = data[0]?._id;

        const res = await fetch(
          `http://localhost:3000/api/about/section5_slider1/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              heading: heading,
              quantity: quantity,
              targetIndex: targetIndex,
              targetSection: targetSection,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("section5_slider1 of About page couldn't be updated");
        }
        if (res.ok) {
          router.push("/admin/about");
          router.refresh();
          window.alert("section5_slider1 of About Model updated successfully");
        }
        setUpdateStatus(true);
      } else if (decision === "cancel") {
        console.log("You cancelled the operation");
      } else {
        console.log("Invalid request");
      }
    }
    if (action === "delete") {
      console.log(
        "You Clicked section5_slider1_update_delete function to delete"
      );
      console.log("TargetSection: ", targetSection);
      console.log("TargetIndex: ", targetIndex);
      console.log("Heading: ", heading);
      console.log("Quantity: ", quantity);
    }
  };

  const addSection5_slider1 = async (e) => {
    e.preventDefault();
    const id = data[0]?._id;
    const res = await fetch(
      `http://localhost:3000/api/about/section5_slider1/${id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ heading: newHeading, quantity: newQuantity }),
      }
    );

    if (!res.ok) {
      throw new Error(
        "could not added data to section5_slider1 of About page in admin panel"
      );
    }
    if (res.ok) {
      router.push("/admin/about");
      router.refresh();
      window.alert("section5_slider1 of About Model Added successfully");
    }
    setAddStatus(true);
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
        Section: Section5 ⚙👇👇👇
      </h1>
      <div className="relative left-[90%]">
        <button
          onClick={() => {
            document.getElementById("addItemssection5_slider1").showModal();
          }}
          className="btn btn-sm bg-green-500 hover:bg-green-700 text-white"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {data[0]?.section5_slider1.map((item, index) => (
          <div
            key={index}
            className="w-[200px] bg-base-100 shadow-xl py-[20px] px-[20px]"
          >
            <form
              onSubmit={section5_slider1_update_delete}
              className="w-[100%] mx-auto border-2 border-slate-400"
            >
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label
                    for="heading"
                    className="text-gray-600  font-bold text-xl"
                  >
                    Heading:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="heading"
                      name="heading"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
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
                    for="quantity"
                    className="text-gray-600  font-bold text-xl"
                  >
                    Quantity:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[150px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={quantity[index]}
                      onChange={(e) => {
                        const updatedQuantity = quantity.map((item, i) =>
                          i === index ? e.target.value : item
                        );
                        setQuantity(updatedQuantity);
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
                <div className="flex flex-row flex-wrap justify-between mx-[3px] my-[10px]">
                  <div>
                    <button
                      onClick={() => {
                        setAction("update");
                        setTargetSection("section5_slider1");
                        setTargetIndex(index);
                      }}
                      className="btn btn-sm bg-[#000080] text-white"
                    >
                      Update
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setAction("delete");
                        setTargetSection("section5_slider1");
                        setTargetIndex(index);
                      }}
                      className="btn btn-sm bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>

      {/* add items in section2 service form */}
      <dialog
        id="addItemssection5_slider1"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Items: section5_slider1</h3>
          <div>
            <form onSubmit={addSection5_slider1}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="heading" className="text-gray-600  font-bold">
                    Heading:
                  </label>
                  <textarea
                    type="text"
                    id="heading"
                    name="heading"
                    placeholder="add heading"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={newHeading}
                    onChange={(e) => setNewHeading(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="quantity" className="text-gray-600  font-bold">
                    Quantity:
                  </label>
                  <textarea
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="add quantity"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add Item
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

export default Section5AboutAdmin;
