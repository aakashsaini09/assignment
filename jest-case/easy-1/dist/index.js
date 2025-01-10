"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(a, b) {
    return a + b;
}
const sumAns = sum(2, 4);
if (sumAns == 6) {
    console.log("Test Pass");
}
else {
    console.log("Test Failed");
}
