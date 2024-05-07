import BlogData from "@/Data/BlogData";
import FooterPortfolio from "@/components/FooterPortfolio/FooterPortfolio";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { GoReply } from "react-icons/go";

const SingleBlogPage = ({ params }) => {
  const { blogId } = params;

  // Find the blog object with the matching blogId
  const blog = BlogData.find(
    (blogItem) => blogItem.blogId === parseFloat(blogId)
  );

  return (
    <>
      <div className="w-[98vw] md:w-[70vw] min-h-screen mx-auto overflow-hidden pb-[10px]">
        <Navbar />
        <div className="py-[50px]">
          {/* ====== Image div starts from here =========*/}
          <div className="w-[90vw] md:w-[70vw] mx-auto">
            <div className="w-[100%] xl:w-[70%] mx-auto">
              <Image
                src={blog?.imageSource}
                alt={blog?.alt}
                width={blog?.width}
                height={blog?.height}
                layout="responsive"
              />
            </div>
          </div>
          {/* ====== Image div ended here =========*/}
          <div className="w-[90vw] md:w-[70vw] mx-auto py-[30px] text-left">
            <span className="bg-slate-700 text-white px-[5px] py-[2px] rounded-sm">
              {blog?.blogDate}
            </span>
            <h2 className="font-extrabold text-[26px]">{blog?.bodyTitle}</h2>
            <div className="badge badge-info gap-2">{blog?.category}</div>
          </div>
          <div className="w-[90vw] md:w-[70vw] mx-auto text-left py-[20px]">
            <p className="font-normal text-[16px] italic">
              {blog?.bodyDescription}
            </p>
          </div>
          <div className="w-[90vw] md:w-[70vw] mx-auto text-left py-[10px]">
            <Link href="/blog">
              <GoReply
                size="26px"
                className="font-extrabold hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[98vw] mx-auto">
        <FooterPortfolio />
      </div>
    </>
  );
};

export default SingleBlogPage;
