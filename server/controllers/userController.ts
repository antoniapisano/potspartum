import { Request, Response } from "express"

const registerUser = (req: Request, res: Response) => {
  res.json({message: "register user"})
}

export { registerUser };