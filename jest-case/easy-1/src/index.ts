import express from "express";

export const app = express()

app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;
    res.json({ sum: result })
})

// export function sum(a: number, b: number) {
//     return a + b;
// }
// export function multiply(a: number, b: number) {
//     return a * b;
// }
// export function divide(a: number, b: number) {
//     return a / b;
// }

// const sumAns = sum(2, 4)

// if(sumAns == 6){
//     console.log("Test Pass")
// }else{
//     console.log("Test Failed")
// }

