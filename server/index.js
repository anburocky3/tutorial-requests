import express from "express";
import rootRouter from "./routers/main.js";

const server = express();
const SERVER_PORT = 8888;

server.use(rootRouter);

rootRouter.get("*", (req, res) => {
  return res.json({
    success: false,
    message: "Empty here! Go and get a life!",
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});
