import { describe, it, expect } from 'vitest';
import { add, multiply } from '../utils.js';

describe('utils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
    });

  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
  });

});
