import { NextFunction, Request, Response } from 'express';
import Volunteer from '../models/volunteerModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const volunteerRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const userExists = await Volunteer.findOne({ email });

        if (userExists) {
            res.sendStatus(400).send({ error: 'Email already in use' });
        }

        const newUser = {
            ...req.body,
            password: hashedPassword,
        };

        const volunteer = await Volunteer.create(newUser);

        res.status(201).send({
            volunteer,
            token: generateToken(volunteer._id),
        });
    } catch (error) {
        next(error);
    }
};

const generateToken = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
};
