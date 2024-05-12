import mongoose from "mongoose";

const homeServiceCardSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    imgSource: {
      type: String,
    },
    imgAlt: {
      type: String,
    },
  },
  { timestamps: true }
);

// Check if the model already exists
const HomeServiceCard =
  mongoose.models.HomeServiceCard ||
  mongoose.model("HomeServiceCard", homeServiceCardSchema);

export default HomeServiceCard;
