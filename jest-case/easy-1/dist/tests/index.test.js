"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('sum', () => {
    (0, globals_1.it)('Should be able to add two positive numbers', () => {
        const ans = (0, index_1.sum)(2, 3);
        (0, globals_1.expect)(ans).toBe(5);
    });
});
