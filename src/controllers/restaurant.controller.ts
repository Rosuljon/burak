import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.getHome = (req: Request, res: Response) => {
  try {
    console.log("Get Home");
    res.send("Home Page");
  } catch (error) {
    console.log("Error on HomePage:", error);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("Get Login");
    res.send("Login Page");
  } catch (error) {
    console.log("Error on Login:", error);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Get Sign Up");
    res.send("Sign Up page");
  } catch (error) {
    console.log("Error on Sign Up:", error);
  }
};

export default restaurantController;
