"use Client";

import styles from "@/app/page.module.css";
import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <Hero />
      <div className="w-[98vw] mx-auto overflow-hidden mt-[100px]">
        <Footer1 />
      </div>
      <div className="w-[98vw] mx-auto overflow-hidden">
        <Footer2 />
      </div>
    </div>
  );
}
