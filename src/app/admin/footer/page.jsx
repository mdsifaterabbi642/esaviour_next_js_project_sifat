"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const FooterAdminPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [imgSrc, setImgSrc] = useState([]);
  const [imgAlt, setImgAlt] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [stat, setStat] = useState([]);
  const [heading, setHeading] = useState([]);
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");
  const [qlink, setQLink] = useState([]);
  const [legalLink, setLegalLink] = useState([]);
  const [socialImgSrc, setSocialImgSrc] = useState([]);
  const [socialImgAlt, setSocialImgAlt] = useState([]);
  const [socialLink, setSocialLink] = useState([]);
  const [paymentImgSrc, setPaymentImgSrc] = useState([]);
  const [paymentImgAlt, setPaymentImgAlt] = useState([]);
  const [paymentLink, setPaymentLink] = useState([]);

  const [targetIndex, setTargetIndex] = useState();
  const [selectedField, setSelectedField] = useState("");

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(`http://localhost:3000/api/footer`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching Heros data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //setting up state variables for default values for form
      setImgSrc(myJsonData[0]?.footer1Upper.map((item, index) => item.imgSrc));
      setImgAlt(myJsonData[0]?.footer1Upper.map((item, index) => item.imgAlt));

      setParagraph(myJsonData[0]?.footer1Lower[0]?.paragraph);
      setButtonText(myJsonData[0]?.footer1Lower[0]?.buttonText);

      setStat(myJsonData[0]?.footer2Upper.map((item, index) => item.stat));
      setHeading(
        myJsonData[0]?.footer2Upper.map((item, index) => item.heading)
      );

      setLogo(myJsonData[0]?.footer2LowerLeft[0]?.logo);
      setDescription(myJsonData[0]?.footer2LowerLeft[0]?.description);

      setQLink(
        myJsonData[0]?.footer2QuickLink.map((item, index) => item.qlink)
      );

      setLegalLink(
        myJsonData[0]?.footer2Legal.map((item, index) => item.legalLink)
      );

      setSocialImgSrc(
        myJsonData[0]?.footer2SocialIcons.map(
          (item, index) => item.socialImgSrc
        )
      );
      setSocialImgAlt(
        myJsonData[0]?.footer2SocialIcons.map(
          (item, index) => item.socialImgAlt
        )
      );
      setSocialLink(
        myJsonData[0]?.footer2SocialIcons.map((item, index) => item.socialLink)
      );

      setPaymentImgSrc(
        myJsonData[0]?.footer2PaymentIcons.map(
          (item, index) => item.paymentImgSrc
        )
      );

      setPaymentImgAlt(
        myJsonData[0]?.footer2PaymentIcons.map(
          (item, index) => item.paymentImgAlt
        )
      );

      setPaymentLink(
        myJsonData[0]?.footer2PaymentIcons.map(
          (item, index) => item.paymentLink
        )
      );
    };

    getHeroData();

    setIsClient(true);
  }, []);

  //console.log("=== ", data[0]?.footer1Upper);
  //console.log("=== ", data[0]?.footer1Upper[0]?.imgSrc);
  //console.log("paragraph: ", paragraph);
  //console.log("buttonText: ", buttonText);
  //console.log("Stat: ", stat);
  //console.log("Heading: ", heading);
  //console.log("logo: ", logo);
  //console.log("description: ", description);
  //console.log("=== ", qlink);
  //console.log("=== ", legalLink);
  //   console.log("socialImgSrc: ", socialImgSrc);
  //   console.log("socialImgAlt: ", socialImgAlt);
  //   console.log("socialLink: ", socialLink);
  //   console.log("paymentImgSrc: ", paymentImgSrc);
  //   console.log("paymentImgAlt: ", paymentImgAlt);
  //   console.log("paymentLink: ", paymentLink);

  const footer1Upper = async (e) => {
    e.preventDefault();
    console.log("footer1Upper Function!");
    // console.log("imgSrc: ", imgSrc);
    // console.log("imgAlt: ", imgAlt);
    // console.log("Target index: ", targetIndex);
    //console.log(imgSrc[targetIndex]);
    //console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer1Upper` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer1Upper") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          imgSrc: imgSrc[targetIndex],
          imgAlt: imgAlt[targetIndex],
          targetIndex: targetIndex,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer1Upper in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer1Upper in Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer1Lower = async (e) => {
    e.preventDefault();
    console.log("footer1Lower Function!");
    // console.log("paragraph: ", paragraph);
    // console.log("buttonText: ", buttonText);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer1Lower` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer1Lower") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          paragraph: paragraph,
          buttonText: buttonText,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer1Lower in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer1Lower in Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer2Upper = async (e) => {
    e.preventDefault();
    console.log("footer2Upper Function!");
    // console.log("stat: ", stat);
    // console.log("heading: ", heading);
    // console.log("Target index: ", targetIndex);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer2Upper` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer2Upper") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          stat: stat[targetIndex],
          heading: heading[targetIndex],
          targetIndex: targetIndex,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer2Upper in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer2Upper in Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer2LowerLeft = async (e) => {
    e.preventDefault();
    console.log("footer2LowerLeft Function!");
    // console.log("logo: ", logo);
    // console.log("description: ", description);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer2LowerLeft` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer2LowerLeft") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          logo: logo,
          description: description,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer2LowerLeft in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer2LowerLeft in Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer2QuickLink = async (e) => {
    e.preventDefault();
    console.log("footer2QuickLink Function!");
    // console.log("qlink: ", qlink);
    // console.log("Target index: ", targetIndex);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer2QuickLink` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer2QuickLink") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          qlink: qlink[targetIndex],
          targetIndex: targetIndex,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer2QuickLink in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer2QuickLink in Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer2Legal = async (e) => {
    e.preventDefault();
    console.log("footer2Legal Function!");
    // console.log("legalLink: ", legalLink);
    // console.log("Target index: ", targetIndex);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer2Legal` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer2Legal") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          legalLink: legalLink[targetIndex],
          targetIndex: targetIndex,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer2Legal in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer2Legalin Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer2SocialIcons = async (e) => {
    e.preventDefault();
    console.log("footer2SocialIcons Function!");
    // console.log("socialImgSrc: ", socialImgSrc);
    // console.log("socialImgAlt: ", socialImgAlt);
    // console.log("socialLink: ", socialLink);
    // console.log("Target index: ", targetIndex);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer2SocialIcons` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer2SocialIcons") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          socialImgSrc: socialImgSrc[targetIndex],
          socialImgAlt: socialImgAlt[targetIndex],
          socialLink: socialLink[targetIndex],
          targetIndex: targetIndex,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer2SocialIcons in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer2SocialIcons Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  const footer2PaymentIcons = async (e) => {
    e.preventDefault();
    console.log("footer2PaymentIcons Function!");
    // console.log("paymentImgSrc: ", paymentImgSrc);
    // console.log("paymentImgAlt: ", paymentImgAlt);
    // console.log("paymentLink: ", paymentLink);
    // console.log("Target index: ", targetIndex);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this footer2PaymentIcons` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this footer2PaymentIcons") {
      const res = await fetch("http://localhost:3000/api/footer", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          paymentImgSrc: paymentImgSrc[targetIndex],
          paymentImgAlt: paymentImgAlt[targetIndex],
          paymentLink: paymentLink[targetIndex],
          targetIndex: targetIndex,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update footer2PaymentIcons in Footer model");
      }
      if (res.ok) {
        router.push("/admin/footer");
        router.refresh();
        window.alert("footer2PaymentIcons Footer model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  return (
    <div className="h-screen overflow-y-auto py-[100px]">
      <h1>Footer admin page</h1>

      {/* footer1Upper starts ======== */}

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center border-2 py-[10px]">
          {data[0]?.footer1Upper?.map((item, index) => (
            <div key={index} className="w-[250px]">
              <div className="w-[250px] mx-auto">
                <form
                  onSubmit={footer1Upper}
                  className="w-[98%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <h1 className="badge badge-info rounded-none">
                      footer1Upper
                    </h1>
                    <div className="w-[80%] mx-auto">
                      <label
                        for="imgSrc"
                        className="text-gray-600  font-bold text-xl"
                      >
                        imgSrc:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="imgSrc"
                          name="imgSrc"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={imgSrc[index]}
                          onChange={(e) => {
                            const updatedImgSrc = imgSrc.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setImgSrc(updatedImgSrc);
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
                        for="imgAlt"
                        className="text-gray-600  font-bold text-xl"
                      >
                        imgAlt:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="imgAlt"
                          name="imgAlt"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={imgAlt[index]}
                          onChange={(e) => {
                            const updatedImgAlt = imgAlt.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setImgAlt(updatedImgAlt);
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setSelectedField("footer1Upper");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer1Lower starts ============= */}

      {isClient ? (
        <div className="w-[250px] mx-auto mt-[20px] border-2 py-[10px]">
          <form
            onSubmit={footer1Lower}
            className="w-[98%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <h1 className="badge badge-info rounded-none">footer1Lower</h1>
              <div className="w-[80%] mx-auto">
                <label
                  for="paragraph"
                  className="text-gray-600  font-bold text-xl"
                >
                  paragraph:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="paragraph"
                    name="paragraph"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
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
                  for="buttonText"
                  className="text-gray-600  font-bold text-xl"
                >
                  buttonText:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="imgAlt"
                    name="imgAlt"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
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

              <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                <div>
                  <button
                    onClick={() => setSelectedField("footer1Lower")}
                    className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer2Upper starts ============= */}
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center border-2 py-[10px]">
          {data[0]?.footer2Upper?.map((item, index) => (
            <div key={index} className="w-[250px]">
              <div className="w-[250px] mx-auto">
                <form
                  onSubmit={footer2Upper}
                  className="w-[98%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <h1 className="badge badge-info rounded-none">
                      footer2Upper
                    </h1>
                    <div className="w-[80%] mx-auto">
                      <label
                        for="stat"
                        className="text-gray-600  font-bold text-xl"
                      >
                        stat:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="stat"
                          name="stat"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={stat[index]}
                          onChange={(e) => {
                            const updatedStat = stat.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setStat(updatedStat);
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
                        for="heading"
                        className="text-gray-600  font-bold text-xl"
                      >
                        heading:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="heading"
                          name="heading"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={heading[index]}
                          onChange={(e) => {
                            const updatedHeading = heading.map((item, i) =>
                              index === i ? e.target.value : item
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setSelectedField("footer2Upper");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer2LowerLeft starts ============= */}

      {isClient ? (
        <div className="w-[250px] mx-auto mt-[20px] border-2 py-[10px]">
          <form
            onSubmit={footer2LowerLeft}
            className="w-[98%] mx-auto border-2 border-slate-400"
          >
            <div className="flex flex-col flex-wrap">
              <h1 className="badge badge-info rounded-none">
                footer2LowerLeft
              </h1>
              <div className="w-[80%] mx-auto">
                <label for="logo" className="text-gray-600  font-bold text-xl">
                  logo:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="logo"
                    name="logo"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
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
                  for="description"
                  className="text-gray-600  font-bold text-xl"
                >
                  description:
                </label>
                {isClient ? (
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

              <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                <div>
                  <button
                    onClick={() => setSelectedField("footer2LowerLeft")}
                    className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer2QuickLink starts ============= */}
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center border-2 py-[10px]">
          {data[0]?.footer2QuickLink?.map((item, index) => (
            <div key={index} className="w-[250px]">
              <div className="w-[250px] mx-auto">
                <form
                  onSubmit={footer2QuickLink}
                  className="w-[98%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <h1 className="badge badge-info rounded-none">
                      footer2QuickLink
                    </h1>
                    <div className="w-[80%] mx-auto">
                      <label
                        for="qlink"
                        className="text-gray-600  font-bold text-xl"
                      >
                        qlink:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="qlink"
                          name="qlink"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={qlink[index]}
                          onChange={(e) => {
                            const updatedQLINK = qlink.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setQLink(updatedQLINK);
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setSelectedField("footer2QuickLink");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer2Legal starts ============= */}
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center border-2 py-[10px]">
          {data[0]?.footer2Legal?.map((item, index) => (
            <div key={index} className="w-[250px]">
              <div className="w-[250px] mx-auto">
                <form
                  onSubmit={footer2Legal}
                  className="w-[98%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <h1 className="badge badge-info rounded-none">
                      footer2Legal
                    </h1>
                    <div className="w-[80%] mx-auto">
                      <label
                        for="legalLink"
                        className="text-gray-600  font-bold text-xl"
                      >
                        legalLink:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="legalLink"
                          name="legalLink"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={legalLink[index]}
                          onChange={(e) => {
                            const updatedLLINK = legalLink.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setLegalLink(updatedLLINK);
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setSelectedField("footer2Legal");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer2SocialIcons starts ============= */}
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center border-2 py-[10px]">
          {data[0]?.footer2SocialIcons?.map((item, index) => (
            <div key={index} className="w-[250px]">
              <div className="w-[250px] mx-auto">
                <form
                  onSubmit={footer2SocialIcons}
                  className="w-[98%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <h1 className="badge badge-info rounded-none">
                      footer2SocialIcons
                    </h1>
                    <div className="w-[80%] mx-auto">
                      <label
                        for="socialImgSrc"
                        className="text-gray-600  font-bold text-xl"
                      >
                        socialImgSrc:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="socialImgSrc"
                          name="socialImgSrc"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={socialImgSrc[index]}
                          onChange={(e) => {
                            const updatedSLink = socialImgSrc.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setSocialImgSrc(updatedSLink);
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
                        for="socialImgAlt"
                        className="text-gray-600  font-bold text-xl"
                      >
                        socialImgAlt:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="socialImgAlt"
                          name="socialImgAlt"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={socialImgAlt[index]}
                          onChange={(e) => {
                            const updatedAlt = socialImgAlt.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setSocialImgAlt(updatedAlt);
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
                        for="socialLink"
                        className="text-gray-600  font-bold text-xl"
                      >
                        socialLink:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="socialLink"
                          name="socialLink"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={socialLink[index]}
                          onChange={(e) => {
                            const updatedSLink = socialLink.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setSocialLink(updatedSLink);
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setSelectedField("footer2SocialIcons");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {/* footer2PaymentIcons starts ============= */}
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center border-2 py-[10px]">
          {data[0]?.footer2PaymentIcons?.map((item, index) => (
            <div key={index} className="w-[250px]">
              <div className="w-[250px] mx-auto">
                <form
                  onSubmit={footer2PaymentIcons}
                  className="w-[98%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <h1 className="badge badge-info rounded-none">
                      footer2PaymentIcons
                    </h1>
                    <div className="w-[80%] mx-auto">
                      <label
                        for="paymentImgSrc"
                        className="text-gray-600  font-bold text-xl"
                      >
                        paymentImgSrc:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="paymentImgSrc"
                          name="paymentImgSrc"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={paymentImgSrc[index]}
                          onChange={(e) => {
                            const updatedPIS = paymentImgSrc.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setPaymentImgSrc(updatedPIS);
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
                        for="paymentImgAlt"
                        className="text-gray-600  font-bold text-xl"
                      >
                        paymentImgAlt:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="paymentImgAlt"
                          name="paymentImgAlt"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={paymentImgAlt[index]}
                          onChange={(e) => {
                            const updatedPIA = paymentImgAlt.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setPaymentImgAlt(updatedPIA);
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
                        for="paymentLink"
                        className="text-gray-600  font-bold text-xl"
                      >
                        paymentLink:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="paymentLink"
                          name="paymentLink"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={paymentLink[index]}
                          onChange={(e) => {
                            const updatedPL = paymentLink.map((item, i) =>
                              index === i ? e.target.value : item
                            );
                            setPaymentLink(updatedPL);
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

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setSelectedField("footer2PaymentIcons");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
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
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default FooterAdminPage;
