import { z } from 'zod';

const userValidationSchema = z.object({
    name: z.string({
        required_error: "Name must be provided and must be a string",
    }).min(3).max(50),

    email: z.string({
        required_error: "Email must be provided and must be a string",
    }).email(),
})

export const UserValidation = {
    userValidationSchema
}