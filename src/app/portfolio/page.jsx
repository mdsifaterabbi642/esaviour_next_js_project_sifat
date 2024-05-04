import styles from "@/app/portfolio/Portfolio.module.css";
import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";

const PortfolioPage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <h1>Portfolio Page</h1>
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

export default PortfolioPage;
