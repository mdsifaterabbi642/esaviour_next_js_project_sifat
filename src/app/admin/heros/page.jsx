"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const HerosPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const [contactHeroTitle, setContactHeroTitle] = useState("");
  const [contactHeroSubTitle, setContactHeroSubTitle] = useState("");
  const [contactHeroImgSrc, setContactHeroImgSrc] = useState("");
  const [contactHeroImgAlt, setContactHeroImgAlt] = useState("");

  const [blogHeroTitle, setBlogHeroTitle] = useState("");
  const [blogHeroSubTitle, setBlogHeroSubTitle] = useState("");
  const [blogHeroImgSrc, setBlogHeroImgSrc] = useState("");
  const [blogHeroImgAlt, setBlogHeroImgAlt] = useState("");

  const [servicePageHeroTitle, setServicePageHeroTitle] = useState("");
  const [servicePageHeroSubTitle, setServicePageHeroSubTitle] = useState("");
  const [servicePageHeroImgSrc, setServicePageHeroImgSrc] = useState("");
  const [servicePageHeroImgAlt, setServicePageHeroImgAlt] = useState("");

  const [portfolioHeroTitle, setPortfolioHeroTitle] = useState("");
  const [portfolioHeroSubTitle, setPortfolioHeroSubTitle] = useState("");
  const [portfolioHeroImgSrc, setPortfolioHeroImgSrc] = useState("");
  const [portfolioHeroImgAlt, setPortfolioHeroImgAlt] = useState("");

  const [selectedField, setSelectedField] = useState("");

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch(`http://localhost:3000/api/hero`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error in fetching Heros data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);

      //setting up state variables for default values for form
      setContactHeroTitle(myJsonData[0]?.contactHero[0]?.title);
      setContactHeroSubTitle(myJsonData[0]?.contactHero[0]?.subTitle);
      setContactHeroImgSrc(myJsonData[0]?.contactHero[0]?.imgSrc);
      setContactHeroImgAlt(myJsonData[0]?.contactHero[0]?.imgAlt);

      setBlogHeroTitle(myJsonData[0]?.blogHero[0]?.title);
      setBlogHeroSubTitle(myJsonData[0]?.blogHero[0]?.subTitle);
      setBlogHeroImgSrc(myJsonData[0]?.blogHero[0]?.imgSrc);
      setBlogHeroImgAlt(myJsonData[0]?.blogHero[0]?.imgAlt);

      setServicePageHeroTitle(myJsonData[0]?.servicePageHero[0]?.title);
      setServicePageHeroSubTitle(myJsonData[0]?.servicePageHero[0]?.subTitle);
      setServicePageHeroImgSrc(myJsonData[0]?.servicePageHero[0]?.imgSrc);
      setServicePageHeroImgAlt(myJsonData[0]?.servicePageHero[0]?.imgAlt);

      setPortfolioHeroTitle(myJsonData[0]?.portfolioHero[0]?.title);
      setPortfolioHeroSubTitle(myJsonData[0]?.portfolioHero[0]?.subTitle);
      setPortfolioHeroImgSrc(myJsonData[0]?.portfolioHero[0]?.imgSrc);
      setPortfolioHeroImgAlt(myJsonData[0]?.portfolioHero[0]?.imgAlt);
    };

    getHeroData();

    setIsClient(true);
  }, []);

  //   console.log("=== ", data[0]);
  //console.log("=== ", data[0]?.contactHero);
  //console.log("=== ", data[0]?.blogHero);
  //console.log("=== ", data[0]?.servicePageHero);
  //console.log("=== ", data[0]?.portfolioHero);
  //console.log("=== ", contactHeroTitle);

  const updateContactHero = async (e) => {
    e.preventDefault();
    console.log("Clicked updateContactHero function");
    // console.log("=== ", contactHeroTitle);
    // console.log("=== ", contactHeroSubTitle);
    // console.log("=== ", contactHeroImgSrc);
    // console.log("=== ", contactHeroImgAlt);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this hero` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this hero") {
      const res = await fetch("http://localhost:3000/api/hero", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: contactHeroTitle,
          subTitle: contactHeroSubTitle,
          imgSrc: contactHeroImgSrc,
          imgAlt: contactHeroImgAlt,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Couldn't update contactHero in Hero model");
      }

      if (res.ok) {
        router.push("/admin/heros");
        router.refresh();
        window.alert("contactHero in Hero model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };
  const updateBlogHero = async (e) => {
    e.preventDefault();
    console.log("Clicked updateBlogHero function");
    // console.log("=== ", blogHeroTitle);
    // console.log("=== ", blogHeroSubTitle);
    // console.log("=== ", blogHeroImgSrc);
    // console.log("=== ", blogHeroImgAlt);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this hero` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this hero") {
      const res = await fetch("http://localhost:3000/api/hero", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: blogHeroTitle,
          subTitle: blogHeroSubTitle,
          imgSrc: blogHeroImgSrc,
          imgAlt: blogHeroImgAlt,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Couldn't update blogHero in Hero model");
      }

      if (res.ok) {
        router.push("/admin/heros");
        router.refresh();
        window.alert("blogHero in Hero model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };
  const updateServicePageHero = async (e) => {
    e.preventDefault();
    console.log("Clicked updateServicePageHero function");
    // console.log("=== ", servicePageHeroTitle);
    // console.log("=== ", servicePageHeroSubTitle);
    // console.log("=== ", servicePageHeroImgSrc);
    // console.log("=== ", servicePageHeroImgAlt);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this hero` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this hero") {
      const res = await fetch("http://localhost:3000/api/hero", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: servicePageHeroTitle,
          subTitle: servicePageHeroSubTitle,
          imgSrc: servicePageHeroImgSrc,
          imgAlt: servicePageHeroImgAlt,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Couldn't update servicePageHero in Hero model");
      }

      if (res.ok) {
        router.push("/admin/heros");
        router.refresh();
        window.alert("servicePageHero in Hero model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };
  const updatePortfolioHero = async (e) => {
    e.preventDefault();
    console.log("Clicked updatePortfolioHero function");
    // console.log("=== ", portfolioHeroTitle);
    // console.log("=== ", portfolioHeroSubTitle);
    // console.log("=== ", portfolioHeroImgSrc);
    // console.log("=== ", portfolioHeroImgAlt);
    // console.log("selectedField: ", selectedField);

    const decision = window.prompt(
      "Type `Update this hero` to update or type `Cancel` to cancel"
    );

    if (decision === "Update this hero") {
      const res = await fetch("http://localhost:3000/api/hero", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: portfolioHeroTitle,
          subTitle: portfolioHeroSubTitle,
          imgSrc: portfolioHeroImgSrc,
          imgAlt: portfolioHeroImgAlt,
          selectedField: selectedField,
        }),
      });

      if (!res.ok) {
        throw new Error("Couldn't update portfolioHero in Hero model");
      }

      if (res.ok) {
        router.push("/admin/heros");
        router.refresh();
        window.alert("portfolioHero in Hero model updated");
      }
    } else if (decision === "Cancel") {
      console.log("You have cancelled the operation");
    } else {
      console.log("Invalid operation");
    }
  };

  return (
    <div className="h-screen overflow-y-auto py-[100px]">
      <h1>Heros page</h1>
      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          <div className="w-[250px]">
            <div className="w-[250px] mx-auto">
              <form
                onSubmit={updateContactHero}
                className="w-[98%] mx-auto border-2 border-slate-400"
              >
                <div className="flex flex-col flex-wrap">
                  <h1 className="badge badge-info rounded-none">
                    Contact Hero
                  </h1>
                  <div className="w-[80%] mx-auto">
                    <label
                      for="title"
                      className="text-gray-600  font-bold text-xl"
                    >
                      title:
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="title"
                        name="title"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={contactHeroTitle}
                        onChange={(e) => setContactHeroTitle(e.target.value)}
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
                      for="subTitle"
                      className="text-gray-600  font-bold text-xl"
                    >
                      subTitle:
                    </label>
                    {isClient ? (
                      <textarea
                        type="text"
                        id="subTitle"
                        name="subTitle"
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={contactHeroSubTitle}
                        onChange={(e) => setContactHeroSubTitle(e.target.value)}
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
                        className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                        value={contactHeroImgSrc}
                        onChange={(e) => setContactHeroImgSrc(e.target.value)}
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
                        value={contactHeroImgAlt}
                        onChange={(e) => setContactHeroImgAlt(e.target.value)}
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
                        onClick={() => setSelectedField("contactHero")}
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
          <div className="w-[250px]">
            <form
              onSubmit={updateBlogHero}
              className="w-[98%] mx-auto border-2 border-slate-400"
            >
              <div className="flex flex-col flex-wrap">
                <h1 className="badge badge-info rounded-none">Blog Hero</h1>
                <div className="w-[80%] mx-auto">
                  <label
                    for="title"
                    className="text-gray-600  font-bold text-xl"
                  >
                    title:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="title"
                      name="title"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={blogHeroTitle}
                      onChange={(e) => setBlogHeroTitle(e.target.value)}
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
                    for="subTitle"
                    className="text-gray-600  font-bold text-xl"
                  >
                    subTitle:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="subTitle"
                      name="subTitle"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={blogHeroSubTitle}
                      onChange={(e) => setBlogHeroSubTitle(e.target.value)}
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
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={blogHeroImgSrc}
                      onChange={(e) => setBlogHeroImgSrc(e.target.value)}
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
                      value={blogHeroImgAlt}
                      onChange={(e) => setBlogHeroImgAlt(e.target.value)}
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
                      onClick={() => setSelectedField("blogHero")}
                      className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[250px]">
            <form
              onSubmit={updateServicePageHero}
              className="w-[98%] mx-auto border-2 border-slate-400"
            >
              <div className="flex flex-col flex-wrap">
                <h1 className="badge badge-info rounded-none">
                  servicePageHero
                </h1>
                <div className="w-[80%] mx-auto">
                  <label
                    for="title"
                    className="text-gray-600  font-bold text-xl"
                  >
                    title:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="title"
                      name="title"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={servicePageHeroTitle}
                      onChange={(e) => setServicePageHeroTitle(e.target.value)}
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
                    for="subTitle"
                    className="text-gray-600  font-bold text-xl"
                  >
                    subTitle:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="subTitle"
                      name="subTitle"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={servicePageHeroSubTitle}
                      onChange={(e) =>
                        setServicePageHeroSubTitle(e.target.value)
                      }
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
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={servicePageHeroImgSrc}
                      onChange={(e) => setServicePageHeroImgSrc(e.target.value)}
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
                      value={servicePageHeroImgAlt}
                      onChange={(e) => setServicePageHeroImgAlt(e.target.value)}
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
                      onClick={() => setSelectedField("servicePageHero")}
                      className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[250px]">
            <form
              onSubmit={updatePortfolioHero}
              className="w-[98%] mx-auto border-2 border-slate-400"
            >
              <div className="flex flex-col flex-wrap">
                <h1 className="badge badge-info rounded-none">portfolioHero</h1>
                <div className="w-[80%] mx-auto">
                  <label
                    for="title"
                    className="text-gray-600  font-bold text-xl"
                  >
                    title:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="title"
                      name="title"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={portfolioHeroTitle}
                      onChange={(e) => setPortfolioHeroTitle(e.target.value)}
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
                    for="subTitle"
                    className="text-gray-600  font-bold text-xl"
                  >
                    subTitle:
                  </label>
                  {isClient ? (
                    <textarea
                      type="text"
                      id="subTitle"
                      name="subTitle"
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={portfolioHeroSubTitle}
                      onChange={(e) => setPortfolioHeroSubTitle(e.target.value)}
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
                      className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[250px] border-none text-left bg-slate-600 text-white rounded-md"
                      value={portfolioHeroImgSrc}
                      onChange={(e) => setPortfolioHeroImgSrc(e.target.value)}
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
                      value={portfolioHeroImgAlt}
                      onChange={(e) => setPortfolioHeroImgAlt(e.target.value)}
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
                      onClick={() => setSelectedField("portfolioHero")}
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

export default HerosPage;
