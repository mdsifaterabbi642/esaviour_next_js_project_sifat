import styles from "@/app/blog/Blog.module.css";
import Footer1 from "@/components/Footer/Footer1";
import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";

const BlogPage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Navbar />
        <h1>Blog Page</h1>
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

export default BlogPage;
