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
      section1_Title1,
      section1_Title2,
      section1_Description,
      section1_Name,
      section1_Designation,
      section1_ImageSource,
      Section1_ImageAlt,
      section2_Title,
      section2_Subtitle,
      targetIndex,
      targetSection,
      section2_Heading,
      section2_ImgSource,
      section2_ImgAlt,
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
      if (section1_Title1) {
        existingData.section1[0].section1_Title1 = section1_Title1;
      }
      if (section1_Title2) {
        existingData.section1[0].section1_Title2 = section1_Title2;
      }
      if (section1_Description) {
        existingData.section1[0].section1_Description = section1_Description;
      }
      if (section1_Name) {
        existingData.section1[0].section1_Name = section1_Name;
      }
      if (section1_Designation) {
        existingData.section1[0].section1_Designation = section1_Designation;
      }
      if (section1_ImageSource) {
        existingData.section1[0].section1_ImageSource = section1_ImageSource;
      }
      if (Section1_ImageAlt) {
        existingData.section1[0].Section1_ImageAlt = Section1_ImageAlt;
      }
      if (section2_Title) {
        existingData.section2[0].section2_Title = section2_Title;
      }
      if (section2_Subtitle) {
        existingData.section2[0].section2_Subtitle = section2_Subtitle;
      }

      if (section2_Heading) {
        existingData[targetSection][targetIndex].section2_Heading =
          section2_Heading[targetIndex];
      }
      if (section2_ImgSource) {
        existingData[targetSection][targetIndex].section2_ImgSource =
          section2_ImgSource[targetIndex];
      }

      if (section2_ImgAlt) {
        existingData[targetSection][targetIndex].section2_ImgAlt =
          section2_ImgAlt[targetIndex];
      }

      await existingData.save();
    } catch (error) {
      return new NextResponse(
        "Couldn't find the proper index to Update About Data",
        { status: 404 }
      );
    }

    const responseBody = {
      message: "data updated successfully in the About model",
      hero_Title: hero_Title,
      hero_Subtitle: hero_Subtitle,
      hero_ButtonText: hero_ButtonText,
      hero_ImageSource: hero_ImageSource,
      hero_ImageAlt: hero_ImageAlt,
      section1_Title1: section1_Title1,
      section1_Title2: section1_Title2,
      section1_Description: section1_Description,
      section1_Name: section1_Name,
      section1_Designation: section1_Designation,
      section1_ImageSource: section1_ImageSource,
      Section1_ImageAlt: Section1_ImageAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to the service data", {
      status: 500,
    });
  }
};
