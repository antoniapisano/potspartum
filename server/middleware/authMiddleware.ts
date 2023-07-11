import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import Volunteer from "../models/volunteerModel";



export const protect = async (req:Request, res:Response, next:NextFunction) => {
   try {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
  
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await Volunteer.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not authorized");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Please provide a token");
    }
    
   } catch (error) {
    next(error)
   } 
};