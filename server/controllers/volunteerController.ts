import {NextFunction, Request, Response } from "express"
import Volunteer from "../models/volunteerModel";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";

export const volunteerRegister = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const { email } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        const userExists = await Volunteer.findOne({ email });
        
        if (userExists) {
          res.sendStatus(400).send({ error: "Email already in use" });
        }
    
        const newUser = {
          ...req.body,
          password: hashedPassword,
        };
    
        const createUser = await Volunteer.create(newUser);
        const newToken = generateToken(newUser._id);
        const { token } = await createUser.save(newToken);
        console.log(token, "this is the token")
    
        res.status(201).send({
            name:createUser.name,
            phone:createUser.phone,
            address:createUser.address,
            email: createUser.email,
            community: createUser.community,
            description: createUser.description,
            token:createUser.token,
        });

    } catch (error) {
        next(error)
    }
    }

    const generateToken = (id:string) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
      };
        /*  name:volunteer.name,
            phone:volunteer.phone,
            address:volunteer.address,
            email: volunteer.email,
            community: volunteer.community,
            description: volunteer.description */