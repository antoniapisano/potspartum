import {NextFunction} from "express"



export const volunteerRegister = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const volunteer = req.body;

        res.json({volunteer})

    } catch (error) {
        next(error)
    }
    }


        /*  name:volunteer.name,
            phone:volunteer.phone,
            address:volunteer.address,
            email: volunteer.email,
            community: volunteer.community,
            description: volunteer.description */