const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(6, 5);
    expect(result).toBe(30);
  });
  test('should multiply a negative and a positive number correctly', () => {
    const result = multiply(-4, 2);
    expect(result).toBe(-8);
  });
  test('should return 0 if called with a number 0', () => {
    const result = multiply(11, 0);
    expect(result).toBe(0);
  });
});
