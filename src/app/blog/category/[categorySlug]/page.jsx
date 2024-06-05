import BlogHero from "@/components/BlogComponents/BlogHero";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import blogModuleCSS from "@/components/BlogComponents/BlogBody.module.css";

import CategoryWiseBlog from "@/components/BlogComponents/CategoryWiseBlog";

export const metadata = {
  title: {
    absolute: "Amazon FBA Archives - esaviour",
  },
  description: "",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "", // Add your desired keywords here
};

const CategoryPage = ({ params }) => {
  const { categorySlug } = params;

  return (
    <>
      <div className="w-[98vw] mx-auto">
        <Navbar />
        <BlogHero />
        {/* Main component for showing filtered blog posts based on categorySlug */}
        <CategoryWiseBlog props={categorySlug} />
        <div className="w-[98vw] mx-auto overflow-hidden">
          <FooterPortfolio />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
