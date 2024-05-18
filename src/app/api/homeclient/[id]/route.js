import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import HomeClient from "@/models/HomeClient";

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    let existingData;

    try {
      existingData = await HomeClient.findById({ _id: id });
    } catch (error) {
      const errorMessage = "Invalid client ID";
      return new NextResponse(errorMessage, { status: 400 }); // code 400 is used for data not found(invalid request)
    }

    let responseBody;
    if (existingData !== null) {
      //now handle the update function here
      const {
        modelId,
        targetIndex,
        updatedName,
        updatedParagraph,
        updatedCompany,
        updatedImgSource,
        updatedImgAlt,
      } = await request.json();

      if (targetIndex !== null) {
        if (updatedParagraph !== null) {
          existingData.clientCard[targetIndex].paragraph = updatedParagraph;
        }

        if (updatedName !== null) {
          existingData.clientCard[targetIndex].name = updatedName;
        }

        if (updatedCompany !== null) {
          existingData.clientCard[targetIndex].company = updatedCompany;
        }

        if (updatedImgSource !== null) {
          existingData.clientCard[targetIndex].imgSource = updatedImgSource;
        }

        if (updatedImgAlt !== null) {
          existingData.clientCard[targetIndex].imgAlt = updatedImgAlt;
        }

        await existingData.save();
      }

      responseBody = {
        updatedClient: existingData,
        message: `${targetIndex + 1} th client`,
      };
      return new NextResponse(JSON.stringify(responseBody), { status: 200 });
    }
  } catch (error) {
    return new NextResponse(
      "Sorry, Error occurred in /api/homeclient/id patch request",
      { status: 500 }
    );
  }
};
