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

  const userExists = await User.findOne({ email });

  if(userExists) {
    res.status(400);
    throw new Error('User with this email already exists');
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

 

  const user = await User.create({
    name, 
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
           
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
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('invalid credentials')
  }
}) 

// @desc Get user data
// @route GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req: Request, res: Response) => {

  const userId = (req.user as any)._id;  
  if (!userId) {
    res.status(401)
    throw new Error('User not authenticated')
  }

  const user = await User.findById(userId);

  if (!user) {
    res.status(404)
    throw new Error('User not found')         
  }

  const { _id, name, email } = user;
  
  if (user) {
    res.status(200).json({
      id: _id,
      name,
      email
    })
  } else {
    res.status(404);
    throw new Error('User not found');
  }
})

// Generate JWT

const generateToken = (id: string | number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret,
    {
    expiresIn: '30d',
  })
}

export { registerUser, loginUser, getMe };
