const SingleBlogPage = ({ params }) => {
  const { blogId } = params;
  return (
    <>
      <h1>Single Blog Page</h1>
      <h3>Blog id: {blogId}</h3>
    </>
  );
};

export default SingleBlogPage;
