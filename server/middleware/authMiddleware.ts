import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

export const protect = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            try {
                token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET as Secret
                ) as any;

                const user = await User.findById(decoded.id).select(
                    '-password'
                );
                if (!user) {
                    res.status(404);
                    throw new Error('User not found');
                }

                req.user = user;

                next();
            } catch (error) {
                console.log(error);
                res.status(401);
                throw new Error('Not authorized');
            }
        }

        if (!token) {
            res.status(401);
            throw new Error('Not authorized, no token');
        }
    }
);
