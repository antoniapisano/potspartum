import { Request, Response, NextFunction, RequestHandler } from "express";
import {verifyAccessToken}  from "../tools/tools";



export const protect:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
   try {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
  
        const payload = await verifyAccessToken(token);
        req.user = { _id: payload._id };
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

