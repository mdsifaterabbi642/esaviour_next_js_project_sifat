import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";
import Category from "@/models/Category";

//finding blogs based on category
export const POST = async (request, { params }) => {
  try {
    const { category } = params;
    await connectDB();

    const allBlogs = await Blog.find();

    // Find all blogs that match the specified category
    const blogsInCategory = allBlogs[0]?.article.filter(
      (blog) => blog.category === category
    );

    let responseBody = {
      category: category,
      blogsInCategory: blogsInCategory,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in /api/blog/categoryWiseBlog POST method",
      { status: 500 }
    );
  }
};
