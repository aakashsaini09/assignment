"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;
    res.json({ sum: result });
});
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
