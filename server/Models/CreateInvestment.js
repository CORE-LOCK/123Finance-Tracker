import mongoose from "mongoose";

const newInvestment = new mongoose.Schema(
  {
    investmentName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    premiumFrequency: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    reminderDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    reminderDaysBefore: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userID:{
      type : mongoose.Schema.Types.ObjectId,
      ref: "user",
      required:true,
    }
  },
  { timestamps: true },
);

const Investment = mongoose.model("Investment", newInvestment);

export default Investment;
