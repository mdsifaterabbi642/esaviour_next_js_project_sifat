import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import About from "@/models/About";

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;

    const {
      hero_Title,
      hero_Subtitle,
      hero_ButtonText,
      hero_ImageSource,
      hero_ImageAlt,
    } = await request.json();

    await connectDB();

    try {
      const existingData = await About.findById({ _id: id });

      if (!existingData) {
        return new NextResponse(
          "Couldn't find the proper index to update About hero date",
          { status: 404 }
        );
      }

      if (hero_Title) {
        existingData.hero[0].hero_Title = hero_Title;
      }
      if (hero_Subtitle) {
        existingData.hero[0].hero_Subtitle = hero_Subtitle;
      }
      if (hero_ButtonText) {
        existingData.hero[0].hero_ButtonText = hero_ButtonText;
      }
      if (hero_ImageSource) {
        existingData.hero[0].hero_ImageSource = hero_ImageSource;
      }
      if (hero_ImageAlt) {
        existingData.hero[0].hero_ImageAlt = hero_ImageAlt;
      }

      await existingData.save();
    } catch (error) {
      return new NextResponse(
        "Couldn't find the proper index to Update About Hero",
        { status: 404 }
      );
    }

    const responseBody = {
      message: "data updated successfully in the hero section of About model",
      hero_Title: hero_Title,
      hero_Subtitle: hero_Subtitle,
      hero_ButtonText: hero_ButtonText,
      hero_ImageSource: hero_ImageSource,
      hero_ImageAlt: hero_ImageAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to the service data", {
      status: 500,
    });
  }
};


