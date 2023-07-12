import mongoose from "mongoose";
import { ErrorRequestHandler, Request, Response, NextFunction, } from "express";
import { validationError } from "../types/IError";

export const badRequestHandler: ErrorRequestHandler = (err, req:Request, res:Response, next:NextFunction) => {
  if (err.status === 400 || err instanceof mongoose.Error.ValidationError) {
    if (err.errorsList) {
      res.status(400).send({
        message: err.message,
        errorsList: err.errorsList.map((e: validationError) => e.msg),
      });
    } else {
      res.status(400).send({ message: err.message });
    }
  } else {
    next(err);
  }
};

export const unauthorizedHandler: ErrorRequestHandler = (
    err, req:Request, res:Response, next:NextFunction
) => {
  if (err.status === 401) {
    res.status(401).send({ message: err.message });
  } else {
    next(err);
  }
};

export const forbiddenHandler: ErrorRequestHandler = (err, req:Request, res:Response, next:NextFunction) => {
  if (err.status === 403) {
    res.status(403).send({ message: err.message });
  } else {
    next(err);
  }
};

export const notFoundHandler: ErrorRequestHandler = (err, req:Request, res:Response, next:NextFunction) => {
  if (err.status === 404) {
    res.status(404).send({ message: err.message });
  } else {
    next(err);
  }
};

export const genericErrorHandler: ErrorRequestHandler = (err, req:Request, res:Response, next:NextFunction) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode)
    
    if (err.status === res.status) {
      res.status(statusCode).send({ message: err.message, stack:process.env.NODE_ENV === "production" ? null : err.stack });
    } else {
      next(err);
    }
  };