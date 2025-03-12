import express from "express";
import path from "path";
import router from "./router";
// ENTRANCE
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SESSION

//VIEWS
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

//ROUTERS
app.use("/", router);
export default app;
