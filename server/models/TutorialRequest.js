import mongoose from "mongoose";
import { Schema } from "mongoose";

const tutRequests = new Schema({
  technology: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  title: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 180,
  },
  desc: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 2000,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const tutRequestModel = mongoose.model("tutorial-requests", tutRequests);

export default tutRequestModel;
