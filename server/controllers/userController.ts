import { NextFunction, Request, Response } from "express"
import jwt, {Secret} from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import { IUserDocument } from '../types/IUser'
import User from '../models/userModel'
import dotenv from "dotenv"

dotenv.config();

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
 
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // check if user exists

  const userExists = await User.findOne({ email });

  if(userExists) {
    res.status(400);
    throw new Error('User with this email already exists');
  }

  // hash password

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //create user

  const user = await User.create({
    name, 
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
           
    })
  } else {
    res.status(400)
    throw new Error('invalid user data')
  }

})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user: IUserDocument | null = await User.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('invalid credentials')
  }
}) 



// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req: Request, res: Response) => {
  res.json({message: "User data display"})
})

// Generate JWT

const generateToken = (id: string | number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret,
    {
    expiresIn: '30d',
  })
}

export { registerUser, loginUser,getMe };
