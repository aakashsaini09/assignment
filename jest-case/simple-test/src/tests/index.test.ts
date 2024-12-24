import { describe, expect, it} from '@jest/globals'
import { multiply, sum } from '../index'

describe('sum module', () => {
    // 1st case in sum module
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }) 
    // 2nd case in sum module
    it('adds 2 + 2 to equal 4', () => {
        // expect(sum(1, 2)).toBe(3);
        const finalAns = sum(2, 2);
        expect(finalAns).toBe(4)
    }) 
})
describe('testing multiply function', () => {
    // 1st case in sum module
    it('2 * 2 should be 4', () => {
        expect(multiply(2, 2)).toBe(4);
    }) 
    // 2nd case in sum module
    it('adds 4 + 2 to equal 8', () => {
        // expect(sum(1, 2)).toBe(3);
        const finalAns = multiply(4, 2);
        expect(finalAns).toBe(8)
    }) 
})