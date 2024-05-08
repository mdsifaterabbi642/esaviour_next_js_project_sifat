import Slider from "react-slick";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutCustom.css";

const AboutSectionSliderSM = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,

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
    slidesToShow: 3,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <>
      <div className="slider-container w-[100vw] mx-auto">
        <Slider {...settings}>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  500+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  27+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Brains to Support
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  100+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Website Developed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  300+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Package Design
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* ========== Slider 2 starts from here ======== */}
      <div className="slider-container w-[90vw] mx-auto md:mt-[25px]">
        <Slider {...settings_2}>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  500+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  27+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Brains to Support
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  100+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Website Developed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[160px] md:h-[200px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[18px] text-center pl-[0px] text-[#40b0fd] font-bold italic">
                  300+
                </p>
                <p className="font-bold text-[14px] text-center">
                  Package Design
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutSectionSliderSM;
