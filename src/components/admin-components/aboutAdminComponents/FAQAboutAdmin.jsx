"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FAQAboutAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [FAQ_ImgSource, setImgSource] = useState("");
  const [FAQ_ImgAlt, setImgAlt] = useState("");
  const [FAQ_SubTitle, setSubtitle] = useState("");
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [targetSection, setTargetSection] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  // state variables for adding FAQ
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  //==========
  const [addFaqStatus, setAddFaqStatus] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState(false);

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
      //adding default values to the form through state variable
      setImgSource(myJsonData[0]?.AboutFAQSection[0]?.FAQ_ImgSource);
      setImgAlt(myJsonData[0]?.AboutFAQSection[0]?.FAQ_ImgAlt);
      setSubtitle(myJsonData[0]?.AboutFAQSection[0]?.FAQ_SubTitle);
      setQuestion(myJsonData[0]?.FAQLoop.map((item, i) => item.question));
      setAnswer(myJsonData[0]?.FAQLoop.map((item, i) => item.answer));
    };
    getFAQAboutAdminData();
    setIsClient(true);
  }, []);

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
      //adding default values to the form through state variable
      setImgSource(myJsonData[0]?.AboutFAQSection[0]?.FAQ_ImgSource);
      setImgAlt(myJsonData[0]?.AboutFAQSection[0]?.FAQ_ImgAlt);
      setSubtitle(myJsonData[0]?.AboutFAQSection[0]?.FAQ_SubTitle);
      setQuestion(myJsonData[0]?.FAQLoop.map((item, i) => item.question));
      setAnswer(myJsonData[0]?.FAQLoop.map((item, i) => item.answer));
    };
    getFAQAboutAdminData();
    setIsClient(true);
  }, [addFaqStatus, deletionStatus]);

  const faqSubmit1 = async (e) => {
    e.preventDefault();
    // console.log("clicked faqSubmit1 function");
    // console.log("FAQ_SubTitle: ", FAQ_SubTitle);
    // console.log("FAQ_ImgSource: ", FAQ_ImgSource);
    // console.log("FAQ_ImgAlt: ", FAQ_ImgAlt);

    const decision = window.prompt(
      "Type `update 100 on 100` to update or type `cancel` to cancel the operation"
    );

    if (decision === "update 100 on 100") {
      console.log("You choosed to update");
      const id = data[0]?._id;

      const res = await fetch(`http://localhost:3000/api/about/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          FAQ_SubTitle,
          FAQ_ImgSource,
          FAQ_ImgAlt,
        }),
      });

      if (!res.ok) {
        throw new Error("About data of About page couldn't be updated");
      }
      if (res.ok) {
        router.push("/admin/about");
        router.refresh();
        window.alert("About Model updated successfully");
      }
    } else if (decision === "cancel") {
      console.log("You choosed to cancel the operation");
    } else {
      console.log("Invalid request");
    }
  };

  const faqSubmit2 = async (e) => {
    e.preventDefault();
    // console.log("Clicked faqSubmit2 function");
    // console.log("Question: ", question);
    // console.log("Answer: ", answer);

    if (selectedAction === "update") {
      const decision = window.prompt(
        "Type `update 100 on 100` to update or type `cancel` to cancel the operation"
      );

      if (decision === "update 100 on 100") {
        console.log("You choosed to update");
        const id = data[0]?._id;

        const res = await fetch(
          `http://localhost:3000/api/about/update/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              question,
              answer,
              targetIndex,
              targetSection,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("About data of About page couldn't be updated");
        }
        if (res.ok) {
          router.push("/admin/about");
          router.refresh();
          window.alert("About Model updated successfully");
        }
      } else if (decision === "cancel") {
        console.log("You choosed to cancel the operation");
      } else {
        console.log("Invalid request");
      }
    }
    if (selectedAction === "delete") {
      const confirm = window.prompt(
        "Type `delete this FAQ` to delete or type `cancel` to cancel the operation"
      );
      if (confirm === "delete this FAQ") {
        // console.log("You choose to delete");
        // console.log("TargetSection: ", targetSection, "type of: ", typeof targetSection);
        // console.log("TargetIndex: ", targetIndex, "type of: ", typeof targetIndex);

        console.log("You choosed to delete");
        const id = data[0]?._id;

        const res = await fetch(`http://localhost:3000/api/about/faq/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            targetIndex: targetIndex,
            targetSection: targetSection,
          }),
        });

        if (!res.ok) {
          throw new Error("FAQ data of About page couldn't be deleted");
        }
        if (res.ok) {
          router.push("/admin/about");
          router.refresh();
          window.alert("FAQ of About Model deleted successfully");
        }
        setDeletionStatus(true);
      } else if (confirm === "cancel") {
        console.log("You have cancelled the operation");
      } else {
        console.log("Invalid request");
      }
    }
  };

  const addFAQ = async (e) => {
    try {
      e.preventDefault();

      const confirm = window.prompt(
        "Are you sure to add this? Type `yes i am sure` to proceed or type `cancel` to cancel the operation"
      );

      if (confirm === "yes i am sure") {
        // console.log("Clicked addFAQ function");
        // console.log("newQuestion: ", newQuestion);
        // console.log("newAnswer: ", newAnswer);

        const id = data[0]?._id;

        const res = await fetch(`http://localhost:3000/api/about/faq/${id}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newQuestion: newQuestion,
            newAnswer: newAnswer,
          }),
        });

        if (!res.ok) {
          throw new Error("About data of About page couldn't be updated");
        }
        if (res.ok) {
          router.push("/admin/about");
          router.refresh();
          window.alert("About Model FAQ added successfully");
        }
        setAddFaqStatus(true);
      } else if (confirm === "cancel") {
        console.log("You cancelled the operation");
      } else {
        console.log("Invalid request");
      }
    } catch (error) {
      throw new Error("Error occurred in addFAQ function");
    }
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-gray-500 text-[26px] pt-[50px] pb-[20px]">
        Section: FAQ ⚙👇👇👇
      </h1>

      {isClient ? (
        <div className="border px-[5px] py-[5px] flex flex-row gap-3 bg-base-100 shadow-xl">
          <div className="w-[90%] mx-auto">
            <form
              onSubmit={faqSubmit1}
              className="w-[90%] mx-auto border-2 border-slate-400"
            >
              <div className="flex flex-col flex-wrap">
                <div className="w-[80%] mx-auto">
                  <label
                    for="subtitle"
                    className="text-gray-600  font-bold text-xl"
                  >
                    FAQ_SubTitle
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="subtitle"
                      name="subtitle"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={FAQ_SubTitle}
                      onChange={(e) => setSubtitle(e.target.value)}
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
                    for="imgSource"
                    className="text-gray-600  font-bold text-xl"
                  >
                    FAQ_ImgSource
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="imgSource"
                      name="imgSource"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={FAQ_ImgSource}
                      onChange={(e) => setImgSource(e.target.value)}
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
                    for="imgAlt"
                    className="text-gray-600  font-bold text-xl"
                  >
                    FAQ_ImgAlt
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="imgAlt"
                      name="imgAlt"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={FAQ_ImgAlt}
                      onChange={(e) => setImgAlt(e.target.value)}
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

                <div className="mx-auto my-[20px] text-center hover:cursor-pointer">
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}

      <div className="mt-[50px] relative left-[90%] top-0">
        <button
          onClick={() => document.getElementById("FAQ__modal").showModal()}
          className="btn btn-sm bg-green-500"
        >
          Add
        </button>
      </div>

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center mt-[20px]">
          {data[0]?.FAQLoop?.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] bg-base-100 shadow-xl">
                <div className=" py-[10px] px-[10px]">
                  <form
                    onSubmit={faqSubmit2}
                    className="w-[90%] mx-auto border-2 border-slate-400"
                  >
                    <div className="flex flex-col flex-wrap">
                      <div className="w-[80%] mx-auto">
                        <label
                          for="question"
                          className="text-gray-600  font-bold text-xl"
                        >
                          Question:
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="question"
                            name="question"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={question[index]}
                            onChange={(e) => {
                              const updatedQuestion = question.map((item, i) =>
                                index === i ? e.target.value : item
                              );
                              setQuestion(updatedQuestion);
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
                          for="answer"
                          className="text-gray-600  font-bold text-xl"
                        >
                          Answer:
                        </label>
                        {isClient ? (
                          <textarea
                            type="text"
                            id="answer"
                            name="answer"
                            className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                            value={answer[index]}
                            onChange={(e) => {
                              const updatedAnswer = answer.map((item, i) =>
                                index === i ? e.target.value : item
                              );
                              setAnswer(updatedAnswer);
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

                      <div className=" my-[20px] flex justify-between mx-[25px]">
                        <div>
                          <button
                            onClick={() => {
                              setTargetSection("FAQLoop");
                              setTargetIndex(index);
                              setSelectedAction("update");
                            }}
                            className="btn btn-sm bg-[#000080] text-white hover:bg-orange-500 hover: cursor-pointer"
                          >
                            Update
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setTargetSection("FAQLoop");
                              setTargetIndex(index);
                              setSelectedAction("delete");
                            }}
                            className="btn btn-sm bg-red-500 text-white hover:bg-red-700 hover: cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}

      <dialog id="FAQ__modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add FAQ</h3>
          <div>
            <form onSubmit={addFAQ}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label for="question" className="text-gray-600  font-bold">
                    Question:
                  </label>
                  <textarea
                    type="text"
                    id="question"
                    name="question"
                    placeholder="add question"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label for="answer" className="text-gray-600  font-bold">
                    Answer:
                  </label>
                  <textarea
                    type="text"
                    id="answer"
                    name="answer"
                    placeholder="add answer"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[200px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
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

export default FAQAboutAdmin;
