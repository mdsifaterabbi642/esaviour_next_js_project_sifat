import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Footer from "@/models/Footer";

export const GET = async (request) => {
  //fetch

  try {
    await connectDB();

    const footerData = await Footer.find();

    return new NextResponse(JSON.stringify(footerData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

//initiall inserting data when the Footer model is empty
// export const POST = async (request, { params }) => {
//   try {
//     const {
//       imgSrc,
//       imgAlt,
//       paragraph,
//       buttonText,
//       stat,
//       heading,
//       logo,
//       description,
//       qlink,
//       legalLink,
//       socialImgSrc,
//       socialImgAlt,
//       paymentImgSrc,
//       paymentImgAlt,
//     } = await request.json();
//     await connectDB();
//     // Create a new contact document
//     const newFooterData = new Footer({
//       footer1Upper: [
//         {
//           imgSrc: imgSrc,
//           imgAlt: imgAlt,
//         },
//       ],
//       footer1Lower: [
//         {
//           paragraph: paragraph,
//           buttonText: buttonText,
//         },
//       ],
//       footer2Upper: [
//         {
//           stat: stat,
//           heading: heading,
//         },
//       ],
//       footer2LowerLeft: [
//         {
//           logo: logo,
//           description: description,
//         },
//       ],
//       footer2QuickLink: [
//         {
//           qlink: qlink,
//         },
//       ],
//       footer2Legal: [
//         {
//           legalLink: legalLink,
//         },
//       ],
//       footer2SocialIcons: [
//         {
//           socialImgSrc: socialImgSrc,
//           socialImgAlt: socialImgAlt,
//         },
//       ],
//       footer2PaymentIcons: [
//         {
//           paymentImgSrc: paymentImgSrc,
//           paymentImgAlt: paymentImgAlt,
//         },
//       ],
//     });
//     // Save the contact to the database
//     await newFooterData.save();

//     const responseBody = {
//       message: "Data added initially in the Footer Model",
//       imgSrc,
//       imgAlt,
//       paragraph,
//       buttonText,
//       stat,
//       heading,
//       logo,
//       description,
//       qlink,
//       legalLink,
//       socialImgSrc,
//       socialImgAlt,
//       paymentImgSrc,
//       paymentImgAlt,
//     };

//     return new NextResponse(JSON.stringify(responseBody), { status: 200 });
//   } catch (error) {
//     return new NextResponse(
//       "Error in POST api for initially inserting data in the Footer Model: /api/footer",
//       { status: 500 }
//     );
//   }
// };

//inserting data in Footer model after initil input
export const POST = async (request, { params }) => {
  try {
    const { paymentImgSrc, paymentImgAlt, paymentLink } = await request.json();

    await connectDB();

    // Find the existing Footer document
    const existingFooter = await Footer.findOne();

    // Push the new data into the serviceInfo array
    existingFooter.footer2PaymentIcons.push({
      paymentImgSrc: paymentImgSrc,
      paymentImgAlt: paymentImgAlt,
      paymentLink: paymentLink,
    });

    // Save the updated document
    await existingFooter.save();

    const responseBody = {
      message: "Data added in the Footer Model",
      paymentImgSrc: paymentImgSrc,
      paymentImgAlt: paymentImgAlt,
      paymentLink: paymentLink,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in POST api in  /api/footer");
  }
};
