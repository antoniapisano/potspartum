import { NextFunction, Request, Response } from 'express';
import Volunteer from '../models/volunteerModel';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

export const volunteerRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

      
        const userExists = await Volunteer.findOne({ email });

        if (userExists) {
            res.sendStatus(400);
            throw new Error ('Email already in use' );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


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
    
    return jwt.sign({ id }, process.env.JWT_SECRET as Secret, { expiresIn: '7d' });
};
