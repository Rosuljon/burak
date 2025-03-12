import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};

restaurantController.getHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (error) {
    console.log("Error on HomePage:", error);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (error) {
    console.log("Error on Login:", error);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Sign Up page");
  } catch (error) {
    console.log("Error on Sign Up:", error);
  }
};

export default restaurantController;
