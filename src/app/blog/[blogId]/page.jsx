import BlogData from "@/Data/BlogData";

const SingleBlogPage = ({ params }) => {
  const { blogId } = params;

  // Find the blog object with the matching blogId
  const blog = BlogData.find(
    (blogItem) => blogItem.blogId === parseFloat(blogId)
  );

  return (
    <>
      <h1>Single Blog Page</h1>
      <h3>Blog id: {blogId}</h3>
      <span className="text-black">bannerTitle: {blog?.bannerTitle}</span>
    </>
  );
};

export default SingleBlogPage;
