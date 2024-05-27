import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Category from "@/models/Category";

export const GET = async (request) => {
  try {
    await connectDB();
    const categoryData = await Category.find();

    return new NextResponse(JSON.stringify(categoryData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

//for initially adding data to the Category model
export const POST = async (request) => {
  try {
    await connectDB();
    const { categoryId, categoryName, categorySlug } = await request.json();

    //const newData = new Category();
    const id = "66546ba8bf1363ddd2e42d0e";

    const newData = await Category.findById({ _id: id });

    //check duplicate categoryId, categoryName or categorySlug before pushing (adding) to the database

    const existingCategory = newData.category.find((item) => {
      return (
        item.categoryId === categoryId ||
        item.categoryName === categoryName ||
        item.categorySlug === categorySlug
      );
    });

    if (existingCategory) {
      return new NextResponse(
        "Category with this ID, name, or slug already exists",
        {
          status: 400,
        }
      );
    }

    let responseBody;

    newData.category.push({
      categoryId: categoryId,
      categoryName: categoryName,
      categorySlug: categorySlug,
    });
    await newData.save();

    responseBody = {
      categoryId: categoryId,
      categoryName: categoryName,
      categorySlug: categorySlug,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to Category Model", {
      status: 500,
    });
  }
};
