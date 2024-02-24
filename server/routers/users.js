import express from "express";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  const users = ["Arul", "Bhuvana", "Catherine"];

  return res.json({
    users: users,
  });
});

userRouter.get("/family", (req, res) => {
  return res.json({
    users: "About my family!",
  });
});

export default userRouter;
