import styles from "@/app/page.module.css";
import HomePageSection5 from "@/components/HomePageSection5";
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
import HomeGetQuoteButton from "@/components/HomeGetQuoteButton";

export default function Home() {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <Hero />
        <HomeGetQuoteButton />
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
        <HomePageSection5 />
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
    </>
  );
}
