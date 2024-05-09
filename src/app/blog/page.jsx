"use client";
import styles from "@/app/blog/Blog.module.css";
import BlogBody from "@/components/BlogComponents/BlogBody";
import BlogHero from "@/components/BlogComponents/BlogHero";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";

import Navbar from "@/components/Navbar/Navbar";

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
