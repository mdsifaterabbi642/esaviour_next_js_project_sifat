import styles from "@/app/portfolio/Portfolio.module.css";

import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import PortfolioHero from "@/components/PortfolioHero/PortfolioHero";
import PortfolioTabContents from "@/components/PortfolioTabContents/PortfolioTabContents";

const PortfolioPage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <PortfolioHero />
        <div className="w-[98vw] mx-auto overflow-hidden">
          <PortfolioTabContents />
        </div>

        <div className="w-[98vw] mx-auto overflow-hidden">
          <FooterPortfolio />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
