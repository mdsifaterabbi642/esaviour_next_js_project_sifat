"use client";

import Slider from "react-slick";
import "./ClientShadow.css";
import Image from "next/image";

const ClientsCommentsXL = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const clientCard = [
    {
      id: 1,
      logo: "/HomePageLogos/client3.png",
      logo2: "/HomePageLogos/client2.png",
      image: "/clients/Mostafiz_Rana.jpeg",
      paragraph:
        "We wanted to design a website for our chauffeur business in Austin city. eSaviour Limited designed a simple and easy-to-use website for our company. We highly recommend them for web development.",
      name: "Mostafiz Rana",
      company: "UnitedCarry Imports LLC",
    },
    {
      id: 2,
      logo: "/HomePageLogos/client3.png",
      logo2: "/HomePageLogos/client2.png",
      image: "/clients/Robert2.jpg",
      paragraph:
        "eSaviour Limited helped us launch a new Amazon FBA product in the pest repeller category. They handled product photography, designed listing images, created EBC content, and also wrote an SEO-optimize title and bullet points for our product.",
      name: "Robert Cameron",
      company: "T3-R LLC",
    },
    {
      id: 3,
      logo: "/HomePageLogos/client3.png",
      logo2: "/HomePageLogos/client2.png",
      image: "/clients/Noor2.jpg",
      paragraph:
        "As a legal professional, I badly needed social media branding and content management for my law firm‘Noor & Co.’ eSaviour Limited helped me build the entire brand design from scratch.",
      name: "Barrister AKM NOOR A RABBI",
      company: "Noor & Co",
    },
  ];

  return (
    <>
      <div className="text-center border w-[60vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
        <h1 className="text-white text-[22px] xl:text-[64px] xl:pt-[50px] xl:pb-[160px]">
          Clients Love Us
        </h1>
        <div className="absolute left-[-20px] top-[-20px] xl:w-[200px] xl:h-[200px]">
          <Image
            src="/HomePageLogos/client.png"
            alt="client"
            width="100"
            height="100"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className="mb-[0px] w-[70vw] mx-auto relative xl:top-[-150px] xl:left-0 z-50">
        <Slider
          {...settings}
          className="pt-[0px]"
          autoplay={true} // Enables autoplay
          autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
        >
          {clientCard.map((c) => (
            <div key={c.id} className="mb-[30px] xl:w-[100%]">
              <div className="card card-side bg-white xl:w-[70%] xl:mx-auto myShadowDiv xl:relative xl:top-0 xl:left-0">
                <div className="absolute xl:bottom-[20px] xl:left-0 xl:w-[40%] xl:h-[30%]">
                  <Image
                    src={c.logo2}
                    alt="client2"
                    width="100"
                    height="100"
                    layout="responsive"
                  ></Image>
                </div>
                <div className="absolute xl:top-[20%] xl:left-[35%] xl:w-[80px] xl:h-[200px]">
                  <Image
                    src={c.logo}
                    alt="client3"
                    width="100"
                    height="100"
                    layout="responsive"
                  ></Image>
                </div>
                <figure className="px-[50px]">
                  <div className="w-[200px] h-auto relative top-0 left-0">
                    <Image
                      src={c.image}
                      alt="client image"
                      width="200"
                      height="200"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body xl:max-w-[500px] relative">
                  <p
                    className="spacegrotesk600 pt-[80px] xl:text-[17px] leading-[26px]"
                   
                  >
                    {c.paragraph}
                  </p>
                  <h2
                    className="relative font-bold left-[0px] top-[0px] xl:text-[25px] text-sky-500"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                      fontStyle: "normal",
                    }}
                  >
                    {c.name}
                  </h2>
                  <span
                    className="relative left-[0px] top-[0px] xl:text-[16px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    {c.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ClientsCommentsXL;
