import dotenv from "dotenv";
import app from "./app";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("successfully connected to MongoDB");
    app.listen(process.env.PORT ?? 3003, () => {
      console.log(`the server listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
