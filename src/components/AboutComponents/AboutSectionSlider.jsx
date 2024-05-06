import Slider from "react-slick";
import "./AboutCustom.css";

const AboutSectionSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };

  return (
    <>
      <div className="slider-container w-[100vw] mx-auto">
        <Slider {...settings}>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  500+
                </p>
                <p className="font-bold text-[12px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  27+
                </p>
                <p className="font-bold text-[12px] text-center">
                  Brains to Support
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  100+
                </p>
                <p className="font-bold text-[12px] text-center">
                  Website Developed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  300+
                </p>
                <p className="font-bold text-[12px] text-center">
                  Package Design
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* ========== Slider 2 starts from here ======== */}
      <div className="slider-container w-[92vw] mx-auto">
        <Slider {...settings}>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  500+
                </p>
                <p className="font-bold text-[10px] text-center">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  27+
                </p>
                <p className="font-bold text-[12px] text-center">
                  Brains to Support
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  100+
                </p>
                <p className="font-bold text-[12px] text-center">
                  Website Developed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[120px] mySliderHover">
            <div className="w-[90%] h-[90%] mx-auto border-[2px] border-black rounded-md">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] text-center pl-[0px] text-[#40b0fd] font-thin italic">
                  300+
                </p>
                <p className="font-bold text-[12px] text-center">
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

export default AboutSectionSlider;
