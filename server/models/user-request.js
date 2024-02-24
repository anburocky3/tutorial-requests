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

export const createTutorialRequest = async (data) => {
  try {
    const result = await tutRequestModel.create(data);
    console.log("Result of createTutorialRequest Method: ", result);
  } catch (error) {
    throw error;
  }
};

export const getAllRequestData = async () => {
  try {
    const requestData = await tutRequestModel.find({});

    return requestData;
  } catch (error) {}
};

export const updateDataByid = async (id, data) => {
  try {
    return await tutRequestModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteRequestById = async (id) => {
  try {
    return await tutRequestModel.deleteOne({ _id: id });
  } catch (error) {
    throw error;
  }
};
