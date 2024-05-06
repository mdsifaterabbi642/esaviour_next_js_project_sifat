"use client";
import Slider from "react-slick";
import "./AboutCustom.css";
import Image from "next/image";

const AboutSection_8 = () => {
  var settings = {
    //dots: false,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centeredItem: true,

    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };
  var settings_2 = {
    //fro extra small device
    dots: true,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centeredItem: true,

    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };
  var settings_3 = {
    //for small devices
    dots: true,
    // dotsClass: "custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centeredItem: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };

  var settings_5 = {
    // for medium device and large device

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centeredItem: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };

  return (
    <>
      {/* For Extra large Devices */}
      <div className="xl:w-[80vw] mx-auto xl:mt-[100px] hidden xl:block">
        <div>
          <Slider {...settings}>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Sifat Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Web Full Stack
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Abu_Naeem_Rabbi.png"
                      alt="Abu_Naeem_Rabbi.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Wahidur.png"
                      alt="Wahidur"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Nazma.png"
                      alt="Nazma.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* For extra small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] block sm:hidden">
        <div>
          <Slider {...settings_2}>
            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Sifat Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Web Full Stack
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Abu_Naeem_Rabbi.png"
                      alt="Abu_Naeem_Rabbi.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Wahidur.png"
                      alt="Wahidur"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Nazma.png"
                      alt="Nazma.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* For small Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden sm:block md:hidden">
        <div>
          <Slider {...settings_3}>
            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Abu_Naeem_Rabbi.png"
                      alt="Abu_Naeem_Rabbi.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Wahidur.png"
                      alt="Wahidur"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Nazma.png"
                      alt="Nazma.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Abu_Naeem_Rabbi.png"
                      alt="Abu_Naeem_Rabbi"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white xl:text-[22px] xl:font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem Rabbi
                  </h2>
                  <p
                    className="text-center text-white xl:text-[17px] xl:font-light xl:mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* For medium Devices */}
      <div className="w-[95vw] mx-auto mt-[30px] hidden md:block lg:hidden">
        <div>
          <Slider {...settings_5}>
            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%]  bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Sifat Rabbi
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Web Full Stack
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Abu_Naeem_Rabbi.png"
                      alt="Abu_Naeem_Rabbi.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Wahidur.png"
                      alt="Wahidur"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Nazma.png"
                      alt="Nazma.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white text-[14px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 xl:w-[180px] xl:h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* For large Devices */}
      <div className={`w-[80vw] mx-auto mt-[100px] hidden lg:block xl:hidden`}>
        <div>
          <Slider {...settings_5}>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Yeasin Ali
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Head Of Graphics Design
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Yeasin_Ali.png"
                      alt="Yeasin_Ali"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Sifat Rabbi
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Web Full Stack
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Abu_Naeem_Rabbi.png"
                      alt="Abu_Naeem_Rabbi.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Abu Naeem
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Wahidur.png"
                      alt="Wahidur"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Wahidur Rahman
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Jr. Web Developer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-[90%] bg-[#40b0fd] shadow-xl mx-auto">
                <figure>
                  <div className="w-[175px]">
                    <Image
                      src="/AboutPageLogos/Nazma.png"
                      alt="Nazma.png"
                      className="pt-[30px]"
                      width="175"
                      height="175"
                      layout="responsive"
                    />
                  </div>
                </figure>
                <div className="card-body relative top-0 left-0">
                  <h2
                    className="text-center text-white text-[22px] font-bold"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Nazma Akhter
                  </h2>
                  <p
                    className="text-center text-white text-[17px] font-light mt-[-10px]"
                    style={{
                      fontFamily: "Futura PT, sans-serif",
                    }}
                  >
                    Intern Graphics Designer
                  </p>
                  <div className="absolute bottom-[-30px] left-0 w-[180px] h-[180px]">
                    <Image
                      src="/AboutPageLogos/AboutPageWaterMark.png"
                      alt="AboutPageWaterMark"
                      width="179"
                      height="133"
                      layout="responsive"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutSection_8;
