import express from "express";
import {
  createTutorialRequest,
  deleteRequestById,
  getAllRequestData,
  updateDataByid,
} from "../models/user-request.js";
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello, enjoy developing web apps!",
  });
});

router.post("/create", async (req, res) => {
  const dataFromClient = { ...req.body, created_at: Date.now() };

  try {
    const creationResult = await createTutorialRequest(dataFromClient);
    console.log("creationResult from main.js", creationResult);
    return res.json(dataFromClient);
  } catch (error) {
    if (error.name === "ValidationError") {
      console.log(error.errors);
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }
    res.status(400).json(error.message);
  }
});

router.get("/requests", async (req, res) => {
  const requestData = await getAllRequestData();

  return res.json(requestData);
});

router.put("/requests/:id", async (req, res) => {
  const docId = req.params.id;

  // do the validation for the req.body

  if (docId) {
    const updatedResult = await updateDataByid(docId, req.body);

    return res.json(updatedResult);
  }
  return res.status(403);
});

router.delete("/requests/:id", async (req, res) => {
  const docId = req.params.id;
  if (docId) {
    await deleteRequestById(docId);

    return res.json(true);
  }
  return res.status(403);
});

export default router;
