import express from "express";
import { prismaClient } from "./db";

export const app = express()
app.use(express.json());

app.post('/sum', async(req: any, res: any) => {
    const a = req.body.a;
    const b = req.body.b;

    if(a > 10000 || b > 100000){
        return res.status(422).json({
            message: "Sorry, we don't support big numbers"
        })
    }
    const result = a + b;
    const request = await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: 'ADD'
        }
    })
    return res.json({
        answer: result,
        id: request.id
    })
})
