// test routes for initial backend setup before MongoDB or Schema or API
import { Request, Response } from 'express';
export {};

const registerUser = async (req: Request, res: Response) => {
    res.json ({mssg: "register user"})
}

const loginUser = async (req: Request, res: Response) => {
    res.json ({mssg: "login user"})
}

const getMe = async (req: Request, res: Response) => {
    res.json ({mssg: "get user"})
}

module.exports = { registerUser, loginUser, getMe };