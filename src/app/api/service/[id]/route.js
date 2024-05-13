import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Service from "@/models/Service";

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    const serviceData = await Service.findById({ _id: id });

    let responseBody;

    if (serviceData !== null) {
      // Process the data when it exists
      const { newHeading: heading, newDescription: description } =
        await request.json();

      if (heading) {
        serviceData.amazonFBA[0].heading = heading;
      }

      if (description) {
        serviceData.amazonFBA[0].description = description;
      }

      // Save the updated serviceData
      await serviceData.save();

      responseBody = {
        message: `Service Data updated for id: ${id}`,
      };
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    //return new NextResponse("Error occurred in PATCH method of service API");
    return new NextResponse("Service data not found for the given ID", {
      status: 500,
    });   
  }
};
