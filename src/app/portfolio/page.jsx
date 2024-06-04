import styles from "@/app/portfolio/Portfolio.module.css";

import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import PortfolioHero from "@/components/PortfolioHero/PortfolioHero";
import PortfolioTabContents from "@/components/PortfolioTabContents/PortfolioTabContents";

export const metadata = {
  title: {
    absolute: "Portfolio | Digital Marketing Portfolio",
  },
  description:
    "Explore eSaviour Limiteds digital marketing portfolio, where digital innovation meets exceptional results.",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "", // Add your desired keywords here
};

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
