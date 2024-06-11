import {z} from 'zod';
import express from 'express'
const app = express()
const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({message: "invalid email formate"}),
    age: z.number().min(18, {message: "You must be at least 18"}).optional()
})
type FinalUserSchema = z.infer<typeof userProfileSchema>;
app.put('/user', (req, res) =>{
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;
    if(!success){
        res.status(411).json({})
        return
    }
    res.json({
        message: "user updated"
    })
})
const StringZodSchema = z.string();
type StringType = z.infer<typeof StringZodSchema>; //String