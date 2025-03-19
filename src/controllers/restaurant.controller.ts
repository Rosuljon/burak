import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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
restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("Post Login");
    res.send("Post Login");
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
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("Post Sign Up");
    // console.log("body", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (error) {
    console.log("Error on Sign Up:", error);
    res.send(error);
  }
};
export default restaurantController;
