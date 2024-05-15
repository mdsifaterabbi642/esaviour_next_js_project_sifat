"use client";

import { model } from "mongoose";
import { useEffect, useState } from "react";

const HomeTabContentAdmin = () => {
  const [isClient, setIsClient] = useState(false);
  const [amazonData, setAmazonData] = useState([]);
  const [webData, setWebData] = useState([]);
  const [digitalMarketingData, setDigitalmarketingData] = useState([]);
  const [graphicsData, setGraphicsData] = useState();
  const [modelID, setModelID] = useState("");

  useEffect(() => {
    const fetchID = async () => {
      // fetch _id from database

      const resID = await fetch("http://localhost:3000/api/service", {
        cache: "no-store",
      });

      if (!resID.ok) {
        throw new Error("Failed to fetch data");
      }

      const myModelID = await resID.json();
      setModelID(myModelID[0]?._id);
    };
    fetchID();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch amazonFBA data
      if (modelID) {
        const amazonResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/amazonFBA`,
          {
            cache: "no-store",
          }
        );
        if (!amazonResponse.ok) {
          throw new Error("Failed to fetch amazon data data");
        }

        const myAmazonData = await amazonResponse.json();
        setAmazonData(myAmazonData);

        //fetching webDevelopment data
        const webResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/webDevelopment`,
          {
            cache: "no-store",
          }
        );
        if (!webResponse.ok) {
          throw new Error("Failed to fetch web data");
        }

        const myWebData = await webResponse.json();
        setWebData(myWebData);

        //fetching digitalmarketing data
        const marketingResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/digitalMarketing`,
          {
            cache: "no-store",
          }
        );
        if (!marketingResponse.ok) {
          throw new Error("Failed to fetch marketing data");
        }

        const myDigitalMarketingData = await marketingResponse.json();
        setDigitalmarketingData(myDigitalMarketingData);

        //fetching graphicsDesign data
        const graphicsResponse = await fetch(
          `http://localhost:3000/api/service/${modelID}/graphicsDesign`,
          {
            cache: "no-store",
          }
        );
        if (!graphicsResponse.ok) {
          throw new Error("Failed to fetch graphics data");
        }

        const myGraphicsData = await graphicsResponse.json();
        setGraphicsData(myGraphicsData);
      }
      setIsClient(true);
    };

    fetchData();
  }, [modelID]);

  console.log(modelID);
  // console.log(amazonData);
  // console.log(webData);
  // console.log(digitalMarketingData);
  // console.log(graphicsData);

  return (
    <div className="py-[100px] h-screen overflow-y-auto">
      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {amazonData?.map((amaItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-primary">{amaItem?.category}</div>
                <div className="card-body">
                  <h2 className="card-title">{amaItem?.heading}</h2>
                  <h3>{amaItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
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

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {webData?.map((webItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-accent">{webItem?.category}</div>
                <div className="card-body">
                  <h2 className="card-title">{webItem?.heading}</h2>
                  <h3>{webItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
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

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {digitalMarketingData?.map((marketingItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-info">
                  {marketingItem?.category}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{marketingItem?.heading}</h2>
                  <h3>{marketingItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
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

      {isClient ? (
        <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
          {graphicsData?.map((graphicsItem, index) => (
            <div key={index}>
              <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
                <div className="badge badge-warning">
                  {graphicsItem?.category}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{graphicsItem?.heading}</h2>
                  <h3>{graphicsItem?.description}</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
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

      {/* <div className="flex flex-row flex-wrap gap-2 my-[10px] justify-center">
        {graphicsData?.map((graphicsItem, index) => (
          <div key={index}>
            <div className="card w-[280px] min-h-[450px] max-h-[450px] overflow-y-auto bg-base-100 shadow-xl">
              <div className="badge badge-warning">
                {graphicsItem?.category}
              </div>
              <div className="card-body">
                <h2 className="card-title">{graphicsItem?.heading}</h2>
                <h3>{graphicsItem?.description}</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HomeTabContentAdmin;
