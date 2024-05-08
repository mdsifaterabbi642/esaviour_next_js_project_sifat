"use client";

import styles from "@/components/Footer/Footer1.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEmailJS } from "@/ContextAPI/EmailJSContextAPI";

// email js service id: service_d2jkicu
//email js public key: cdQJMV8uBJzxi8V29
//email js private key: grt1gnZ0C2_7o__MtlImb
//email js template id: template_jcd7rrq

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Footer1 = () => {
  const form = useRef();
  const { emailData, setEmailData } = useEmailJS();
  const [isChecked, setIsChecked] = useState(false);
  const [localOrderData, setLocalOrderData] = useState({
    email: "",
  });
  const [orderEmailStatus, setOrderEmailStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitting }, // Access isSubmitting property
  } = useForm();

  const submitOrder = (data) => {
    console.log("Clicked submitOrder function xl");
    console.log(data);
    console.log(emailData);

    setLocalOrderData({
      //name: data.name,
      email: data.email,
      //phone: data.phone,
      //message: data.message,
      //productLink: data.productLink,
      //serviceCategory: data.serviceCategory,
      //selectedService: data.selectedService,
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
          setOrderEmailStatus(true);
        },
        (error) => {
          console.log(error.text, "didn't send");
          alert(error.text, "didn't send");
          setOrderEmailStatus(false);
        }
      );

    //call the reset form based on the response from email js
    if (setOrderEmailStatus) {
      reset();
    }
  };



  useEffect(() => {
    setEmailData(localOrderData);
  }, [localOrderData]);

  useEffect(() => {
    //console.log("After form submission: ");
    //console.log(emailData);
  }, [emailData]);

  const senderNameFormatted = JSON.stringify(emailData.name);

  return (
    <>
      <Slider
        {...settings}
        className="lg:w-[50vw] xl:w-[50vw] mx-auto"
        autoplay={true} // Enables autoplay
        autoplaySpeed={3000} // Sets the autoplay speed in milliseconds (optional)
      >
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] sm:min-h-[120px] xl:min-h-[200px]">
            <Image
              src="/footer/Clutch.png"
              alt="Clutch"
              width="120"
              height="60"
              className="w-[80px] mx-auto xl:w-[150px] mt-[15px] xl:mt-[35px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></Image>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] xl:min-h-[200px] sm:min-h-[120px]">
            <Image
              src="/footer/Google.png"
              alt="Google"
              width="120"
              height="60"
              className="w-[80px] mx-auto xl:w-[150px] mt-[20px] xl:mt-[50px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></Image>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] xl:min-h-[200px] sm:min-h-[120px]">
            <Image
              src="/footer/Trustppailot.png"
              alt="Trustppailot"
              width="120"
              height="60"
              className="w-[80px] mx-auto xl:w-[150px] mt-[20px] xl:mt-[50px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></Image>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] sm:min-h-[120px] xl:min-h-[200px]">
            <Image
              src="/footer/Clutch.png"
              alt="Clutch"
              width="120"
              height="60"
              className="w-[80px] mx-auto xl:w-[150px] mt-[15px] xl:mt-[35px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></Image>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] xl:min-h-[200px] sm:min-h-[120px]">
            <Image
              src="/footer/Google.png"
              alt="Google"
              width="120"
              height="60"
              className="w-[80px] mx-auto xl:w-[150px] mt-[20px] xl:mt-[50px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></Image>
          </div>
        </div>
        <div className="mb-[30px]">
          <div className="card w-[90%] glass mx-auto rounded-none min-h-[100px] xl:min-h-[200px] sm:min-h-[120px]">
            <Image
              src="/footer/Trustppailot.png"
              alt="Trustppailot"
              width="120"
              height="60"
              className="w-[80px] mx-auto xl:w-[150px] mt-[20px] xl:mt-[50px] xl:mx-auto sm:w-[100px] sm:mx-auto"
            ></Image>
          </div>
        </div>
      </Slider>
      {/* ========== only for extra small device ============= */}
      <div className="w-[95vw] sm:hidden mx-auto overflow-x-hidden">
        <div className="flex flex-col sm:hidden mb-[30px]">
          <div className="basis-1/1 bg-[##EEF7FF] border">
            {/* #EEF7FF */}
            <p className="text-center spacegrotesk500 text-[15px] leading-[16px] px-[5px] py-[10px]">
              Our Professional Team has helped Hundreds of Sellers on Amazon to
              Avoid Failure and Maximize Potential Growth. Schedule a Free
              Meeting Now!
            </p>
            <div className="pt-[10px] pb-[20px] text-center">
              <a
                href="#"
                className="py-[5px] px-[10px] bg-black text-white rounded-sm"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row">
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <p className="font-bold text-sm section_3_span">Or Direct</p>
                <p className="font-light text-xl text-[white] tracking-widest pr-[10px] section_3_span">
                  Message
                </p>
              </div>
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/WHatsapp.png"
                    alt="WHatsapp"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/Facebook.png"
                    alt="Facebook.png"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/LinkedIn.png"
                    alt="LinkedIn.png"
                    width="30"
                    height="30"
                    className="w-[35px] inline "
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-1/1 bg-[#ddf1ff] py-[10px]">
            <label className="input input-bordered flex items-center border-none rounded-none w-[90%] mx-auto">
              <input
                type="text"
                className="grow placeholder-slate-600 "
                placeholder="Your email address"
              />
              <button className="btn bg-[#40b0fd] btn-sm rounded-sm section_3_span text-white relative left-[-70px]">
                Submit
              </button>
            </label>
          </div>
        </div>
      </div>

      {/* ============ For small, medium and large devices ============ */}
      <div className="hidden sm:block xl:hidden w-[95vw] mx-auto overflow-x-hidden">
        <div className="flex flex-col mb-[30px]">
          <div className="basis-1/1 bg-[#EEF7FF]">
            <p className="spacegrotesk500 text-center text-[15px] px-[5px] py-[10px]">
              Our Professional Team has helped Hundreds of Sellers on Amazon to
              Avoid Failure and Maximize Potential Growth. Schedule a Free
              Meeting Now!
            </p>
            <div className="pt-[10px] pb-[20px] text-center">
              <a href="#" className="py-[5px] px-[10px] bg-black text-white">
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="basis-1/1">
            <div className="flex flex-row">
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <p className="font-bold text-sm section_3_span">Or Direct</p>
                <p className="font-light text-xl text-[white] tracking-widest pr-[10px] section_3_span">
                  Message
                </p>
              </div>
              <div className="basis-1/2 bg-[#40b0fd] text-center py-[20px]">
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/WHatsapp.png"
                    alt="WHatsapp"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/Facebook.png"
                    alt="Facebook.png"
                    width="30"
                    height="30"
                    className="w-[30px] inline"
                  ></Image>
                </Link>
                <Link href="#" className="mx-[5px]">
                  <Image
                    src="/footer/LinkedIn.png"
                    alt="LinkedIn.png"
                    width="30"
                    height="35"
                    className="w-[35px] inline"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-1/1 bg-[#ddf1ff] py-[10px]">
            <form ref={form} onSubmit={handleSubmit(submitOrder)}>
              <label className="input input-bordered flex items-center border-none rounded-none w-[90%] mx-auto">
                <input
                  {...register("email", { required: true })}
                  placeholder="Add your Email address"
                  className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] w-[95%] border mycontactPlaceholder ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                <button className="btn bg-[#40b0fd] btn-sm rounded-sm text-white">
                  Submit
                </button>
              </label>
              {isSubmitting || orderEmailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                orderEmailStatus ? (
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
      </div>

      {/* ============ only for extra large device ============= */}
      <div className="hidden xl:block xl:w-[70vw] xl:mx-auto overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-row">
          <div className="basis-3/5 bg-[#eef7ff]">
            <p className="dmsans500 text-center text-[12px] pt-[35px] px-[100px] pb-[30px] xl:text-[22px]">
              Our Professional Team has helped Hundreds of Sellers on Amazon to
              Avoid Failure and Maximize Potential Growth. Schedule a Free
              Meeting Now!
            </p>
            <div className="pt-[5px] pb-[5px] text-center relative top-[-10px]">
              <a
                href="#"
                className="py-[5px] px-[10px] bg-black text-white"
                style={{
                  fontFamily: "Futura PT, sans-serif",
                  fontStyle: "normal",
                }}
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="basis-2/5">
            <div className="flex flex-col">
              <div className="basis-1/1 bg-[#40b0fd] text-center w-[80%] mx-auto xl:w-[90%]">
                <div className="flex flex-row">
                  <div className="basis-1/2 py-[20px]">
                    <p className="font-bold text-md section_3_span">
                      <span className="text-[#40b0fd]">........</span>Or Direct
                    </p>
                    <p className="font-light text-2xl text-[white] tracking-widest pr-[10px] section_3_span">
                      Message
                    </p>
                  </div>
                  <div className="basis-1/2 py-[20px] text-center">
                    <Link href="#" className="mx-[5px]">
                      <Image
                        src="/footer/WHatsapp.png"
                        alt="WHatsapp"
                        width="60"
                        height="60"
                        className="w-[60px] inline"
                      ></Image>
                    </Link>
                    <Link href="#" className="mx-[5px]">
                      <Image
                        src="/footer/Facebook.png"
                        alt="Facebook.png"
                        width="60"
                        height="60"
                        className="w-[60px] inline"
                      ></Image>
                    </Link>
                    <Link href="#" className="mx-[5px]">
                      <Image
                        src="/footer/LinkedIn.png"
                        alt="LinkedIn.png"
                        width="60"
                        height="60"
                        className="w-[60px] inline "
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
              {/* bg-[#eef7ff]  */}
              <div className="basis-1/1 mt-[0px] w-[80%] mx-auto xl:w-[90%]">
                <div className="bg-[#eef7ff] relative top-[20px] left-[0px] h-[80px]">
                  <div className="bg-[#eef7ff] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <form ref={form} onSubmit={handleSubmit(submitOrder)}>
                      <label className="input flex items-center rounded-none">
                        <input
                          {...register("email", { required: true })}
                          placeholder="Add your Email address"
                          className={`bg-[#cee9ff] my-[5px] py-[5px] xl:py-[10px] pl-[5px] mx-[2px] xl:w-[350px] border mycontactPlaceholder ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        <button className="btn bg-[#40b0fd] btn-sm rounded-sm text-white">
                          Submit
                        </button>
                      </label>
                      {isSubmitting || orderEmailStatus ? ( // Show notification only when isSubmitting or emailStatus is set
                        orderEmailStatus ? (
                          <p className="text-green-500 font-semibold">
                            Hello {senderNameFormatted}, your email was sent
                            successfully!
                          </p>
                        ) : (
                          <p className="text-red-500 font-semibold">
                            Hello {senderNameFormatted}, there was an error
                            sending your email. Please try again.
                          </p>
                        )
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
