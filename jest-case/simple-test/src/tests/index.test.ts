import { describe, expect, test} from '@jest/globals'
import { sum } from '../index'

describe('sum module', () => {
    test('adds 1 + 2 to ezual 3', () => {
        expect(sum(1, 2)).toBe(3);
    }) 
})