import styles from "@/app/service/Service.module.css";
import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import ServiceHero from "@/components/ServicePageComponents/ServiceHero";
import ServiceTemplate from "@/components/ServicePageComponents/ServiceTemplate";

export const metadata = {
  title: {
    absolute: "Services | eSaviour Limited",
  },
  description:
    "eSaviour Limited services covers graphic design, amazon marketing, creative web development, b2b digital marketing and so on.",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "eSaviour, B2B, Digital Marketing, Agency", // Add your desired keywords here
};

const ServicePage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <ServiceHero />
        <h1 className="text-[22px] mt-[30px] xl:text-[40px] text-center xl:mt-[80px] mb-[20px]">
          Our Best
          <span className="text-sky-500 font-bold">&nbsp;Selling Services</span>
        </h1>
        <ServiceTemplate />
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer1 />
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default ServicePage;
