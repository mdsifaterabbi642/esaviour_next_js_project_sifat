"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeServiceCardAdmin = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [image, setImage] = useState([]);
  const [heading, setHeading] = useState([]);
  const [paragraph, setParagraph] = useState([]);
  const [imageAlt, setImageAlt] = useState([]);
  const [targetCard, setTargetCard] = useState();

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
    };
    getHomeServiceCardData();
    setIsClient(true);
  }, []);

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
      //window.alert("Service Card Data updated successfully");
      let x = await res.json();
      window.alert(JSON.stringify(x));
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-3 justify-center">
          {data[0]?.cardContents.map((item, index) => (
            <div key={index}>
              <div className="">
                <form onSubmit={mySubmit}>
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[60%] mx-auto">
                      ID: {item?.id}
                      <label for="username">heading:</label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="heading"
                          name="heading"
                          className="text-black w-[98%] py-[20px] border text-center"
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
                    <div className="w-[60%] mx-auto">
                      <label for="username">paragraph:</label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="paragraph"
                          name="paragraph"
                          className="text-black w-[98%] py-[20px] border text-center"
                          value={paragraph[index]}
                          onChange={(e) => {
                            const updatedParagraph = paragraph.map((item, i) =>
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

                    <div className="w-[200px] mx-auto my-[50px] bg-green-500 text-center hover:cursor-pointer">
                      <button
                        onClick={() => setTargetCard(index)}
                        className="btn hover: cursor-pointer"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeServiceCardAdmin;
