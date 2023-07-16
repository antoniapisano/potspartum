import { z } from 'zod';

export const volunteerSchema = z.object({
    name: z.string().min(1, {message: "please enter at least one letter for your name"}), 
    phone: z.number({
        required_error: "please enter your number",
        invalid_type_error: "please enter phone in number format"
    }), 
    address: z.string({
        required_error: "please enter your address",
    }), 
    email: z.string().email({message: "invalid email address"}),
    community: z.string().uuid({message: "invalid ID"}),
    image: z.string().ip(),
    description: z.string({
        required_error: "please enter a description of your requirements",
    }), 
    restrictions: z.enum(["not kosher", "kosher", "not halal", "halal"]),
    authorized: z.boolean({
        required_error: "sorry, not authorised",
    }), 
});