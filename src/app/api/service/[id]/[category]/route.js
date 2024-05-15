import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Service from "@/models/Service";

//extracting Service model based on category and id

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const { id, category } = params;

    const serviceData = await Service.findById({ _id: id });

    const filteredObjects = serviceData[category];

    //return new NextResponse(JSON.stringify(serviceData), { status: 200 });

    return new NextResponse(JSON.stringify(filteredObjects), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
