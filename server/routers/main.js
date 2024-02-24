import express from "express";
import userRouter from "./users.js";
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello, enjoying developing web apps!",
  });
});

router.get("/about", (req, res) => {
  return res.json({ message: "Hello everyone, you are watching about page" });
});

router.get("/about/:user", (req, res) => {
  return res.json({
    message: `Hello ${req.params.user}, you are watching about page`,
  });
});

router.use("/users", userRouter);

export default router;
