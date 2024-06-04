import Navbar from "@/components/Navbar/Navbar";
import styles from "@/app/about/About.module.css";
import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import AboutHero from "@/components/AboutComponents/AboutHero";
import AboutSection_1 from "@/components/AboutComponents/AboutSection_1";
import AboutSection_2 from "@/components/AboutComponents/AboutSection_2";
import AboutSection_3 from "@/components/AboutComponents/AboutSection_3";
import AboutSection_4 from "@/components/AboutComponents/AboutSection_4";
import AboutSection_5 from "@/components/AboutComponents/AboutSection_5";
import AboutSection_6 from "@/components/AboutComponents/AboutSection_6";
import AboutSection_7 from "@/components/AboutComponents/AboutSection_7";
import AboutSection_8 from "@/components/AboutComponents/AboutSection_8";
import AboutFAQSection from "@/components/AboutComponents/AboutFAQSection";

export const metadata = {
  title: {
    absolute: "About | eSaviour Limited",
  },
  description:
    "eSaviour Limited is one of the leading multinational B2B Digital Marketing Agencies. Who provided b2b digital marketing services all around the world.",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "eSaviour, B2B, Digital Marketing, Agency", // Add your desired keywords here
};

const AboutPage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <AboutHero />
        <AboutSection_1 />
        <AboutSection_2 />
        <AboutSection_3 />
        <AboutSection_4 />
        <div className="w-[98vw] mx-auto overflow-x-hidden">
          <AboutSection_5 />
        </div>
        <div className="w-[98vw] mx-auto overflow-x-hidden">
          <AboutSection_6 />
        </div>
        <div className="mb-[50px] lg:mb-[50px]">
          <AboutSection_7 />
        </div>
        <div className="mb-[50px] lg:mb-[50px]">
          <AboutSection_8 />
        </div>
        <div className="mb-[50px]">
          <AboutFAQSection />
        </div>

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

export default AboutPage;
