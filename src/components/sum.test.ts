import { sum } from "./sum"

it('Should return the sum of a and b', () => {
    let a: number = 90
    expect(a).toBe(90)
    expect(sum(5, 5)).toBe(10)
})