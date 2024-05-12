import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    amazonFBA: [
      {
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
    digitalMarketing: [
      {
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
    graphicsDesign: [
      {
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
    webDevelopment: [
      {
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
