const calc = require("./calculator");

// test('1+2=3', () => {
//     expect(calc.sum(1, 2)).toBeGreaterThan(4);
// });

// test('2*3=6', () => {
//     expect(calc.multiply(2,3)).toBe(6);
//     expect(calc.multiply(2,3)).not.toBe(12);
// });

describe("Given a calculator", () => {
  describe("when dividing two numbers", () => {
    const originalIsZero = calc.isZero;
    it("should return the correct result", () => {
      expect(calc.divide(3, 3)).toBe(1);
    });
    it("should return the correct result", () => {
      expect(calc.divide(9, 3)).toBe(3);
    });
    it("should throw an exception", () => {
      calc.isZero = function() {
        return true;
      };
      expect(() => calc.divide(9, 0)).toThrow();
    });
    afterEach(() => {
      calc.isZero = originalIsZero;
    });
  });
});
