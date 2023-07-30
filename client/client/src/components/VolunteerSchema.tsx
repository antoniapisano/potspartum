import { z } from 'zod';

export const VolunteerSchema = z.object({
    name: z.string().min(1, {
        message: "please enter at least one letter for your name"
    }), 
    phone: z.string().min(8, { message: "Phone numbers are a minimum of 8 digits" }),
    address: z.string({
        required_error: "please enter your address",
    }), 
    email: z.string().email({
        message: "invalid email address"
    }),
    community: z.string({
        required_error: "please enter your community",
    }), 
    image: z.string({
        required_error: "please add image or type none",
    }), 
    description: z.string({
        required_error: "please enter a description of your requirements",
    }), 
    restrictions: z.string({
        required_error: "please add restriction or type none",
    }), 
    authorized: z.string({
        required_error: "please type none",
    }), 
});

export type UserVolunteerSchema = z.infer<typeof VolunteerSchema>