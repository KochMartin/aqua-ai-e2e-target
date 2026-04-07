import { describe, it, expect } from 'vitest';
import { add, divide } from '../utils.js';

describe('utils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });

  it('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Division by zero is not allowed.');
  });

  it('handles negative numbers in division', () => {
    expect(divide(-6, 3)).toBe(-2);
  });
});
