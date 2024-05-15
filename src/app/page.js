"use client";

import styles from "@/app/page.module.css";
import BrandSlider from "@/components/BrandSlider/BrandSlider";
import ClientsComments from "@/components/ClientSlider/ClientsComments";
import ClientsCommentsMD from "@/components/ClientSlider/ClientsCommentsMD";
import ClientsCommentsSM from "@/components/ClientSlider/ClientsCommentsSM";
import ClientsCommentsXL from "@/components/ClientSlider/ClientsCommentsXL";
import CreativeSlider from "@/components/CreativeSlider/CreativeSlider";
import CreativeSliderMD from "@/components/CreativeSlider/CreativeSliderMD";
import CreativeSliderSM from "@/components/CreativeSlider/CreativeSliderSM";
import CreativeSliderXL from "@/components/CreativeSlider/CreativeSliderXL";
import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import Hero from "@/components/Hero/Hero";
import HomeIntro from "@/components/HomeIntro/HomeIntro";
import TabContextMD_LG from "@/components/HomeTabIndex/TabContextMD_LG";
import TabContextSM from "@/components/HomeTabIndex/TabContextSM";
import TabContextXL from "@/components/HomeTabIndex/TabContextXL";
import TabContextXSM from "@/components/HomeTabIndex/TabContextXSM";
import Navbar from "@/components/Navbar/Navbar";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import emailjs from "@emailjs/browser";
import { useEmailJS } from "@/ContextAPI/EmailJSContextAPI";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import connectDB from "@/utils/db";

export default function Home() {
  const form = useRef();

  const { emailData, setEmailData } = useEmailJS();
  const [localData, setLocalData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailStatus, setEmailStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();

  const handleMyQuote = (data) => {
    console.log("Your name is: ", data.name);
    console.log("Your email is: ", data.email);
    console.log("Your phone is: ", data.phone);
    console.log("Your message is: ", data.message);

    setLocalData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    //implement email js here
    emailjs
      .sendForm(
        "service_d2jkicu",
        "template_jcd7rrq",
        form.current,
        "cdQJMV8uBJzxi8V29"
      )
      .then(
        (result) => {
          console.log(result.text, "send successfully");
          alert(result.text, "send successfully");
          setEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setEmailStatus(false);
        }
      );

    //call the reset form based on the response from email js
    if (setEmailStatus) {
      reset();
    }
  };

  useEffect(() => {
    // Update emailData directly
    setEmailData(localData);
  }, [localData, setEmailData]); // ========== setEmailData added as dependency array =========

  useEffect(() => {
    //console.log("After form submission: ");
    //console.log(emailData);
  }, [emailData]);

  const senderNameFormatted = JSON.stringify(emailData.name);

  const [data, setData] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getHeroData = async () => {
      const res = await fetch("http://localhost:3000/api/home_service_card", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // return console.log(res.json());
      const myJsonData = await res.json();
      setData(myJsonData);
    };

    getHeroData();
    setIsClient(true);
  }, []);

  //console.log(data[0]?.cardContents[0]);                        

  return (
    <div className={`${styles.container}`}>
      {/* this is get quote modal*/}

      <dialog id="getQuoteModal" className="modal">
        <div className="modal-box bg-[#ffffff]">
          <form method="dialog">
            <button className="btn btn-sm rounded-none bg-black text-white text-[20px] absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <div className="mb-[10px] w-[204px]">
              <Image
                src="/HomePageLogos/Logo.png"
                alt="Logo"
                className="w-[150px] mx-auto"
                width="204"
                height="58"
                layout="responsive"
              ></Image>
            </div>
            <form ref={form} onSubmit={handleSubmit(handleMyQuote)}>
              <input
                {...register("name", { required: true })}
                placeholder="Name*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[200px] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold">Name is required.</p>
              )}
              <input
                {...register("email", { required: true })}
                placeholder="Email*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[200px] pl-[5px] inline getFreeQuote"
              />
              {errors.email && (
                <p className="text-red-500 font-semibold">Email is required.</p>
              )}
              <input
                {...register("phone", { required: true })}
                placeholder="Phone*"
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[92%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.phone && (
                <p className="text-red-500 font-semibold">Phone is required.</p>
              )}
              <textarea
                {...register("message", { required: true })}
                placeholder="Message*"
                rows={5}
                cols={40}
                className="border my-[5px] py-[10px] rounded-md w-[100%] xl:w-[92%] xl:mx-[5px] pl-[5px] inline getFreeQuote"
              />
              {errors.message && (
                <p className="text-red-500 font-semibold">
                  Message is required.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-info rounded-md text-white py-[5px] px-[20px] ml-[5px]"
              >
                SEND
              </button>

              {isSubmitting || emailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                emailStatus ? (
                  <p className="text-green-500 font-semibold">
                    Hello {senderNameFormatted}, your email was sent
                    successfully!
                  </p>
                ) : (
                  <p className="text-red-500 font-semibold">
                    Hello {senderNameFormatted}, there was an error sending your
                    email. Please try again.
                  </p>
                )
              ) : null}
            </form>
          </div>
        </div>
      </dialog>

      <Navbar />
      <Hero />
      <div className="w-[98vw] mx-auto overflow-hidden">
        <HomeIntro />
      </div>
      <div className="sm:hidden overflow-x-hidden">
        <TabContextXSM />
      </div>
      <div className="hidden sm:block md:hidden overflow-x-hidden">
        {/* For small device only 640px to 767px */}
        <TabContextSM />
      </div>
      <div className="hidden md:block xl:hidden overflow-x-hidden">
        {/* For medium (768px to 1023px) and large devices(1024px to 1279px) */}
        <TabContextMD_LG />
      </div>
      <div className="hidden xl:block overflow-x-hidden">
        {/* For Extra Large Devices 1280px to upper */}
        <TabContextXL />
      </div>

      {/* ============ Section 5 starts from here ============= */}
      <div className="my-[25px] text-center w-[98vw] mx-auto">
        <span className="dmsans200 text-[24px] xl:text-[40px]">
          Why Choose Esaviour Limited to
          <span className=" text-sky-500 TabContextFontSpan2 font-bold">
            <br></br> Builds Your Brand?
          </span>
        </span>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row w-[90vw] xl:w-[80%] xl:mx-auto md:w-[90vw] md:mx-auto mx-auto overflow-x-hidden">
        {isClient ? (
          data[0]?.cardContents.map((c) => (
            <div key={c.id} className="basis-1/1 sm:basis-1/2">
              <ServiceCard props={c} />
            </div>
          ))
        ) : (
          <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
      </div>
      {/* ============ Section 5 ended here ============= */}

      {/* ================== section 6 (The Brands we have worked with) starts from here =====================*/}
      <div className="flex flex-wrap flex-col justify-center items-center mb-0 py-[20px] overflow-x-hidden">
        <div className="basis-1/1">
          <h1 className="text-center py-[20px] text-[24px] xl:text-[40px]">
            The Brands we have <br></br>
            <span className="text-sky-500 TabContextFontSpan2 font-bold">
              worked with
            </span>
          </h1>
        </div>
        <div className="basis-1/1">
          <div className="relative top-0 left-0 xl:h-[220px] pt-[50px] overflow-hidden">
            <BrandSlider />
            <div className="bg-sky-500 w-[300px] h-[90px] absolute top-[30px] left-[-140px] transform rotate-45 -z-10 hidden xl:block"></div>
            <div className="bg-sky-500 w-[300px] h-[90px] absolute top-[30px] right-[-100px] transform rotate-45 -z-10 hidden xl:block"></div>
          </div>
        </div>
      </div>

      {/* ================== section 6 (The Brands we have worked with) ended here =====================*/}

      {/* ================== section 7 (A Glimpse into our Creative Universe) starts from here =====================*/}
      <div className="flex flex-wrap flex-col justify-center items-center mb-0 overflow-x-hidden">
        <div className="basis-1/1">
          <h1 className="text-center py-[20px] TabContextFontSpan text-[24px] xl:text-[40px]">
            A Glimpse into our <br></br>
            <span className="text-sky-500 TabContextFontSpan2">
              Creative Universe
            </span>
          </h1>
        </div>
      </div>
      <div className="sm:hidden overflow-x-hidden">
        {/* For extra Small */}
        <CreativeSlider />
      </div>
      <div className="hidden sm:block md:hidden overflow-x-hidden">
        {/* For small device */}
        <CreativeSliderSM />
      </div>
      <div className="hidden md:block lg:hidden xl:hidden overflow-x-hidden">
        {/* for md  devices */}
        <CreativeSliderMD />
      </div>
      <div className="hidden lg:block xl:block overflow-x-hidden">
        {/* for lg and xlg device */}
        <CreativeSliderXL />
      </div>
      {/* ================== section 7 (A Glimpse into our Creative Universe) ended here here =====================*/}

      {/* ================== section 8 (Clients Comments) start from here =====================*/}
      <div className="sm:hidden overflow-x-hidden">
        {/* For extra small device */}
        <ClientsComments />
      </div>
      <div className="hidden sm:block md:hidden overflow-x-hidden">
        {/* For small device */}
        <ClientsCommentsSM />
      </div>
      <div className="hidden md:block xl:hidden overflow-x-hidden">
        {/* For md and lg device */}
        <ClientsCommentsMD />
      </div>
      <div className="hidden xl:block overflow-x-hidden">
        {/* For xl device */}
        <ClientsCommentsXL />
      </div>

      {/* ================== section 8 (Clients Comments) ended here =====================*/}

      <div className="w-[98vw] mx-auto overflow-hidden mt-[0px]">
        <Footer1 />
      </div>
      <div className="w-[98vw] mx-auto overflow-hidden">
        <Footer2 />
      </div>
    </div>
  );
}
