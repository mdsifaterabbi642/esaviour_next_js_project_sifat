"use client";
import { model } from "mongoose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeClientAdmin = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState([]);
  const [modelId, setModelId] = useState();
  const [targetIndex, setTargetIndex] = useState();

  const [selectedOperation, setSelectedOperation] = useState("");

  // ======== state variables for adding client starts=========
  const [addName, setAddName] = useState("");
  const [addParagraph, setAddParagraph] = useState("");
  const [addCompany, setAddCompany] = useState("");
  const [addImgSource, setAddImgSource] = useState("");
  const [addImgAlt, setAddImgAlt] = useState("");
  const [clientAddStatus, setClientAddStatus] = useState(false);
  const [clientDeleteStatus, setClientDeleteStatus] = useState(false);
  // ======== state variables for adding client ends=========

  // =======set temp state variables starts==========
  const [names, setNames] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [imgSources, setImgSources] = useState([]);
  const [imgAlts, setImgAlts] = useState([]);
  // =================set temp state variables ends======

  useEffect(() => {
    const fetchClientData = async () => {
      const res = await fetch("http://localhost:3000/api/homeclient", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Error occurred in fetchClientData");
      }
      const myClients = await res.json();
      setData(myClients);
      setModelId(myClients[0]._id);

      //adding default values to the state variables to populate form fields
      setNames(myClients[0]?.clientCard?.map((item) => item.name));
      setParagraphs(myClients[0]?.clientCard?.map((item) => item.paragraph));
      setCompanies(myClients[0]?.clientCard?.map((item) => item.company));
      setImgSources(myClients[0]?.clientCard?.map((item) => item.imgSource));
      setImgAlts(myClients[0]?.clientCard?.map((item) => item.imgAlt));

      setIsClient(true);
    };
    fetchClientData();
  }, []);

  useEffect(() => {
    const fetchClientData = async () => {
      const res = await fetch("http://localhost:3000/api/homeclient", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Error occurred in fetchClientData");
      }
      const myClients = await res.json();
      setData(myClients);
      setModelId(myClients[0]._id);

      //adding default values to the state variables to populate form fields
      setNames(myClients[0]?.clientCard?.map((item) => item.name));
      setParagraphs(myClients[0]?.clientCard?.map((item) => item.paragraph));
      setCompanies(myClients[0]?.clientCard?.map((item) => item.company));
      setImgSources(myClients[0]?.clientCard?.map((item) => item.imgSource));
      setImgAlts(myClients[0]?.clientCard?.map((item) => item.imgAlt));

      setIsClient(true);
    };
    fetchClientData();
  }, [clientAddStatus, clientDeleteStatus]);

  //console.log(data[0]?.clientCard);

  const mySubmit = async (e) => {
    e.preventDefault();

    console.log("clicked mysubmit");

    if (selectedOperation === "update") {
      console.log("Your selected operation is: ", selectedOperation);

      const res = await fetch(
        `http://localhost:3000/api/homeclient/${modelId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            modelId: modelId,
            targetIndex: targetIndex,
            updatedName: names[targetIndex],
            updatedParagraph: paragraphs[targetIndex],
            updatedCompany: companies[targetIndex],
            updatedImgSource: imgSources[targetIndex],
            updatedImgAlt: imgAlts[targetIndex],
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Client data couldn't be updated");
      }
      if (res.ok) {
        router.push("/admin/home/homeclient");
        router.refresh();
        window.alert("homeclients model updated successfully");
      }
    }

    if (selectedOperation === "delete") {
      console.log("Your selected operation is: ", selectedOperation);
      console.log("Model ID: ", modelId);
      console.log("target index: ", targetIndex);

      const id = modelId;

      const res = await fetch(`http://localhost:3000/api/homeclient/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          targetIndex: targetIndex,
        }),
      });

      if (!res.ok) {
        throw new Error("Client couldn't be deleted");
      }
      if (res.ok) {
        router.push("/admin/home/homeclient");
        router.refresh();
        window.alert("Client deleted successfully");
        setClientDeleteStatus(true);
      }
    }
  };

  const addClient = async (e) => {
    e.preventDefault();

    //validation of the fields
    if (addName.length < 5) {
      window.alert("Name character length should be more than 5");
      return;
    }
    if (addParagraph.length < 15) {
      window.alert("Paragraph character length should be more than 15");
      return;
    }

    if (addCompany.length < 3) {
      window.alert("Company character length should be more than 3");
      return;
    }

    if (addImgSource.length === null) {
      window.alert("Please add image source");
      return;
    }

    if (addImgAlt.length === null) {
      window.alert("Please add image alter tag");
      return;
    }

    const res = await fetch(`http://localhost:3000/api/homeclient/${modelId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        addName: addName,
        addParagraph: addParagraph,
        addCompany: addCompany,
        addImgSource: addImgSource,
        addImgAlt: addImgAlt,
      }),
    });

    if (!res.ok) {
      throw new Error("New Client couldn't be added");
    }

    if (res.ok) {
      router.push("/admin/home/homeclient");
      router.refresh();
      window.alert("New Client added successfully");
      setClientAddStatus(true);
      document.getElementById("addClient").close();
    }

    console.log("addClient function triggerred");
    console.log("modelId: ", modelId);
    console.log("addName: ", addName);
    console.log("addParagraph: ", addParagraph);
    console.log("addCompany: ", addCompany);
    console.log("addImgSource: ", addImgSource);
    console.log("addImgAlt: ", addImgAlt);
  };

  return (
    <>
      {/* add client form */}
      <dialog id="addClient" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Client</h3>
          <div>
            <form onSubmit={addClient}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="name" className="text-gray-600  font-bold">
                    Name:
                  </label>
                  <textarea
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Client name"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addName}
                    onChange={(e) => setAddName(e.target.value)}
                    required={true}
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
                    placeholder="Add statement or review"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                    value={addParagraph}
                    onChange={(e) => setAddParagraph(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="company" className="text-gray-600  font-bold">
                    Company:
                  </label>
                  <textarea
                    type="text"
                    id="company"
                    name="company"
                    placeholder="company name"
                    className="w-[98%] h-[50px] min-h-[50px] max-h-[70px] px-[5px] pt-[5px] border-none text-left bg-slate-600 text-white"
                    value={addCompany}
                    onChange={(e) => setAddCompany(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="image" className="text-gray-600  font-bold">
                    Image:
                  </label>
                  <textarea
                    type="text"
                    id="imgSource"
                    name="imgSource"
                    placeholder="Add image source link"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addImgSource}
                    onChange={(e) => setAddImgSource(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="imgAlt" className="text-gray-600  font-bold">
                    Image Alt:
                  </label>
                  <textarea
                    type="text"
                    id="imgAlt"
                    name="imgAlt"
                    placeholder="Add image alter tag"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addImgAlt}
                    onChange={(e) => setAddImgAlt(e.target.value)}
                    required={true}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add
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
          onClick={() => document.getElementById("addClient").showModal()}
        >
          Add Client
        </button>
      </div>
      <div className="border w-[90%] mx-auto py-[100px] h-screen overflow-y-auto">
        {isClient ? (
          <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
            {data[0]?.clientCard.map((item, index) => (
              <div key={index}>
                <form onSubmit={mySubmit} className="border-2 border-slate-400">
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[98%] mx-auto">
                      <label
                        for="username"
                        className="text-gray-600  font-bold"
                      >
                        Name:
                      </label>
                      <textarea
                        type="text"
                        id="name"
                        name="name"
                        className="w-[98%] px-[5px] pt-[5px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                        value={names[index]}
                        onChange={(e) => {
                          const updatedName = names.map((item1, i) =>
                            i === index ? e.target.value : item1
                          );
                          setNames(updatedName);
                        }}
                      />
                    </div>

                    <div className="w-[98%] mx-auto">
                      <label
                        for="username"
                        className="text-gray-600  font-bold"
                      >
                        Paragraph:
                      </label>
                      <textarea
                        type="text"
                        id="paragraph"
                        name="paragraph"
                        className="w-[98%] px-[5px] pt-[5px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                        value={paragraphs[index]}
                        onChange={(e) => {
                          const updatedParagraph = paragraphs.map((item1, i) =>
                            i === index ? e.target.value : item1
                          );
                          setParagraphs(updatedParagraph);
                        }}
                      />
                    </div>

                    <div className="w-[98%] mx-auto">
                      <label
                        for="username"
                        className="text-gray-600  font-bold"
                      >
                        Company:
                      </label>
                      <textarea
                        type="text"
                        id="company"
                        name="company"
                        className="w-[98%] px-[5px] pt-[5px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                        value={companies[index]}
                        onChange={(e) => {
                          const updatedCompany = companies.map((item1, i) =>
                            i === index ? e.target.value : item1
                          );
                          setCompanies(updatedCompany);
                        }}
                      />
                    </div>

                    <div className="w-[98%] mx-auto">
                      <label for="image" className="text-gray-600  font-bold">
                        Image:
                      </label>
                      <textarea
                        type="text"
                        id="imgSource"
                        name="imgSource"
                        className="w-[98%] px-[5px] pt-[5px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                        value={imgSources[index]}
                        onChange={(e) => {
                          const updatedImgSrc = imgSources.map((item1, i) =>
                            i === index ? e.target.value : item1
                          );
                          setImgSources(updatedImgSrc);
                        }}
                      />
                    </div>

                    <div className="w-[98%] mx-auto">
                      <label
                        for="username"
                        className="text-gray-600  font-bold"
                      >
                        Image Alt:
                      </label>
                      <textarea
                        type="text"
                        id="imgAlt"
                        name="imgAlt"
                        className="w-[98%] px-[5px] pt-[5px] min-h-[50px] max-h-[150px] border-none text-left bg-slate-600 text-white"
                        value={imgAlts[index]}
                        onChange={(e) => {
                          const updatedImgAlt = imgAlts.map((item1, i) =>
                            i === index ? e.target.value : item1
                          );
                          setImgAlts(updatedImgAlt);
                        }}
                      />
                    </div>

                    <div className="mx-auto my-[20px] text-center hover:cursor-pointer">
                      <button
                        onClick={() => {
                          setTargetIndex(index);
                          setSelectedOperation("update");
                        }}
                        className="btn bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => {
                          setTargetIndex(index);
                          setSelectedOperation("delete");
                        }}
                        className="btn bg-red-600 text-white hover:bg-red-900 hover:cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ))}
          </div>
        ) : (
          <div>
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

export default HomeClientAdmin;
