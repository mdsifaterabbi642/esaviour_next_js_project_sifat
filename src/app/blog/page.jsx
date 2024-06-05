import styles from "@/app/blog/Blog.module.css";
import BlogBody from "@/components/BlogComponents/BlogBody";
import BlogHero from "@/components/BlogComponents/BlogHero";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";

import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: {
    absolute: "Blog | eSaviour Marketing Blogs",
  },
  description:
    "Discover Your Path to Business Growth with eSaviour Limited's Marketing Blogs. A treasure trove of wisdom and inspiration.",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "", // Add your desired keywords here
};

const BlogPage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <BlogHero />
        <BlogBody />

        <div className="w-[98vw] mx-auto overflow-hidden">
          <FooterPortfolio />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
