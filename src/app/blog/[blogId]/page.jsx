import SingleBlogComponent from "@/components/BlogComponents/SingleBlogComponent";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Single Blog Page",
  description: "",
  alternates: {
    canonical: "./", // Use "./" for the base URL
  },
  keywords: "", // Add your desired keywords here
};

const SingleBlogPage = ({ params }) => {
  const { blogId } = params;

  return (
    <>
      <div className="w-[98vw] md:w-[70vw] min-h-screen mx-auto overflow-hidden pb-[10px]">
        <Navbar />
        <SingleBlogComponent props={blogId} />
      </div>
      <div className="w-[98vw] mx-auto">
        <FooterPortfolio />
      </div>
    </>
  );
};

export default SingleBlogPage;
