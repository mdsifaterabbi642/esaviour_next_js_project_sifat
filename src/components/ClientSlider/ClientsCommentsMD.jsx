"use client";
import Slider from "react-slick";
import "./ClientShadow.css";
import Image from "next/image";

const ClientsCommentsMD = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="text-center border w-[98vw] mx-auto bg-[#40b0fd] relative top-0 left-0">
        <h1 className="text-white text-[30px] pt-[30px] pb-[60px]">
          Clients Love Us
        </h1>
        <div className="absolute left-[-20px] top-[-20px] w-[100px] h-[100px]">
          <Image
            src="/HomePageLogos/client.png"
            alt="client"
            width="100"
            height="100"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className="mb-[100px] mt-[-100px]">
        <Slider {...settings} className="pt-[50px]">
          {clientCard.map((c) => (
            <div key={c.id} className="mb-[30px]">
              <div className="card card-side bg-white w-[70%] glass mx-auto">
                <figure className="pt-[20px] px-[30px] py-[20px]">
                  <div className="w-auto h-auto">
                    <Image
                      src={c.image}
                      alt="Mostafiz_Rana.jpeg"
                      width="400"
                      height="400"
                      layout="responsive"
                      className="w-[50%]"
                    />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title px-[0px]">{c.name}</h2>
                  <span className="pl-[0px] text-[12px] text-slate-900 font-bold">
                    {c.company}
                  </span>
                  <p className="pl-[0px] text-[17px]">{c.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ClientsCommentsMD;
