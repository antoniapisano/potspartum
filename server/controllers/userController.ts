import { NextFunction, Request, Response } from "express"


// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = (req: Request, res: Response) => {
  res.json({message: "Register user"})
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = (req: Request, res: Response) => {
  res.json({message: "Login user"})
}


// @desc Get user data
// @route GET /api/users/login
// @access Public
const getMe = (req: Request, res: Response) => {
  res.json({message: "User data display"})
}

export { registerUser, loginUser,getMe };
