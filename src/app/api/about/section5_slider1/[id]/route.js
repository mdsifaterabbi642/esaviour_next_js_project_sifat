import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import About from "@/models/About";

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;
    const { heading, quantity, targetIndex, targetSection } =
      await request.json();
    await connectDB();

    let existingData;
    let responseBody;
    try {
      existingData = await About.findOne({ _id: id });
    } catch (error) {
      return new NextResponse("Not found the proper index", { status: 404 });
    }

    if (existingData !== null) {
      if (heading) {
        existingData[targetSection][targetIndex].heading = heading[targetIndex];
      }
      if (quantity) {
        existingData[targetSection][targetIndex].quantity =
          quantity[targetIndex];
      }
      await existingData.save();

      responseBody = {
        id: id,
        heading: heading,
        quantity: quantity,
      };
    } else {
      responseBody = {
        message: "Couldn't update the data",
      };
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in /api/about/section5_slider1/[id] PATCH request",
      { status: 500 }
    );
  }
};

export const POST = async (request, { params }) => {
  try {
    const { id } = params;
    const { heading, quantity } = await request.json();
    await connectDB();

    let existingData;
    let responseBody;
    try {
      existingData = await About.findOne({ _id: id });
    } catch (error) {
      return new NextResponse("Not found the proper index", { status: 404 });
    }

    if (existingData !== null) {
      // add data here
      existingData.section5_slider1.push({
        heading: heading,
        quantity: quantity,
      });

      await existingData.save();

      responseBody = {
        id: id,
        heading: heading,
        quantity: quantity,
      };
    } else {
      responseBody = {
        message: "Couldn't add the data",
      };
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in /api/about/section5_slider1/[id] POST request",
      { status: 500 }
    );
  }
};
