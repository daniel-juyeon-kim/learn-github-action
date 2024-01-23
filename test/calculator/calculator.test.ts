import { Calculator } from "../../src/calculator/main"

const calculator = new Calculator();

test("실패하는 테스트", () => {
    const actual = calculator.multiply(1, 2);
    expect(actual).toBe(5)
})
