"use client";
// import { useEffect, useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { useEmailJS } from "../ContextAPI/EmailJSContextAPI";
// import { useForm } from "react-hook-form";
import Image from "next/image";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

const AboutHero = () => {
  //   const form = useRef();

  //   const { emailData, setEmailData } = useEmailJS();
  //   const [localData, setLocalData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });

  //   const [emailStatus, setEmailStatus] = useState(false);

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //     formState: { isSubmitting }, // Access isSubmitting property
  //   } = useForm();

  //   const handleMyQuoteAbout = (data) => {
  //     console.log("Your name is: ", data.name);
  //     console.log("Your email is: ", data.email);
  //     console.log("Your phone is: ", data.phone);
  //     console.log("Your message is: ", data.message);

  //     setLocalData({
  //       name: data.name,
  //       email: data.email,
  //       phone: data.phone,
  //       message: data.message,
  //     });

  //implement email js here
  // emailjs
  //   .sendForm(
  //     "service_d2jkicu",
  //     "template_jcd7rrq",
  //     form.current,
  //     "cdQJMV8uBJzxi8V29"
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text, "send successfully");
  //       alert(result.text, "send successfully");
  //       setEmailStatus(true);
  //     },
  //     (error) => {
  //       console.log(error.text, "didn't send");
  //       alert(error.text, "didn't send");
  //       setEmailStatus(false);
  //     }
  //   );

  //call the reset form based on the response from email js
  // if (setEmailStatus) {
  //   reset();
  // }
  //};

  //   useEffect(() => {
  //     // Update emailData directly
  //     setEmailData(localData);
  //   }, [localData]);

  //   useEffect(() => {
  //     console.log("After form submission: ");
  //     console.log(emailData);
  //   }, [emailData]);

  //   const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <>
      {/* this is get quote modal for about hero*/}

      {/* <dialog id="getQuoteModalAbout" className="modal">
        <div className="modal-box bg-[#ffffff]">
          <form method="dialog">
            <button className="btn btn-sm rounded-none bg-black text-white text-[20px] absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <div className="mb-[10px]">
              <img
                src="../HomePageLogos/Logo.png"
                alt="Logo"
                className="w-[150px] mx-auto"
              ></img>
            </div>
            <form ref={form} onSubmit={handleSubmit(handleMyQuoteAbout)}>
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
      </dialog> */}
      <div className="flex flex-col md:flex-row bg-[#b3d9f8] pb-[50px] md:pb-[150px] md:pt-[50px] lg:pb-[50px]">
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 lg:mt-[0px] order-1 md:order-0 px-[10px] xl:mt-[0px]">
          <h1
            className="text-left font-extrabold pt-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] lg:leading-[40px] md:pt-[50px] lg:pt-[20px] md:pl-[5%] sm:pl-[5%] xl:pt-[50px] xl:pl-[20%] xl:text-[34px] xl:leading-[44px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            A Powerhouse in the Fast-Paced World of Digital Marketing. Offering
            Enhance Solutions for your B2B Digital Marketing Problems
          </h1>
          <p
            className="text-[12px] sm:text-[16px] sm:pl-[5%] sm:pr-[5%] md:text-[14px] md:pl-[5%] mt-[20px] mb-[10px] xl:pl-[20%] xl:pr-[200px] xl:text-[18px] xl:leading-[25px] font-bold xl:font-bold"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            eSAviour Limited is dedicated to empowering you to lead the industry
            with our comprehensive range of dynamic digital marketing services
            and solutions.
          </p>

          {/* ============== Only For XL devices ============= */}
          <div className="basis-1/1 hidden xl:block xl:w-[798px] xl:ml-[100px]">
            <div className="flex flex-row gap-3">
              <div className="basis-1/4 h-[100px] xl:text-end mt-[15px]">
                <button
                  className="btn rounded-none xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                //   onClick={() =>
                //     document.getElementById("getQuoteModalAbout").showModal()
                //   }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4 h-[100px] mt-[25px]">
                <p className="relative xl:text-[16px] xl:top-[20px]">
                  Over 3 Years of Experience in B2B Digital Marketing Services.
                  Helped 27+ Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>
          {/* =================== Only For XSM ,SM, MD, lg devices =================== */}
          <div className="basis-1/1 block xl:hidden mt-[30px]">
            <div className="flex flex-row gap-1">
              <div
                className="basis-1/4 bg-black text-white text-center hover:text-black hover:bg-orange-500 cursor-pointer relative
              top-0 left-0 transition duration-300 ease-linear"
              >
                <button
                  className="btn border-none w-full rounded-none text-[12px] sm:text-[12px] xl:text-[12px] bg-black hover:bg-orange-500 cursor-pointer text-white relative xl:top-[30px] transition duration-300 ease-linear"
                  //   onClick={() =>
                  //     document.getElementById("getQuoteModalAbout").showModal()
                  //   }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="basis-3/4">
                <p className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[5px] lg:px-[50px] md:hidden">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+ Brands to <br></br>Achieve Success.
                </p>
                <p className="relative text-[12px] top-[0px] font-semibold leading-[12px] pt-[5px] sm:pt-[9px] md:pt-[10px] lg:px-[50px] hidden md:block">
                  Over 3 Years of Experience in B2B Digital Marketing
                  Services.Helped 27+<br></br> Brands to Achieve Success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/2 lg:basis-1/2 flex justify-center items-center order-0 md:order-1 mt-[40px] pt-[20px] lg:mt-[50px] xl:text-center xl:pt-[0px]">
          <div className="w-[280px] sm:w-[300px] md:w-[350px] xl:w-[50%]">
            <Image
              src="/AboutPageLogos/About_Digital_Marketing.png"
              alt="About_Digital_Marketing.png"
              className="w-[280px] xl:w-[50%]"
              width="478"
              height="321"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
