import Slider from "react-slick";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutCustom.css";

const AboutSectionSliderXL = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    //speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
  };
  const settings_2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    //speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
    rtl: true,
  };

  const section5_slider1_Data = [
    {
      quantity: "500+",
      heading: "Happy Clients",
    },
    {
      quantity: "27+",
      heading: "Brains to Support",
    },
    {
      quantity: "100+",
      heading: "Website Developed",
    },
    {
      quantity: "300+",
      heading: "Package Design",
    },
    {
      quantity: "150+",
      heading: "Product Design",
    },
    {
      quantity: "50+",
      heading: "MERN STACK",
    },
  ];

  const section5_slider2_Data = [
    {
      quantity: "500+",
      heading: "Happy Clients",
    },
    {
      quantity: "27+",
      heading: "Brains to Support",
    },
    {
      quantity: "100+",
      heading: "Website Developed",
    },
    {
      quantity: "300+",
      heading: "Package Design",
    },
    {
      quantity: "150+",
      heading: "Product Design",
    },
    {
      quantity: "750+",
      heading: "Amazon Consultancy",
    },
  ];

  return (
    <>
      <div className="slider-container w-[100vw] mx-auto">
        <Slider {...settings}>
          {section5_slider1_Data.map((item, index) => (
            <div key={index} className="w-[390px] h-[350px] mySliderHover">
              <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
                <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                    {item.quantity}
                  </h1>
                  <h1 className="font-bold text-[18px] text-center">
                    {item.heading}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* =========== Slider 2 ============= */}
      <div className="slider-container w-[80vw] mx-auto">
        <Slider {...settings_2}>
          {section5_slider2_Data.map((item, index) => (
            <div key={index} className="w-[390px] h-[350px] mySliderHover">
              <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
                <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                    {item.quantity}
                  </h1>
                  <h1 className="font-bold text-[18px] text-center">
                    {item.heading}
                  </h1>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  500+ S 2.1
                </p>
                <p className="font-bold text-[18px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  27+ S 2.2
                </p>
                <p className="font-bold text-[18px] text-center">
                  Brains to Support
                </p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  100+ S 2.3
                </p>
                <p className="font-bold text-[18px] text-center">
                  Website Developed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  300+ S 2.4
                </p>
                <p className="font-bold text-[18px] text-center">
                  Package Design
                </p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  150+ S 2.5
                </p>
                <p className="font-bold text-[18px] text-center">
                  Product Design
                </p>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default AboutSectionSliderXL;
