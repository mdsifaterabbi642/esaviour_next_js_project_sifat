"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeClientAdmin = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState([]);
  const [modelId, setModelId] = useState();
  const [targetIndex, setTargetIndex] = useState();

  const [selectedOperation, setSelectedOperation] = useState("");

  // =======set temp state variables==========
  const [names, setNames] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [imgSources, setImgSources] = useState([]);
  const [imgAlts, setImgAlts] = useState([]);
  // =================

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

  //console.log(data[0]?.clientCard);

  const mySubmit = async (e) => {
    e.preventDefault();
    // console.log("Clicked my submit");
    // console.log("modelId: ", modelId);
    // console.log("targetIndex: ", targetIndex);
    // console.log("updatedName: ", names[targetIndex]);
    // console.log("updatedParagraph: ", paragraphs[targetIndex]);
    // console.log("updatedCompany: ", companies[targetIndex]);
    // console.log("updatedImgSource: ", imgSources[targetIndex]);
    // console.log("updatedImgAlt: ", imgAlts[targetIndex]);

    // const res = await fetch(`http://localhost:3000/api/homeclient/${modelId}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     modelId: modelId,
    //     targetIndex: targetIndex,
    //     updatedName: names[targetIndex],
    //     updatedParagraph: paragraphs[targetIndex],
    //     updatedCompany: companies[targetIndex],
    //     updatedImgSource: imgSources[targetIndex],
    //     updatedImgAlt: imgAlts[targetIndex],
    //   }),
    // });

    // if (!res.ok) {
    //   throw new Error("Client data couldn't be updated");
    // }
    // if (res.ok) {
    //   router.push("/admin/home/homeclient");
    //   router.refresh();
    //   window.alert("homeclients model updated successfully");
    // }

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
    }
  };

  return (
    <>
      <div>
        <button className="btn bg-green-500 text-white fixed right-[5%] top-[5%]">
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
                        id="heading"
                        name="heading"
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
                      <label
                        for="username"
                        className="text-gray-600  font-bold"
                      >
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
