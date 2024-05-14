import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import HomeServiceCard from "@/models/HomeServiceCard";

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    const HomeServiceCardData = await HomeServiceCard.findById({
      _id: id,
    });

    let responseBody;

    if (HomeServiceCardData !== null) {
      const { heading, paragraph, targetCard } = await request.json();

      if (heading) {
        HomeServiceCardData.cardContents[targetCard].heading = heading;
      }
      if (paragraph) {
        HomeServiceCardData.cardContents[targetCard].paragraph = paragraph;
      }

      //save the updated HomeServiceCardData
      await HomeServiceCardData.save();

      responseBody = {
        message: `HomeServiceCard model data updated successfully: ${id}`,
        heading1: heading,
        paragraph1: paragraph,
        targetCard,
      };
    }


    responseBody = {
      message: `HomeServiceCard model data updated successfully: ${id}`,
      
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "HomeServiceCard model data not found for the given ID",
      {
        status: 500,
      }
    );
  }
};
