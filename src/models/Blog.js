import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     blogId: { type: Number, unique: true },
//     bannerTitle: { type: String, unique: true, required: true },
//     category: {
//       categoryName: {
//         type: String,
//         ref: "Category",
//         required: true, // Make categoryName required
//       },
//       categorySlug: {
//         type: String,
//         ref: "Category",
//       },
//     },
//     imageSource: { type: String },
//     alt: { type: String },
//     width: { type: String },
//     height: { type: String },
//     bodyTitle: { type: String, required: true },
//     bodyDescription: { type: String, required: true },
//     blogDate: { type: String },
//   },
//   { timestamps: true, index: true }
// );

const blogSchema = new mongoose.Schema(
  {
    article: [
      {
        blogId: { type: Number, unique: true },
        bannerTitle: { type: String, unique: true, required: true },
        category: { type: String, required: true },
        categorySlug: { type: String },
        imageSource: { type: String },
        alt: { type: String },
        width: { type: String },
        height: { type: String },
        bodyTitle: { type: String, required: true, unique: true },
        bodyDescription: { type: String, required: true },
        blogDate: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
