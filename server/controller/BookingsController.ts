// test routes for initial backend setup before MongoDB or Schema or API
import { Request, Response } from 'express';
export {};

const addBooking = async (req: Request, res: Response) => {
    res.json ({mssg: "booking has been added"})
}

const getBooking = async (req: Request, res: Response) => {
    res.json ({mssg: "here is your booking"})
}

const removeBooking = async (req: Request, res: Response) => {
    res.json ({mssg: "your booking has been deleted"})
}

const editBooking = async (req: Request, res: Response) => {
    res.json ({mssg: "changes to your booking have been saved"})
}

module.exports = { addBooking, getBooking, removeBooking, editBooking };



