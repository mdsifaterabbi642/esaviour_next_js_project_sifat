import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";
import Category from "@/models/Category";

export const GET = async (request) => {
  try {
    await connectDB();

    const blogData = await Blog.find();

    let responseBody = {
      message: "Hello world and Moon",
      blogData: blogData,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred", { status: 200 });
  }
};

//for initially adding data to the Blog model
export const POST = async (request) => {
  try {
    await connectDB();
    const {
      blogId,
      bannerTitle,
      category,
      imageSource,
      alt,
      width,
      height,
      bodyTitle,
      bodyDescription,
      blogDate,
    } = await request.json();

    //required fields are: bannerTitle, category, bodyTitle, bodyDescription

    // Create a new blog entry when no data exists in the Model
    //const newBlogData = await Blog.create({}); //this will create an empty array of object

    const newBlogData = await Blog.find();
    const allCategories = await Category.find();

    //validating required fields are not empty
    if (
      bannerTitle === "" ||
      category === "" ||
      bodyTitle === "" ||
      bodyDescription === ""
    ) {
      return new NextResponse("Required fields can't left empty", {
        status: 500,
      });
    }

    //validating required fields are not missing
    if (!bannerTitle || !category || !bodyTitle || !bodyDescription) {
      return new NextResponse("Required fields are missing", {
        status: 500,
      });
    }

    //validating unique fields (bannerTitle)
    const duplicateTitle = newBlogData[0].article.find((item) => {
      return item.bannerTitle === bannerTitle || item.bodyTitle === bodyTitle;
    });

    if (duplicateTitle) {
      return new NextResponse("This bannerTitle or bodytitle already exists", {
        status: 400,
      });
    }

    //validating unique fields (blogId)
    const duplicateBlogId = newBlogData[0].article.find((item) => {
      return item.blogId === blogId;
    });

    if (duplicateBlogId) {
      return new NextResponse("duplicate Blog Id ", {
        status: 400,
      });
    }

    //validating the category is present in the category Model or not
    const searchValidCategory = allCategories[0].category.find((item) => {
      return item.categoryName === category;
    });

    if (!searchValidCategory) {
      return new NextResponse("Category not valid", {
        status: 200,
      });
    }

    //now creating categorySlug
    // Remove any leading/trailing spaces
    const trimmedCategory = category.trim();
    // Replace spaces with underscores
    const slug = trimmedCategory.replace(/\s+/g, "_").toLowerCase();

    newBlogData[0].article.push({
      bannerTitle: bannerTitle,
      category: category,
      bodyTitle: bodyTitle,
      bodyDescription: bodyDescription,
      categorySlug: slug,
      imageSource: imageSource,
      alt: alt,
      blogDate: blogDate,
      width: width,
      height: height,
      blogId: blogId,
    });

    await newBlogData[0].save();

    let responseBody = {
      bannerTitle: bannerTitle,
      category: category,
      bodyTitle: bodyTitle,
      bodyDescription: bodyDescription,
      categorySlug: slug,
      imageSource: imageSource,
      alt: alt,
      blogDate: blogDate,
      width: width,
      height: height,
      blogId: blogId,
    };
    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to Blog Model", {
      status: 500,
    });
  }
};
