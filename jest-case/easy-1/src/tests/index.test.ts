import { sum } from "../index";
import { describe, expect, it } from '@jest/globals'

describe('sum', () => {
    it('Should be able to add two positive numbers', () => {
        const ans = sum(2, 3)
        expect(ans).toBe(5)
    })
    it('Should be able to add two negative numbers', () => {
        const ans = sum(-2, -3)
        expect(ans).toBe(-5)
    })
    it('Should be able to add two 0s', () => {
        const ans = sum(0, 0)
        expect(ans).toBe(0)
    })
})