
import { findPalindromeNumber1, findPalindromeNumber2, findPalindromeNumber3 } from './06_palindrome-number'

describe('对称数', () => {
    const expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99]

    it('method1 正常情况', () => {
        expect(findPalindromeNumber1(100)).toEqual(expectation)
    })
    it('method2 非正常情况,负数', () => {
        expect(findPalindromeNumber1(-100)).toEqual([])
    })

    it('method2 正常情况', () => {
        expect(findPalindromeNumber2(100)).toEqual(expectation)
    })
    it('method2 非正常情况，负数', () => {
        expect(findPalindromeNumber2(-100)).toEqual([])
    })

    it('method3 正常情况', () => {
        expect(findPalindromeNumber3(100)).toEqual(expectation)
    })
    it('method3 非正常情况，负数', () => {
        expect(findPalindromeNumber3(-100)).toEqual([])
    })
})
