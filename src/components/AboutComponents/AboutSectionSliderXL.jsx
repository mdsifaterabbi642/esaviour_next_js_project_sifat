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

  return (
    <>
      <div className="slider-container w-[100vw] mx-auto">
        <Slider {...settings}>
          <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  500+
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
                  500+
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
                  27+
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
                  100+
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
                  300+
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
                  150+
                </p>
                <p className="font-bold text-[18px] text-center">
                  Product Design
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* =========== Slider 2 ============= */}
      <div className="slider-container w-[80vw] mx-auto">
        <Slider {...settings_2}>
          <div className="w-[390px] h-[350px] mySliderHover">
            <div className="w-[90%] h-[90%] border-[2px] border-black rounded-xl mx-auto my-[20px]">
              <div className="relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <p className="text-[40px] text-center pl-[10px] text-[#40b0fd] font-thin italic">
                  500+
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
                  27+
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
                  100+
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
                  300+
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
                  150+
                </p>
                <p className="font-bold text-[18px] text-center">
                  Product Design
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutSectionSliderXL;
